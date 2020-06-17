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
inputElement.type = 'text'
inputElement.name = 'fresh'
content.append(inputElement)
const labelElement = document.createElement('label')
labelElement.for = 'fresh'



const imgElement = document.createElement('img')
imgElement.className = 'image'
imgElement.src = 'https://besthqwallpapers.com/Uploads/15-12-2016/10947/thumb-fsociety-mask-4k-black-background.jpg'
mainContent.append(imgElement)

const anchorElement = document.createElement('a')
anchorElement.className = 'link'
anchorElement.href = 'https://digdinodig.com'
anchorElement.append('Dig Dino Dig')
mainContent.append(anchorElement)

