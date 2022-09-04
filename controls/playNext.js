import { getElement } from "../utility/getElement.js";
import { loadTrack } from "../utility/loadTrack.js";

const playerbody = getElement("#playerbody");
const playTrackControls = getElement("#playtrack");
const audioNode = getElement("#audiofile");

const playNext = (tracks, trackIndex) => {
  trackIndex += 1;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }

  loadTrack(tracks[trackIndex]);
  return trackIndex;
};

export { playNext };
