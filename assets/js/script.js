const SVG_ICONS = {
  pin: '<svg class="w-6 h-6 text-[#182E59]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z"/><circle cx="12" cy="11" r="2.5"/></svg>',
  pinWhite: '<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z"/><circle cx="12" cy="11" r="2.5"/></svg>',
  studyGroup: '<svg class="w-7 h-7 text-[#3DADF2]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="7" r="2.5"/><circle cx="16" cy="7" r="2.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 19v-1.5a4 4 0 014-4h2a4 4 0 014 4V19M13 19v-1.5a4 4 0 014-4h1a3 3 0 013 3V19"/><path stroke-linecap="round" d="M9 4h6"/></svg>',
  kids: '<svg class="w-7 h-7 text-[#3DADF2]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="7" r="3"/><circle cx="16" cy="8" r="2.5"/><path stroke-linecap="round" d="M4 20v-2a4 4 0 014-4h2a4 4 0 014 4v2M14 20v-1.5a3.5 3.5 0 016 0V20"/></svg>',
  grad: '<svg class="w-7 h-7 text-[#1F438C]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 12v5c3 2 9 2 12 0v-5"/></svg>',
  group: '<svg class="w-7 h-7 text-[#185004]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path stroke-linecap="round" d="M3 19v-1a5 5 0 0110 0v1M14 19v-1a4 4 0 017 0v1"/></svg>',
  doc: '<svg class="w-6 h-6 text-[#182E59]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M9 13h6M9 17h4"/></svg>',
  school: '<svg class="w-6 h-6 text-[#182E59]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-6h6v6"/></svg>',
  robot: '<svg class="w-6 h-6 text-[#1F438C]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 16h6"/></svg>',
  check: '<svg class="w-4 h-4 text-[#185004]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>',
  checkRoyal: '<svg class="w-4 h-4 text-[#1F438C]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>',
  checkOrange: '<svg class="w-4 h-4 text-[#BA630D]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>',
  trophy: '<svg class="w-7 h-7 text-[#AA8407]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM5 6H3v2a3 3 0 003 3M19 6h2v2a3 3 0 01-3 3"/></svg>',
  science: '<svg class="w-6 h-6 text-[#185004]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3h6M10 3v5l-5 9a2 2 0 001.7 3h10.6a2 2 0 001.7-3l-5-9V3"/></svg>',
  sports: '<svg class="w-6 h-6 text-[#BA630D]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>',
  art: '<svg class="w-6 h-6 text-[#3DADF2]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.2" fill="currentColor"/><circle cx="14" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="14" r="1.2" fill="currentColor"/></svg>',
  dance: '<svg class="w-6 h-6 text-[#185004]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M7 10l5 2 5-3M12 12v5l-3 4M12 17l4 3"/></svg>',
  book: '<svg class="w-6 h-6 text-[#A67208]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg>',
  heart: '<svg class="w-5 h-5 text-[#AA8407]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21s-7-4.35-9.5-8.5A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6.5C19 16.65 12 21 12 21z"/></svg>',
  care: '<svg class="w-6 h-6 text-[#1F438C]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="3"/><path stroke-linecap="round" d="M5 20v-2a5 5 0 0110 0v2"/></svg>',
  puzzle: '<svg class="w-6 h-6 text-[#185004]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1h3a1 1 0 011 1v3h1a2 2 0 110 4h-1v3a1 1 0 01-1 1h-3v1a2 2 0 11-4 0v-1H8a1 1 0 01-1-1v-3H6a2 2 0 110-4h1V6a1 1 0 011-1h3V4z"/></svg>',
  access: '<svg class="w-6 h-6 text-[#AA8407]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6l2 7M10 12l-2 7M7 16a5 5 0 008 2"/></svg>',
  mail: '<svg class="w-6 h-6 text-[#182E59]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  ref: '<svg class="w-6 h-6 text-[#182E59]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/></svg>',
  phone: '<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v3a2 2 0 01-2 2A16 16 0 013 5z"/></svg>',
  clock: '<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" d="M12 7v5l3 2"/></svg>',
  whatsapp: '<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2z"/></svg>',
  collab: '<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="2.5"/><circle cx="6" cy="16" r="2.5"/><circle cx="18" cy="16" r="2.5"/><path d="M9 8l-2 5M15 8l2 5M9 16h6"/></svg>',
  insta: '<svg class="w-5 h-5 text-[#182E59]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  calc: '<svg class="w-6 h-6 text-[#A67208]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M12 12h2M16 12h.01M8 16h2M12 16h2M16 16h.01"/></svg>',
  pc: '<svg class="w-6 h-6 text-[#185004]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
  briefcase: '<svg class="w-6 h-6 text-[#185004]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  handshake: '<svg class="w-6 h-6 text-[#185004]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 11l4 4 6-6M3 12l4-4 5 5 5-5 4 4"/></svg>',
  toys: '<svg class="w-6 h-6 text-[#3DADF2]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="11" width="7" height="7" rx="1"/><rect x="13" y="11" width="7" height="7" rx="1"/><rect x="8.5" y="4" width="7" height="7" rx="1"/></svg>',
  shapes: '<svg class="w-6 h-6 text-[#3DADF2]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="7" cy="15" r="3"/><polygon points="12,4 16,11 8,11"/><rect x="14" y="13" width="6" height="6"/></svg>'
};

const preloadedMedia = new Set();

function preloadImage(src) {
  if (!src || preloadedMedia.has(src)) return;
  preloadedMedia.add(src);
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
}

function preloadQueue(urls, index) {
  if (index >= urls.length) return;
  preloadImage(urls[index]);
  setTimeout(() => {
    preloadQueue(urls, index + 1);
  }, 180);
}

function getAltMediaPaths(rawSrc) {
  const candidates = [];
  if (!rawSrc) return candidates;
  if (rawSrc.indexOf('gremio-estudantil.png') !== -1 && rawSrc.indexOf('.png.png') === -1) {
    candidates.push(rawSrc + '.png');
  }
  if (rawSrc.indexOf('aula-leitura-digitacao.jpg') !== -1 && rawSrc.indexOf('.jpg.jpeg') === -1) {
    candidates.push(rawSrc + '.jpeg');
  }
  if (rawSrc.indexOf('Trofeús/') !== -1) {
    candidates.push(rawSrc.replace('Trofeús/', 'Trofeus/'));
  }
  if (rawSrc.indexOf('logo31demarco') !== -1) {
    candidates.push(rawSrc.replace('logo31demarco', 'logo31demarco'));
  }
  if (/\.jpg$/i.test(rawSrc)) {
    candidates.push(rawSrc.replace(/\.jpg$/i, '.jpeg'));
  } else if (/\.jpeg$/i.test(rawSrc)) {
    candidates.push(rawSrc.replace(/\.jpeg$/i, '.jpg'));
  }
  return candidates;
}

function handleIconFallback(img, key) {
  try {
    const tried = Number(img.getAttribute('data-try') || '0');
    const currentSrc = img.getAttribute('src') || '';
    const alts = getAltMediaPaths(currentSrc);
    if (tried < alts.length) {
      img.setAttribute('data-try', String(tried + 1));
      img.src = alts[tried];
      return;
    }
    const span = document.createElement('span');
    span.className = 'inline-flex items-center justify-center';
    span.innerHTML = SVG_ICONS[key] || SVG_ICONS.check;
    img.replaceWith(span);
  } catch (e) {}
}

function handlePhotoFallback(img, label, bgHex) {
  try {
    const tried = Number(img.getAttribute('data-try') || '0');
    const currentSrc = img.getAttribute('src') || '';
    const alts = getAltMediaPaths(currentSrc);
    if (tried < alts.length) {
      img.setAttribute('data-try', String(tried + 1));
      img.src = alts[tried];
      return;
    }
    const safeText = (label || 'Escola Municipal 31 de Março').replace(/[<>&"]/g, '');
    const bg = bgHex || '#182E59';
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="' + bg + '"/><stop offset="100%" stop-color="#0F1E3C"/>' +
      '</linearGradient></defs>' +
      '<rect width="800" height="500" fill="url(#g)"/>' +
      '<circle cx="400" cy="205" r="44" fill="rgba(255,255,255,0.14)"/>' +
      '<text x="400" y="214" text-anchor="middle" fill="#F2D129" font-family="Inter,sans-serif" font-size="22" font-weight="800">31M</text>' +
      '<text x="400" y="285" text-anchor="middle" fill="#FFFFFF" font-family="Inter,sans-serif" font-size="22" font-weight="700">' + safeText + '</text>' +
      '<text x="400" y="315" text-anchor="middle" fill="rgba(255,255,255,0.75)" font-family="Inter,sans-serif" font-size="14">Escola Municipal 31 de Março</text>' +
      '</svg>';
    img.onerror = null;
    img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  } catch (e) {}
}

let toastTimer = null;
function showToast(message) {
  const box = document.getElementById('toast-box');
  const msg = document.getElementById('toast-message');
  if (!box || !msg) return;
  msg.textContent = message;
  box.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    box.classList.add('hidden');
  }, 4200);
}

function goToUnitsNotice(event) {
  if (event) event.preventDefault();
  const homeLink = document.querySelector('a[data-nav="inicio"]');
  if (homeLink) selectNav(homeLink);
  const noticeEl = document.getElementById('aviso-unidades');
  if (noticeEl) {
    noticeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function copyTextValue(textValue, successMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textValue).then(() => {
        showToast(successMessage);
      }).catch(() => {
        fallbackCopyText(textValue, successMessage);
      });
      return;
    }
  } catch (e) {}
  fallbackCopyText(textValue, successMessage);
}

function fallbackCopyText(textValue, successMessage) {
  const tempInput = document.createElement('textarea');
  tempInput.value = textValue;
  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast(successMessage);
  } catch (err) {
    showToast('Não foi possível copiar automaticamente. Selecione o texto.');
  }
  document.body.removeChild(tempInput);
}

function copyContactPhone(elementId, sectorName, btnEl) {
  const phoneEl = document.getElementById(elementId);
  if (!phoneEl) return;
  const phoneStr = phoneEl.textContent.trim();
  copyTextValue(phoneStr, 'Telefone da ' + sectorName + ' copiado: ' + phoneStr);
  if (btnEl) {
    const originalText = btnEl.textContent;
    btnEl.textContent = 'Copiado ✓';
    setTimeout(() => {
      btnEl.textContent = originalText;
    }, 2000);
  }
}

let currentFontPercent = 100;
function adjustFontSize(delta) {
  currentFontPercent = Math.min(130, Math.max(85, currentFontPercent + delta));
  document.documentElement.style.setProperty('--font-scale', currentFontPercent + '%');
  showToast('Tamanho da fonte ajustado para ' + currentFontPercent + '%');
}

function resetFontSize() {
  currentFontPercent = 100;
  document.documentElement.style.setProperty('--font-scale', '100%');
  showToast('Tamanho da fonte restaurado para o padrão (100%)');
}

function selectNav(clickedEl) {
  const targetKey = clickedEl.getAttribute('data-nav') || 'inicio';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-nav') === targetKey) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function toggleMobileMenu(forceState) {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  const iconOpen = document.getElementById('icon-menu-open');
  const iconClose = document.getElementById('icon-menu-close');
  if (!menu || !btn) return;

  const willOpen = typeof forceState === 'boolean' ? forceState : menu.classList.contains('hidden');
  menu.classList.toggle('hidden', !willOpen);
  btn.setAttribute('aria-expanded', String(willOpen));
  if (iconOpen) iconOpen.classList.toggle('hidden', willOpen);
  if (iconClose) iconClose.classList.toggle('hidden', !willOpen);
}

const galleryPhotos = [
  {
    img: 'Imagens/AtividadesEstudantis/aula-leitura-digitacao.jpg',
    color: '#3DADF2',
    textColor: '#167BB8',
    title: 'Leitura Interpretativa e Digitação',
    desc: 'Estudantes exercitam a <strong style="color: #167BB8;">compreensão textual e a escrita digital</strong> respondendo a atividades interativas de interpretação de fábulas no laboratório.'
  },
  {
    img: 'Imagens/AtividadesEstudantis/oficina-robotica-circuitos.jpeg',
    color: '#AA8407',
    textColor: '#8A6A05',
    title: 'Oficina de Robótica e Circuitos',
    desc: 'Alunos realizam a <strong style="color: #8A6A05;">montagem prática de circuitos eletrônicos</strong>, conectando LEDs, sensores e placas em matrizes de contato (<em>protoboards</em>).'
  },
  {
    img: 'Imagens/AtividadesEstudantis/aulas-arduino-uno.jpeg',
    color: '#BA630D',
    textColor: '#BA630D',
    title: 'Simulação e Prática com Arduino Uno',
    desc: 'Vivência tecnológica que integra <strong style="color: #BA630D;">simulação computacional e prototipagem eletrônica</strong> para desenvolver o raciocínio lógico e a resolução de problemas.'
  },
  {
    img: 'Imagens/AtividadesEstudantis/aulas-digitacao.jpeg',
    color: '#182E59',
    textColor: '#182E59',
    title: 'Alfabetização Digital e Digitação',
    desc: 'Práticas guiadas no computador para desenvolver <strong style="color: #182E59;">agilidade, postura correta e domínio do teclado</strong> desde os primeiros anos escolares.'
  },
  {
    img: 'Imagens/AtividadesEstudantis/aulas-programacao-blocos-codeorg.jpeg',
    color: '#3DADF2',
    textColor: '#167BB8',
    title: 'Programação em Blocos com Code.org',
    desc: 'Introdução à lógica de programação por meio de <strong style="color: #167BB8;">desafios visuais em blocos</strong>, estimulando a criatividade e o <strong style="color: #167BB8;">pensamento computacional</strong>.'
  },
  {
    img: 'Imagens/AtividadesEstudantis/pratica-robotica-arduino.jpeg',
    color: '#AA8407',
    textColor: '#8A6A05',
    title: 'Robótica Educacional na Prática',
    desc: 'Trabalho colaborativo no laboratório onde os estudantes testam <strong style="color: #8A6A05;">componentes eletrônicos e automação</strong> com kits de robótica.'
  },
  {
    img: 'Imagens/AtividadesEstudantis/aulas-dinamicas-kahoot.jpeg',
    color: '#BA630D',
    textColor: '#BA630D',
    title: 'Aprendizagem Gamificada com Kahoot!',
    desc: 'Revisão de conteúdos de forma interativa e participativa, fortalecendo a <strong style="color: #BA630D;">consciência fonológica, a atenção e o engajamento</strong> da turma.'
  },
  {
    img: 'Imagens/AtividadesEstudantis/aula-sobre-microscopio.jpeg',
    color: '#182E59',
    textColor: '#182E59',
    title: 'Exploração Científica no Microscópio',
    desc: 'Aulas práticas no Laboratório de Ciências para <strong style="color: #182E59;">observação microscópica e investigação</strong>, conectando a teoria dos livros à experimentação.'
  },
  {
    img: 'Imagens/AtividadesEstudantis/aulas-coordenacao-motora.jpeg',
    color: '#3DADF2',
    textColor: '#167BB8',
    title: 'Jogos Educativos e Coordenação Motora',
    desc: 'Atividades lúdicas digitais que estimulam a <strong style="color: #167BB8;">coordenação motora fina, a percepção visual e a familiarização</strong> com o uso do mouse.'
  },
  {
    img: 'Imagens/AtividadesEstudantis/programacao-setas-anos-iniciais.jpeg',
    color: '#AA8407',
    textColor: '#8A6A05',
    title: 'Lógica e Algoritmos nos Anos Iniciais',
    desc: 'Primeiros passos na programação utilizando <strong style="color: #8A6A05;">comandos direcionais por setas</strong>, desenvolvendo orientação espacial e sequência lógica de forma divertida.'
  }
];
let galleryIdx = 0;

function renderPhotoGallery() {
  const total = galleryPhotos.length;
  const prevI = (galleryIdx - 1 + total) % total;
  const nextI = (galleryIdx + 1) % total;
  const aheadI = (galleryIdx + 2) % total;

  const currItem = galleryPhotos[galleryIdx];
  const prevItem = galleryPhotos[prevI];
  const nextItem = galleryPhotos[nextI];

  preloadImage(galleryPhotos[aheadI].img);

  const leftCard = document.getElementById('gallery-left-card');
  const centerCard = document.getElementById('gallery-center-card');
  const rightCard = document.getElementById('gallery-right-card');

  const leftImg = document.getElementById('gallery-left-img');
  const centerImg = document.getElementById('gallery-center-img');
  const rightImg = document.getElementById('gallery-right-img');

  if (leftCard && leftImg) {
    leftCard.style.borderColor = prevItem.color;
    leftImg.removeAttribute('data-try');
    leftImg.onerror = function() { handlePhotoFallback(this, prevItem.title, prevItem.color); };
    leftImg.src = prevItem.img;
    leftImg.alt = prevItem.title;
  }
  if (centerCard && centerImg) {
    centerCard.style.borderColor = currItem.color;
    centerImg.removeAttribute('data-try');
    centerImg.onerror = function() { handlePhotoFallback(this, currItem.title, currItem.color); };
    centerImg.src = currItem.img;
    centerImg.alt = currItem.title;
  }
  if (rightCard && rightImg) {
    rightCard.style.borderColor = nextItem.color;
    rightImg.removeAttribute('data-try');
    rightImg.onerror = function() { handlePhotoFallback(this, nextItem.title, nextItem.color); };
    rightImg.src = nextItem.img;
    rightImg.alt = nextItem.title;
  }

  const badge = document.getElementById('gallery-counter-badge');
  if (badge) {
    badge.textContent = (galleryIdx + 1) + ' / ' + total;
    badge.style.backgroundColor = currItem.color;
  }

  const titleEl = document.getElementById('gallery-title');
  const descEl = document.getElementById('gallery-desc');
  if (titleEl) {
    titleEl.textContent = currItem.title;
    titleEl.style.color = currItem.textColor;
  }
  if (descEl) {
    descEl.innerHTML = currItem.desc;
  }

  const dotsWrap = document.getElementById('gallery-dots');
  if (dotsWrap) {
    dotsWrap.innerHTML = galleryPhotos.map((item, idx) => {
      const isActive = idx === galleryIdx;
      const styleAttr = isActive
        ? 'width: 28px; background-color: ' + item.color + ';'
        : 'width: 10px; background-color: #CBD5E1;';
      return '<button type="button" onclick="goToPhotoGallery(' + idx + ')" aria-label="Ver foto ' + (idx + 1) + ': ' + item.title + '" style="' + styleAttr + '" class="h-2.5 rounded-full transition-all duration-300"></button>';
    }).join('');
  }
}

function changePhotoGallery(delta) {
  galleryIdx = (galleryIdx + delta + galleryPhotos.length) % galleryPhotos.length;
  renderPhotoGallery();
}

function goToPhotoGallery(index) {
  galleryIdx = index;
  renderPhotoGallery();
}

const trophies = [
  {
    img: 'Imagens/Trofeús/trofeu1.png',
    title: 'I Festival Arapiraca em Movimento — Atletismo',
    desc: 'Conquista alcançada pelos estudantes no <strong>I Festival Arapiraca em Movimento</strong>, na modalidade de <strong>Atletismo</strong>, celebrando o incentivo ao esporte educacional em Arapiraca.'
  },
  {
    img: 'Imagens/Trofeús/trofeu2.png',
    title: 'Taça Destaque Estudantil e Excelência Escolar',
    desc: 'Premiação institucional que simboliza o <strong>empenho coletivo, a superação e o protagonismo</strong> dos estudantes da Escola Municipal 31 de Março em competições e eventos educacionais.'
  },
  {
    img: 'Imagens/Trofeús/trofeu3.png',
    title: 'XXIV Jogos Escolares de Arapiraca — Tênis de Mesa',
    desc: 'Premiação conquistada na modalidade de <strong>Tênis de Mesa</strong> durante os <strong>XXIV Jogos Escolares de Arapiraca</strong>, destacando o foco, a agilidade e o protagonismo estudantil.'
  },
  {
    img: 'Imagens/Trofeús/trofeu4.png',
    title: 'Troféu Mérito Esportivo e Integração Escolar',
    desc: 'Conquista que celebra o <strong>espírito esportivo, a disciplina e o trabalho em equipe</strong> da comunidade escolar, refletindo o compromisso com a formação integral dos alunos.'
  }
];
let trophyIdx = 0;

function renderTrophyCarousel() {
  const total = trophies.length;
  const prevI = (trophyIdx - 1 + total) % total;
  const nextI = (trophyIdx + 1) % total;

  const prevImg = document.getElementById('trophy-prev-img');
  const currImg = document.getElementById('trophy-curr-img');
  const nextImg = document.getElementById('trophy-next-img');

  if (prevImg) {
    prevImg.removeAttribute('data-try');
    prevImg.onerror = function() { handlePhotoFallback(this, trophies[prevI].title, '#AA8407'); };
    prevImg.src = trophies[prevI].img;
  }
  if (currImg) {
    currImg.removeAttribute('data-try');
    currImg.onerror = function() { handlePhotoFallback(this, trophies[trophyIdx].title, '#AA8407'); };
    currImg.src = trophies[trophyIdx].img;
  }
  if (nextImg) {
    nextImg.removeAttribute('data-try');
    nextImg.onerror = function() { handlePhotoFallback(this, trophies[nextI].title, '#AA8407'); };
    nextImg.src = trophies[nextI].img;
  }

  document.getElementById('trophy-counter').textContent = 'Troféu ' + (trophyIdx + 1) + ' de ' + total;
  document.getElementById('trophy-title').textContent = trophies[trophyIdx].title;
  document.getElementById('trophy-desc').innerHTML = trophies[trophyIdx].desc;

  const trophyDots = document.getElementById('trophy-dots');
  if (trophyDots) {
    trophyDots.innerHTML = trophies.map((t, idx) => {
      const active = idx === trophyIdx;
      const st = active ? 'width: 28px; background-color: #AA8407;' : 'width: 10px; background-color: #CBD5E1;';
      return '<button type="button" onclick="trophyIdx=' + idx + '; renderTrophyCarousel()" aria-label="Ver troféu ' + (idx + 1) + '" style="' + st + '" class="h-2.5 rounded-full transition-all duration-300"></button>';
    }).join('');
  }
}

function changeTrophy(delta) {
  trophyIdx = (trophyIdx + delta + trophies.length) % trophies.length;
  renderTrophyCarousel();
}

function openTrophyModal() {
  renderTrophyCarousel();
  document.getElementById('trophy-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTrophyModal() {
  document.getElementById('trophy-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function returnToHomeFromTrophy() {
  closeTrophyModal();
  const premiacoesEl = document.getElementById('premiacoes');
  if (premiacoesEl) {
    premiacoesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const modalitiesData = {
  infantil: {
    color: '#3DADF2',
    titleColor: '#167BB8',
    iconFilter: 'brightness(0) saturate(100%) invert(61%) sepia(63%) saturate(2340%) hue-rotate(166deg) brightness(98%) contrast(92%)',
    btnTextColor: '#FFFFFF',
    softBg: '#EEF6FC',
    img: 'Imagens/ImagensCapas/EDINFANTIL/edinfantildetalhamento.jpg',
    bannerTitle: 'Acolhimento, Brincar e Descobrir',
    badge: 'EDUCAÇÃO INFANTIL 1 E 2 (4 E 5 ANOS • UNIDADE ANEXO)',
    title: 'O Início da Jornada Escolar com Afeto e Intencionalidade',
    desc: 'Na Educação Infantil 1 e 2, atendemos crianças de <strong>4 e 5 anos</strong> nos turnos <strong>Matutino e Vespertino</strong> em nosso Anexo exclusivo (R. Bela Vista, 451). Alinhados à BNCC, integramos o <strong>educar e cuidar</strong> por meio de <strong>interações e brincadeiras</strong> que respeitam o tempo da infância.',
    heading: 'Campos de Experiência e Pilares:',
    pillars: [
      { icon: 'Imagens/Icones/infantil-educar-cuidar.png', fallback: 'heart', title: 'Educar e Cuidar', text: 'Acolhimento afetivo e parceria constante entre família e escola para fortalecer a autonomia.' },
      { icon: 'Imagens/Icones/infantil-brincadeiras.png', fallback: 'toys', title: 'Interações e Brincadeiras', text: 'Ambientes lúdicos que estimulam a socialização, imaginação e resolução de conflitos.' },
      { icon: 'Imagens/Icones/infantil-contacao-historias.png', fallback: 'book', title: 'Escuta, Fala e Imaginação', text: 'Contação de histórias, rodas de conversa e contato prazeroso com livros e narrativas.' },
      { icon: 'Imagens/Icones/infantil-formas-blocos.png', fallback: 'shapes', title: 'Espaços, Tempos e Natureza', text: 'Exploração de formas, quantidades, medidas e curiosidade pelo meio ambiente.' }
    ]
  },
  fund1: {
    color: '#A67208',
    titleColor: '#A67208',
    iconFilter: 'brightness(0) saturate(100%) invert(47%) sepia(88%) saturate(1350%) hue-rotate(24deg) brightness(91%) contrast(96%)',
    btnTextColor: '#FFFFFF',
    softBg: '#FDF8EE',
    img: 'Imagens/ImagensCapas/EDFUND1/edfund1detalhamento.jpg',
    bannerTitle: 'Aulas Lúdicas e Dinâmicas',
    badge: 'FUNDAMENTAL I (1º AO 5º ANO • TURNO: VESPERTINO)',
    title: 'A Base do Raciocínio e Letramento',
    desc: 'No Ensino Fundamental I, a criança vivencia uma transição vital. Nossa metodologia articula as experiências da Educação Infantil utilizando o lúdico para garantir a <strong>alfabetização plena</strong> nos primeiros anos, o domínio dos números e os primeiros passos na <strong>BNCC da Computação</strong>.',
    heading: 'Nossos Pilares de Ensino:',
    pillars: [
      { icon: 'Imagens/Icones/estrutura-biblioteca.png', fallback: 'book', title: 'Alfabetização e Letramento', text: 'Projetos contínuos de leitura na biblioteca para formar leitores críticos desde os primeiros anos.' },
      { icon: 'Imagens/Icones/raciocinio-logico.png', fallback: 'calc', title: 'Raciocínio Lógico', text: 'Matemática aplicada ao dia a dia com material dourado, jogos educativos e desafios.' },
      { icon: 'Imagens/Icones/informatica-computador.png', fallback: 'pc', title: 'Iniciação Tecnológica', text: 'Primeiros passos na BNCC da Computação, algoritmos desplugados e robótica educativa.' },
      { icon: 'Imagens/Icones/socioemocional.png', fallback: 'heart', title: 'Socioemocional', text: 'Rodas de conversa diárias para desenvolver empatia, respeito aos colegas e equilíbrio emocional.' }
    ]
  },
  fund2: {
    color: '#1F438C',
    titleColor: '#1F438C',
    iconFilter: 'brightness(0) saturate(100%) invert(18%) sepia(68%) saturate(2250%) hue-rotate(211deg) brightness(89%) contrast(96%)',
    btnTextColor: '#FFFFFF',
    softBg: '#EEF2FA',
    img: 'Imagens/ImagensCapas/EDFUND2/edfund2detalhamento.jpg',
    bannerTitle: 'Laboratório, Pesquisa e Esporte',
    badge: 'FUNDAMENTAL II (6º AO 9º ANO • TURNO: MATUTINO)',
    title: 'Protagonismo, Ciência e Autonomia',
    desc: 'Nesta fase, preparamos o adolescente para os desafios do Ensino Médio, Institutos Federais (IF) e cidadania ativa através de <strong>projetos práticos</strong>, <strong>robótica avançada</strong>, <strong>práticas esportivas</strong> e <strong>integração multidisciplinar</strong>.',
    heading: 'Diferenciais da Nossa Matriz:',
    pillars: [
      { icon: 'Imagens/Icones/estrutura-ciencias.png', fallback: 'science', title: 'Prática Científica', text: 'Aulas frequentes no laboratório de ciências, estimulando a investigação e feiras anuais.' },
      { icon: 'Imagens/Icones/estrutura-robotica.png', fallback: 'robot', title: 'Robótica e Programação', text: 'Criação de algoritmos, autômatos e montagem de projetos com nossos 12 kits de robótica.' },
      { icon: 'Imagens/Icones/ensino-eja-jovens-adultos.png', fallback: 'group', title: 'Protagonismo & Esporte', text: 'Liderança juvenil, torneios de futebol/futsal e práticas corporais para saúde integral.' },
      { icon: 'Imagens/Icones/premiacoes-trofeu-medalha.png', fallback: 'trophy', keepOriginalColor: true, title: 'Olimpíadas e Preparação IF', text: 'Incentivo dedicado para competições como OBMEP, OBA e ingresso no Instituto Federal.' }
    ]
  },
  eja: {
    color: '#185004',
    titleColor: '#185004',
    iconFilter: 'brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(2400%) hue-rotate(66deg) brightness(88%) contrast(98%)',
    btnTextColor: '#FFFFFF',
    softBg: '#EFF7EC',
    img: 'Imagens/ImagensCapas/EDEJA/edejadetalhamento.jpg',
    bannerTitle: 'Adultos Estudando à Noite',
    badge: 'EDUCAÇÃO DE JOVENS E ADULTOS (EJA • NOTURNO)',
    title: 'Respeito à Vivência e Inclusão no Mercado',
    desc: 'Alinhada ao <strong>Pacto Nacional pela Superação do Analfabetismo e Qualificação da EJA</strong>, nossa proposta valoriza a bagagem de vida do trabalhador, oferecendo ensino <strong>contextualizado, acolhedor e prático</strong> no período noturno.',
    heading: 'Como Funciona Nossa EJA:',
    pillars: [
      { icon: 'Imagens/Icones/eja-empregabilidade.png', fallback: 'briefcase', title: 'Foco na Empregabilidade', text: 'Matemática aplicada às finanças pessoais, redação prática e preparação para o mercado.' },
      { icon: 'Imagens/Icones/eja-acolhimento.png', fallback: 'handshake', title: 'Acolhimento e Flexibilidade', text: 'Docentes preparados para compreender a rotina do trabalhador em um ambiente incentivador.' },
      { icon: 'Imagens/Icones/informatica-computador.png', fallback: 'pc', title: 'Letramento Digital', text: 'Aulas práticas de informática básica, uso seguro da internet e ferramentas digitais.' },
      { icon: 'Imagens/Icones/eja-otimizacao-tempo.png', fallback: 'clock', title: 'Otimização do Tempo', text: 'Currículo objetivo e significativo: o que o aluno aprende hoje aplica imediatamente em sua vida.' }
    ]
  }
};

function openModalityModal(key) {
  const data = modalitiesData[key];
  if (!data) return;

  const modalImg = document.getElementById('mod-modal-img');
  modalImg.removeAttribute('data-try');
  modalImg.style.opacity = '0.25';
  modalImg.onload = function() {
    this.style.opacity = '1';
  };
  modalImg.onerror = function() {
    this.style.opacity = '1';
    handlePhotoFallback(this, data.bannerTitle, data.color);
  };
  modalImg.src = data.img;
  if (modalImg.complete && modalImg.naturalWidth > 0) {
    modalImg.style.opacity = '1';
  }
  document.getElementById('mod-modal-banner-title').textContent = data.bannerTitle;

  const badge = document.getElementById('mod-modal-badge');
  badge.textContent = data.badge;
  badge.style.backgroundColor = data.softBg;
  badge.style.color = data.color === '#3DADF2' ? '#182E59' : data.color;

  document.getElementById('mod-modal-title').textContent = data.title;
  document.getElementById('mod-modal-desc').innerHTML = data.desc;
  document.getElementById('mod-modal-pillars-heading').textContent = data.heading;

  const pillarsContainer = document.getElementById('mod-modal-pillars');
  pillarsContainer.innerHTML = data.pillars.map(p => {
    const iconStyle = p.keepOriginalColor ? '' : 'style="filter: ' + data.iconFilter + ';"';
    const titleColor = p.keepOriginalColor ? '#182E59' : data.titleColor;
    const borderColor = p.keepOriginalColor ? 'rgba(24, 46, 89, 0.25)' : data.color + '55';

    return (
      '<div style="background-color: ' + data.softBg + '; border-color: ' + borderColor + ';" class="p-4 r-25 border-2">' +
        '<div class="flex items-center gap-3 mb-2">' +
          '<div class="w-10 h-10 p-1.5 r-25 bg-white shadow-xs flex items-center justify-center shrink-0">' +
            '<img src="' + p.icon + '" alt="" decoding="async" ' + iconStyle + ' class="w-6 h-6 object-contain block" onerror="handleIconFallback(this, \'' + p.fallback + '\')" />' +
          '</div>' +
          '<h5 style="color: ' + titleColor + ';" class="font-extrabold text-sm sm:text-base leading-snug">' + p.title + '</h5>' +
        '</div>' +
        '<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">' + p.text + '</p>' +
      '</div>'
    );
  }).join('');

  const closeBtn = document.getElementById('mod-modal-close-btn');
  closeBtn.style.backgroundColor = data.color;
  closeBtn.style.color = data.btnTextColor;

  const modal = document.getElementById('modality-modal');
  modal.classList.remove('hidden');
  const modalContent = modal.querySelector('.overflow-y-auto');
  if (modalContent) modalContent.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeModalityModal() {
  document.getElementById('modality-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function switchBnccTab(tabId, btnEl) {
  document.querySelectorAll('.bncc-tab').forEach(b => {
    b.classList.remove('bg-escola-navy', 'text-white');
    b.classList.add('bg-escola-ice', 'text-slate-700');
  });
  btnEl.classList.remove('bg-escola-ice', 'text-slate-700');
  btnEl.classList.add('bg-escola-navy', 'text-white');

  document.querySelectorAll('.bncc-panel').forEach(panel => {
    panel.classList.add('hidden');
  });
  const target = document.getElementById('bncc-' + tabId);
  if (target) target.classList.remove('hidden');
}

let activeStructIdx = 1;
let structAutoTimer = null;

function updateStructureFocus(scrollMobile) {
  const container = document.getElementById('structure-carousel');
  const cards = document.querySelectorAll('.structure-card');
  cards.forEach((card, idx) => {
    if (idx === activeStructIdx) {
      card.classList.remove('lg:blur-[1px]', 'lg:opacity-80', 'lg:scale-95');
      card.classList.add('lg:scale-[1.03]', 'ring-4', 'ring-escola-royal/25', 'z-10');
      if (scrollMobile && container && window.innerWidth < 1024) {
        const leftPos = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
        container.scrollTo({ left: Math.max(0, leftPos), behavior: 'smooth' });
      }
    } else {
      card.classList.remove('lg:scale-[1.03]', 'ring-4', 'ring-escola-royal/25', 'z-10');
      card.classList.add('lg:blur-[1px]', 'lg:opacity-80', 'lg:scale-95');
    }
  });
}

function startStructureAutoPlay() {
  clearInterval(structAutoTimer);
  structAutoTimer = setInterval(() => {
    activeStructIdx = (activeStructIdx + 1) % 3;
    updateStructureFocus(false);
  }, 4500);
}

function manualStructureNav(delta) {
  clearInterval(structAutoTimer);
  activeStructIdx = (activeStructIdx + delta + 3) % 3;
  updateStructureFocus(true);
}

function focusStructureCard(idx) {
  clearInterval(structAutoTimer);
  activeStructIdx = idx;
  updateStructureFocus(true);
}

const extraSlides = [
  {
    img: 'Imagens/AtividadesExtraCurriculares/kits-robotica-componentes.jpeg',
    tag: 'Kits de Robótica e Componentes Eletrônicos',
    label: 'Placas Arduino, protoboards, sensores ultrassônicos, servomotores, displays e resistores nas oficinas práticas.'
  },
  {
    img: 'Imagens/AtividadesExtraCurriculares/oficina-logica-programacao.jpg',
    tag: 'Lógica de Programação e Pensamento Computacional',
    label: 'Desenvolvimento do raciocínio lógico por meio de desafios visuais de programação e padrões em grade no laboratório.'
  },
  {
    img: 'Imagens/AtividadesExtraCurriculares/simulacao-circuitos-wokwi.jpeg',
    tag: 'Simulação Digital de Circuitos no Wokwi',
    label: 'Estudantes projetam e testam circuitos eletrônicos com Arduino Uno e LEDs em ambiente virtual antes da montagem física.'
  },
  {
    img: 'Imagens/AtividadesExtraCurriculares/oficina-colaborativa-simulacao-arduino.jpeg',
    tag: 'Prática Colaborativa de Eletrônica e Arduino',
    label: 'Trabalho em equipe no laboratório de informática, unindo criatividade e experimentação digital com microcontroladores.'
  },
  {
    img: 'Imagens/AtividadesExtraCurriculares/programacao-arduino-ide-leds.jpeg',
    tag: 'Codificação na Arduino IDE e Automação com LEDs',
    label: 'Programação em linguagem C++ na Arduino IDE integrada à bancada física para controle sequencial de LEDs.'
  },
  {
    img: 'Imagens/AtividadesExtraCurriculares/montagem-circuitos-prototipo-robo.jpg',
    tag: 'Montagem Física de Circuitos e Protótipo Robótico',
    label: 'Mão na massa em equipe: montagem de circuitos em protoboards com sensores e integração com protótipo de robô móvel.'
  }
];
let extraIdx = 0;

function startExtraAutoCarousel() {
  const imgEl = document.getElementById('extra-carousel-img');
  const tagEl = document.getElementById('extra-carousel-tag');
  const labelEl = document.getElementById('extra-carousel-label');
  if (!imgEl) return;

  if (extraSlides.length > 1) {
    preloadImage(extraSlides[1].img);
  }

  setInterval(() => {
    extraIdx = (extraIdx + 1) % extraSlides.length;
    const nextPreloadIdx = (extraIdx + 1) % extraSlides.length;
    const item = extraSlides[extraIdx];
    preloadImage(extraSlides[nextPreloadIdx].img);
    imgEl.style.opacity = '0.25';
    setTimeout(() => {
      imgEl.removeAttribute('data-try');
      imgEl.onerror = function() { handlePhotoFallback(this, item.tag, '#182E59'); };
      imgEl.src = item.img;
      if (tagEl) tagEl.textContent = item.tag;
      if (labelEl) labelEl.textContent = item.label;
      imgEl.style.opacity = '1';
    }, 300);
  }, 3800);
}

const unitsData = {
  sede: {
    badge: 'Fund. 1, 2 e EJA',
    badgeBg: '#1F438C',
    name: 'Escola Municipal 31 de Março (Sede Principal)',
    streetLabel: 'Rua:',
    street: 'Brasília, nº 455',
    district: 'Brasília — Arapiraca - AL',
    cep: '57313-130',
    extraIcon: 'Imagens/Icones/endereco-referencia.png',
    extraFallback: 'ref',
    extraLabel: 'Ponto de referência:',
    ref: 'Musubi cozinha oriental',
    showAccess: true,
    access: 'Entrada acessível para cadeirantes',
    copyAddress: 'Rua Brasília, 455 - Brasília, Arapiraca - AL, 57313-130',
    cardTitle: 'Sede Principal • Arapiraca - AL',
    cardTagColor: '#1F438C',
    cardBg: '#EEF6FC',
    cardBorder: 'rgba(31, 67, 140, 0.25)',
    iconBoxBg: '#182E59',
    btnBg: '#1F438C',
    mapLink: 'https://maps.app.goo.gl/93f4f5LR5EqnaCz46'
  },
  anexo: {
    badge: 'Ed. Infantil 1 e 2',
    badgeBg: '#AA8407',
    name: 'Anexo Escola Municipal 31 de Março (Antigo João Paulo II)',
    streetLabel: 'Endereço:',
    street: 'R. Bela Vista, 451',
    district: 'Brasília, Arapiraca – AL',
    cep: '57313-180',
    extraIcon: 'Imagens/Icones/ensino-educacao-infantil.png',
    extraFallback: 'kids',
    extraLabel: 'Modalidades atendidas:',
    ref: 'Educação Infantil 1 e 2 (4 e 5 anos)',
    showAccess: true,
    access: 'Entrada acessível para cadeirantes',
    copyAddress: 'Rua Bela Vista, 451 - Brasília, Arapiraca - AL, 57313-180',
    cardTitle: 'Anexo Ed. Infantil • Antigo João Paulo II',
    cardTagColor: '#AA8407',
    cardBg: '#FDF9EC',
    cardBorder: 'rgba(170, 132, 7, 0.45)',
    iconBoxBg: '#AA8407',
    btnBg: '#AA8407',
    mapLink: 'https://maps.app.goo.gl/wEMswdiZuTFbxRam6'
  }
};
let currentUnitKey = 'sede';

function switchUnit(unitKey) {
  currentUnitKey = unitKey;
  const u = unitsData[unitKey];

  const btnSede = document.getElementById('btn-unit-sede');
  const btnAnexo = document.getElementById('btn-unit-anexo');

  if (unitKey === 'sede') {
    btnSede.style.backgroundColor = '#182E59';
    btnSede.className = 'flex-1 md:flex-initial text-white text-xs sm:text-sm font-bold px-5 py-3 r-25 shadow-sm transition';
    btnAnexo.style.backgroundColor = '';
    btnAnexo.className = 'flex-1 md:flex-initial bg-escola-ice text-escola-navy hover:bg-[#AA8407]/15 text-xs sm:text-sm font-bold px-5 py-3 r-25 transition';
  } else {
    btnAnexo.style.backgroundColor = '#AA8407';
    btnAnexo.className = 'flex-1 md:flex-initial text-white text-xs sm:text-sm font-bold px-5 py-3 r-25 shadow-md transition';
    btnSede.style.backgroundColor = '';
    btnSede.className = 'flex-1 md:flex-initial bg-escola-ice text-escola-navy hover:bg-escola-royal/15 text-xs sm:text-sm font-bold px-5 py-3 r-25 transition';
  }

  const badge = document.getElementById('unit-badge');
  badge.textContent = u.badge;
  badge.style.backgroundColor = u.badgeBg;

  document.getElementById('addr-name').textContent = u.name;
  document.getElementById('addr-street-label').textContent = u.streetLabel;
  document.getElementById('addr-street').textContent = u.street;
  document.getElementById('addr-district').textContent = u.district;
  document.getElementById('addr-cep').textContent = u.cep;

  const extraRow = document.getElementById('addr-extra-row');
  if (extraRow) {
    const currentMedia = extraRow.firstElementChild;
    const newImg = document.createElement('img');
    newImg.id = 'addr-extra-icon';
    newImg.src = u.extraIcon;
    newImg.alt = u.extraLabel;
    newImg.decoding = 'async';
    newImg.className = 'w-7 h-7 object-contain shrink-0 mt-0.5';
    newImg.onerror = function() { handleIconFallback(this, u.extraFallback); };
    if (currentMedia) {
      currentMedia.replaceWith(newImg);
    }
  }

  document.getElementById('addr-extra-label').textContent = u.extraLabel;
  document.getElementById('addr-ref').textContent = u.ref;

  const accessRow = document.getElementById('addr-access-row');
  if (u.showAccess) {
    accessRow.classList.remove('hidden');
    document.getElementById('addr-access').textContent = u.access;
  } else {
    accessRow.classList.add('hidden');
  }

  const sideCard = document.getElementById('map-side-card');
  const sideIconBox = document.getElementById('map-side-icon-box');
  const cardTag = document.getElementById('map-card-tag');
  const mapsBtn = document.getElementById('btn-open-maps');

  sideCard.style.backgroundColor = u.cardBg;
  sideCard.style.borderColor = u.cardBorder;
  sideIconBox.style.backgroundColor = u.iconBoxBg;
  cardTag.style.color = u.cardTagColor;
  mapsBtn.style.backgroundColor = u.btnBg;

  document.getElementById('map-card-title').textContent = u.cardTitle;
  mapsBtn.href = u.mapLink;
}

function copyCurrentAddress() {
  const u = unitsData[currentUnitKey];
  copyTextValue(u.copyAddress, 'Endereço padrão Uber/Google copiado: ' + u.copyAddress);
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('button').setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

function scheduleBackgroundPreload() {
  try {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && conn.saveData) return;

    const urls = [];
    Object.values(modalitiesData).forEach(mod => {
      if (mod.img) urls.push(mod.img);
      if (Array.isArray(mod.pillars)) {
        mod.pillars.forEach(p => {
          if (p.icon) urls.push(p.icon);
        });
      }
    });
    trophies.forEach(t => { if (t.img) urls.push(t.img); });
    extraSlides.forEach(s => { if (s.img) urls.push(s.img); });
    galleryPhotos.forEach(g => { if (g.img) urls.push(g.img); });

    const start = () => preloadQueue(urls, 0);
    if ('requestIdleCallback' in window) {
      requestIdleCallback(start, { timeout: 2500 });
    } else {
      setTimeout(start, 1200);
    }
  } catch (e) {}
}

window.addEventListener('DOMContentLoaded', () => {
  try {
    renderPhotoGallery();

    const galleryCenter = document.getElementById('gallery-center-card');
    if (galleryCenter) {
      let touchStartX = 0;
      galleryCenter.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      galleryCenter.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 40) {
          changePhotoGallery(diff < 0 ? 1 : -1);
        }
      }, { passive: true });
    }

    const trophyModal = document.getElementById('trophy-modal');
    if (trophyModal) {
      let trophyStartX = 0;
      trophyModal.addEventListener('touchstart', (e) => {
        trophyStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      trophyModal.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].screenX - trophyStartX;
        if (Math.abs(diff) > 45) {
          changeTrophy(diff < 0 ? 1 : -1);
        }
      }, { passive: true });
    }

    const sections = document.querySelectorAll('section[data-section]');
    if ('IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sec = entry.target.getAttribute('data-section');
            document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.toggle('active', link.getAttribute('data-nav') === sec);
            });
          }
        });
      }, { rootMargin: '-35% 0px -55% 0px' });
      sections.forEach(sec => sectionObserver.observe(sec));
    }

    updateStructureFocus(false);
    startStructureAutoPlay();
    startExtraAutoCarousel();
  } catch (err) {}
});

window.addEventListener('load', scheduleBackgroundPreload);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTrophyModal();
    closeModalityModal();
  }
});
