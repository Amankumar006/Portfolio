/**
 * Pre-register all icons used in the portfolio at build time.
 * This eliminates runtime CDN fetches from @iconify/react.
 * Import this file once in main.jsx before any component renders.
 * Total: ~2KB of inline SVG data vs multiple CDN round-trips.
 */
import { addIcon } from "@iconify/react";

// ── Lucide icons (24×24, stroke-based) ──
addIcon("lucide:arrow-left", {
  body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l-7-7l7-7M19 12H5"/>',
  width: 24, height: 24,
});
addIcon("lucide:arrow-right", {
  body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>',
  width: 24, height: 24,
});
addIcon("lucide:arrow-up-right", {
  body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M7 7h10v10"/>',
  width: 24, height: 24,
});
addIcon("lucide:globe", {
  body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g>',
  width: 24, height: 24,
});
addIcon("lucide:brain", {
  body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-5.937a5 5 0 0 0-2.349 1.687M5.4 7.063a5 5 0 0 1 2.349 1.688M12 18v4"/></g>',
  width: 24, height: 24,
});
addIcon("lucide:server", {
  body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01M6 18h.01"/></g>',
  width: 24, height: 24,
});
addIcon("lucide:lightbulb", {
  body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6m-5 4h4"/></g>',
  width: 24, height: 24,
});
addIcon("lucide:code", {
  body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 18l6-6l-6-6M8 6l-6 6l6 6"/>',
  width: 24, height: 24,
});
addIcon("lucide:book-open", {
  body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></g>',
  width: 24, height: 24,
});

// ── MDI icons (24×24, filled) ──
addIcon("mdi:star-four-points", {
  body: '<path fill="currentColor" d="M12 1l3 8l8 3l-8 3l-3 8l-3-8l-8-3l8-3z"/>',
  width: 24, height: 24,
});
addIcon("mdi:github", {
  body: '<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>',
  width: 24, height: 24,
});

// ── Material Symbols Light (24×24) ──
addIcon("material-symbols-light:square", {
  body: '<path fill="currentColor" d="M5.615 20q-.69 0-1.152-.462T4 18.385V5.615q0-.69.463-1.152T5.615 4h12.77q.69 0 1.152.463T20 5.615v12.77q0 .69-.462 1.152T18.385 20zm0-1h12.77q.23 0 .423-.192t.192-.423V5.615q0-.23-.192-.423T18.385 5H5.615q-.23 0-.423.192T5 5.615v12.77q0 .23.192.423t.423.192"/>',
  width: 24, height: 24,
});
