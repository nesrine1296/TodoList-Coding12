let boutonajouter = document.querySelector('#add-task')
let ToDo = document.getElementsByClassName ('btn')[1]
let Done = document.getElementsByClassName ('btn')[2]
let Deleted = document.getElementsByClassName ('btn')[3]
let All = document.getElementsByClassName ('btn')[4]
let divlist = document.getElementsByClassName('box-body')[0]




var text = document.createElement("input")


// Create a new list item when clicking on the "Ajouter" button
boutonajouter.addEventListener ('click',() => {
let prinput = document.querySelector ('#exo-1 input')
let li = document.createElement('li')
let ul = document.createElement('ul')
divlist.appendChild(ul)
ul.appendChild(li)
li.innerText = `${prinput.value}`
li.style.border='solid grey 1px'

li.style.backgroundColor = "grey"

li.appendChild(iconecheck) 
li.appendChild(iconeedit)
li.appendChild(iconetrash)

let div2 = document.createElement("div")
div2.style.marginLeft = "20"
div2.style.justifyContent = 'right'
li.appendChild('div2')

})

// icone check

//iconecheck
let iconecheck = document.createElement('i')
iconecheck.setAttribute('class',"far fa-check-circle")
iconecheck.style.color = 'blue'
iconecheck.style.marginRight = '100px'

// icone edit
//iconeedit

let iconeedit = document.createElement('i')
iconeedit.setAttribute('class',"far fa-edit")
iconeedit.style.color = 'yellow'
iconeedit.style.marginRight = '100px'

//icone trash 
//iconetrash

let iconetrash = document.createElement('i')
iconetrash.setAttribute('class',"far fa-trash-alt")
iconetrash.style.color = 'red'
iconetrash.style.marginRight = '100px'














