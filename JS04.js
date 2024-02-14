
let add_but=document.getElementById("AB");
let list_box=document.getElementById("notes-list");
add_but.onclick=(e)=>{
    let new_note = document.createElement("div");
    let del=document.createElement("span");
    let text=document.getElementById("note");
    del.innerText="X";
    new_note.innerHTML=text.value;
    new_note.append(del);
    list_box.append(new_note);
    text.value="";
    saveData();
}
//const style = getComputedStyle(Element, pseudoElement)
list_box.addEventListener("click",(e)=>{
    if(e.target.tagName=="DIV")
    {
        let Element=e.target;
        const style = getComputedStyle(Element, "::before").backgroundColor;
        //console.log(`${style}`);
        if(style === 'rgb(255, 255, 255)'){
        e.target.style.setProperty('--note_before_color','green');
        Element.style.textDecoration = "line-through";
        }
        else
        {
        e.target.style.setProperty('--note_before_color','white');
        Element.style.textDecoration = "none";
        }
      
    }
    else if(e.target.tagName=="SPAN")
    {
        e.target.parentElement.remove();
    }
    saveData();
    },false);

function saveData()
{
    localStorage.setItem("data",list_box.innerHTML);
}
function showData()
{
    list_box.innerHTML=localStorage.getItem("data");
}
showData();

