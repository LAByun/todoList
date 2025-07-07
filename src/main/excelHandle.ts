import XLSX from 'xlsx';

// JSON 数据（支持嵌套对象）
// const data = [
//   { id: 1, metrics: { cpu: "80%", memory: "50%" } },
//   { id: 2, metrics: { cpu: "60%", memory: "70%" } }
// ];
export function setExcel(mydata: object[],name:string): void {
    // 创建工作簿和工作表
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(mydata);
    console.log(mydata);
    // 添加到工作簿并保存
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, name+'.xlsx');
}
