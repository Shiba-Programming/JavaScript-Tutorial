var game = {
    startTime: null,
    displayArea: document.getElementById("display-area")
}
//時間当てゲームの変数として用意してます、この時点ではnullです

function start() {
    game.startTime = Date.now();
    document.body.onkeydown = stop;
    //onkeydown プロパティには、キーボードのキーが押された時の関数を指定します
    console.log("スタートしました")
    /*スタートの処理では、開始時刻の取得を行います
    startTime = Date.now();
    という書き方で、上で用意した変数startTimeへ、現在の時刻ミリ秒を代入しています。*/

    function stop() {
        var currenTime = Date.now();
        var seconds = (currenTime - game.startTime) / 1000;
        if (9.5 <= seconds && seconds <= 10.5) {
            game.displayArea.innerText = seconds + "秒でした、すごい！";
        } else {
            game.displayArea.innerText = seconds + "秒でした、残念";
        }
        console.log("ストップしました");
    }
    
}
if (confirm("OKを押して10秒だと思ったら何かキーを押してください")) {
    start();
    //TODOコメントとログ出力を消して、start　という関数の呼び出しに変更しました
}