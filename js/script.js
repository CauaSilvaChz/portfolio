// Os dados do site (perfil, certificações, projetos...) ficam no js/data.js
const data = PORTFOLIO_DATA;
const profile = data.profile;

// ---------- Funções auxiliares ----------

function isLink(text) {
  return typeof text === "string" && text.startsWith("http");
}

function cloneTemplate(id) {
  return document.getElementById(id).content.firstElementChild.cloneNode(true);
}

function field(card, name) {
  return card.querySelector(`[data-field="${name}"]`);
}

function createIcon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  use.setAttribute("href", `#icon-${name}`);
  svg.append(use);
  return svg;
}

function createTag(text) {
  const tag = document.createElement("li");
  tag.className = "tag";
  tag.textContent = text;
  return tag;
}

// Se o link não estiver configurado, ele fica desativado
function setLink(link, url) {
  if (url) {
    link.href = url;
  } else {
    link.removeAttribute("href");
    link.classList.add("is-unavailable");
    link.setAttribute("aria-disabled", "true");
  }
}

// ---------- Perfil ----------

function renderProfile() {
  document.querySelectorAll("[data-profile]").forEach((element) => {
    const value = profile[element.dataset.profile];
    if (value) element.textContent = value;
  });

  const links = {
    email: profile.email ? `mailto:${profile.email}` : "",
    linkedin: isLink(profile.linkedin) ? profile.linkedin : "",
    github: isLink(profile.github) ? profile.github : "",
  };

  document.querySelectorAll("[data-profile-link]").forEach((link) => {
    setLink(link, links[link.dataset.profileLink]);
  });

  document.querySelector("[data-open-to-work]").hidden = !profile.openToWork;

  // Foto de perfil (opcional). Sem foto, fica o símbolo { }
  if (profile.avatar) {
    const image = document.createElement("img");
    image.src = profile.avatar;
    image.alt = `Foto de ${profile.name}`;
    image.width = 112;
    image.height = 112;
    image.addEventListener("error", () => image.remove());
    document.querySelector("[data-avatar]").append(image);
  }
}

// ---------- Sobre mim e tecnologias ----------

function renderAbout() {
  const list = document.querySelector("[data-about-list]");

  data.about.forEach((block) => {
    const card = cloneTemplate("about-card-template");
    field(card, "icon").append(createIcon(block.icon));
    field(card, "title").textContent = block.title;
    field(card, "text").textContent = block.text;
    list.append(card);
  });
}

function renderSkills() {
  const list = document.querySelector("[data-skills-list]");
  // Categorias sem itens não aparecem
  const groups = data.skills.filter((group) => group.items.length > 0);

  groups.forEach((group) => {
    const card = cloneTemplate("skill-card-template");
    field(card, "icon").append(createIcon(group.icon));
    field(card, "category").textContent = group.category;
    field(card, "items").append(...group.items.map(createTag));
    list.append(card);
  });
}

// ---------- Certificações ----------

const CERTS_VISIBLE = 3;

function createCertCard(cert) {
  const card = cloneTemplate("cert-card-template");

  field(card, "name").textContent = cert.name;
  field(card, "institution").textContent = cert.institution;
  field(card, "description").textContent = cert.description;

  const logo = field(card, "logo");
  if (cert.image) {
    const image = document.createElement("img");
    image.src = cert.image;
    image.alt = `Logotipo de ${cert.institution}`;
    image.width = 52;
    image.height = 52;
    image.loading = "lazy";
    image.addEventListener("error", () => image.replaceWith(createIcon("award")));
    logo.append(image);
  } else {
    logo.append(createIcon("award"));
  }

  if (cert.date) {
    field(card, "date").querySelector("span").textContent = `Concluído em ${cert.date}`;
  } else {
    field(card, "date").remove();
  }

  if (isLink(cert.url)) {
    field(card, "url").href = cert.url;
  } else {
    field(card, "url").remove();
  }

  return card;
}

function renderCertifications() {
  const list = document.querySelector("[data-cert-list]");
  const button = document.querySelector("[data-cert-toggle]");
  const label = button.querySelector("[data-cert-toggle-label]");
  const certs = data.certifications;

  if (certs.length === 0) {
    list.hidden = true;
    document.querySelector("[data-cert-empty]").hidden = false;
    return;
  }

  const extraCards = [];
  certs.forEach((cert, index) => {
    const card = createCertCard(cert);
    if (index >= CERTS_VISIBLE) {
      card.hidden = true;
      card.classList.add("is-extra");
      extraCards.push(card);
    }
    list.append(card);
  });

  if (extraCards.length === 0) return;

  let expanded = false;
  button.hidden = false;
  label.textContent = `Ver todas as certificações (${certs.length})`;

  button.addEventListener("click", () => {
    expanded = !expanded;
    extraCards.forEach((card) => (card.hidden = !expanded));
    button.setAttribute("aria-expanded", expanded);

    if (expanded) {
      label.textContent = "Mostrar menos";
    } else {
      label.textContent = `Ver todas as certificações (${certs.length})`;
      // a página diminui ao fechar, então rola até o botão
      button.scrollIntoView({ block: "nearest" });
    }
  });
}

// ---------- Projetos ----------

function createPlaceholder(message) {
  const div = document.createElement("div");
  const text = document.createElement("p");
  div.className = "media-placeholder";
  text.textContent = message;
  div.append(createIcon("video"), text);
  return div;
}

function createProjectMedia(project) {
  if (project.video) {
    const video = document.createElement("video");
    video.src = project.video;
    video.controls = true;
    video.playsInline = true;
    video.preload = project.cover ? "none" : "metadata";
    if (project.cover) video.poster = project.cover;
    video.setAttribute("aria-label", `Vídeo: demonstração do projeto ${project.name}`);
    video.addEventListener("error", () => {
      video.replaceWith(createPlaceholder("Não foi possível carregar o vídeo"));
    });
    return video;
  }

  if (project.cover) {
    const image = document.createElement("img");
    image.src = project.cover;
    image.alt = `Imagem do projeto ${project.name}`;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      image.replaceWith(createPlaceholder("Prévia indisponível"));
    });
    return image;
  }

  return createPlaceholder("Vídeo de demonstração em breve");
}

function renderProjects() {
  const track = document.querySelector("[data-carousel-track]");

  if (data.projects.length === 0) {
    document.querySelector("[data-carousel]").hidden = true;
    document.querySelector("[data-projects-empty]").hidden = false;
    return;
  }

  data.projects.forEach((project) => {
    const card = cloneTemplate("project-card-template");
    field(card, "name").textContent = project.name;
    field(card, "description").textContent = project.description;
    field(card, "media").append(createProjectMedia(project));
    field(card, "technologies").append(...project.technologies.map(createTag));
    setLink(field(card, "github"), isLink(project.github) ? project.github : "");

    if (isLink(project.demo)) {
      field(card, "demo").href = project.demo;
    } else {
      field(card, "demo").remove();
    }

    track.append(card);
  });
}

// ---------- Carrossel ----------

function initCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  if (carousel.hidden) return;

  const track = carousel.querySelector("[data-carousel-track]");
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const dots = carousel.querySelector("[data-carousel-dots]");
  const cards = track.children;

  // largura de um card + o espaço entre eles
  function getStep() {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return cards[0].offsetWidth + gap;
  }

  function getMaxScroll() {
    return track.scrollWidth - track.clientWidth;
  }

  // ex: 4 cards e 3 aparecendo na tela = 2 posições
  function getPositions() {
    const visible = Math.max(1, Math.round(track.clientWidth / getStep()));
    return Math.max(1, cards.length - visible + 1);
  }

  function getCurrent() {
    if (track.scrollLeft >= getMaxScroll() - 1) return getPositions() - 1;
    return Math.round(track.scrollLeft / getStep());
  }

  function goTo(position) {
    position = Math.max(0, Math.min(position, getPositions() - 1));
    track.scrollTo({ left: position * getStep() });
  }

  function createDots() {
    const total = getPositions();
    if (dots.children.length === total) return;

    dots.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel__dot";
      dot.setAttribute("aria-label", `Ir para a posição ${i + 1} de ${total}`);
      dot.addEventListener("click", () => goTo(i));
      dots.append(dot);
    }
  }

  function update() {
    const current = getCurrent();

    // se todos os cards cabem na tela, esconde os botões
    carousel.classList.toggle("is-static", getMaxScroll() <= 1);
    prevButton.setAttribute("aria-disabled", track.scrollLeft <= 1);
    nextButton.setAttribute("aria-disabled", track.scrollLeft >= getMaxScroll() - 1);

    for (let i = 0; i < dots.children.length; i++) {
      if (i === current) {
        dots.children[i].setAttribute("aria-current", "true");
      } else {
        dots.children[i].removeAttribute("aria-current");
      }
    }
  }

  prevButton.addEventListener("click", () => goTo(getCurrent() - 1));
  nextButton.addEventListener("click", () => goTo(getCurrent() + 1));
  track.addEventListener("scroll", update);

  // navegar com as setas do teclado
  track.addEventListener("keydown", (event) => {
    if (event.target !== track) return;

    if (event.key === "ArrowRight") goTo(getCurrent() + 1);
    else if (event.key === "ArrowLeft") goTo(getCurrent() - 1);
    else if (event.key === "Home") goTo(0);
    else if (event.key === "End") goTo(getPositions() - 1);
    else return;

    event.preventDefault();
  });

  // quando um vídeo começa, pausa os outros
  // (o evento "play" não propaga, por isso o true no final)
  track.addEventListener("play", (event) => {
    track.querySelectorAll("video").forEach((video) => {
      if (video !== event.target) video.pause();
    });
  }, true);

  window.addEventListener("resize", () => {
    createDots();
    update();
  });

  createDots();
  update();
}

// ---------- Navbar ----------

const header = document.querySelector("[data-header]");

function initHeader() {
  function update() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", update);
  update();
}

function initMobileMenu() {
  const button = document.querySelector("[data-menu-toggle]");
  const menu = document.getElementById("nav-menu");
  let open = false;

  function setOpen(value) {
    open = value;
    button.setAttribute("aria-expanded", open);
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("is-open", open);
    header.classList.toggle("is-menu-open", open);
  }

  button.addEventListener("click", () => setOpen(!open));

  // fecha o menu quando clica em um link
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a[href]")) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (open && !header.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      button.focus();
    }
  });

  // se a tela ficar grande (layout de computador), fecha o menu
  window.matchMedia("(min-width: 861px)").addEventListener("change", () => setOpen(false));
}

function initContactDropdown() {
  const dropdown = document.querySelector("[data-dropdown]");
  const button = dropdown.querySelector("[data-dropdown-toggle]");
  const items = dropdown.querySelectorAll(".dropdown__item[href]");
  let open = false;

  function setOpen(value) {
    open = value;
    button.setAttribute("aria-expanded", open);
    dropdown.classList.toggle("is-open", open);
  }

  button.addEventListener("click", () => setOpen(!open));

  dropdown.addEventListener("click", (event) => {
    if (event.target.closest(".dropdown__item[href]")) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) setOpen(false);
  });

  // fecha quando o foco sai do dropdown (ex: apertando Tab)
  dropdown.addEventListener("focusout", (event) => {
    if (!dropdown.contains(event.relatedTarget)) setOpen(false);
  });

  // Esc fecha e as setas andam entre as opções
  dropdown.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && open) {
      event.stopPropagation(); // pra não fechar o menu do celular junto
      setOpen(false);
      button.focus();
      return;
    }

    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    setOpen(true);

    const list = Array.from(items);
    let index = list.indexOf(document.activeElement);
    if (event.key === "ArrowDown") {
      index = index + 1 >= list.length ? 0 : index + 1;
    } else {
      index = index - 1 < 0 ? list.length - 1 : index - 1;
    }
    list[index].focus();
  });
}

// Destaca na navbar a seção que está aparecendo na tela
function initActiveSection() {
  const navItems = document.querySelectorAll(".nav [data-section]");
  const sections = Array.from(navItems).map((item) => document.getElementById(item.dataset.section));

  function update() {
    let currentId = sections[0].id;

    // a seção ativa é a última que já passou de 35% da altura da tela
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
        currentId = section.id;
      }
    });

    // no fim da página, ativa a última seção (contato)
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      currentId = sections[sections.length - 1].id;
    }

    navItems.forEach((item) => {
      const active = item.dataset.section === currentId;
      item.classList.toggle("is-active", active);
      if (item.tagName !== "A") return;

      if (active) {
        item.setAttribute("aria-current", "location");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  update();
}

// ---------- Copiar e-mail ----------

function initCopyEmail() {
  const button = document.querySelector("[data-copy-email]");
  const label = button.querySelector("[data-copy-label]");
  const feedback = document.querySelector("[data-copy-feedback]");
  const emailText = document.querySelector("[data-copy-target]");
  let timer;

  button.addEventListener("click", async () => {
    clearTimeout(timer);

    try {
      await navigator.clipboard.writeText(profile.email);
      button.classList.add("is-copied");
      label.textContent = "Copiado!";
      feedback.classList.remove("is-error");
      feedback.textContent = "E-mail copiado para a área de transferência.";
    } catch {
      // se não conseguir copiar, seleciona o texto pra pessoa copiar com Ctrl+C
      window.getSelection().selectAllChildren(emailText);
      feedback.classList.add("is-error");
      feedback.textContent = "Não foi possível copiar automaticamente. O e-mail foi selecionado: use Ctrl+C para copiar.";
    }

    timer = setTimeout(() => {
      button.classList.remove("is-copied");
      label.textContent = "Copiar";
      feedback.textContent = "";
      feedback.classList.remove("is-error");
    }, 3000);
  });
}

// ---------- Animação ao rolar ----------

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

// ---------- Iniciar ----------

renderProfile();
renderAbout();
renderSkills();
renderCertifications();
renderProjects();

initHeader();
initMobileMenu();
initContactDropdown();
initActiveSection();
initCarousel();
initCopyEmail();
initReveal();

document.querySelector("[data-current-year]").textContent = new Date().getFullYear();
