let btn = document.querySelector("#myBtn");
let body = document.querySelector("body");
let modeText = document.createElement("p");
modeText.style.marginLeft= "46%"
modeText.style.fontSize = "30px"
btn.after(modeText)
let mode ="light";

btn.onclick = () => {
    for (let i=0; i<2000; i++){
       setTimeout(() => {
            if( mode === "light"){
        console.log(mode)
        modeText.innerText = " virus found " ;
        // modeText.style.color = " red "
        body.classList.add("class1");
        body.classList.remove("class2");

        mode= "dark"
    } else {
        console.log(mode)
        modeText.innerText = " This site is corrupted";
        // modeText.style.color = " yellow "
        body.classList.add("class2");
        body.classList.remove("class1");
        mode= "light";
    }
            
        }, i * 100 );
    
    }
}