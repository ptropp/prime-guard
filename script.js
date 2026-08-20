const modal = document.getElementById("messageModal");

const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const modalButton = document.getElementById("modalButton");

const addButtons =
    document.querySelectorAll(".add-button");

const plusButton =
    document.querySelector(".plus-button");

const proButton =
    document.querySelector(".pro-button");


function openModal(title, text, buttonText) {

    modalTitle.textContent = title;

    modalText.textContent = text;

    modalButton.textContent =
        buttonText;

    modal.classList.remove("hidden");

}


function hideModal() {

    modal.classList.add("hidden");

}


addButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            openModal(
                "Add PRIME to Discord",
                "Discord integration will be available soon. PRIME is currently being prepared for deployment.",
                "Continue"
            );

        }
    );

});


if (plusButton) {

    plusButton.addEventListener(
        "click",
        () => {

            openModal(
                "PRIME PLUS",
                "PRIME PLUS is planned at $2.99 per month and will include enhanced monitoring, advanced alerts, and additional protection features.",
                "Continue"
            );

        }
    );

}


if (proButton) {

    proButton.addEventListener(
        "click",
        () => {

            openModal(
                "PRIME PRO",
                "PRIME PRO is planned at $5.99 per month and will provide the most advanced protection and future premium features.",
                "Continue"
            );

        }
    );

}


closeModal.addEventListener(
    "click",
    hideModal
);


modalButton.addEventListener(
    "click",
    hideModal
);


modal.addEventListener(
    "click",
    (event) => {

        if (event.target === modal) {

            hideModal();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            hideModal();

        }

    }
);
