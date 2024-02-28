let voice=new SpeechSynthesisUtterance();

let voices=[];
let voiceselect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    voice.voice=voices[0];

    voices.forEach((voice,i)=>(voiceselect.options[i]=new Option(voice.name)));
};

voiceselect.addEventListener("change",()=>{
    voice.voice=voices[voiceselect.value];
})
document.querySelector("button").addEventListener("click",()=>{
    voice.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(voice);
});