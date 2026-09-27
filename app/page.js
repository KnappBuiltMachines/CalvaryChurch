import Link from "next/link";
import { site } from "./site";
import SocialRow from "../components/SocialRow";
import { SectionHead } from "../components/ui";
import { IcCoffee, IcKids, IcMap, IcPlay } from "../components/icons";

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

      {/* NEW HERE — white */}
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
                <p>Free parking in the lot adjacent to the church, and a friendly face at the door to point you where you need to go.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STAY CONNECTED — cream */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Stay connected" title="Follow along during the week." />
          <SocialRow />
        </div>
      </section>
    </>
  );
}
