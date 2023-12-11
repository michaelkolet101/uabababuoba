const { toCodePoint } = require("pdf-lib");

const LETTERS = {
    " ":0,
    "א":1,
    "ב":2,
    "ג":3,
    "ד":4,
    "ה":5,
    "ו":6,
    "ז":7,
    "ח":8,
    "ט":9,
    "י":1,
    "כ":2,
    "ך":2,
    "ל":3,
    "מ":4,
    "ם":4,
    "נ":5,
    "ן":5,
    "ס":6,
    "ע":7,
    "פ":8,
    "ף":8,
    "צ":9,
    "ץ":9,
    "ק":1,
    "ר":2,
    "ש":3,
    "ת":4
};

function fun(){
    
    const xhttp = new XMLHttpRequest();

    var manName = document.getElementById('fname').value;
    var womanName = document.getElementById('lname').value;
    
    xhttp.onload = function() {
        var ans = this.response;
        console.log(ans)
        document.getElementById("result").innerHTML = ans;
      }
    
    
      
      /*TODO get respons from the url*/
      
    const toSend = manName+womanName;

    xhttp.open("GET", "192.168.1.20:8080/home/"+toSend+"");
    xhttp.send();  

    
}
