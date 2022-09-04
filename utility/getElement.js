const getElement = selector => {
  if (document.querySelector(`${selector}`)) {
    return document.querySelector(`${selector}`);
  } else {
    throw new Error(
      `Selector ${selector} does not exist, check the CSS selector again.`
    );
  }
};

export { getElement };
