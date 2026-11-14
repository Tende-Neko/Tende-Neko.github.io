/* サポートページ専用。連絡先は contact-config.js だけで設定できます。 */
(function () {
  "use strict";
  var setting = window.HAKKEN_SITE || {};
  var email = typeof setting.supportEmail === "string" ? setting.supportEmail.trim() : "";
  var valid = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(email);
  if (!valid || email === "MAIL_ADDRESS_HERE") return;

  var link = document.getElementById("contact-email-link");
  var address = document.getElementById("contact-email-text");
  var ready = document.getElementById("contact-ready");
  var warning = document.getElementById("contact-unconfigured");
  if (!link || !address || !ready || !warning) return;

  link.href = "mailto:" + email + "?subject=" + encodeURIComponent("発見の手帳についてのお問い合わせ");
  address.textContent = email;

  // mailto: の起動はブラウザ・OS側の設定に依存するため、コピー手段も常設します。
  var actions = document.createElement("div");
  actions.className = "contact-actions";
  link.parentNode.insertBefore(actions, link);
  actions.appendChild(link);

  var copy = document.createElement("button");
  copy.type = "button";
  copy.className = "contact-copy-button";
  copy.textContent = "メールアドレスをコピー";
  actions.appendChild(copy);

  var status = document.createElement("p");
  status.className = "contact-copy-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  actions.insertAdjacentElement("afterend", status);

  var hint = document.createElement("p");
  hint.className = "contact-hint";
  hint.textContent = "メールアプリが開かない場合は、アドレスをコピーし、お使いのメールアプリで新規メールを作成してください。";
  status.insertAdjacentElement("afterend", hint);

  function fallbackCopy() {
    var field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.focus();
    field.select();
    field.setSelectionRange(0, field.value.length);
    var succeeded = false;
    try { succeeded = document.execCommand("copy"); } catch (_) {}
    field.remove();
    return succeeded;
  }

  copy.addEventListener("click", async function () {
    var succeeded = false;
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(email);
        succeeded = true;
      } else {
        succeeded = fallbackCopy();
      }
    } catch (_) {
      succeeded = fallbackCopy();
    }
    status.textContent = succeeded
      ? "メールアドレスをコピーしました。メールアプリの宛先に貼り付けてください。"
      : "コピーできませんでした。下のメールアドレスを選択してコピーしてください。";
  });

  ready.hidden = false;
  warning.hidden = true;
})();
