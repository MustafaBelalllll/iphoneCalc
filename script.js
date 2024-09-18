const inputValue = document.getElementById("userinput")

const calculate = document
.querySelectorAll(".operations")
.forEach(function (item) {
  item.addEventListener("click", function(e){
    if(e.target.innerText === "=") {
        inputValue.innerText = eval(inputValue.innerText);
        
    };
    
  });
});

const number = document.querySelectorAll(".numbers").forEach(function(item){
    item.addEventListener("click", function(e){
        if(inputValue.innerText === "0") {
            inputValue.innerText = ""
        }
       inputValue.innerText += e.target.innerText.trim(); 
       
    })
});