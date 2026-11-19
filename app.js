(() => {
  const config = window.PIRATETOKEN_CONFIG || {};
  const products = config.products || {};

  function configureDownload(id, product, fallbackName) {
    const link = document.getElementById(id);
    if (!link) return;
    const url = product && product.downloadUrl;
    if (!url) {
      link.href = "#";
      link.setAttribute("aria-disabled", "true");
      link.classList.add("is-unconfigured");
      link.addEventListener("click", event => event.preventDefault());
      return;
    }
    link.href = url;
    link.setAttribute("download", fallbackName);
    link.removeAttribute("aria-disabled");
    link.classList.remove("is-unconfigured");
  }

  configureDownload("chance-download", products.chanceChecker, "FortnitePirateTokenTool.exe");
  configureDownload("cannon-download", products.cannonCheat, "Cannon cheat.exe");

  const list = document.getElementById("updates-list");
  const updates = Array.isArray(config.updates) ? config.updates : [];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));

  if (list) {
    list.innerHTML = updates.length ? updates.map(item => `
      <article class="update-row">
        <div class="update-date">${escapeHtml(item.date || "")}</div>
        <div class="update-content">
          <h3>${escapeHtml(item.title || "Update")}</h3>
          <p>${escapeHtml(item.description || "")}</p>
        </div>
        <div class="update-type">${escapeHtml(item.type || "UPDATE")}</div>
      </article>`).join("") : '<div class="update-empty">NO UPDATES PUBLISHED YET.</div>';
  }

  const now = new Date();
  const date = document.getElementById("site-date");
  const year = document.getElementById("year");
  if (date) date.textContent = `${String(now.getUTCDate()).padStart(2,"0")}.${String(now.getUTCMonth()+1).padStart(2,"0")}.${now.getUTCFullYear()}`;
  if (year) year.textContent = now.getFullYear();

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
})();
