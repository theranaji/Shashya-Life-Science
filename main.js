/* =========================================================
   SHASHYA LIFE SCIENCE
   Main JavaScript
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu-btn");

const mobileNavigation =
    document.querySelector(".mobile-navigation");


if (
    mobileMenuButton &&
    mobileNavigation
) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileNavigation.classList.toggle(
                    "active"
                );


            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


            if (isOpen) {

                mobileMenuButton.innerHTML =
                    "✕";

            } else {

                mobileMenuButton.innerHTML =
                    "☰";

            }

        }
    );

}



/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-navigation a"
    );


mobileLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileNavigation.classList.remove(
                    "active"
                );


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                mobileMenuButton.innerHTML =
                    "☰";

            }
        );

    }
);



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

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
    function (element) {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

const header =
    document.querySelector(
        ".site-header"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 20
        ) {

            header.style.boxShadow =
                "0 8px 30px rgba(6,29,25,0.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);



/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView(
                            {
                                behavior: "smooth"
                            }
                        );

                    }

                }
            );

        }
    );



/* =========================================================
   PAGE LOADED
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);