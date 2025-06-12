// get original text
const txtElem = document.getElementById('typewriter');
const fullTxt = txtElem.textContent;
txtElem.textContent = '';
let i = 0;

const tick = setInterval(()=>{
  txtElem.textContent += fullTxt[i++];
  if(i === fullTxt.length) clearInterval(tick);
}, 200);
