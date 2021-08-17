import * as xlsx from "xlsx";

/*
function readFile(file) {
    console.log(fileToJSON(file));
}
*/

function readFile(file) {
    var oReq = new XMLHttpRequest();
    var sheet;

    oReq.open("GET", file, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e) {
        var arraybuffer = oReq.response;

        // converts data into binary string
        var data = new Uint8Array(arraybuffer);
        var arr = [];

        for (var i = 0; i !== data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
        }

        var bstr = arr.join("");

        // call xlsx
        var wb = xlsx.read(bstr, {type: "binary"});

        // do something with workbook here
        var sName = wb.SheetNames[0];

        //get worksheet
        var ws = wb.Sheets[sName];

        data = xlsx.utils.sheet_to_json(ws, {raw: true});

        console.log(ws);

        sheet = ws;
    }

    oReq.send();

    return sheet;
}

export { readFile };