let x,y,kekka,a,b;
b=document.querySelector("button#calc");
function wa(){
x=document.querySelector('input[name="left"]');
y=document.querySelector('input[name="right"]');
kekka = Number(x.value)+Number(y.value);
a=document.querySelector('span#answer');
a.textContent=kekka;
}
b.addEventListener('click', wa);