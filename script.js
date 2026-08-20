/* =========================================================
   PRIME WEBSITE SCRIPT
   Created by Ptrop
   ========================================================= */


/*
    DISCORD OAUTH SETTINGS

    This is your Discord Application ID.
*/

const CLIENT_ID = "1540085904620253738";


/*
    IMPORTANT:

    This must match the Redirect URL
    you add inside the Discord Developer Portal.
*/

const REDIRECT_URI =
    "https://ptrop.github.io/prime-guard/";


const DISCORD_SCOPE =
    "identify guilds";


/* =========================================================
   GET STARTED / DISCORD LOGIN
   ========================================================= */

function connectDiscord() {

    const discordLoginURL =
        "https://discord.com/oauth2/authorize" +
        "?client_id=" + encodeURIComponent(CLIENT_ID) +
        "&response_type=code" +
        "&redirect_uri=" + encodeURIComponent(REDIRECT_URI) +
        "&scope=" + encodeURIComponent(DISCORD_SCOPE);

    window.location.href =
        discordLoginURL;
}


const addButtons =
    document.querySelectorAll(".add-button");


addButtons.forEach((button) => {

    button.addEventListener("click", () => {

        connectDiscord();

    });

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");


const mobileMenu =
    document.getElementById("mobileMenu");


if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });

}


/* =========================================================
   PRICING MODAL
   ========================================================= */

const planModal =
    document.getElementById("planModal");


const modalTitle =
    document.getElementById("modalTitle");


const modalText =
    document.getElementById("modalText");


const modalPrice =
    document.getElementById("modalPrice");


const modalClose =
    document.getElementById("modalClose");


const modalContinue =
    document.getElementById("modalContinue");


const paidPlanButtons =
    document.querySelectorAll(
        ".plus-button, .pro-button"
    );


function openPlanModal(
    plan,
    price
) {

    if (
        !planModal ||
        !modalTitle ||
        !modalText ||
        !modalPrice
    ) {
        return;
    }


    modalTitle.textContent =
        plan;


    modalText.textContent =
        "You selected " +
        plan +
        ". Continue to complete your PRIME access setup.";


    modalPrice.textContent =
        price;


    planModal.classList.remove(
        "hidden"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closePlanModal() {

    if (!planModal) {
        return;
    }


    planModal.classList.add(
        "hidden"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


paidPlanButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const plan =
            button.dataset.plan;


        const price =
            button.dataset.price;


        openPlanModal(
            plan,
            price
        );

    });

});


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closePlanModal
    );

}


/* =========================================================
   MODAL BACKDROP
   ========================================================= */

const modalBackdrop =
    document.querySelector(
        ".modal-backdrop"
    );


if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closePlanModal
    );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closePlanModal();

        }

    }
);


/* =========================================================
   MODAL CONTINUE
   ========================================================= */

if (modalContinue) {

    modalContinue.addEventListener(
        "click",
        () => {

            alert(
                "Payment setup is not connected yet. PRIME purchase functionality can be added next."
            );

        }
    );

}


/* =========================================================
   DISCORD CALLBACK HANDLING
   ========================================================= */

const urlParameters =
    new URLSearchParams(
        window.location.search
    );


const authorizationCode =
    urlParameters.get("code");


const oauthError =
    urlParameters.get("error");


if (authorizationCode) {

    console.log(
        "Discord authorization code received."
    );


    /*
        IMPORTANT:

        A GitHub Pages website cannot securely
        exchange this code for a Discord access token.

        You will need a backend later for the
        full Discord account connection system.

        For now, this confirms that Discord
        successfully redirected the user back
        to your PRIME website.
    */

}


if (oauthError) {

    console.error(
        "Discord OAuth error:",
        oauthError
    );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateActiveNavigation() {

    let currentSection =
        "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.style.color = "";


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color =
                "#ffffff";

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();
