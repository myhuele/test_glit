/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

/* Set the width of the sidebar to 300px */
function toggleSidebar() {
  var sideb = document.getElementById("mySidebar");
  var width = 320;
  if (sideb.offsetWidth == width) {
    document.getElementById("mySidebar").style.width = "0px";
  } else {
    document.getElementById("mySidebar").style.width = width + "px";
  }
}

/* Select the day */
function selectDay(){    
     var date= new Date(); return date.getDay();
   
}

/*Month */
function month(){
  var date = new Date();
var month = new Array();
month[0] = "Jan."; month[1] = "Feb."; month[2] = "März"; month[3] = "Apr.";
month[4] = "May"; month[5] = "Jun."; month[6] = "Jul."; month[7] = "Aug.";
  month[8] = "Sept."; month[9] = "Okt."; month[10] = "Nov."; month[11] = "Dez";
 return month[date.getMonth()];
  
}

/*  Set  date*/
function setDate( Tag){
  
   
   var date= new Date(); var day
   var dayBevor; var dayAfter; 

  switch (Tag) { 
  case 0:
    day = "So.";  dayBevor="Sa."; dayAfter="Mo.";
  case 1:
    day = "Mo."; dayBevor="So."; dayAfter="Di.";
    break;
  case 2:
     day = "Di."; dayBevor="Mo."; dayAfter="Mi.";
    break;
  case 3: 
    day = "Mi."; dayBevor="Di."; dayAfter="Do.";
    break;
  case 4:
    day = "Do.";dayBevor="Mi."; dayAfter="Fr.";
    break;
  case 5:
    day = "Fr."; dayBevor="Do."; dayAfter="Sa.";
    break;
  case 6:
    day = "Sa.";dayBevor="Fr."; dayAfter="Mo.";
}
  
  var date1= document.getElementById("Tag1");
  var date2= document.getElementById("Tag2");
  var date3= document.getElementById("Tag3");
  
  date1.innerHTML = dayBevor+ (Tag-1);   
  date2.innerHTML = day +Tag +" "+ month(); 
  date3.innerHTML = dayAfter+(Tag+1); 
  
  
}
/* Next date */
  function nextDay(){
    setDate( selectDay()+1);
    selectDay()+1;
  }

/*Today*/
 function today(){
    setDate( selectDay());
/*    const year = today.getFullYear();
const month = today.getMonth();
const finalDate = new Date( day ,month,year);*/
  }
/**/
function previousDay(){
  setDate( selectDay()-1);
  
}


function meinMensaFunction() {
    if (document.getElementById("myDropdown").classList.contains('active')) {
        document.getElementById("myDropdown").classList.remove('active');
    }else{
        document.getElementById("myDropdown").classList.add('active');
        document.getElementById("myDropdown1").classList.remove('active');
        document.getElementById("myDropdown2").classList.remove('active');
        document.getElementById("myDropdown3").classList.remove('active');
    }
}

function meinBenachrichtungFunction() {
    if (document.getElementById("myDropdown1").classList.contains('active')) {
        document.getElementById("myDropdown1").classList.remove('active');
    }else{
        document.getElementById("myDropdown1").classList.add('active');
        document.getElementById("myDropdown").classList.remove('active');
        document.getElementById("myDropdown2").classList.remove('active');
        document.getElementById("myDropdown3").classList.remove('active');
    }
}

function meinModusFunction() {
    if (document.getElementById("myDropdown2").classList.contains('active')) {
        document.getElementById("myDropdown2").classList.remove('active');
    }else{
        document.getElementById("myDropdown2").classList.add('active');
        document.getElementById("myDropdown").classList.remove('active');
        document.getElementById("myDropdown1").classList.remove('active');
        document.getElementById("myDropdown3").classList.remove('active');
    }
}

function meinSpracheFunction() {
    if (document.getElementById("myDropdown3").classList.contains('active')) {
        document.getElementById("myDropdown3").classList.remove('active');
    }else{
        document.getElementById("myDropdown3").classList.add('active');
        document.getElementById("myDropdown").classList.remove('active');
        document.getElementById("myDropdown1").classList.remove('active');
        document.getElementById("myDropdown2").classList.remove('active');
    }
}
