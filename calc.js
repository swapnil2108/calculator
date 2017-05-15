$(document).ready(function(){
   var arr =[];
    document.getElementById("displayBox1").innerHTML = "0";
    document.getElementById("displayBox2").innerHTML = "0";
    var displayBox1 = document.getElementById("displayBox1").innerHTML;
    var displayBox2 = document.getElementById("displayBox1").innerHTML;
     $("#1").on("click",function(){
       if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
         document.getElementById("displayBox1").innerHTML = "1";
       }
       else{
         $("#displayBox1").append("1");
       }
     });
    $("#2").on("click",function(){
      if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
        document.getElementById("displayBox1").innerHTML = "2";
      }
      else{
        $("#displayBox1").append("2");
      }
     });
    $("#3").on("click",function(){
      if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
        document.getElementById("displayBox1").innerHTML = "3";
      }
      else{
        $("#displayBox1").append("3");
      }
     });
    $("#4").on("click",function(){
      if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
        document.getElementById("displayBox1").innerHTML = "4";
      }
      else{
        $("#displayBox1").append("4");
      }
     });
    $("#5").on("click",function(){
      if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
        document.getElementById("displayBox1").innerHTML = "5";
      }
      else{
        $("#displayBox1").append("5");
      }
     });
    $("#6").on("click",function(){
      if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
        document.getElementById("displayBox1").innerHTML = "6";
      }
      else{
        $("#displayBox1").append("6");
      }
     });
    $("#7").on("click",function(){
      if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
        document.getElementById("displayBox1").innerHTML = "7";
      }
      else{
        $("#displayBox1").append("7");
      }
     });
    $("#8").on("click",function(){
      if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
        document.getElementById("displayBox1").innerHTML = "8";
      }
      else{
        $("#displayBox1").append("8");
      }
     });
    $("#9").on("click",function(){
      if(document.getElementById("displayBox1").innerHTML === "0" || document.getElementById("displayBox1").innerHTML === "+" || document.getElementById("displayBox1").innerHTML === "-" || document.getElementById("displayBox1").innerHTML === "*" || document.getElementById("displayBox1").innerHTML === "/"){
        document.getElementById("displayBox1").innerHTML = "9";
      }
      else{
        $("#displayBox1").append("9");
      }
     });
     $("#dot").on("click",function(){
         $("#displayBox1").append(".");
      });
      $("#clear").on("click",function(){
        arr.splice(0,arr.length);
        result=0
        document.getElementById("displayBox1").innerHTML = "0";
        document.getElementById("displayBox2").innerHTML = "0";
       });
       $("#div,#sub,#add,#mul").on("click",function(){
         if(document.getElementById("displayBox1").innerHTML !== "0"){
           arr.push(document.getElementById("displayBox1").innerHTML);
           arr.push(this.value);
           document.getElementById("displayBox2").innerHTML = arr.join("");
           document.getElementById("displayBox1").innerHTML = this.value;
         }
       });
       $("#equal").on("click",function(){
         arr.push(document.getElementById("displayBox1").innerHTML);
         summuation();
         document.getElementById("displayBox2").innerHTML = arr.join("");
         $("#displayBox2").append("="+ result);
         document.getElementById("displayBox1").innerHTML = result;
       });
       var result = 0;

       function summuation(){
         for(var i in arr){
           if(arr[i] === "+" || arr[i] === "-" || arr[i] === "*" || arr[i] === "/"){
             continue;
           }else{
             arr[i] = parseInt(arr[i]);
           }
         }
         if(arr[1] === "+"){
           result = arr[0] + arr[2];
         }
         else if(arr[1] === "-"){
           result = arr[0] - arr[2];
         }
         else if(arr[1] === "*"){
           result = arr[0] * arr[2];
         }
         else if(arr[1] === "/"){
           result = arr[0] / arr[2];
         }
         if(arr.length > 3){
           for(var k = 3;k<arr.length;k++){
             if(arr[k] === "+"){
               result = result + arr[k+1];
             }
             else if(arr[k] === "-"){
               result = result - arr[k+1];
             }
             else if(arr[k] === "*"){
               result = result * arr[k+1];
             }
             else if(arr[k] === "/"){
               result = result / arr[k+1];
             }
           }
         }
       }
});
