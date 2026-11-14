/* サポートページ専用。連絡先は contact-config.js だけで設定できます。 */
(function () {
  "use strict";
  var setting = window.HAKKEN_SITE || {};
  var email = typeof setting.supportEmail === "string" ? setting.supportEmail.trim() : "";
  var valid = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(email);
  if (!valid || email === "MAIL_ADDRESS_HERE") return;
  var link = document.getElementById("contact-email-link");
  var text = document.getElementById("contact-email-text");
  var ready = document.getElementById("contact-ready");
  var warning = document.getElementById("contact-unconfigured");
  if (!link || !text || !ready || !warning) return;
  link.href = "mailto:" + email + "?subject=" + encodeURIComponent("発見の手帳についてのお問い合わせ");
  text.textContent = email;
  ready.hidden = false;
  warning.hidden = true;
})();
