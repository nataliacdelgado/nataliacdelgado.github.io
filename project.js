const projects = {
  wondrfly: {
    name: 'Wondrfly',
    eyebrow: 'Family discovery · Product design',
    headline: 'A more natural way to find the right activity.',
    summary: 'Helping parents move from a big list of possibilities to a program that feels right for their child.',
    hero: './assets/portfolio/wondrfly/program-detail-desktop.png',
    heroAlt: 'Wondrfly program detail experience for parents',
    heroFocus: 'focus-middle',
    facts: [['Role', 'Product designer'], ['Focus', 'Research · UX · UI'], ['Platform', 'Web + mobile'], ['Team', 'Product · Engineering']],
    actions: [['View Figma case study', 'https://www.figma.com/deck/fMfzTUhmviO7BaBdNLfD7M'], ['Explore Wondrfly', 'https://www.wondrfly.com/discover/all'], ['See Wondrfly Pro', 'https://www.wondrfly.com/pro']],
    introTitle: 'A desktop-first product, ready to meet parents on mobile.',
    contextNote: 'The live product has evolved since the version shown here. These screens document the work and direction from my time with the team.',
    intro: ['When I joined Wondrfly, the product was designed for desktop. I researched how parents looked for activities, spoke with families, and found a strong opportunity to make the experience easier to reach on mobile.', 'I shared the findings with the team, helped shape the direction, and designed mobile versions of existing product journeys. I then focused more deeply on Program Detail, while also contributing to search and discovery, the parent marketing experience, and Wondrfly Pro.'],
    sections: [
      { eyebrow: '01 — Understand the need', title: 'Start with parents’ real questions.', body: 'Research and interviews helped me understand what parents needed to know before choosing an activity: who it was for, what to expect, where it happened, and how to take the next step. I used those needs to clarify the information hierarchy and surface useful context sooner.', cards: [['Research', 'Interviews and feedback cycles helped reveal where parents needed more clarity.'], ['Direction', 'I presented the mobile opportunity and aligned the team around extending the experience.'], ['Partnership', 'I worked with developers to refine the design through implementation, QA, and UAT.']] },
      { eyebrow: '02 — Program Detail', title: 'Make the choice feel clearer.', body: 'Program Detail brings the important information together in one place. The layout balances the activity itself with practical details about the provider, location, age range, and ways to connect.', gallery: [['./assets/portfolio/wondrfly/program-detail-desktop.png', 'Desktop program detail', 'Clear program information paired with provider context and a direct contact action.'], ['./assets/portfolio/wondrfly/program-detail-mobile.png', 'Mobile program detail', 'A compact, responsive view that keeps key program information and the next action within reach.', 'mobile-figure']] },
      { eyebrow: '03 — A connected product', title: 'The work reached beyond one page.', body: 'Alongside the detailed program experience, I contributed to parent-side discovery and marketing pages, and to Wondrfly Pro for providers. The goal across these touchpoints was a more consistent, understandable path from finding an option to taking action.', cards: [['Discover', 'Search and browsing contributions helped parents explore activities.'], ['Parent marketing', 'A Jersey City focused marketing experience introduced local families to the platform.'], ['Wondrfly Pro', 'Provider-side work supported the other side of the marketplace.']] }
    ],
    status: 'Product work across parent and provider experiences',
    next: ['Guilds', 'guilds']
  },
  guilds: {
    name: 'Guilds',
    eyebrow: 'Brand + website · UX/UI design',
    headline: 'A clearer digital presence for a new market.',
    summary: 'A complete website redesign to help Guilds introduce its services to Canadian organizations with confidence.',
    hero: './assets/portfolio/guilds/redesigned-homepage.png',
    heroAlt: 'Guilds Canada homepage design concept',
    heroFocus: 'focus-top',
    facts: [['Role', 'Product + visual designer'], ['Focus', 'Research · Content · UX/UI'], ['Scope', 'Full website design'], ['Status', 'Approved direction']],
    actions: [['View Figma prototype', 'https://www.figma.com/proto/AZeQpbFAIRxlB8J7yIDjZc/Guilds?node-id=110-269&viewport=393%2C63%2C0.1&t=IKjaaIaLM2DhfLME-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=110%3A269&page-id=0%3A1']],
    introTitle: 'Bring a complex offer into focus.',
    intro: ['Guilds wanted a new website to support its expansion into Canada. I met with the client to understand the organization, its services, and what prospective customers needed to know.', 'I designed the full website direction across content structure, UX/UI, and visual design. The approved concept uses a calm, mature palette, expressive serif typography, and a clearer rhythm of information to make the offer feel more approachable and established.'],
    sections: [
      { eyebrow: '01 — Before + after', title: 'A more intentional first impression.', body: 'The redesign organizes the story around the needs of a Canadian audience. Stronger hierarchy, more deliberate spacing, and a consistent type and colour system help visitors understand the offer and find a next step.', gallery: [['./assets/portfolio/guilds/original-home.jpg', 'Original website', 'The Brazilian site before the proposed Canadian direction.'], ['./assets/portfolio/guilds/redesigned-homepage.png', 'Redesigned homepage', 'Approved concept for Guilds Canada, designed in Figma.']], galleryClass: 'is-before-after' },
      { eyebrow: '02 — Design decisions', title: 'A visual language with room to breathe.', body: 'The direction pairs warm neutral surfaces with deep brown and blue accents. Display serif headlines add character, while measured spacing and clear calls to action keep the pages easy to scan.', cards: [['Content strategy', 'Clarified the information structure and the story each page needs to tell.'], ['Visual identity', 'A restrained palette and typography system support a confident, considered tone.'], ['Design handoff', 'The concept was approved and handed to the company for development.']] }
    ],
    status: 'Design complete · Development by the company',
    next: ['YYC Eagles', 'eagles']
  },
  eagles: {
    name: 'YYC Eagles',
    eyebrow: 'Website · Design + implementation',
    headline: 'A stronger home for a growing volleyball club.',
    summary: 'A fresh website direction that brings programs, teams, and club information into a more confident and useful experience.',
    hero: './assets/portfolio/eagles/redesigned-homepage.jpg',
    heroAlt: 'YYC Eagles Volleyball Club redesigned homepage preview',
    heroFocus: 'focus-middle',
    facts: [['Role', 'Designer + developer'], ['Focus', 'Content · UX · Visual design'], ['Platform', 'Responsive website'], ['Status', 'Preview · Awaiting approval']],
    actions: [['Open website preview', 'https://eagles-volleyball-club.vercel.app/']],
    introTitle: 'Make the club easier to understand and join.',
    intro: ['The existing website needed a clearer way to introduce the club and help families find programs. I worked with the client to understand those needs and explored distinct directions for Eagles and its Buck Lake camp.', 'For Eagles, I developed a focused visual system around navy, yellow, and energetic volleyball imagery. I designed, built, and deployed a website preview with more direct navigation and clearer routes into programs and club information.'],
    sections: [
      { eyebrow: '01 — Before + after', title: 'Give programs a clearer place to start.', body: 'A more direct navigation and prominent program entry points make it easier for families to explore what the club offers. The preview uses bold type and high-contrast colour to bring the competitive, youth-sport context forward.', gallery: [['./assets/portfolio/eagles/original-home.jpg', 'Original website', 'The previous club website, including the shared Buck Lake section.'], ['./assets/portfolio/eagles/redesigned-homepage.jpg', 'Website preview', 'A new direction designed and implemented as a preview.']], galleryClass: 'is-before-after' },
      { eyebrow: '02 — Visual direction', title: 'Purposeful, energetic, and unmistakably sport.', body: 'The navy and yellow palette creates a strong contrast system. Condensed display type and team photography establish an athletic tone while keeping primary actions easy to spot.', cards: [['Information hierarchy', 'Programs and key club details receive stronger visibility.'], ['Visual system', 'Navy, yellow, and athletic imagery set the tone for the experience.'], ['Implementation', 'I carried the design through front-end build and deployment of a review preview.']] }
    ],
    status: 'Website preview · Awaiting client approval',
    next: ['Buck Lake', 'buck-lake']
  },
  'buck-lake': {
    name: 'Buck Lake',
    eyebrow: 'Website · Design + implementation',
    headline: 'A lakeside camp experience, brought online.',
    summary: 'A distinct website direction for a camp and event centre, designed to make the setting, activities, and stay easier to picture.',
    hero: './assets/portfolio/buck-lake/redesigned-homepage.jpg',
    heroAlt: 'Buck Lake camp website homepage preview',
    heroFocus: 'focus-middle',
    facts: [['Role', 'Designer + developer'], ['Focus', 'Content · UX · Visual design'], ['Platform', 'Responsive website'], ['Status', 'Preview · Awaiting approval']],
    actions: [['Open website preview', 'https://buck-lake.vercel.app/']],
    introTitle: 'Help visitors imagine their time at the lake.',
    intro: ['Buck Lake needed a clearer way to present its location, accommodation, activities, and summer camp offer. I worked with the client to understand the business goals and developed a visual direction distinct from the Eagles volleyball club.', 'The preview uses deep green, warm cream, orange accents, and scenic photography to create a more inviting sense of place. I designed, implemented, and deployed the responsive website preview for client review.'],
    sections: [
      { eyebrow: '01 — Before + after', title: 'Put the place and experience first.', body: 'The new homepage brings the lakeside setting into the first impression and gives visitors clear paths to explore camp sessions and the wider experience. Photography, typography, and a calm green palette work together to make the destination feel tangible.', gallery: [['./assets/portfolio/buck-lake/original-homepage.jpg', 'Original camp section', 'The existing camp content before the new website direction.'], ['./assets/portfolio/buck-lake/redesigned-homepage.jpg', 'Website preview', 'A new lakeside visual direction designed and implemented as a preview.']], galleryClass: 'is-before-after' },
      { eyebrow: '02 — Visual direction', title: 'A different mood for a different audience.', body: 'Buck Lake needed to feel outdoor, welcoming, and active. A dark green base, warm cream surfaces, orange accents, and expressive serif headlines create a relaxed visual language that separates the camp from the more competitive Eagles club.', cards: [['Destination', 'Scenic photography gives the setting a central role.'], ['Personality', 'Green, cream, orange, and expressive type support an outdoors feel.'], ['Implementation', 'The site was designed and built as a preview for client review.']] }
    ],
    status: 'Website preview · Awaiting client approval',
    next: ['Wondrfly', 'wondrfly']
  }
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const id = new URLSearchParams(location.search).get('id');
const project = projects[id];
const root = document.querySelector('#project-content');
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

if (!project) {
  document.title = 'Project not found — Natalia Alves';
  root.innerHTML = '<section class="project-not-found"><h1>That project isn’t here.</h1><a class="text-link" href="./index.html#work">Back to selected work ↗</a></section>';
} else {
  document.title = `${project.name} — Natalia Alves`;
  if (id === 'wondrfly') {
    document.body.classList.add('wondrfly-case');
    root.innerHTML = `<section class="wondrfly-hero"><div class="case-wrap"><a class="back-link" href="./index.html#work">← All projects</a><p class="eyebrow">01 · Product website &amp; platform</p><h1>Wondrfly</h1><p class="wondrfly-subtitle">From a web-only product to a mobile experience</p></div></section>
      <section class="wondrfly-opening case-wrap"><p>I used research to define Wondrfly's mobile direction, designed mobile versions of the existing web experience, and improved key parent and provider journeys.</p><dl class="wondrfly-facts"><div><dt>My role</dt><dd>Product designer · Research, interviews, mobile UX/UI, product flows, and developer collaboration</dd></div><div><dt>Status</dt><dd>Research through delivery</dd></div><div><dt>Services</dt><dd>User research · Interviews &amp; testing · Product design · Mobile UX/UI · Responsive web · Developer collaboration</dd></div></dl></section>
      <div class="case-wrap wondrfly-content">
        <section class="wondrfly-brief"><div><p class="eyebrow">The brief</p><h2>Designing the full path, not just the page.</h2></div><div><p>When I joined Wondrfly, its product experiences were available only on the web and were not reaching the level of access the team wanted.</p><p>Research and parent interviews showed a clear preference for mobile. I presented the opportunity, gained support from the team, and designed mobile versions of the existing experience.</p></div></section>
        <section class="case-section"><div class="case-section-heading"><div><p class="eyebrow">What the work needed to do</p></div></div><div class="case-copy-grid"><article class="case-copy-card"><span class="step">01</span><h3>Build the mobile foundation</h3><p>Translate the existing web product into clear mobile journeys.</p></article><article class="case-copy-card"><span class="step">02</span><h3>Improve parent decisions</h3><p>Make activities easier to discover, understand, and evaluate.</p></article><article class="case-copy-card"><span class="step">03</span><h3>Support both audiences</h3><p>Improve parent experiences while contributing to Wondrfly Pro.</p></article></div></section>
        <section class="case-section"><div class="case-section-heading"><div><p class="eyebrow">My contribution</p><h2>From research to a complete mobile product.</h2></div><p>I began by researching how parents wanted to access Wondrfly. That work led to the mobile direction, followed by Program Detail, search and discovery, parent marketing, and contributions to Wondrfly Pro.</p></div><div class="case-copy-grid"><article class="case-copy-card"><span class="step">01 · Research</span><h3>Validated the mobile opportunity.</h3><p>Interviews and feedback showed a stronger preference for mobile access.</p></article><article class="case-copy-card"><span class="step">02 · Mobile</span><h3>Designed the mobile product.</h3><p>I adapted the existing web experience into clear mobile journeys.</p></article><article class="case-copy-card"><span class="step">03 · Delivery</span><h3>Refined and shipped the work.</h3><p>I collaborated with developers and used feedback, QA, and UAT to improve it.</p></article></div></section>
        <section class="case-section wondrfly-program"><div class="case-section-heading"><div><p class="eyebrow">Program Detail</p><h2>One experience, designed for web and mobile.</h2></div></div><div class="case-gallery"><figure><img src="./assets/portfolio/wondrfly/program-detail-mobile.png" alt="Wondrfly mobile program detail page" loading="lazy" /><figcaption>Mobile program detail</figcaption></figure><figure><img src="./assets/portfolio/wondrfly/program-detail-desktop.png" alt="Wondrfly desktop program detail page" loading="lazy" /><figcaption>Desktop program detail</figcaption></figure></div><div class="case-copy-grid"><article class="case-copy-card"><h3>Design for mobile access</h3><p><strong>Problem:</strong> The product was available only as a web experience. <strong>Response:</strong> The existing journeys were redesigned for mobile use.</p></article><article class="case-copy-card"><h3>Clarify the decision path</h3><p><strong>Problem:</strong> Parents had to work harder to understand activity details. <strong>Response:</strong> Clear hierarchy surfaces fit, age, format, and availability.</p></article><article class="case-copy-card"><h3>Learn and refine</h3><p><strong>Problem:</strong> Product decisions needed stronger user evidence. <strong>Response:</strong> Research, interviews, and feedback guided each iteration.</p></article></div></section>
        <section class="case-section wondrfly-marketing"><div class="case-section-heading"><div><p class="eyebrow">Parent marketing page</p><h2>A local entry point into discovery.</h2></div><p>I designed a location-specific page for parents in Jersey City. It combines activity categories, product education, personalized discovery, blogs, and FAQs with clear paths into the Wondrfly product.</p></div><div class="wondrfly-tags"><span>Local activity discovery</span><span>Product education</span><span>Conversion into Discover</span></div><div class="project-actions"><a class="button button-dark" href="https://www.figma.com/proto/uT4qYSDAxPj8DhoQxDJxIW/Parent-Live-Sprint-1.0?node-id=51370-72371&amp;page-id=28221%3A39770&amp;starting-point-node-id=51370%3A72371&amp;t=2vObpKpRfijrWxfY-1" target="_blank" rel="noreferrer">View the parent marketing prototype <span aria-hidden="true">↗</span></a><a class="button button-outline" href="https://www.wondrfly.com/" target="_blank" rel="noreferrer">Visit Wondrfly <span aria-hidden="true">↗</span></a></div><p class="project-context-note">Wondrfly has continued to evolve. The Program Detail screens and parent marketing prototype shown here are the surviving artifacts from the version I designed.</p></section>
        <section class="case-section wondrfly-outcome"><div class="case-section-heading"><div><p class="eyebrow">Outcome</p><h2>A clearer product, available beyond desktop.</h2></div><p>The work gave Wondrfly a researched mobile direction and clearer paths for parents, while supporting provider-side needs and delivery with the development team.</p></div><ol class="outcome-list"><li>A mobile counterpart to the existing web product.</li><li>A clearer Program Detail experience across devices.</li><li>Improvements to search, discovery, marketing, and Pro.</li><li>Close collaboration through development, QA, and UAT.</li></ol></section>
        <section class="case-section"><p class="eyebrow">Brand &amp; design foundations</p><div class="case-copy-grid"><article class="case-copy-card"><span class="step">01</span><h3>Research-led direction</h3><p>Interviews and feedback showed that parents were more likely to use Wondrfly on mobile.</p></article><article class="case-copy-card"><span class="step">02</span><h3>A complete mobile experience</h3><p>I translated the existing web product into mobile journeys before refining key features.</p></article><article class="case-copy-card"><span class="step">03</span><h3>Collaborative product delivery</h3><p>I used feedback, worked closely with developers, and supported the work through QA and UAT.</p></article></div><div class="wondrfly-identity"><div><p class="eyebrow">Colour palette</p><div class="swatches"><span>#5554E0</span><span>#E5E6FB</span><span>#FFFFFF</span><span>#252525</span></div></div><div><p class="eyebrow">Typography</p><p><strong>Comfortaa</strong><br />Headlines · Warm and approachable</p><p><strong>Poppins</strong><br />Body &amp; interface · Clear and readable</p></div></div></section>
      </div><nav class="next-project" aria-label="Next project"><span>Next project</span><a href="./project.html?id=eagles">Eagles <span aria-hidden="true">↗</span></a></nav>`;
  } else {
  const facts = project.facts.map(([label, value]) => `<div class="project-fact"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
  const actions = project.actions.map(([label, href]) => `<a class="button ${label.startsWith('View') ? 'button-dark' : 'button-outline'}" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`).join('');
  const intro = project.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
  const sections = project.sections.map((section) => {
    const cards = section.cards ? `<div class="case-copy-grid">${section.cards.map(([title, body], index) => `<article class="case-copy-card"><span class="step">0${index + 1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join('')}</div>` : '';
    const gallery = section.gallery ? `<div class="case-gallery ${section.galleryClass || ''}">${section.gallery.map(([src, alt, caption, className]) => `<figure class="${className || ''}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" /><figcaption><strong>${escapeHtml(alt)}</strong>${escapeHtml(caption)}</figcaption></figure>`).join('')}</div>` : '';
    return `<section class="case-section"><div class="case-section-heading"><div><p class="eyebrow">${escapeHtml(section.eyebrow)}</p><h2>${escapeHtml(section.title)}</h2></div><p>${escapeHtml(section.body)}</p></div>${cards}${gallery}</section>`;
  }).join('');
  const contextNote = project.contextNote ? `<p class="project-context-note">${escapeHtml(project.contextNote)}</p>` : '';
  root.innerHTML = `<section class="project-hero"><a class="back-link" href="./index.html#work">← Selected work</a><p class="eyebrow">${escapeHtml(project.eyebrow)}</p><h1>${escapeHtml(project.headline)}</h1><p class="project-summary">${escapeHtml(project.summary)}</p><span class="case-status">${escapeHtml(project.status)}</span><div class="project-facts">${facts}</div><div class="project-actions">${actions}</div></section><div class="case-hero-image"><img class="${escapeHtml(project.heroFocus)}" src="${escapeHtml(project.hero)}" alt="${escapeHtml(project.heroAlt)}" /></div><div class="case-body"><section class="case-intro"><h2>${escapeHtml(project.introTitle)}</h2><div>${intro}${contextNote}</div></section>${sections}</div><nav class="next-project" aria-label="Next project"><span>Next project</span><a href="./project.html?id=${encodeURIComponent(project.next[1])}">${escapeHtml(project.next[0])} <span aria-hidden="true">↗</span></a></nav>`;
  }
}
