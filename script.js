document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // Add subtle animation when cards appear
    const cards = document.querySelectorAll(
        ".feature-card, .pricing-card, .system-card"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        card.style.transitionDelay =
            `${index * 0.05}s`;

        observer.observe(card);

    });


    // Console system message
    console.log(
        "%c🛡️ PRIME GUARD SYSTEM ONLINE",
        "color: #4aa8ff; font-size: 16px; font-weight: bold;"
    );

    console.log(
        "%cAlways Watching. Always Protecting.",
        "color: #6fce72; font-size: 12px;"
    );

});
