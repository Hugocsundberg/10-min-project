console.log('working')
const bottleEl = document.querySelector('img.bottle')

const bottleHandler = () => {
    const deg = Math.floor((Math.random() * 4000) + 1);
    bottleEl.style.transform = `rotate(${deg}deg)`
    loopActive = true
    loopColor()
    setTimeout(() => {
        loopActive = false
    }, 5000);
}

const colorArray = [
    'red',
    'green',
    'blue',
    'magenta'
]

const renderColor = (colorIndex) => {
    document.body.style.background = colorArray[colorIndex]
} 

let colorI = 0
let loopActive = false

const loopColor = () => {
        renderColor(colorI)
        if(colorI < colorArray.length) colorI++
        else colorI = 0
        if(loopActive) {
            setTimeout(() => {
                loopColor() 
            }, 50);
        }
}

bottleEl.addEventListener('click', bottleHandler)