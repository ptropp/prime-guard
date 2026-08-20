document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("messageModal");

    const closeModal = document.getElementById("closeModal");

    const modalButton = document.getElementById("modalButton");

    const modalTitle = document.getElementById("modalTitle");

    const modalText = document.getElementById("modalText");

    const modalTag = document.getElementById("modalTag");


    // -----------------------------
    // DISCORD CONFIGURATION
    // -----------------------------

    const CLIENT_ID = "154008590462025738";

    const REDIRECT_URI =
        window.location.origin + "/prime-guard/";

    const DISCORD_SCOPE =
        "identify guilds";


    // -----------------------------
    // MODAL FUNCTIONS
    // -----------------------------

    function openModal(title, text, tag) {

        modalTitle.textContent = title;

        modalText.textContent = text;

        modalTag.textContent = tag;

        modal.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    }


    function hideModal() {

        modal.classList.add("hidden");

        document.body.style.overflow = "";

    }


    // -----------------------------
    // ADD TO DISCORD BUTTONS
    // -----------------------------

    const addButtons =
        document.querySelectorAll(".add-button");


    addButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const discordLoginURL =

                "https://discord.com/oauth2/authorize" +

                "?client_id=" + CLIENT_ID +

                "&response_type=code" +

                "&redirect_uri=" +

                encodeURIComponent(REDIRECT_URI) +

                "&scope=" +

                encodeURIComponent(DISCORD_SCOPE);


            window.location.href =
                discordLoginURL;

        });

    });


    // -----------------------------
    // PLAN BUTTONS
    // -----------------------------

    const planButtons =
        document.querySelectorAll(".plan-button");


    planButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const plan =
                button.dataset.plan;


            if (plan === "FREE") {

                const discordLoginURL =

                    "https://discord.com/oauth2/authorize" +

                    "?client_id=" + CLIENT_ID +

                    "&response_type=code" +

                    "&redirect_uri=" +

                    encodeURIComponent(REDIRECT_URI) +

                    "&scope=" +

                    encodeURIComponent(DISCORD_SCOPE);


                window.location.href =
                    discordLoginURL;

            }


            if (plan === "PLUS") {

                openModal(

                    "PRIME PLUS",

                    "PRIME PLUS is being prepared for launch. Pricing and premium access will be available soon.",

                    "PREMIUM ACCESS"

                );

            }


            if (plan === "PRO") {

                openModal(

                    "PRIME PRO",

                    "PRIME PRO is being prepared for launch. Maximum security features and premium access will be available soon.",

                    "PREMIUM ACCESS"

                );

            }

        });

    });


    // -----------------------------
    // CLOSE MODAL
    // -----------------------------

    closeModal.addEventListener("click", hideModal);


    modalButton.addEventListener("click", hideModal);


    modal.addEventListener("click", (event) => {

        if (
            event.target === modal ||
            event.target.classList.contains("modal-overlay")
        ) {

            hideModal();

        }

    });


    // -----------------------------
    // ESCAPE KEY
    // -----------------------------

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            !modal.classList.contains("hidden")
        ) {

            hideModal();

        }

    });


    // -----------------------------
    // NAVIGATION ACTIVE EFFECT
    // -----------------------------

    const sections =
        document.querySelectorAll("section[id]");


    const navLinks =
        document.querySelectorAll(".nav-links a");


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    // -----------------------------
    // SCROLL REVEAL
    // -----------------------------

    const revealElements =
        document.querySelectorAll(

            ".feature-card, .plan-card, .status-panel, .cta-box"

        );


    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

});
