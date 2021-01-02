const text = document.getElementById('input_box');
const buttons = document.querySelectorAll("#mainSection button");
console.log(text);
text.addEventListener('keyup',searching);

function searching(){
  buttons.forEach(element => {
    if(text.value == null || text.value ==""){
      element.classList.remove("hide");
    }

    if(element.dataset.ko.charAt(0) === text.value.charAt(0) || element.dataset.Eng.charAt(0) === text.value.charAt(0)){
      element.classList.remove("hide");
    }
    else{
      element.classList.add("hide");
    }
  });
}