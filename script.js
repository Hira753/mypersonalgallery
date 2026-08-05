/**
 * Zaibiiii's Surprise Gift Website
 * Built with love by Heer 💖
 */

// Global navigation handler immediately available
window.navigateTo = function(url) {
  if (!url) return;
  if (document.body) {
    document.body.classList.add('page-fade-out');
  }
  setTimeout(() => {
    window.location.href = url;
  }, 150);
};

// Global start/unlock handler for unlock.html page
function handleStart(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }

  const lockIconContainer = document.getElementById('lock-icon-container');
  const lockIcon = document.getElementById('lock-icon');
  const checkIcon = document.getElementById('check-icon');
  const headingElem = document.getElementById('unlock-heading');
  const subtitleElem = document.getElementById('unlock-subtitle');
  const startBtn = document.getElementById('start-btn') || document.getElementById('unlock-submit-btn');

  if (startBtn) startBtn.disabled = true;

  if (lockIconContainer) lockIconContainer.classList.add('unlock-success');
  if (lockIcon) lockIcon.classList.add('hidden');
  if (checkIcon) checkIcon.classList.remove('hidden');

  if (headingElem) headingElem.textContent = 'Welcome, Zaibiiii 🤍';
  if (subtitleElem) subtitleElem.textContent = 'Opening your surprise...';

  setTimeout(() => {
    window.location.href = "gallery.html";
  }, 300);

  return false;
}

window.handleStart = handleStart;
window.handleUnlock = handleStart;
window.doUnlockMemory = handleStart;

// Initialize common features when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initSparkles();
  initPageTransitions();

  // Bind explicit navigation listeners as fail-safe
  document.getElementById('unlock-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.navigateTo('unlock.html');
  });

  document.getElementById('our-memories-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.navigateTo('memories.html');
  });

  document.getElementById('final-surprise-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.navigateTo('final.html');
  });

  document.getElementById('back-gallery-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.navigateTo('gallery.html');
  });

  // Page specific initializers
  if (document.getElementById('unlock-form')) {
    initUnlockPage();
  }
  if (document.getElementById('gallery-grid') || document.getElementById('memories-grid')) {
    initGalleryPage();
  }
  if (document.getElementById('typewriter-container')) {
    initFinalPage();
  }
});

/* ==================================================
 * 1. FLOATING PETALS & SPARKLES ANIMATION
 * ================================================== */
function initPetals() {
  const container = document.createElement('div');
  container.className = 'petal-container';
  document.body.appendChild(container);

  const petalCount = window.innerWidth < 640 ? 16 : 28;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';

    const size = Math.random() * 14 + 10; // 10px - 24px
    const left = Math.random() * 100; // 0% - 100%
    const delay = Math.random() * 8;
    const duration = Math.random() * 7 + 8; // 8s - 15s

    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.left = `${left}%`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.animationDuration = `${duration}s`;

    container.appendChild(petal);
  }
}

function initSparkles() {
  const container = document.createElement('div');
  container.className = 'sparkle-container';
  document.body.appendChild(container);

  const sparkleCount = window.innerWidth < 640 ? 20 : 40;

  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 4;

    sparkle.style.top = `${top}%`;
    sparkle.style.left = `${left}%`;
    sparkle.style.animationDelay = `${delay}s`;

    container.appendChild(sparkle);
  }
}

/* ==================================================
 * 2. PAGE TRANSITIONS
 * ================================================== */
function initPageTransitions() {
  document.body.classList.add('page-fade-in');
}

/* ==================================================
 * 3. PAGE 2: START / UNLOCK PAGE LOGIC
 * ================================================== */
function initUnlockPage() {
  const startBtn = document.getElementById('start-btn') || document.getElementById('unlock-submit-btn');

  if (startBtn) {
    startBtn.onclick = (e) => handleStart(e);
    startBtn.addEventListener('click', (e) => handleStart(e));
  }
}

/* ==================================================
 * 4. PAGE 3: GALLERY & POPUP & LIGHTBOX
 * ================================================== */
// 30 High Quality Romantic Memories (Images & Videos)
const galleryImages = [
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785769359/Screenshot_2026-08-03_200055_oioh9w.png', isVideo: false, title: 'Precious Moments', desc: 'A beautiful memory with Zaibiii. 🤍' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785769667/why_zaibii-2026-05-28T23-19-42_xjqyfs.jpg', isVideo: false, title: 'Why Zaibii', desc: 'Countless reasons why you mean everything to me. 💖' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785769415/Screenshot_2026-08-03_200156_bddugf.png', isVideo: false, title: 'Sweet Conversations', desc: 'Moments filled with love and warmth. 🌸' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785769941/zohaibsultan145_7565282984262208775_ntoy40.mp4', isVideo: true, title: 'Special Video Memory', desc: 'A cherished video clip of us. ✨' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785769736/zohaibsultan145_7644957607739854100_gs0efl.mp4', isVideo: true, title: 'Unforgettable Days', desc: 'Laughter and happiness together. 🎥' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785770541/Screenshot_2026-08-03_202015_htazvo.png', isVideo: false, title: 'Cute Snaps', desc: 'Every snapshot holds a sweet story. 📸' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785770613/ChatGPT_Image_Aug_3_2026_08_21_50_PM_odamjy.png', isVideo: false, title: 'Dreamy Vibe', desc: 'Together is my favorite place to be. ☁️' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785771210/ChatGPT_Image_Aug_3_2026_08_31_46_PM_mhhs0c.png', isVideo: false, title: 'Magical Times', desc: 'Shining brighter every day. 🌟' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785770335/758350395_17954020074197793_7502221706327146486_n_code8f.jpg', isVideo: false, title: 'Heartbeat', desc: 'You make my heart smile. 💋' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785771410/zohaibsultan145_7654991371161308437_lqlrmh.mp4', isVideo: true, title: 'Fun Reel', desc: 'Making unforgettable memories. 🎬' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785780588/WhatsApp_Video_2026-08-03_at_10.10.22_PM_ux53tr.mp4', isVideo: true, title: 'Sweet Moments', desc: 'Always bringing a smile to my face. 🫶' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785780564/WhatsApp_Video_2026-08-03_at_10.10.21_PM_c5ijxg.mp4', isVideo: true, title: 'Pure Joy', desc: 'Happiness is being with you. 💖' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785876656/WhatsApp_Video_2026-08-05_at_1.50.15_AM_m2yoiw.mp4', isVideo: true, title: 'Midnight Love', desc: 'Late night talks and sweet laughs. 🌙' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785876570/WhatsApp_Video_2026-08-05_at_1.39.34_AM_jihrx1.mp4', isVideo: true, title: 'Cherished Times', desc: 'Holding these moments close to my heart. 🤍' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785782576/1785782531190_instaPV_m0wzhm.mp4', isVideo: true, title: 'Insta Special', desc: 'One of my absolute favorites! 📱✨' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785782647/1785782612887_instaPV_ufkb64.mp4', isVideo: true, title: 'Golden Memory', desc: 'Radiant and full of warmth. ☀️' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785876556/WhatsApp_Video_2026-08-05_at_1.39.33_AM_kg5xab.mp4', isVideo: true, title: 'Soft Smiles', desc: 'Your smile is my paradise. 🌸' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785782567/1785782514728_instaPV_tsaisx.mp4', isVideo: true, title: 'Cutest Video', desc: 'Looking so handsome as always! 💋' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785780527/WhatsApp_Image_2026-08-03_at_10.10.16_PM_mlh5la.jpg', isVideo: false, title: 'Lovely Photo', desc: 'A picture worth a thousand feelings. 📸' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785876547/WhatsApp_Video_2026-08-05_at_1.39.32_AM_jjtfw6.mp4', isVideo: true, title: 'Sweet Glance', desc: 'My heart skips a beat. 💗' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785781932/Screenshot_2026-08-03_233031_jncmbt.png', isVideo: false, title: 'Chat Memories', desc: 'Messages that make me blush. 💌' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785780506/WhatsApp_Video_2026-08-03_at_10.10.16_PM_opkgsy.mp4', isVideo: true, title: 'Best Time', desc: 'Every second with you is a gift. 🎁' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785876511/WhatsApp_Video_2026-08-05_at_1.39.30_AM_kmj6uy.mp4', isVideo: true, title: 'Endless Smile', desc: 'Always making my life brighter. ✨' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785784023/Screenshot_2026-08-04_000500_rqskse.png', isVideo: false, title: 'Late Night Thought', desc: 'Thinking of you always. 💭' },
  { url: 'https://res.cloudinary.com/irbsm5bs/image/upload/v1785781754/Screenshot_2026-08-03_232723_hwgldq.png', isVideo: false, title: 'Heartfelt Screenshot', desc: 'Saved forever in my heart. 📱' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785781639/zohaibsultan145_7614728716324801812_lca7de.mp4', isVideo: true, title: 'Wonderful Reel', desc: 'Loving every single second. 🎬' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785780603/WhatsApp_Video_2026-08-03_at_10.19.15_PM_1_v3ldw1.mp4', isVideo: true, title: 'Special Surprise', desc: 'You deserve all the love. 💝' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785772057/zohaibsultan145_7465042574294699271_w7rwfq.mp4', isVideo: true, title: 'Adorable Video', desc: 'My favorite person forever. 🫶' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785772048/zohaibsultan145_7557821075552324882_yys4w8.mp4', isVideo: true, title: 'Magic Moments', desc: 'Creating our own fairytale. 🏰' },
  { url: 'https://res.cloudinary.com/irbsm5bs/video/upload/v1785771783/zohaibsultan145_7560336660379045138_ezbrje.mp4', isVideo: true, title: 'Forever Yours', desc: 'Forever and always, Hubby! 💋' }
];

let currentImageIndex = 0;

function getActiveMediaList() {
  const grid = document.getElementById('gallery-grid') || document.getElementById('memories-grid');
  if (!grid) return galleryImages;

  const cards = grid.querySelectorAll('.gallery-card');
  if (cards.length === 0) return galleryImages;

  const isMemories = !!document.getElementById('memories-grid');
  const list = [];
  cards.forEach((card, idx) => {
    const img = card.querySelector('img');
    const video = card.querySelector('video');
    if (img) {
      list.push({
        url: img.src,
        isVideo: false,
        title: isMemories ? `Chat Memory #${idx + 1}` : (galleryImages[idx]?.title || `Memory #${idx + 1}`),
        desc: isMemories ? `Special chat screenshot saved forever. 💬🤍` : (galleryImages[idx]?.desc || `A beautiful memory with Zaibiii. 🌸`)
      });
    } else if (video) {
      list.push({
        url: video.src,
        isVideo: true,
        title: galleryImages[idx]?.title || `Video Memory #${idx + 1}`,
        desc: galleryImages[idx]?.desc || `Unforgettable video memory. ✨`
      });
    }
  });

  return list.length > 0 ? list : galleryImages;
}

function initGalleryPage() {
  const grid = document.getElementById('gallery-grid') || document.getElementById('memories-grid');
  if (!grid) return;

  // Bind index attribute & cursor pointer to all cards
  const cards = grid.querySelectorAll('.gallery-card');
  cards.forEach((card, index) => {
    card.setAttribute('data-index', index);
    card.style.cursor = 'pointer';
  });

  // Delegated click handler on grid
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.gallery-card');
    if (card) {
      const idx = parseInt(card.getAttribute('data-index') || '0', 10);
      openLightbox(idx);
    }
  });

  // Ensure video elements play on mobile grid
  const videos = grid.querySelectorAll('video');
  videos.forEach((video) => {
    video.muted = true;
    video.play().catch(() => {});
  });

  // Setup Lightbox
  initLightbox();
}

/* --- LIGHTBOX MODAL --- */
let isLightboxInitialized = false;

function initLightbox() {
  if (isLightboxInitialized) return;
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const imgElem = document.getElementById('lightbox-img');

  if (!backdrop) return;
  isLightboxInitialized = true;

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
  });
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrevImage();
  });
  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextImage();
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Tap or Click image to toggle zoom
  if (imgElem) {
    imgElem.addEventListener('click', (e) => {
      e.stopPropagation();
      imgElem.classList.toggle('zoomed');
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  backdrop.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  backdrop.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      showNextImage();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      showPrevImage();
    }
  }
}

function openLightbox(index) {
  initLightbox();
  const mediaList = getActiveMediaList();
  if (typeof index !== 'number' || index < 0 || index >= mediaList.length) {
    index = 0;
  }

  currentImageIndex = index;
  updateLightboxContent();

  const backdrop = document.getElementById('lightbox-backdrop');
  if (backdrop) {
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const backdrop = document.getElementById('lightbox-backdrop');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';

  const imgElem = document.getElementById('lightbox-img');
  if (imgElem) {
    imgElem.classList.remove('zoomed');
    imgElem.removeAttribute('data-active-url');
  }

  const videoElem = document.getElementById('lightbox-video');
  if (videoElem) {
    videoElem.pause();
    videoElem.removeAttribute('data-active-url');
    videoElem.src = '';
  }
}

function showPrevImage() {
  const mediaList = getActiveMediaList();
  currentImageIndex = (currentImageIndex - 1 + mediaList.length) % mediaList.length;
  updateLightboxContent();
}

function showNextImage() {
  const mediaList = getActiveMediaList();
  currentImageIndex = (currentImageIndex + 1) % mediaList.length;
  updateLightboxContent();
}

// Ensure all lightbox functions are attached to window
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.showPrevImage = showPrevImage;
window.showNextImage = showNextImage;

function updateLightboxContent() {
  const imgElem = document.getElementById('lightbox-img');
  const videoElem = document.getElementById('lightbox-video');
  const titleElem = document.getElementById('lightbox-title');
  const descElem = document.getElementById('lightbox-desc');
  const counterElem = document.getElementById('lightbox-counter');

  const mediaList = getActiveMediaList();
  const item = mediaList[currentImageIndex];
  if (!item) return;

  const isVid = item.isVideo || (item.url && item.url.includes('.mp4'));

  if (isVid) {
    if (imgElem) {
      imgElem.classList.add('hidden');
      imgElem.classList.remove('zoomed');
      imgElem.removeAttribute('data-active-url');
    }
    if (videoElem) {
      videoElem.classList.remove('hidden');
      if (videoElem.getAttribute('data-active-url') !== item.url) {
        videoElem.setAttribute('data-active-url', item.url);
        videoElem.src = item.url;
        videoElem.load();
        videoElem.play().catch(() => {});
      }
    }
  } else {
    if (videoElem) {
      videoElem.pause();
      videoElem.classList.add('hidden');
      videoElem.removeAttribute('data-active-url');
      videoElem.src = '';
    }
    if (imgElem) {
      imgElem.classList.remove('zoomed');
      if (imgElem.getAttribute('data-active-url') !== item.url) {
        imgElem.setAttribute('data-active-url', item.url);
        imgElem.src = item.url;
      }
      imgElem.classList.remove('hidden');
    }
  }

  if (titleElem) titleElem.textContent = item.title || '';
  if (descElem) descElem.textContent = item.desc || '';
  if (counterElem) counterElem.textContent = `${currentImageIndex + 1} / ${mediaList.length}`;
}

/* ==================================================
 * 5. PAGE 4: FINAL SURPRISE PAGE LOGIC
 * ================================================== */
function initFinalPage() {
  const lineContainer = document.getElementById('typewriter-container');
  const letterContent = document.getElementById('letter-content');

  if (!lineContainer) return;

  const lines = ['Today.', 'Tomorrow.', 'Forever.'];

  // If for any reason lines aren't in container, inject them directly
  if (lineContainer.children.length === 0) {
    lineContainer.innerHTML = '';
    lines.forEach(text => {
      const p = document.createElement('p');
      p.className = 'font-serif text-2xl sm:text-4xl font-bold text-[#881337] my-1 tracking-wide drop-shadow-sm';
      p.textContent = text;
      lineContainer.appendChild(p);
    });
  }

  if (letterContent) {
    letterContent.classList.remove('hidden');
  }
}
