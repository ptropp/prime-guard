const modal = document.getElementById("messageModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalButton = document.getElementById("modalButton");

const addButtons = document.querySelectorAll(".add-button");

const plusButton = document.querySelector(".plus-button");
const proButton = document.querySelector(".pro-button");


function openModal(title, text) {
    modalTitle.textContent = title;
    modalText.textContent = text;

    modal.classList.remove("hidden");
}


function hideModal() {
    modal.classList.add("hidden");
}


addButtons.forEach(button => {

    button.addEventListener("click", () => {

        openModal(
            "ADD PRIME",
            "PRIME is currently being prepared for deployment. Discord installation will be available here when the system is ready."
        );

    });

});


if (plusButton) {

    plusButton.addEventListener("click", () => {

        openModal(
            "PRIME PLUS",
            "PRIME PLUS is currently in development. Subscription access will be available soon."
        );

    });

}


if (proButton) {

    proButton.addEventListener("click", () => {

        openModal(
            "PRIME PRO",
            "PRIME PRO is currently in development. Premium subscription access will be available soon."
        );

    });

}


closeModal.addEventListener("click", hideModal);


modalButton.addEventListener("click", hideModal);


modal.addEventListener("click", event => {

    if (event.target === modal) {
        hideModal();
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        hideModal();
    }

});
