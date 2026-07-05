import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Agent',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Download', href: 'https://velloc.app/download/install.exe', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml'), target: '_blank' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/browser-lab/browser-lab-bootstrap', target: '_blank' },
  ],
  footNote: `
    © 2026 Velloc Browser contributors · Open Source (Apache-2.0) · GitHub: @browser-lab
  `,
};
