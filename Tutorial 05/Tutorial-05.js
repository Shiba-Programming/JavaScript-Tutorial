//説明

window.alert("コレクションとは、値などの要素の集まりのことを言います。JavaScriptにおける基本的なコレクションに配列というものがあります");

window.alert("配列は、複数の並んだ要素に対して[添字]と呼ばれる整数の番号を使い、中身を取り出すことができるものです。JavaScriptで配列は、Array（アレイ）と呼びます");

window.alert("grade（グレード）学年")

//ここまで説明

var classes = ['A組','B組','C組','D組'];

for (var grade = 1; grade < 4; grade++) { //始めのループでは、gradeが１から３までループするようになっている
    for (var i = 0; i < classes.length; i++) { //これは1学年のクラス数、4回ループを行うfor文
        //<p>〇年〇組</p>という文字列を作る
        document.write('<p>' + grade + '年' + classes[i] + '</p>');
    }
}