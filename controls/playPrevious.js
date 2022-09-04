import { getElement } from "../utility/getElement.js";
import { loadTrack } from "../utility/loadTrack.js";

const playerbody = getElement("#playerbody");
const playTrackControls = getElement("#playtrack");
const audioNode = getElement("#audiofile");

const playPrevious = (tracks, trackIndex) => {
  trackIndex -= 1;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }

  loadTrack(tracks[trackIndex]);
  return trackIndex;
};

export { playPrevious };
