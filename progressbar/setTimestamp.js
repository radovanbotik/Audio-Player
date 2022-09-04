import { getElement } from "../utility/getElement.js";
const audioNode = getElement("#audiofile");

const setTimestamp = e => {
  const fullDuration = e.currentTarget.clientWidth;
  const clickPoint = e.offsetX;
  const trackDuration = audioNode.duration;

  return (clickPoint / fullDuration) * trackDuration;
};

export { setTimestamp };
