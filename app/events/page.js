import { events, calendarEmbedSrc, churchCenter } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";

export const metadata = {
  title: "Events",
  description: "Upcoming events, seminars, and gatherings at Calvary Chapel of Hammonton.",
};

export default function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="What's coming up."
        lead="Seminars, gatherings, trips, and the everyday rhythm of life together."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Featured" title="Don't miss these." />
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
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <SectionHead center eyebrow="Full calendar" title="Everything on the schedule."
            lead="Our church calendar, updated as things are added." />
          <div className="cal-frame">
            <iframe src={calendarEmbedSrc} loading="lazy" title="Calvary Chapel of Hammonton calendar" />
          </div>
          <div style={{ textAlign: "center", marginTop: 34 }}>
            <a href={churchCenter.calendar} className="btn btn-ghost">Open in Church Center</a>
          </div>
        </div>
      </section>
    </>
  );
}
