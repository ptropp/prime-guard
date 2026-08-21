document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("messageModal");
    const closeModal = document.getElementById("closeModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const modalButton = document.getElementById("modalButton");
    const homeButton = document.getElementById("homeButton");


    // =========================
    // MODAL FUNCTIONS
    // =========================

    function openModal(title, message) {

        modalTitle.textContent = title;
        modalText.textContent = message;

        modal.classList.remove("hidden");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    }


    function hideModal() {

        modal.classList.add("hidden");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";
    }


    // =========================
    // ADD TO DISCORD BUTTONS
    // =========================

    const addButtons =
        document.querySelectorAll(".add-button");


    addButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                openModal(
                    "Add PRIME to Discord",
                    "PRIME is currently being prepared for deployment. Discord installation will be available here."
                );

            }
        );

    });


    // =========================
    // PLAN BUTTONS
    // =========================

    const planButtons =
        document.querySelectorAll("[data-plan]");


    planButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const plan =
                    button.dataset.plan;

                openModal(
                    plan,
                    `${plan} membership is not available for checkout yet. This button will be connected to the payment system when PRIME subscriptions launch.`
                );

            }
        );

    });


    // =========================
    // CLOSE MODAL
    // =========================

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

            if (
                event.target === modal
            ) {

                hideModal();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                !modal.classList.contains("hidden")
            ) {

                hideModal();

            }

        }
    );


    // =========================
    // HOME LOGO
    // =========================

    if (homeButton) {

        homeButton.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // =========================
    // SCROLL REVEAL ANIMATION
    // =========================

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );


    // =========================
    // HERO LOAD ANIMATION
    // =========================

    window.setTimeout(
        () => {

            document
                .querySelectorAll(
                    ".hero .reveal"
                )
                .forEach(
                    (element) => {

                        element.classList.add(
                            "visible"
                        );

                    }
                );

        },
        120
    );

});
