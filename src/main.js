//*Data
import { setDate } from './js/date.js';
setInterval(setDate, 1000);

//*Clock
import { setTime } from './js/clock.js';
setInterval(setTime, 1000);

//*BackTimer
import { mainFunkBackTimer } from './js/backTimer.js';
mainFunkBackTimer();

//*Timer
import { mainFunkTimer } from './js/timer.js';
mainFunkTimer();

//*add
import { add } from './js/add.js';
add();

//*questions
import { choiceCorrectAnswer } from './js/question.js'
choiceCorrectAnswer()

//*Stream
import {getStream} from './js/getStream.js'
const video = document.querySelector('video');
getStream().then(videoStream => {
	video.srcObject = videoStream;
}).catch(err => console.error(err));