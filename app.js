// var a = 0;
// var count = 0;
// function incValue() {
//     count++;
// }
// function timer() {
//     var sw = document.getElementById('sw');
//     var stoper = document.getElementById("stoper")
//     sw.value = a
//     a++;
//     var c = setInterval(timer,100);
//     if (count % 2 != 0) {
//         stoper.innerText = "Stop"
//     }
//     else if (count % 2 == 0) {
//         // function stopTimer (){
//         //     stoper.innerText = "Start";
            
//         // }
//         // setTimeout(stopTimer,0)
//         stoper.innerText = "Start";
//         setTimeout(function(){
//             clearInterval(c);
//         },0)
//     }
// }

// function stoper() {
//     // alert("Timer is stoped");
//     setTimeout(stoper,0);
// }



// function timeout() {
//     document.write("oy")
// }
// setTimeout(timeout,5000)



// setTimeout(function(){
//     clearInterval(c);
// },0)

var minu = 0;
var sec = 0;
var mili = 0;
var milih = document.getElementById("mili");
var sech = document.getElementById("sec");
var minuh = document.getElementById("minu");
var interval;
var stp = document.getElementById("stp");
var count = 0;
function stopvalu() {
    count++;
    if (count % 2 != 0) {
        start();
        stp.innerHTML = "STOP";
    } else if(count % 2 == 0){
        stop();
        stp.innerHTML = "START";
    }
}
function timer() {
    mili++;
    milih.value = mili;
    if(mili == 100){
        sec++;
        sech.value = sec;
        mili = 0;
        if (sec == 60) {
            minu++;
            minuh.value = minu;
            sec = 0;
        }
    }

}

function start() {
    interval = setInterval(timer,10);
}

function stop() {
    clearInterval(interval);

}

function clearall() {
    stop();
    count = 0;
    stp.innerHTML = "START";
    mili = "00";
    sec = "00";
    minu = "00";
    milih.value = mili;
    sech.value = sec;
    minuh.value = mili;
}
