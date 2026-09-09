# MHALYD — DULSE / Collection 001

A static, responsive storefront designed for MHALYD. It can be hosted free on GitHub Pages.

## Files
- `index.html` — page structure and copy
- `styles.css` — full visual design and responsive layout
- `script.js` — product configuration, product dialog, social links
- `favicon.svg` — browser icon

## Edit products
Open `script.js` and edit the `STORE.products` object:
- `title`
- `description`
- `price`
- `sizes`
- `checkoutUrl` — paste the Stripe Payment Link URL here

Also update:
- `STORE.instagram`
- `STORE.tiktok`

## Stripe setup
For each product, create a Stripe Payment Link. For shirts, add a required custom dropdown called `SIZE` and list your real sizes. Enable address collection and shipping rates if you ship physical products. Then paste each Payment Link into `checkoutUrl`.

## Newsletter
The newsletter field is visual only until you connect a service such as Buttondown, Mailchimp, Brevo, Formspree, etc. Do not collect emails without a real form endpoint and privacy policy.

## Publish with GitHub Pages
1. Create a GitHub account.
2. Create a public repository named `YOURUSERNAME.github.io`.
3. Upload these files to the repository root.
4. In the repository go to Settings → Pages.
5. Under Build and deployment, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. GitHub will publish the site at `https://YOURUSERNAME.github.io/`.

## Custom domain later
Buy a domain you own, then configure it under Settings → Pages → Custom domain and update the DNS records at your registrar using GitHub's current documentation.

## Before launch checklist
- Replace all `$00.00` prices.
- Replace placeholder product names/details if needed.
- Add final product photography.
- Add Stripe Payment Links.
- Add real Instagram/TikTok URLs.
- Replace `hello@mhalyd.com` if that mailbox does not exist.
- Add shipping, returns, privacy, and terms pages.
- Test every checkout on mobile and desktop.
