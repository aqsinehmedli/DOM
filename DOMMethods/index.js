
const InputItemId = document.getElementById("InputItemId")
const InputItemDescId = document.getElementById("InputItemDescId")
const buttonId = document.getElementById("buttonId")


const TodoArray = []
const container = document.getElementById("container")


buttonId.addEventListener("click",() =>{
    const itemId = InputItemId.value
    const itemdesc = InputItemDescId.value
    const Tododata = {
        title:itemId,
        desc:itemdesc
    }
    TodoArray.push(Tododata)
    console.log(TodoArray)

    const div = document.createElement('div')
    const p = document.createElement('p')
    const h3 = document.createElement('h3')
    h3.innerText = itemId
    p.innerText = itemdesc
    div.appendChild(h3)
    div.appendChild(p)
    container.appendChild(div)
    div.style.border()
})

