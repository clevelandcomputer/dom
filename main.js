const content = document.querySelector('body')


const mainElement = document.createElement('main')
content.prepend(mainElement)
const mainContent = document.querySelector('main')

const buttonElement = document.createElement('button')
buttonElement.append('Remove')
buttonElement.addEventListener('click', function(){
    mainContent.remove()
})
content.prepend(buttonElement)

const inputElement = document.createElement('input')
const emptyPTag = document.createElement('p')
inputElement.type = 'text'
inputElement.name = 'fresh'
content.append(emptyPTag)
const labelElement = document.createElement('label')
labelElement.for = 'fresh'
labelElement.append('Enter CSS Selector ') 
content.append(labelElement)
content.append(inputElement)






const imgElement = document.createElement('img')
imgElement.className = 'image'
imgElement.src = 'https://besthqwallpapers.com/Uploads/15-12-2016/10947/thumb-fsociety-mask-4k-black-background.jpg'
mainContent.append(imgElement)

const anchorElement = document.createElement('a')
anchorElement.className = 'link'
anchorElement.href = 'https://digdinodig.com'
anchorElement.append('Dig Dino Dig')
mainContent.append(anchorElement) 

const textInput = document.createElement('button')
textInput.append('Remove Element')
content.append(textInput)

textInput.addEventListener('click', function(){
    let userInput = inputElement.value
    const takeAway = document.querySelector(userInput)
    console.log(takeAway)
    if(userInput !== '' || takeAway !== null){
    takeAway.remove()
    }
})

const lastButton = document.createElement('button')
lastButton.append('Add Element')

const inputElement2 = document.createElement('input')
const emptyPTag2 = document.createElement('p')
inputElement2.type = 'text'
inputElement2.name = 'fresh2'
content.append(emptyPTag2)
const labelElement2 = document.createElement('label')
labelElement2.for = 'fresh2'
labelElement2.append('Enter Element to Add ') 
content.append(labelElement2)
content.append(inputElement2)
content.append(lastButton)

lastButton.addEventListener('click', function(){
    let userInput2 = inputElement2.value
    if(userInput2 !== ''){
    const takeAway2 = document.createElement('div')
    content.append(takeAway2)
    takeAway2.append(userInput2)
    }
})