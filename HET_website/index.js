const XLSX = require('xlsx') ;

const parseExcel = (filename) => {

    const excelData = XLSX.readFile(filename);

    return Object.keys(excelData.Sheets).map(name => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }));
};

parseExcel("HET打擊數據.xls").forEach(element => {
    console.log(element.data);
});

