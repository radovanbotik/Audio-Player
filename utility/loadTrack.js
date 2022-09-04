import { getElement } from "./getElement.js";

const audioNode = getElement("#audiofile");
const trackCover = getElement("#trackcover");
const trackTitle = getElement("#tracktitle");

const loadTrack = track => {
  trackTitle.textContent = track;
  audioNode.src = `../audio/${track}.mp3`;
  trackCover.src = `../images/${track}.png`;
};

export { loadTrack };
