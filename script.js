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


function closeMessageModal() {

    modal.classList.add("hidden");

}


addButtons.forEach((button) => {

    button.addEventListener("click", () => {

        openModal(
            "PRIME",
            "PRIME is ready to be added to your Discord community."
        );

    });

});


if (plusButton) {

    plusButton.addEventListener("click", () => {

        openModal(
            "PRIME PLUS",
            "PRIME PLUS will be available soon."
        );

    });

}


if (proButton) {

    proButton.addEventListener("click", () => {

        openModal(
            "PRIME PRO",
            "PRIME PRO will be available soon."
        );

    });

}


closeModal.addEventListener("click", closeMessageModal);


modalButton.addEventListener("click", closeMessageModal);


modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeMessageModal();

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMessageModal();

    }

});
