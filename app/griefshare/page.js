import { site } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import { IcHeart } from "../../components/icons";

export const metadata = {
  title: "GriefShare",
  description: "GriefShare at Calvary Chapel of Hammonton — support and hope for anyone grieving the death of someone close.",
};

const GRIEFSHARE_EVENT = "https://find.griefshare.org/events/295440";

export default function GriefShare() {
  return (
    <>
      <PageHeader
        eyebrow="Care"
        title="GriefShare."
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

      {/* The real upcoming seminar */}
      <section className="section section-alt">
        <div className="wrap">
          <SectionHead center eyebrow="Coming up" title="Loss of a Spouse" />
          <div className="event-list">
            <article className="event">
              <div>
                <span className="tag">Seminar</span>
                <h3>Loss of a Spouse</h3>
                <span className="when">August 16, 2026 &middot; 1:00pm ET</span>
                <p>
                  A one-day seminar for anyone grieving the death of a husband or wife. Hosted at{" "}
                  {site.name}. Contact Rita Cohen for more information.
                </p>
              </div>
              <a href={GRIEFSHARE_EVENT} className="btn btn-primary">Register or learn more</a>
            </article>
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
