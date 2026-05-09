/* ============================================================
   BASE82 — DEV-PROFILE.JS
   Edit the DEVS object to update each developer's real info
============================================================ */

const DEVS = {
    "01": {
        index: "01",
        name: "Chakradhar S K D",
        role: "ENGINE UNDER THE HOOD",
        avatar: "../asserts/pic1.jpg",
        fallback: "CK",
        bio: "Architected the core experience — Explore, Home, and Game Details",
        tags: ["EXPLORE", "HOME", "GAME DETAILS"],
        socials: [
            { platform: "GITHUB", handle: "@CfoR07", icon: "fab fa-github", url: "https://github.com/CfoR07" },
            { platform: "LINKEDIN", handle: "Chakradhar S K D", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/chakradhar-dummala-ba4313386/" },
            { platform: "INSTAGRAM", handle: "@Cfor007", icon: "fab fa-instagram", url: "https://instagram.com/cfor007" },
            { platform: "DISCORD", handle: "CfoR07", icon: "fab fa-discord", url: "https://discord.com/users/1011503951901896705/" },
        ],
        details: [
            { label: "SCOPE", val: "HTML · CSS · JavaScript · APIs" },
            { label: "LOCATION", val: "India" },
            { label: "FOCUS", val: "Frontend Architecture · Design" },
            { label: "VIBE", val: "Designing · Gaming · Anime and Manga" },
        ]
    },
    "02": {
        index: "02",
        name: "Harshadeep N",
        role: "HARBINGER OF BASE82",
        avatar: "../asserts/pic2.jpg",
        fallback: "HN",
        bio: "Crafted the first impression — Login and Signup",
        tags: ["LOGIN", "SIGNUP"],
        socials: [
            { platform: "GITHUB", handle: "@Harshadeep73", icon: "fab fa-github", url: "https://github.com/Harshadeep73" },
            { platform: "LINKEDIN", handle: "Harshadeep N", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/harshadeep-n-bb0222203/" },
            { platform: "INSTAGRAM", handle: "@harshadeep", icon: "fab fa-instagram", url: "https://www.instagram.com/harshadeep_79/" },
            { platform: "DISCORD", handle: "harshadeep_79", icon: "fab fa-discord", url: "https://discord.com/users/716254091512119297" },
        ],
        details: [
            { label: "SCOPE", val: "HTML · CSS · JavaScript · SQL" },
            { label: "LOCATION", val: "India" },
            { label: "FOCUS", val: "Backend Development · Database Management" },
            { label: "VIBE", val: "Indie Games · Mechanical Keyboards · Complexity" },
        ]
    },
    "03": {
        index: "03",
        name: "Gunpreet K",
        role: "VOICE OF BASE82",
        avatar: "../asserts/pic3.jpg",
        fallback: "GK",
        bio: "Built the information layer — About, FAQ, and Contact",
        tags: ["ABOUT", "FAQ", "CONTACT", "DEV-PROFILE"],
        socials: [
            { platform: "GITHUB", handle: "@KGunpreet", icon: "fab fa-github", url: "https://github.com/kadambalagunpreet2007" },
            { platform: "LINKEDIN", handle: "Gunpreet", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/gunpreet-kadambala-373726371/" },
            { platform: "INSTAGRAM", handle: "@gunpreet_2007", icon: "fab fa-instagram", url: "https://www.instagram.com/gunpreet_2007/" },
            { platform: "DISCORD", handle: "k.gunpreet", icon: "fab fa-discord", url: "https://discord.com/users/1433816803896856726" },
        ],
        details: [
            { label: "SCOPE", val: "HTML · CSS · JavaScript · UX Writing" },
            { label: "LOCATION", val: "India" },
            { label: "FOCUS", val: "Product Thinking · Communication · Clarity" },
            { label: "VIBE", val: "Strategy Games ·  Chess · Solving Cubes" },
        ]
    }
};

/* ── LOAD DEV DATA ── */
const devId = new URLSearchParams(window.location.search).get('dev') || '01';
const dev = DEVS[devId] || DEVS['01'];

document.getElementById('devIndex').textContent = dev.index;
document.getElementById('devName').textContent = dev.name;
document.getElementById('devRole').textContent = dev.role;
document.getElementById('devBio').textContent = dev.bio;
document.getElementById('devAvatarFallback').textContent = dev.fallback;
document.title = `${dev.name} — BASE82`;

/* ── AVATAR — load via JS, show fallback only if truly broken ── */
const avatarImg = document.getElementById('devAvatar');
const avatarFallback = document.getElementById('devAvatarFallback');

avatarImg.alt = dev.name;
avatarImg.src = dev.avatar;

avatarImg.onload = () => {
    avatarImg.style.display = 'block';
    avatarFallback.style.display = 'none';
};
avatarImg.onerror = () => {
    avatarImg.style.display = 'none';
    avatarFallback.style.display = 'flex';
};

/* ── TAGS ── */
document.getElementById('devTags').innerHTML = dev.tags
    .map(t => `<span class="profile-tag">${t}</span>`).join('');

/* ── SOCIALS ── */
const socialsGrid = document.getElementById('socialsGrid');
dev.socials.forEach((s, i) => {
    const a = document.createElement('a');
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'social-link-card';
    a.innerHTML = `
        <i class="${s.icon} social-icon"></i>
        <div class="social-text">
            <span class="social-platform">${s.platform}</span>
            <span class="social-handle">${s.handle}</span>
        </div>
        <i class="fas fa-arrow-right social-arrow"></i>
    `;
    socialsGrid.appendChild(a);
    setTimeout(() => a.classList.add('visible'), 100 + i * 80);
});

/* ── INTEL CARDS ── */
const detailsGrid = document.getElementById('detailsGrid');
dev.details.forEach(d => {
    const el = document.createElement('div');
    el.className = 'detail-card';
    el.innerHTML = `
        <div class="detail-card-label">// ${d.label}</div>
        <div class="detail-card-val">${d.val}</div>
    `;
    detailsGrid.appendChild(el);
});

document.body.classList.add('loaded');
