let button = document.querySelector("button");
let body = document.querySelector("body");

button.addEventListener("click", test);

function test() {
    body.style.backgroundColor = "green";

}
$("div").click(function(){
    $("div").addClass("bounce");
    setTimeout(function(){
      $("div").removeClass("bounce")
      
    }, 2000)
    
  });
    