const openpopup = document.getElementById("openPopup")
const closePopup = document.getElementById("closePopup")
const PopupContaner = document.getElementById("popupContainer")

openpopup.addEventListener("click", () => {
    PopupContaner.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    PopupContaner.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popupContainer) {
        PopupContaner.style.display = "none";
    }
});