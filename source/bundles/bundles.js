import {elements} from "./elements"

elements.amiiboForm.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.querySelector(".btn").click();
    }
})