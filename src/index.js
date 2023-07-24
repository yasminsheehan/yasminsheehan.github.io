
function yasmiesFunction() {
    console.log("hellobarto");
    document.getElementById("calendar").innerHTML = "Birthdays";
 }

 function hideCalendar() {
    var calendar = document.getElementById("springTable");

    if (calendar.style.visibility === "hidden") 
    {
      calendar.style.visibility = "visible";
    }else{
      calendar.style.visibility = "hidden";
    }

 }

