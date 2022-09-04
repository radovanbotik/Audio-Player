import { getElement } from "../utility/getElement.js";
const progressIndicator = getElement("#progressindicator");

const updateProgress = e => {
  const { duration, currentTime } = e.currentTarget;
  const progressCurrentValue = currentTime / duration;
  return progressCurrentValue;
};

export { updateProgress };
