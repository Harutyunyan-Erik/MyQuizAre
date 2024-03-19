export const valueSetter = (selector, value) =>{
    document.querySelector(selector).innerHTML = value;
}

export const tagCreator = (tagName, parent, value) => {
    const tag = document.createElement(tagName);
    parent.appendChild(tag);
    tag.innerHTML = value;
}