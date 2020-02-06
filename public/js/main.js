let boutonajouter = document.querySelector('#add-task')
let ToDo = document.getElementsByClassName ('btn')[1]
let Done = document.getElementsByClassName ('btn')[2]
let Deleted = document.getElementsByClassName ('btn')[3]
let All = document.getElementsByClassName ('btn')[4]
let prinput = document.querySelector ('#exo-1 input')
let divlist = document.getElementsByClassName('box-body')[0]




var text = document.createElement("input")


// Create a new list item when clicking on the "Add" button
boutonajouter.addEventListener ('click', () =>{
let li = document.createElement('li')
let ul = document.createElement('ul')
divlist.appendChild(ul)
ul.appendChild(li)
li.innerText = `${prinput.value}`
li.style.border='solid grey 1px'
li.style.backgroundColor = "grey"
li.appendChild(icone1) 

let div2 = document.createElement("div")
div2.style.marginLeft = "7"
li.appendChild('div2')

// //icone1
// let icone1 = document.createElement('i')
// icone1.setAttribute('class',"far fa-check-circle")
// icone1.style.color = 'blue'
// icone1.style.marginRight = '100px'

// })

