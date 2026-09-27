import Link from "next/link";
import { site, social, churchCenter } from "../app/site";
import { IcYouTube, IcInstagram, IcFacebook, IcX } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="f-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-white.png" alt={site.name} className="f-logo" />
            </div>
            <p style={{ color: "#A9BAB0", maxWidth: 320 }}>
              {site.tagline}. Come as you are &mdash; there&rsquo;s a seat saved for you.
            </p>
            <div className="socials" style={{ marginTop: 20 }}>
              <a href={social.youtube} aria-label="YouTube"><IcYouTube width={18} height={18} /></a>
              <a href={social.instagram} aria-label="Instagram"><IcInstagram width={18} height={18} /></a>
              <a href={social.facebook} aria-label="Facebook"><IcFacebook width={18} height={18} /></a>
              <a href={social.twitter} aria-label="X"><IcX width={18} height={18} /></a>
            </div>
          </div>

          <div>
            <h4>Gather with us</h4>
            <ul>
              {site.services.map((s) => (
                <li key={s.day}><strong style={{ color: "#EAF0EC" }}>{s.day}</strong> {s.time}</li>
              ))}
              <li style={{ marginTop: 14 }}>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li style={{ marginTop: 14, color: "#8FA598" }}>Office: {site.officeHours}</li>
            </ul>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/visit">Plan a visit</Link></li>
              <li><Link href="/watch">Watch messages</Link></li>
              <li><Link href="/staff">Our staff</Link></li>
              <li><Link href="/ministries">Ministries</Link></li>
              <li><Link href="/events">Events calendar</Link></li>
              <li><Link href="/beliefs">Statement of faith</Link></li>
              <li><Link href="/give">Give</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li style={{ marginTop: 14 }}><a href={churchCenter.home}>Church Center app</a></li>
              <li><a href={churchCenter.forms.prayer}>Request prayer</a></li>
              <li><Link href="/griefshare">GriefShare</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>&copy; {new Date().getFullYear()} {site.name}</span>
          <span>{site.address.line1} &middot; {site.address.line2}</span>
        </div>
      </div>
    </footer>
  );
}
