a = 40;
f1 = function () {
    alert(a); // undefined
    var a = 10
    alert(a);
}
f1();