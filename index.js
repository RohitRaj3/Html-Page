// const heading =   document.querySelectorAll("h1");
//         heading.style.color = "red";
//         console.log(heading);
// const para= document.querySelector("#para");
// para.addEventListener('click',clickPara);

// function clickPara(){
//     console.log("clicked");
// }
// para.style.backgroundColor = 'grey';
        // document.querySelector(".first");

const btn = document.createElement('button');
btn.textContent = 'Click Me';
btn.className = 'btn1';

const division = document.querySelector('div');
division.appendChild(btn);

//remove we are the best
btn.addEventListener('click', () =>{document.querySelector("h3").remove();});

const p = document.querySelector('h1');
p.addEventListener('mouseover', 
function (){
    p.style.backgroundColor= 'yellow';
}
)

// document.querySelector("h3").remove();