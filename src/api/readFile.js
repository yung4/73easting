import * as xlsx from "xlsx";

function readFile(file) {
    /*    
    const fr = new FileReader();

        fr.onload = (e) => {
            const bufferArray = e.target.result;

            const wb = xlsx.read(bufferArray, {type: "binary"});

            const wsName = wb.SheetNames[0]; //gets first sheet

            const ws = wb.Sheets[wsName];

            const data = xlsx.utils.sheet_to_csv(ws, {header:1});

            console.log(data);
        };

        fr.readAsBinaryString(file);
        */

    var oReq = new XMLHttpRequest();

    oReq.open("GET", file, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e) {
        var arraybuffer = oReq.response;

        // converts data into binary string
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();

        for (var i = 0; i != data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
        }

        var bstr = arr.join("");

        // call xlsx
        var wb = xlsx.read(bstr, {type: "binary"});

        // do something with workbook here
        var sName = wb.SheetNames[2];

        //get worksheet
        var ws = wb.Sheets[sName];

        var data = xlsx.utils.sheet_to_json(ws, {raw: true});

        console.log(ws);
    }

    oReq.send();
}

export { readFile };