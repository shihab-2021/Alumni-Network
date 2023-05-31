import * as XLSX from "xlsx";

export const writeToExcel = (data) => {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet([data]);
  XLSX.utils.book_append_sheet(wb, ws, "Contact Details");

  const wbout = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

  const blob = new Blob([wbout], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "contact_details.xlsx");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
