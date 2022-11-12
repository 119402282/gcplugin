
const getOffsetFromHiddenInput = () => {
    const hiddenInput = document.getElementById('greencart-hidden-input') as HTMLInputElement;
    return hiddenInput?.value ?? "No data";
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    sendResponse(getOffsetFromHiddenInput());
});