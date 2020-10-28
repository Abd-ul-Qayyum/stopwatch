var a = 0;
var count = 0;
function timer() {
    var sw = document.getElementById('sw');
    sw.value = a
    a++;
    var c = setInterval(timer,100);
}

function stoper() {
    // alert("Timer is stoped");
    setTimeout(stoper,0);
}



// function timeout() {
//     document.write("oy")
// }
// setTimeout(timeout,5000)



setTimeout(function(){
    clearInterval(c);
},0)