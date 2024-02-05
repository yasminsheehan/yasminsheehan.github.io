function yasmiesFunction() {
    console.log("hellobarto");
    document.getElementById("calendar").innerHTML = "Birthdays";
 }

//  function test() {
//     var calendar = document.getElementById("springTable");

//     if (calendar.style.visibility === "visible") 
//     {
//       calendar.style.visibility = "hidden";
//     }

//  }

function test(text) {
   console.log("season "+text);

   document.getElementById("springTable").style.display = "none";
   document.getElementById("summerTable").style.display = "none";
   document.getElementById("autumnTable").style.display = "none";
   document.getElementById("winterTable").style.display = "none";

   var header = document.getElementById("calendar");
   var calendar = document.getElementById("springTable");

   if (text == "spring"){ 
      // console.log("growth");
      // header.innerHTML = "Growth";
      document.getElementById("springTable").style.display = "table";
   }

   if (text == "summer"){ 
   //  console.log("warmth");
   //  header.innerHTML = "Warmth";
    document.getElementById("summerTable").style.display = "table";
   }

   if (text == "autumn"){ 
   //  console.log("change");
   //  header.innerHTML = "Change";
    document.getElementById("autumnTable").style.display = "table";
   }

   if (text == "winter"){ 
   //  console.log("snow");
   //  header.innerHTML = "Snow";
    document.getElementById("winterTable").style.display = "table";
   }
}


// HTML                          JAVA
// style="width : 20px"          calendar.style.width = "20px";