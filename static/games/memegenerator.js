const form=document.querySelector("#form");


form.addEventListener('submit' ,function(e){
e.preventDefault();

const meme=document.createElement("div");

const toptext=document.createElement("div");
toptext.classList.add("Top_text");
toptext.innerText=document.getElementById("textTop").value;

const bottomtext=document.createElement("div");
bottomtext.classList.add("Bottom_text");
bottomtext.innerText=document.getElementById("textBottom").value;

const pic=document.createElement("img");
pic.src=document.getElementById("url").value;

const overlay = document.createElement('div');
overlay.classList.add('overlay');
const overlayText = document.createElement('div');
overlayText.classList.add('overlaytext');
overlay.append(overlayText);
overlayText.textContent = 'X';

overlay.addEventListener("click", function(e){
    meme.remove();
  })

meme.classList.add("meme");
meme.appendChild(toptext);
meme.appendChild(bottomtext);
meme.appendChild(pic);
meme.appendChild(overlay);



let location=document.querySelector(".meme-container");
location.appendChild(meme);


document.getElementById("textTop").value="";
document.getElementById("textBottom").value="";
document.getElementById("url").value="";
});