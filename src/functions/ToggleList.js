export default (id) => {
  const clickedElement = document.getElementById(id);
  const childs = clickedElement.parentElement.children;
  const button = getButtonById(clickedElement);

  const CLOSED = "--closed";
  const ACTIVE = "--active";
  const DIV = "DIV";
  const DATA_TYPE = "data-type";
  const RADIO = "radio";
  const DATA_LIST = "data-list";

  //prevent from changes in element without children!
  if (!clickedElement.getAttribute("data-has_children")) return;

  if (clickedElement.getAttribute(DATA_TYPE) === RADIO) {
    for (let i = 0; i < childs.length; i++) {
      if (childs[i].getAttribute(DATA_TYPE) === RADIO && button.textContent !== "-") {
        const button = getButtonById(childs[i]);
        expandButton(button);
      }
      if (childs[i].nodeName === DIV && childs[i - 1].getAttribute(DATA_TYPE) !== RADIO) {
        continue;
      }
      if (childs[i].getAttribute(DATA_LIST) !== id && childs[i].nodeName === DIV)
        childs[i].classList.replace(ACTIVE, CLOSED);
      else if (childs[i].getAttribute(DATA_LIST) === id && childs[i].nodeName === DIV) {
        toggleListClass(childs[i]);
      }
    }
  } else {
    for (let i = 0; i < childs.length; i++) {
      if (childs[i].getAttribute(DATA_LIST) === id && childs[i].nodeName === DIV) {
        toggleListClass(childs[i]);
      }
    }
  }
  toggleButton(button);
};

const toggleButton = (button) => {
  if (button.getAttribute("data-button"))
    if (button.textContent === "+") button.textContent = "-";
    else button.textContent = "+";
};

const expandButton = (button) => {
  if (button.getAttribute("data-button")) button.textContent = "+";
};

const getButtonById = (element) => document.querySelector(`[data-button='${element.id}']`);

const toggleListClass = (element) => {
  const CLOSED = "--closed";
  const ACTIVE = "--active";

  if (element.classList.contains(CLOSED)) element.classList.replace(CLOSED, ACTIVE);
  else element.classList.replace(ACTIVE, CLOSED);
};
