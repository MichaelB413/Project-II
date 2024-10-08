
function addtolist(){
    let formValue = document.querySelector("#Chores").value;
    const listTag = document.createElement("li");
    const innerText = document.createTextNode(formValue);
    listTag.appendChild(innerText);
    const listElement = document.querySelector("ol");
    listElement.appendChild(listTag)
}
