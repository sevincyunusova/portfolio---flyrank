# Mobile & Accessibility Fix Log

## What was broken

* Several external links were written using Markdown link syntax inside `href`, so LinkedIn, GitHub, CV, Calendly, and project demo/repository links did not open correctly.
* The global stylesheet did not explicitly prevent horizontal overflow on small screens.
* The global stylesheet used `prefers-color-scheme: dark` even though the portfolio already has its own dark/light mode toggle.

## What I changed

* Replaced Markdown-formatted URLs with valid raw URLs in `app/page.tsx`.
* Added `overflow-x: hidden` to the global `body` styles.
* Removed the system dark-mode media query so the portfolio's own theme toggle controls the appearance.
* Added smooth scrolling to the document.

## Mobile check

* Opened the portfolio on a real phone.
* Confirmed the layout is usable and the main navigation and buttons are tappable.
* Checked the portfolio at mobile and wider screen sizes for obvious layout issues.

## Result

* External project and social links use valid URLs.
* Mobile horizontal overflow is prevented.
* The portfolio remains responsive across screen sizes.
