function csvToArray() {
    path = "PATH/TO/CSV/FILE.csv"
    
    //CSVを二次元配列に読み込み
    var csvData = new Array();
    var data = new XMLHttpRequest();
    data.open("GET", path, false);
    data.send(null);
    var LF = String.fromCharCode(10);
    var lines = data.responseText.split(LF);
    for (var i = 0; i < lines.length; ++i) {
        var cells = lines[i].split(",");
        if (cells.length != 1) {
            csvData.push(cells);
        }
    }
  
    //ヘッダーを分離
    headers = csvData[0];
    csvData.shift();
    rows = csvData;
    //空オブジェクト
    obj = new Object;
    
    //連想配列を作成
    for (const i of csvData) {
        node_number=i[0];
        obj[node_number]={};
        i.shift();
        count=1
        for (const j of i) {
            obj[node_number][headers[count]]=j
            count +=1
        }
    }
    return obj;
}
