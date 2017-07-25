var ss, mm, hh, ssF, mmF, hhF, leftover, finalTime;


var initTime =  1.5 * 60 * 60; //initial time in seconds or HH * MM * SS

function secondConverter(){
    hh = (initTime /60 /60);
    if (hh > 10) {
        hhF = Math.floor(hh);
    }else{
        hhF = '0'+Math.floor(hh);
    } //hours

    mm = (hh-hhF) *60;
    if (mm > 10) {
        mmF = Math.floor(mm);
    }else{
        mmF = '0'+Math.floor(mm);
    } //minutes

    leftover = initTime - (((hhF*60)*60)+(mmF*60));
    ss = leftover;
    if (ss >= 10) {
        ssF = Math.floor(ss);
    }
    else {
        ssF = '0'+Math.floor(ss);
    } //seconds

    finalTime = hhF + '<span class="anim">:</span>' + mmF + '<span class="anim">:</span>'+ ssF;
    $('.timer-parent').html(finalTime)
    // console.log(mm);
    if (initTime < 5) {
        $('.timer-parent').addClass('running');
        $('.timer-container').addClass('running');
    }
}
// secondConverter()


//coutdown Function
function countDown(){
    secondConverter();
    initTime = initTime-1;
    if (initTime >= 0) {
    }else{
        clearInterval(timerVar);
        //place action when time is finished
        alert('time is up');
        $('.timer-parent').removeClass('running');
        $('.timer-container').removeClass('running');
        $('.timer-parent').html('Quiz Ended')
    }
}
var timerVar;

$('.start-btn').on('click', function(){
    timerVar = setInterval(function(){ countDown() }, 1000);
})

function joDropdown(selClass){
    selClass.addClass('jo-drop');

    selClass.find('ul.dropdown-sub').css({
        display: 'none'
    })

    selClass.on('click', function(){
        selClass.find('ul.dropdown-sub').css({
            display: 'block'
        })
    })
}

var img = $('.adaptive-image');

var imgW = img.width();
var imgH = img.height();

// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// context.drawImage(img, 0, 0);

$('.clone-parent').on('click', function(){
    $(this).toggleClass('active');
})
