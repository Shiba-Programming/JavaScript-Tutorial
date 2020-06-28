var myBirthTime = new Date(2004, 16, 03, 14);
function updateParagraph() {
    var now = new Date();
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById("birth-time").innerText = "生まれてから" + seconds + "秒経過"
}
setInterval(updateParagraph, 50);

window.alert("update（アップデート）：更新する。");
window.alert("paragraph（パラグラフ）：段落。HTMLのｐタグはparagraphの略。");
window.alert("second（セカンド）：秒");
window.alert(".getTimeを実行することで、その日時の〇〇〇〇年 〇月 〇日からの ミリ秒を取得できます");
window.alert("element（エレメント）：要素");
window.alert("inner（インナー）内側の。");
window.alert("intevral（インターバル）：間隔");
window.alert("まとめると、誕生日の日時を取得し、updateParagraph 関数を定義し、関数の中で現在の日時を取得し、誕生日からの秒数を取得し、HTML の p タグの中身を更新します");