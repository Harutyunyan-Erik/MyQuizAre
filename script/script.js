import { text, dafaultLanguage } from "./constants.js";

const warningElement = document.getElementById("warning");
const textWarning = text['hy'].warningText;

for(let i = 0; i < textWarning.length; i++){
    setTimeout(()=> {
        warningElement.innerHTML += textWarning[i]
    },1000);
}
