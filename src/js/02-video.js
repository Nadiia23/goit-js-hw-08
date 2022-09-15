import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeKey = "videoplayer-current-time";

function durationToSave({ seconds }) {

  localStorage.setItem(timeKey, seconds);
}
window.addEventListener('load', newStart);

player.on('timeupdate', Throttle(durationToSave, 1000));

function newStart() {
  if (!localStorage.getItem(timeKey)) return;

  const currentVideoTime = localStorage.getItem(timeKey);

  player
    .setCurrentTime(currentVideoTime)
    .then(function() {
    // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
}
