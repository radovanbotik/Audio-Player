import { getElement } from "../utility/getElement.js";
const playerbody = getElement("#playerbody");
const playTrackControls = getElement("#playtrack");
const audioNode = getElement("#audiofile");

const pauseTrack = () => {
  playerbody.classList.remove("play");
  playTrackControls.children[0].textContent = "play_circle";
  audioNode.pause();
};

export { pauseTrack };
