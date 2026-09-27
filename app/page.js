import Link from "next/link";
import { site } from "./site";
import { SectionHead } from "../components/ui";
import { IcArrow, IcCalendar, IcConnect, IcGift, IcKids, IcPlay } from "../components/icons";

// Quick links to the main sections. Details live on each page, not here.
const PATHS = [
  { href: "/ministries", icon: <IcKids width={28} height={28} />, title: "Ministries", body: "Children's Ministry, GriefShare, and discipleship.", cta: "Find your place" },
  { href: "/events", icon: <IcCalendar width={28} height={28} />, title: "Events", body: "Open registrations and the full church calendar.", cta: "See what's coming" },
  { href: "/connect", icon: <IcConnect width={28} height={28} />, title: "Connect", body: "Prayer, groups, the Church Center app, and the office.", cta: "Get in touch" },
  { href: "/give", icon: <IcGift width={28} height={28} />, title: "Give", body: "Give online, through Every.org, or in person.", cta: "Ways to give" },
];

export default function Home() {
  return (
    <>
      {/* PASTOR'S WELCOME — white */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="welcome-split">
            <div className="welcome-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about/pastors.jpg" alt="Pastor Vince and Dianne Lombardo" />
            </div>
            <div className="welcome-body">
              <span className="eyebrow">A word from our pastor</span>
              <h2 style={{ fontSize: "clamp(28px,4vw,38px)", margin: "12px 0 22px" }}>Welcome home.</h2>
              <p>
                As Pastor of Calvary Chapel of Hammonton, let me personally welcome you to our website,
                and tell you how excited I am about your interest in our church! I hope that our site
                will provide you with the information you&rsquo;re looking for, but if not, please feel
                free to contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
              <p>
                On behalf of my wife and myself, I would like to personally invite you to worship the
                Lord with us, and enjoy the fellowship of like-minded believers. It is our prayer for
                you that you grow in grace and have a deeper understanding of God&rsquo;s love for you!
              </p>
              <p className="signature serif-italic">Pastor Vince and Dianne Lombardo</p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO — cream */}
      <section className="hero">
        <div className="hero-arch" aria-hidden="true" />
        <div className="wrap hero-inner">
          <span className="eyebrow">Calvary Chapel &middot; {site.town}</span>
          <h1>There&rsquo;s a seat saved for you.</h1>
          <p className="hero-tag serif-italic">{site.tagline}.</p>
          <p className="hero-sub">
            Whoever you are and wherever you&rsquo;ve been, you&rsquo;re welcome here. Join us this
            Sunday, or watch online first &mdash; no pressure either way.
          </p>
          <div className="hero-actions">
            <Link href="/visit" className="btn btn-primary">Plan your first visit</Link>
            <Link href="/watch" className="btn btn-ghost"><IcPlay width={20} height={20} /> Watch a message</Link>
          </div>
          <div className="hero-times">
            {site.services.map((s, i) => (
              <span key={s.day}>
                {i > 0 && <span className="sep" style={{ marginRight: 22 }}>&middot;</span>}
                <span className="lbl">{s.day} </span><strong>{s.time}</strong>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FIND YOUR WAY — white */}
      <section className="section section-alt">
        <div className="wrap">
          <SectionHead center eyebrow="Find your way" title="Where would you like to go?" />
          <div className="steps">
            {PATHS.map((p) => (
              <Link className="step" href={p.href} key={p.href}>
                <span className="ic">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <span className="go">{p.cta} <IcArrow width={15} height={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
