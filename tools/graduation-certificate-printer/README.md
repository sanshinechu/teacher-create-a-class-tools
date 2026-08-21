# Graduation Certificate Printer

畢業典禮獎狀列印工具，用來快速產生、預覽與列印畢業獎狀。

## 目前目標

- 匯入去識別化名單：班級代號、座號、姓名、獎項。
- 預覽單張獎狀。
- 批次列印所有獎狀。
- 保留成靜態網頁，方便放到 GitHub Pages 或直接本機開啟。

## 開啟方式

直接用瀏覽器開啟 `index.html`。

## CSV 欄位

請使用 UTF-8 CSV，欄位名稱如下：

```csv
classCode,seatNo,studentName,awardName
G6A,01,王小明,市長獎
G6A,02,陳小美,校長獎
```

## 隱私原則

- 學生資料只放在本機瀏覽器，不上傳伺服器。
- 優先使用班級代號與座號。
- 不提交真實學生名單到 Git。

