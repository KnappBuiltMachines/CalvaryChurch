import { churchCenter, site } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import { IcGift, IcPhoneApp, IcMail } from "../../components/icons";

export const metadata = {
  title: "Give",
  description: "Give securely to Calvary Chapel of Hammonton online, through the Church Center app, or in person.",
};

export default function Give() {
  return (
    <>
      <PageHeader
        eyebrow="Give"
        title="Generosity that changes lives."
        lead="Everything we have is a gift. Giving is how we say thank you — and how ministry happens here in Hammonton and far beyond."
      />

      <section className="section">
        <div className="wrap prose">
          <blockquote>
            <p>God loves a cheerful giver.</p>
            <span className="ref">2 Corinthians 9:7</span>
          </blockquote>
          <p>
            Your giving supports the teaching of God&rsquo;s Word, the care of this church family, our
            Children&rsquo;s Ministry, GriefShare, and the work of sharing the gospel with those near
            and far. Thank you for partnering with us.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <SectionHead center eyebrow="How to give" title="Three simple ways." />
          <div className="connect-grid">
            <a className="connect-card" href={churchCenter.giving}>
              <span className="ic"><IcGift width={30} height={30} /></span>
              <h3>Online</h3>
              <p>Give once or set up recurring giving through our secure Church Center giving page.</p>
              <span className="go">Give now &rarr;</span>
            </a>
            <a className="connect-card" href={churchCenter.home}>
              <span className="ic"><IcPhoneApp width={30} height={30} /></span>
              <h3>In the app</h3>
              <p>Download the Church Center app and give from your phone in a few taps, any time.</p>
              <span className="go">Open Church Center &rarr;</span>
            </a>
            <a className="connect-card" href={`mailto:${site.email}`}>
              <span className="ic"><IcMail width={30} height={30} /></span>
              <h3>In person or by mail</h3>
              <p>Give during any service, or mail a check to the church office at {site.address.line1}, {site.address.line2}.</p>
              <span className="go">Contact the office &rarr;</span>
            </a>
          </div>

          <div className="note" style={{ marginTop: 44 }}>
            <strong>Secure and private.</strong> Online giving is processed by Church Center (Planning
            Center), not stored on this website. Your contribution statements are available any time
            inside your Church Center account.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="give">
            <span className="eyebrow">Ready?</span>
            <h2>Give securely in under a minute.</h2>
            <p>One time or recurring, by card or bank transfer &mdash; whatever works for you.</p>
            <a href={churchCenter.giving} className="btn">Give online</a>
          </div>
        </div>
      </section>
    </>
  );
}
