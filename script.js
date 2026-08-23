const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ==========================================
   CERTIFICATE VIEWER
========================================== */

function openCertificate(certificatePath) {

    const modal = document.getElementById("certificateModal");

    const certificateImage =
        document.getElementById("certificateImage");

    certificateImage.src = certificatePath;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");

    const certificateImage =
        document.getElementById("certificateImage");

    modal.classList.remove("active");

    certificateImage.src = "";

    document.body.style.overflow = "";
}


/* Close when clicking outside the certificate */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("certificateModal");

    if (event.target === modal) {

        closeCertificate();

    }

});


/* Close using ESC key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCertificate();

    }

});