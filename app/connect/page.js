import { churchCenter, site } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import { IcPray, IcConnect, IcPhoneApp, IcCalendar, IcMail, IcPhone, IcClock, IcArrow } from "../../components/icons";

export const metadata = {
  title: "Connect",
  description: "Prayer requests, groups, the Church Center app, and how to reach the Calvary Chapel of Hammonton office.",
};

const CARDS = [
  { icon: <IcPray width={30} height={30} />, title: "Get prayer", body: "Whatever you're carrying, our prayer team wants to bring it before the Lord with you.", href: churchCenter.forms.prayer, cta: "Request prayer" },
  { icon: <IcConnect width={30} height={30} />, title: "Get connected", body: "Church is a family, not an event. Find people, serve alongside them, and belong here beyond Sunday morning.", href: churchCenter.forms.connected, cta: "Get connected" },
  { icon: <IcCalendar width={30} height={30} />, title: "Groups", body: "Browse our groups and sign up for anything that's open.", href: churchCenter.groups, cta: "Browse groups" },
];

export default function Connect() {
  return (
    <>
      <PageHeader
        eyebrow="Connect"
        title="Everything, in one place."
        lead="Prayer, groups, the Church Center app, and how to reach the office — no hunting around for the right link."
      />

      <section className="section">
        <div className="wrap">
          <div className="connect-grid">
            {CARDS.map((c) => (
              <a className="connect-card" href={c.href} key={c.title}>
                <span className="ic">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="go">{c.cta} <IcArrow width={15} height={15} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* The app */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="split">
            <div className="split-panel" aria-hidden="true"><IcPhoneApp /></div>
            <div>
              <SectionHead eyebrow="Church Center" title="Our church, in your pocket." />
              <p style={{ color: "var(--muted)", fontSize: 18 }}>
                The Church Center app keeps your giving, your groups, your kids&rsquo; check-in, and the
                church calendar together in one login. Everything you sign up for on this site lands
                there.
              </p>
              <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: 28 }}>
                <a href={churchCenter.home} className="btn btn-primary">Open Church Center</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact — the one place on the site for office contact details */}
      <section className="section" id="contact">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <SectionHead center eyebrow="Contact" title="Prefer to talk to a person?" />
          <ul className="visit-facts">
            <li>
              <span className="ic"><IcPhone width={22} height={22} /></span>
              <span>
                <span className="k">Church office</span>
                <span className="v"><a href={site.phoneHref} style={{ color: "var(--pine)", fontWeight: 500 }}>{site.phone}</a></span>
              </span>
            </li>
            <li>
              <span className="ic"><IcClock width={22} height={22} /></span>
              <span>
                <span className="k">Office hours</span>
                <span className="v">{site.officeHours}</span>
              </span>
            </li>
            <li>
              <span className="ic"><IcMail width={22} height={22} /></span>
              <span>
                <span className="k">Email</span>
                <span className="v"><a href={`mailto:${site.email}`} style={{ color: "var(--pine)", fontWeight: 500 }}>{site.email}</a></span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
