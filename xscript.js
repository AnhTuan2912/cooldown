var dich = new Date("1, 1, 2023").getTime();

var x = setInterval(function() {
  var hom_nay = new Date().getTime();
  var con = dich - hom_nay;

  var days = Math.floor(con / (1000 * 60 * 60 * 24));
  var hours = Math.floor((con % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
  var minutes = Math.floor((con % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((con % (1000 * 60)) / 1000);
  
  tom =  23 - hours;

  var play = document.getElementById('home');
  if (tom >= 6 && tom <=18){
    play.style.backgroundImage = 'url(light.png)';
    document.getElementById('center').style.color = 'black';
    }

  else {
    play.style.backgroundImage = 'url(dark.png)';
    document.getElementById('center').style.color = 'white';
  }

  document.getElementById('center').innerHTML = "Từ hôm nay đến ngày thi còn <br />"
   + days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây.";


  // If the count down is over, write some text 
  if (con <= 0) {
    clearInterval(x);
    document.getElementById("center").innerHTML = "Good luck !";
  }
}, 1000);