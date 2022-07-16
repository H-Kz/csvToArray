function csvToArray() {
    path = "添付2_apl_node-list-shutogi17_37.csv"
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
    //ヘッダー分離
    headers = csvData[0];
    csvData.shift();
    rows = csvData;
    //空オブジェクト
    obj = [];
    //CSV様式
    //#ノード番号	ランプ・IC名称	路線名称	仮名１	仮名２	仮名３	出入口ﾌﾗｸﾞ	大型車禁止フラグ	 WX座標	 WY座標

    for (const i of csvData) {
        obj2={}
        column_number=0
        //ノード番号を見出しにした
        count=0
        for (const j of i) {
            obj2[headers[count]]=j
            count +=1
        }
    }
    return obj;
}
