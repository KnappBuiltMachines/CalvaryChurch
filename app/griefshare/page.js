import { site } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import { IcHeart } from "../../components/icons";

export const metadata = {
  title: "GriefShare",
  description: "GriefShare at Calvary Chapel of Hammonton — support and hope for anyone grieving the death of someone close.",
};

// Our GriefShare ministry listing (group schedule, contact info, and sign-up).
const GRIEFSHARE_MINISTRY = "https://find.griefshare.org/ministries/199420";

export default function GriefShare() {
  return (
    <>
      <PageHeader
        eyebrow="Care"
        title="GriefShare"
        lead="Grief is lonely work. It doesn't have to be done alone."
      />

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split-panel" aria-hidden="true"><IcHeart /></div>
            <div>
              <SectionHead eyebrow="What it is" title="A place to grieve honestly." />
              <p style={{ color: "var(--muted)", fontSize: 18 }}>
                GriefShare brings together people who have lost someone they love. You&rsquo;ll find
                practical help, honest conversation, and the steady hope of Scripture &mdash; alongside
                others who understand, because they&rsquo;re walking it too.
              </p>
              <p style={{ color: "var(--muted)", fontSize: 18, marginTop: 20 }}>
                You&rsquo;re welcome to come and simply listen. There is no expectation that you share
                anything before you&rsquo;re ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More information */}
      <section className="section section-alt">
        <div className="wrap">
          <SectionHead
            center
            eyebrow="Learn more"
            title="Find our GriefShare group."
            lead="See meeting times, session details, and how to sign up on our GriefShare ministry page."
          />
          <div style={{ textAlign: "center" }}>
            <a href={GRIEFSHARE_MINISTRY} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              More Information
            </a>
          </div>
          <div className="note" style={{ marginTop: 36 }}>
            <strong>Not sure if it&rsquo;s for you?</strong> Call the church office at{" "}
            <a href={site.phoneHref} style={{ color: "#6A5320", fontWeight: 600 }}>{site.phone}</a>{" "}
            and just ask. No commitment, no pressure.
          </div>
        </div>
      </section>
    </>
  );
}
