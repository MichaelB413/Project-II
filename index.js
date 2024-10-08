
function addtolist(){
    let formValue = document.querySelector("#Chores").value;

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.setAttribute("onClick", "strikeOut()")
    const listTag = document.createElement("li");
    listTag.appendChild(checkbox);
    const innerText = document.createTextNode(formValue);
    listTag.appendChild(innerText);
    const listElement = document.querySelector("ol");
    listElement.insertBefore(listTag, listElement.firstChild);
    var setter = document.querySelector("li")
}

function strikeOut(){
    event.currentTarget.parentNode.style.textDecoration = "line-through";
   console.log(event.target);

}







