let showElement = false

function toggleElementVisibility(element) {
    if (showElement) {
        element.style.display = "none"
    } else {
        element.style.display = "block"
    }
    showElement = !showElement;
}

export {
    toggleElementVisibility,
};