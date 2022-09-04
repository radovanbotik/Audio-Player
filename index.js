import { getElement } from "./utility/getElement.js";
import { loadTrack } from "./utility/loadTrack.js";
import { playTrack } from "./controls/playTrack.js";
import { pauseTrack } from "./controls/pauseTrack.js";
import { playPrevious } from "./controls/playPrevious.js";
import { playNext } from "./controls/playNext.js";
import { updateProgress } from "./progressbar/updateProgress.js";
import { setTimestamp } from "./progressbar/setTimestamp.js";

const playerbody = getElement("#playerbody");

const previousTrackControls = getElement("#previoustrack");
const nextTrackControls = getElement("#nexttrack");
const playTrackControls = getElement("#playtrack");
const audioNode = getElement("#audiofile");
const trackCover = getElement("#trackcover");

const progressBar = getElement("#progressbar");
const progressIndicator = getElement("#progressindicator");

const tracks = ["01 - Burial - Untitled", "02 - Burial - Distant Lights"];

let trackIndex = 0;

loadTrack(tracks[trackIndex]);

// ⏸️▶️PLAY PAUSE FUNCTIONALITY
playTrackControls.addEventListener("click", () => {
  const isPlaying = playerbody.classList.contains("play");
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});

//⏮️⏩CHANGING SONGS FUNCTIONALITY
previousTrackControls.addEventListener("click", () => {
  trackIndex = playPrevious(tracks, trackIndex);
  audioNode.pause();
  progressIndicator.style.width = `0%`;

  playTrack();
});
nextTrackControls.addEventListener("click", () => {
  trackIndex = playNext(tracks, trackIndex);
  audioNode.pause();
  progressIndicator.style.width = `0%`;
  playTrack();
});
//🕛🕧UPDATING PROGRESS BAR
audioNode.addEventListener("timeupdate", e => {
  progressIndicator.style.width = `${updateProgress(e) * 100}%`;
});
progressBar.addEventListener("click", e => {
  audioNode.currentTime = setTimestamp(e);
});
//🔚🔄️AUTOPLAY ON END EVENT
audioNode.addEventListener("ended", e => {
  trackIndex = playNext(tracks, trackIndex);
  playTrack();
});
