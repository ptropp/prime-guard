// ==========================================
// PRIME GUARD WEBSITE
// ==========================================


// DISCORD APPLICATION INFORMATION

const CLIENT_ID = "154008590462025738";

const REDIRECT_URI =
    "https://ptrop.github.io/prime-guard/";


// DISCORD LOGIN URL

function getDiscordLoginURL() {

    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: "code",
        redirect_uri: REDIRECT_URI,
        scope: "identify guilds"
    });

    return "https://discord.com/oauth2/authorize?" + params.toString();
}


// CONNECT DISCORD

function connectDiscord() {

    window.location.href = getDiscordLoginURL();

}


// MODAL ELEMENTS

const modal =
    document.getElementById("messageModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalButton =
    document.getElementById("modalButton");

const closeModal =
    document.getElementById("closeModal");


// SHOW MODAL

function showModal(title, text, buttonText, callback) {

    modalTitle.textContent = title;

    modalText.textContent = text;

    modalButton.textContent = buttonText;

    modal.classList.remove("hidden");


    modalButton.onclick = function () {

        modal.classList.add("hidden");

        if (callback) {
            callback();
        }

    };

}


// CLOSE MODAL

closeModal.addEventListener("click", function () {

    modal.classList.add("hidden");

});


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.add("hidden");

    }

});


// ADD TO DISCORD BUTTONS

document
    .querySelectorAll(".add-button")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            connectDiscord();

        });

    });


// FREE PLAN

const freeButton =
    document.querySelector(".free-button");


if (freeButton) {

    freeButton.addEventListener("click", function () {

        localStorage.setItem(
            "primeGuardPlan",
            "free"
        );

        connectDiscord();

    });

}


// PLUS PLAN

const plusButton =
    document.querySelector(".plus-button");


if (plusButton) {

    plusButton.addEventListener("click", function () {

        localStorage.setItem(
            "primeGuardPlan",
            "plus"
        );


        showModal(
            "PRIME PLUS",
            "Payment checkout will be connected here. After payment, PRIME GUARD can assign your PRIME PLUS Discord role automatically.",
            "Coming Soon",
            null
        );

    });

}


// PRO PLAN

const proButton =
    document.querySelector(".pro-button");


if (proButton) {

    proButton.addEventListener("click", function () {

        localStorage.setItem(
            "primeGuardPlan",
            "pro"
        );


        showModal(
            "PRIME PRO",
            "Payment checkout will be connected here. After payment, PRIME GUARD can assign your PRIME PRO Discord role automatically.",
            "Coming Soon",
            null
        );

    });

}


// DISCORD RETURN CHECK

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const authorizationCode =
    urlParams.get("code");


if (authorizationCode) {

    console.log(
        "Discord authorization received."
    );

    console.log(
        authorizationCode
    );


    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );


    showModal(
        "Discord Connected",
        "Your Discord authorization was received successfully. The next step is connecting this to the PRIME GUARD backend so purchases can automatically give users their Discord roles.",
        "Continue",
        null
    );

}
