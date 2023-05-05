import Events from './events.js'
import Timer from './timer.js'
import {
    buttonPlay,
    buttonStop,
    buttonAddFive,
    buttonSubtractFive,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
    minutesDisplay,
    secondsDisplay
} from './elements.js'

const timer = Timer({
    minutesDisplay,
    secondsDisplay
})

Events({timer})

