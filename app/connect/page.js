import { churchCenter, site } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import { IcPray, IcConnect, IcBook, IcKids, IcGift, IcPhoneApp, IcCalendar, IcMail, IcArrow } from "../../components/icons";

export const metadata = {
  title: "Connect",
  description: "Prayer requests, discipleship, groups, kids' registration, giving, and the Church Center app — all in one place.",
};

const CARDS = [
  { icon: <IcPray width={30} height={30} />, title: "Get prayer", body: "Tell us what you're carrying. Our prayer team will bring it before the Lord with you.", href: churchCenter.forms.prayer, cta: "Request prayer" },
  { icon: <IcConnect width={30} height={30} />, title: "Get connected", body: "Find people, serve alongside them, and belong here beyond Sunday morning.", href: churchCenter.forms.connected, cta: "Get connected" },
  { icon: <IcBook width={30} height={30} />, title: "Get discipled", body: "New to faith or ready to go deeper? Someone will walk the next stretch with you.", href: churchCenter.forms.discipled, cta: "Get discipled" },
  { icon: <IcKids width={30} height={30} />, title: "Children's Ministry", body: "Register your child so check-in is quick and easy on Sunday morning.", href: churchCenter.forms.children, cta: "Register your child" },
  { icon: <IcCalendar width={30} height={30} />, title: "Groups & events", body: "Browse what's happening and sign up for anything that's open.", href: churchCenter.groups, cta: "Browse groups" },
  { icon: <IcGift width={30} height={30} />, title: "Give", body: "Give once or recurring, securely, from anywhere.", href: churchCenter.giving, cta: "Give online" },
];

export default function Connect() {
  return (
    <>
      <PageHeader
        eyebrow="Connect"
        title="Everything, in one place."
        lead="Prayer, groups, kids' registration, giving, and events — no hunting around for the right link."
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
                <a href={`mailto:${site.email}`} className="btn btn-ghost"><IcMail width={18} height={18} /> Email the office</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="wrap">
          <div className="note">
            <strong>Prefer to talk to a person?</strong> Call the church office at{" "}
            <a href={site.phoneHref} style={{ color: "#6A5320", fontWeight: 600 }}>{site.phone}</a>,{" "}
            {site.officeHours.toLowerCase()}. We&rsquo;d love to hear from you.
          </div>
        </div>
      </section>
    </>
  );
}
