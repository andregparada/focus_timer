import {
    buttonAddFive,
    buttonPlay, 
    buttonStop,
} from './elements.js'

export default function ({timer}) {

    buttonPlay.addEventListener('click', function() {
        timer.countdown()
    })

    buttonStop.addEventListener('click', function() {
        timer.reset()
    })

    // buttonAddFive.addEventListener('click', function(){

    //     let minutesDisplay = document.querySelector('.minutes')
    //     let minutes = Number(minutesDisplay.textContent)
    //     minutes =+ 5
    //     minutesDisplay.textcontent = String(minutes)
    // })

}