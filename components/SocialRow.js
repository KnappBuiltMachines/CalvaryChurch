import { social } from "../app/site";

const ICONS = [
  { key: "youtube", src: "/social/youtube.png", label: "YouTube", href: social.youtube },
  { key: "instagram", src: "/social/instagram.png", label: "Instagram", href: social.instagram },
  { key: "facebook", src: "/social/facebook.png", label: "Facebook", href: social.facebook },
  { key: "x", src: "/social/x.png", label: "X (Twitter)", href: social.twitter },
];

export default function SocialRow() {
  return (
    <div className="social-row">
      {ICONS.map((i) => (
        <a key={i.key} href={i.href} className="social-badge" aria-label={i.label} target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={i.src} alt={i.label} />
        </a>
      ))}
    </div>
  );
}
