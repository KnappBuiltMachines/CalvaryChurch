import Link from "next/link";
import { site, churchCenter, registrations, events, latestMessage } from "./site";
import { SectionHead } from "../components/ui";
import { IcArrow, IcCalendar, IcPlay } from "../components/icons";

// =============================================================================
//  HOME PAGE
//  Photos live in  public/home/  — replace a file with the same name to swap it.
//  Announcements pull automatically from `registrations` and `events` in site.js.
// =============================================================================

// "Get plugged in" cards. Leave `image` out to show an icon tile instead.
const PLUGGED_IN = [
  {
    title: "Children's Ministry",
    body: "A safe, warm, joyful place where kids learn who Jesus is while you worship.",
    href: churchCenter.forms.children,
    cta: "Sign Up",
    image: "/home/kids.jpg",
    alt: "Kids watching a children's ministry program",
  },
  {
    title: "Baptism",
    body: "Ready to publicly declare your faith in Jesus? Sign up to be baptized.",
    href: churchCenter.forms.contact,
    cta: "Sign Up for Baptism",
    image: "/home/baptism.jpg",
    alt: "Baptism — sign in here",
  },
  {
    title: "Prayer & Groups",
    body: "Share a prayer request or get connected with others.",
    href: churchCenter.groups,
    cta: "Get Connected",
    image: "/home/prayer.jpg",
    alt: "Praying together at the front of the sanctuary",
  },
  {
    title: "GriefShare",
    body: "Support for anyone walking through the loss of someone close.",
    href: "/griefshare",
    cta: "Learn More",
    image: "/home/griefshare.jpg",
    alt: "GriefShare grief recovery support group",
  },
];

// Internal links ("/…") use Next's Link; anything else is a plain <a>.
function SmartLink({ href, ...props }) {
  return href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} {...props} />;
}

export default function Home() {
  // Open registrations first, then featured events. Two cards max + the calendar card.
  const announcements = [
    ...registrations
      .filter((r) => r.open)
      .map((r) => ({
        title: r.title, when: r.when, blurb: r.blurb, href: r.href, image: r.image,
        position: r.position, featured: r.featured,
        tag: r.tag || "Registration Open", cta: r.cta || "Register",
      })),
    ...events.map((e) => ({
      title: e.title, when: e.when, blurb: e.blurb, href: e.href, image: e.image,
      position: e.position, tag: e.tag || "Event", cta: e.cta || "Details",
    })),
  ].slice(0, 3);

  return (
    <>
      {/* 1. HERO — the church building */}
      <section className="home-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="home-hero-img"
          src="/home/church-front.jpg"
          alt={`${site.name} building on S. Egg Harbor Rd.`}
          fetchPriority="high"
        />
        <div className="home-hero-shade" aria-hidden="true" />
        <div className="wrap home-hero-inner">
          <span className="eyebrow">Welcome to</span>
          <h1>{site.name}</h1>
          <p className="home-hero-tag serif-italic">{site.tagline}.</p>
          <p className="home-hero-sub">
            Whoever you are and wherever you&rsquo;ve been, you&rsquo;re welcome here. There&rsquo;s
            a seat saved for you.
          </p>
          <div className="hero-actions">
            <Link href="/visit" className="btn btn-light">Plan Your First Visit</Link>
            <Link href="/about" className="btn btn-outline-light">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICE TIMES BAND */}
      <section className="home-band">
        <div className="wrap home-band-inner">
          <div className="home-band-times">
            {site.services.map((s) => (
              <span key={s.day}><span className="lbl">{s.day}</span> <strong>{s.time}</strong></span>
            ))}
            <span>{site.address.line1}, {site.address.line2}</span>
          </div>
        </div>
      </section>

      {/* 3. ANNOUNCEMENTS & UPDATES */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="From your church family" title="Announcements & Updates" />
          <div className="home-announce">
            {announcements.map((a) => (
              <SmartLink className="reg-card" href={a.href} key={a.title}>
                {a.image ? (
                  <div className="reg-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.image}
                      alt={`${a.title} artwork`}
                      loading="lazy"
                      style={a.position ? { objectPosition: a.position } : undefined}
                    />
                    {a.featured && <span className="reg-featured">Featured</span>}
                  </div>
                ) : (
                  <div className="reg-media home-media-icon" aria-hidden="true">
                    <IcCalendar width={44} height={44} />
                  </div>
                )}
                <div className="reg-body">
                  <span className="tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  {a.when && <span className="when">{a.when}</span>}
                  {a.blurb && <p>{a.blurb}</p>}
                  <span className="go">{a.cta} <IcArrow width={15} height={15} /></span>
                </div>
              </SmartLink>
            ))}
            <Link href="/events" className="home-all-events">
              <IcCalendar width={34} height={34} />
              <div>
                <h3>See everything that&rsquo;s coming up</h3>
                <p>Open registrations and the full church calendar.</p>
              </div>
              <span className="go">All Events <IcArrow width={15} height={15} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHO WE ARE */}
      <section className="section section-alt">
        <div className="wrap home-who">
          <div className="home-who-copy">
            <span className="eyebrow">Who we are</span>
            <h2>A family of believers, right here in Hammonton.</h2>
            <p>
              Our supreme desire is to know Christ and to be conformed to His image by the power of
              the Holy Spirit. We gather to worship through music, break bread, pray together, and
              encourage one another.
            </p>
            <p>Sharing God&rsquo;s love with those near and far is a priority &mdash; starting with our own neighbors.</p>
            <div className="home-actions">
              <Link href="/about" className="btn btn-primary">More About Us</Link>
              <Link href="/beliefs" className="btn btn-ghost">What We Believe</Link>
            </div>
          </div>
          <div className="home-collage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="tall" src="/home/worship.jpg" alt="Worship on a Sunday morning" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/home/womens-gathering.jpg" alt="Women of the church gathered together" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/home/fellowship-men.jpg" alt="Church family fellowship" loading="lazy" style={{ objectPosition: "center 25%" }} />
          </div>
        </div>
      </section>

      {/* 5. GET PLUGGED IN */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            center
            eyebrow="Get plugged in"
            title="Find your place."
            lead="Our heart is to help one another build deeper relationships with God, and with each other."
          />
          <div className="home-plug">
            {PLUGGED_IN.map((m) => (
              <SmartLink className="home-plug-card" href={m.href} key={m.title}>
                <div className={m.image ? "home-plug-media" : "home-plug-media home-plug-icon"}>
                  {m.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.image} alt={m.alt} loading="lazy" style={m.position ? { objectPosition: m.position } : undefined} />
                  ) : (
                    m.icon
                  )}
                </div>
                <div className="home-plug-body">
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                  <span className="go">{m.cta} <IcArrow width={15} height={15} /></span>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PASTOR — smaller, lower on the page */}
      <section className="section section-alt home-pastor-section">
        <div className="wrap home-pastor">
          <div className="home-pastor-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/about/pastor-vince-dianne.jpg" alt={site.pastors} loading="lazy" />
          </div>
          <div className="home-pastor-body">
            <span className="eyebrow">Our pastor</span>
            <h2>Pastor Vince &amp; Dianne Lombardo</h2>
            <p>
              &ldquo;On behalf of my wife and myself, I would like to personally invite you to worship
              the Lord with us, and enjoy the fellowship of like-minded believers.&rdquo;
            </p>
            <Link href="/pastor" className="go">Read Their Welcome <IcArrow width={15} height={15} /></Link>
          </div>
        </div>
      </section>

      {/* 7. LATEST MESSAGE */}
      <section className="section">
        <div className="wrap">
          <a className="watch-card home-watch" href={latestMessage.watchUrl}>
            <div className="home-watch-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/message.jpg" alt="Teaching from the Word" loading="lazy" />
              <span className="home-play" aria-hidden="true"><IcPlay width={28} height={28} /></span>
            </div>
            <div className="watch-meta">
              <span className="eyebrow">Latest message</span>
              <h3>{latestMessage.title}</h3>
              <p className="by">{latestMessage.speaker} &middot; {latestMessage.series}</p>
              <p className="by" style={{ marginTop: 8 }}>
                Can&rsquo;t make it in person? Watch online first &mdash; no pressure either way.
              </p>
              <span className="btn btn-primary">Watch Messages</span>
            </div>
          </a>
        </div>
      </section>

      {/* 8. STAY CONNECTED */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="give">
            <span className="eyebrow">Stay connected</span>
            <h2>Never miss what&rsquo;s happening.</h2>
            <p>Get updates, sign up for events, and send prayer requests through the Church Center app.</p>
            <div className="home-actions home-give-actions">
              <a href={churchCenter.home} className="btn">Open Church Center</a>
              <a href={churchCenter.forms.prayer} className="btn btn-outline-light">Request Prayer</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
