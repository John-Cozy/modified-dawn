window.onload = choosePic;

var myPix = new Array("illustration/illustration_center_01.png","illustration/illustration_center_02.png","illustration/illustration_center_03.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("center_box").style.background = myPix[randomNum];
}