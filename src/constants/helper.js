const textarea = document.createElement("textarea");

export const decodeHtmlEntities = (str) => {
  textarea.innerHTML = str;
  return textarea.value;
};
