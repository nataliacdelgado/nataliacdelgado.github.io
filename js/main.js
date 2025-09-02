/**
 * Minimal enhancements:
 * - Smooth scroll for in-page anchor links with fixed-header offset
 * - Basic contact form feedback (fake "send" with inline success message)
 * - Footer year setter
 */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    // 2) Smooth scroll for anchor links
    var header = document.querySelector(".header");
    function getHeaderHeight() {
      return header ? header.offsetHeight : 0;
    }

    function smoothScrollTo(targetY) {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }

    function handleAnchorClick(e) {
      var href = this.getAttribute("href") || "";
      if (!href || href === "#" || !href.startsWith("#")) return;

      var id = href.slice(1);
      var target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      // Optionally update URL hash
      try {
        history.pushState(null, "", href);
      } catch (_) {
        // noop if not allowed
      }

      // Compute position accounting for fixed header
      var y =
        target.getBoundingClientRect().top +
        window.scrollY -
        getHeaderHeight() -
        8;

      // Ensure focus for accessibility
      var prevTabIndex = target.getAttribute("tabindex");
      if (prevTabIndex === null) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });

      smoothScrollTo(y);

      // Restore tabindex if we added it
      if (prevTabIndex === null) {
        setTimeout(function () {
          target.removeAttribute("tabindex");
        }, 800);
      }
    }

    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (a) {
      a.addEventListener("click", handleAnchorClick);
    });

    // 3) Contact form mailto functionality
    var form = document.querySelector(".contact-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        var name = form.querySelector('input[name="name"]').value.trim();
        var email = form.querySelector('input[name="email"]').value.trim();
        var subject = form.querySelector('input[name="subject"]').value.trim();
        var message = form
          .querySelector('textarea[name="message"]')
          .value.trim();

        // Validate required fields
        if (!name || !email || !message) {
          return;
        }

        // Create email body with form data
        var emailBody = "Name: " + name + "\n";
        emailBody += "Email: " + email + "\n";
        emailBody += "Subject: " + subject + "\n\n";
        emailBody += "Message:\n" + message;

        // Create mailto link
        var mailtoLink = "mailto:nataliacdelgado@gmail.com";
        mailtoLink += "?subject=" + encodeURIComponent(subject);
        mailtoLink += "&body=" + encodeURIComponent(emailBody);

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after a delay
        setTimeout(function () {
          form.reset();
        }, 2000);
      });

      // Clear message when user starts typing again
      var inputs = form.querySelectorAll("input, textarea");
      inputs.forEach(function (el) {
        el.addEventListener("input", function () {
          var msg = form.querySelector(".form-message");
          if (msg) msg.textContent = "";
        });
      });
    }
  });
})();
