import Link from "next/link";
import { site, churchCenter, events } from "./site";
import SocialRow from "../components/SocialRow";
import { SectionHead } from "../components/ui";
import { IcCoffee, IcKids, IcMap, IcPray, IcConnect, IcHeart, IcBook, IcPlay, IcArrow } from "../components/icons";

export default function Home() {
  return (
    <>
      {/* HERO */}
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

      {/* PASTOR'S WELCOME */}
      <section className="section">
        <div className="wrap">
          <div className="welcome-split">
            <div className="welcome-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about/pastors.png" alt="Pastor Vince and Dianne Lombardo" />
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

      {/* NEW HERE */}
      <section className="section section-alt">
        <div className="wrap">
          <SectionHead center eyebrow="New here?" title="Everything you're wondering, answered."
            lead="Walking into a church for the first time takes courage. Here's what to expect before you even arrive." />
          <div className="cards">
            <article className="card">
              <div className="card-arch"><IcCoffee /></div>
              <div className="card-body">
                <h3>What a Sunday feels like</h3>
                <p>Come as you are. Grab a coffee, find a seat, and settle in for worship and a practical message from God&rsquo;s Word. No spotlight, no pressure.</p>
              </div>
            </article>
            <article className="card">
              <div className="card-arch"><IcKids /></div>
              <div className="card-body">
                <h3>Your kids are cared for</h3>
                <p>Our Children&rsquo;s Ministry offers a safe, warm, and fun place for your kids &mdash; so you can worship knowing they&rsquo;re loved and looked after.</p>
              </div>
            </article>
            <article className="card">
              <div className="card-arch"><IcMap /></div>
              <div className="card-body">
                <h3>Getting here is easy</h3>
                <p>Free parking right out front on Egg Harbor Rd., and a friendly face at the door to point you where you need to go.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONNECT WITH US — social */}
      <section className="section section-alt">
        <div className="wrap">
          <SectionHead center eyebrow="Stay connected" title="Follow along during the week." />
          <SocialRow />
        </div>
      </section>

      {/* NEXT STEPS — real Church Center forms */}
      <section className="section section-alt" id="connect">
        <div className="wrap">
          <SectionHead center eyebrow="Take a next step"
            title="However you're doing, there's a place to go from here." />
          <div className="steps">
            <a className="step" href={churchCenter.forms.prayer}>
              <span className="ic"><IcPray width={28} height={28} /></span>
              <h3>Get prayer</h3>
              <p>Share what you&rsquo;re carrying. Our team will pray with you and for you.</p>
              <span className="go">Request prayer <IcArrow width={15} height={15} /></span>
            </a>
            <a className="step" href={churchCenter.forms.connected}>
              <span className="ic"><IcConnect width={28} height={28} /></span>
              <h3>Get connected</h3>
              <p>Build real friendships and find your place in the family beyond Sunday morning.</p>
              <span className="go">Get connected <IcArrow width={15} height={15} /></span>
            </a>
            <a className="step" href={churchCenter.forms.discipled}>
              <span className="ic"><IcBook width={28} height={28} /></span>
              <h3>Get discipled</h3>
              <p>New to following Jesus, or ready to go deeper? Let&rsquo;s take the next step together.</p>
              <span className="go">Get discipled <IcArrow width={15} height={15} /></span>
            </a>
            <Link className="step" href="/griefshare">
              <span className="ic"><IcHeart width={28} height={28} /></span>
              <h3>GriefShare</h3>
              <p>Walking through loss? Find support and hope alongside others who understand.</p>
              <span className="go">Learn more <IcArrow width={15} height={15} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="What's coming up" title="Life together, on the calendar." />
          <div className="event-list">
            {events.map((e) => (
              <article className="event" key={e.title}>
                <div>
                  <span className="tag">{e.tag}</span>
                  <h3>{e.title}</h3>
                  <span className="when">{e.when}</span>
                  <p>{e.blurb}</p>
                </div>
                <a href={e.href} className="btn btn-ghost">{e.cta}</a>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 34 }}>
            <Link href="/events" className="btn btn-primary">See the full calendar</Link>
          </div>
        </div>
      </section>

      {/* GIVE */}
      <section className="section">
        <div className="wrap">
          <div className="give">
            <span className="eyebrow">Give</span>
            <h2>Generosity that changes lives.</h2>
            <p>Your giving fuels ministry here in Hammonton and far beyond. Give securely through Church Center &mdash; one time or recurring.</p>
            <a href={churchCenter.giving} className="btn">Give online</a>
          </div>
        </div>
      </section>
    </>
  );
}
