window.alert("オブジェクト(object)とは、JavaScriptにおける値の１つ");

window.alert("オブジェクトはプロパティという、名前と値のセットを複数持つことができる");

window.alert("また、このプロパティには関数を指定することもでき、それを呼び出すこともできる");

var student = {
    name: "太郎",
    age: 15
};
console.log(student.name);
console.log(student.age);

var counter = {
    number: 0,
    print: function() {
        counter.number++;
        console.log(counter.number);
    }
}
counter.print();
counter.print();
counter.print();