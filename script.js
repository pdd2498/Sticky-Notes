let txt = document.querySelector("textarea");

let but = document.querySelector("button");

let notedown = document.querySelector("#notedown");

let btn2 = document.querySelectorAll(".btn2");
    console.log(btn2);

but.addEventListener("click" , (e) =>{
    let color = document.querySelector("input");
    let note = document.querySelector("#note")
    
    if(note.value == ""){
        alert("Enter Some Text");
    }
    else {
        let n = note.value;
        let c = color.value;
        createAdiv(c,n);
        note.value = "";
        document.querySelector("h4");
        removeNote()
        document.querySelector("h4").style.display = 'none';
    }
    
    function removeNote(){
        btn2 = document.querySelectorAll(".btn2");
        
        btn2.forEach((er) =>{
            er.addEventListener("click" , (e)=>{
                e.target.parentElement.remove();
            })
        })
    }
    
});

function createAdiv(color,note){
    let div = document.createElement("div");

    div.innerHTML = `
    <P>${note}</P>
    <input class="btn2" type="button" value="X">
    `
    div.className = 'btnn';
    div.style.backgroundColor = color;
    div.style.padding = '10px';
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    notedown.appendChild(div);
}