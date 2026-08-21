const sampleRecipients = [
  { classCode: "G6A", seatNo: "01", studentName: "王小明", awardName: "市長獎" },
  { classCode: "G6A", seatNo: "02", studentName: "陳小美", awardName: "校長獎" },
  { classCode: "G6B", seatNo: "07", studentName: "林大安", awardName: "體育優良獎" }
];

let recipients = [...sampleRecipients];

const fields = {
  schoolName: document.querySelector("#schoolName"),
  ceremonyName: document.querySelector("#ceremonyName"),
  awardDate: document.querySelector("#awardDate"),
  csvFile: document.querySelector("#csvFile"),
  recipientSelect: document.querySelector("#recipientSelect"),
  loadSample: document.querySelector("#loadSample"),
  printAll: document.querySelector("#printAll"),
  certSchool: document.querySelector("#certSchool"),
  certCeremony: document.querySelector("#certCeremony"),
  certClass: document.querySelector("#certClass"),
  certSeat: document.querySelector("#certSeat"),
  certName: document.querySelector("#certName"),
  certAward: document.querySelector("#certAward"),
  certDate: document.querySelector("#certDate")
};

function parseCsv(text) {
  const rows = text.trim().split(/\r?\n/).filter(Boolean);
  const headers = splitCsvLine(rows.shift()).map((header) => header.trim());

  return rows.map((row) => {
    const values = splitCsvLine(row);
    return headers.reduce((record, header, index) => {
      record[header] = (values[index] || "").trim();
      return record;
    }, {});
  });
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;

  for (const char of line) {
    if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  cells.push(current);
  return cells;
}

function setRecipients(nextRecipients) {
  recipients = nextRecipients.filter((recipient) => recipient.studentName && recipient.awardName);
  fields.recipientSelect.innerHTML = "";

  recipients.forEach((recipient, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${recipient.classCode || "-"} ${recipient.seatNo || "-"} ${recipient.studentName} - ${recipient.awardName}`;
    fields.recipientSelect.append(option);
  });

  renderCertificate(0);
}

function renderCertificate(index) {
  const recipient = recipients[index] || sampleRecipients[0];

  fields.certSchool.textContent = fields.schoolName.value;
  fields.certCeremony.textContent = fields.ceremonyName.value;
  fields.certDate.textContent = fields.awardDate.value;
  fields.certClass.textContent = recipient.classCode || "";
  fields.certSeat.textContent = recipient.seatNo || "";
  fields.certName.textContent = recipient.studentName || "";
  fields.certAward.textContent = recipient.awardName || "";
}

function renderPrintableBatch() {
  const selectedIndex = Number(fields.recipientSelect.value || 0);
  const original = document.querySelector("#certificate");
  const clones = recipients.map((recipient) => {
    renderCertificate(recipients.indexOf(recipient));
    return original.cloneNode(true);
  });

  original.replaceWith(...clones);
  window.print();
  clones[0].replaceWith(original);
  clones.slice(1).forEach((clone) => clone.remove());
  renderCertificate(selectedIndex);
}

fields.csvFile.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const text = await file.text();
  setRecipients(parseCsv(text));
});

fields.loadSample.addEventListener("click", () => {
  setRecipients(sampleRecipients);
});

fields.printAll.addEventListener("click", renderPrintableBatch);
fields.recipientSelect.addEventListener("change", (event) => renderCertificate(Number(event.target.value)));

[fields.schoolName, fields.ceremonyName, fields.awardDate].forEach((field) => {
  field.addEventListener("input", () => renderCertificate(Number(fields.recipientSelect.value || 0)));
});

setRecipients(sampleRecipients);

