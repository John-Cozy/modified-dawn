window.onload = choosePic;

var myPix = new Array("01.jpg","02.jpg","03.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}