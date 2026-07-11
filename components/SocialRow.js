import { social } from "../app/site";

const YouTube = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#FF0000" />
    <path d="M20 16.5l12 7.5-12 7.5z" fill="#fff" />
  </svg>
);

const Instagram = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
    <defs>
      <radialGradient id="igGrad" cx="30%" cy="107%" r="140%">
        <stop offset="0" stopColor="#FDF497" />
        <stop offset="0.08" stopColor="#FDF497" />
        <stop offset="0.45" stopColor="#FD5949" />
        <stop offset="0.62" stopColor="#D6249F" />
        <stop offset="0.9" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="48" height="48" rx="14" fill="url(#igGrad)" />
    <rect x="13.5" y="13.5" width="21" height="21" rx="6.5" fill="none" stroke="#fff" strokeWidth="2.6" />
    <circle cx="24" cy="24" r="5.4" fill="none" stroke="#fff" strokeWidth="2.6" />
    <circle cx="31" cy="17" r="1.7" fill="#fff" />
  </svg>
);

const Facebook = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#1877F2" />
    <path d="M27.3 24h3.4l.67-4.35H27.3v-2.83c0-1.19.58-2.35 2.46-2.35h1.9v-3.7s-1.72-.29-3.37-.29c-3.44 0-5.69 2.08-5.69 5.86v3.31H18.6V24h3.99v10.52a15.9 15.9 0 004.71 0V24z" fill="#fff" />
  </svg>
);

const XLogo = () => (
  <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true">
    <circle cx="24" cy="24" r="24" fill="#000" />
    <path
      transform="translate(11.6,11.6)"
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="#fff"
    />
  </svg>
);

const ICONS = [
  { key: "youtube", C: YouTube, label: "YouTube", href: social.youtube },
  { key: "instagram", C: Instagram, label: "Instagram", href: social.instagram },
  { key: "facebook", C: Facebook, label: "Facebook", href: social.facebook },
  { key: "x", C: XLogo, label: "X (Twitter)", href: social.twitter },
];

export default function SocialRow() {
  return (
    <div className="social-row">
      {ICONS.map(({ key, C, label, href }) => (
        <a key={key} href={href} className="social-badge" aria-label={label} target="_blank" rel="noopener noreferrer">
          <C />
        </a>
      ))}
    </div>
  );
}
