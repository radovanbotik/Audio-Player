import { getElement } from "../utility/getElement.js";
const playerbody = getElement("#playerbody");
const playTrackControls = getElement("#playtrack");
const audioNode = getElement("#audiofile");
const trackCover = getElement("#trackcover");

const playTrack = () => {
  playerbody.classList.add("play");
  playTrackControls.children[0].textContent = "pause_circle";
  audioNode.play();
};

export { playTrack };
