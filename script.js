document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("messageModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const closeModalButton = document.getElementById("closeModal");
    const modalButton = document.getElementById("modalButton");

    const openModal = (title, message) => {
        if (!modal || !modalTitle || !modalText) return;

        modalTitle.textContent = title;
        modalText.textContent = message;

        modal.classList.remove("hidden");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
    };

    const hideModal = () => {
        if (!modal) return;

        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    };

    document.querySelectorAll(".add-button").forEach((button) => {
        button.addEventListener("click", () => {
            openModal(
                "Add PRIME to Discord",
                "Your Discord authorization flow can be connected here. PRIME is ready to help secure your community."
            );
        });
    });

    document.querySelectorAll(".plan-select").forEach((button) => {
        button.addEventListener("click", () => {
            const plan = button.dataset.plan || "PRIME plan";

            openModal(
                plan,
                `You selected ${plan}. Connect your payment or membership flow here when you're ready to launch.`
            );
        });
    });

    if (closeModalButton) {
        closeModalButton.addEventListener("click", hideModal);
    }

    if (modalButton) {
        modalButton.addEventListener("click", hideModal);
    }

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                hideModal();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            hideModal();
        }
    });

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
        revealObserver.observe(element);
    });

    const particles = document.getElementById("particles");

    if (particles) {
        const particleCount = window.innerWidth < 700 ? 18 : 34;

        for (let index = 0; index < particleCount; index += 1) {
            const particle = document.createElement("span");

            particle.className = "particle";
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${12 + Math.random() * 18}s`;
            particle.style.animationDelay = `${Math.random() * -20}s`;
            particle.style.opacity = `${0.15 + Math.random() * 0.5}`;

            particles.appendChild(particle);
        }
    }

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
        const target = Number(counter.dataset.target);

        if (!Number.isFinite(target) || target <= 0) return;

        let started = false;

        const animateCounter = () => {
            if (started) return;

            started = true;

            const duration = 900;
            const startTime = performance.now();

            const update = (currentTime) => {
                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                const eased = 1 - Math.pow(1 - progress, 3);

                counter.textContent = Math.round(target * eased);

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            };

            requestAnimationFrame(update);
        };

        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounter();
                        counterObserver.disconnect();
                    }
                });
            },
            {
                threshold: 0.4
            }
        );

        counterObserver.observe(counter);
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const selector = link.getAttribute("href");

            if (!selector || selector === "#") return;

            const target = document.querySelector(selector);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});
