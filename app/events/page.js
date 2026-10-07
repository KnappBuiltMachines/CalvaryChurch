import { events, registrations, calendarEmbedSrc, churchCenter } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import RegistrationList from "../../components/RegistrationList";

export const metadata = {
  title: "Events",
  description: "Upcoming events, registrations, seminars, and gatherings at Calvary Chapel of Hammonton.",
};

export default function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="What's coming up."
        lead="Sign-ups, seminars, trips, and the everyday rhythm of life together."
      />

      {/* Open registrations */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Open registrations" title="Sign up for what's next." />
          <RegistrationList items={registrations} />
          <div style={{ textAlign: "center", marginTop: 34 }}>
            <a href={churchCenter.registrationsIndex} className="btn btn-ghost">
              See All Registrations
            </a>
          </div>
        </div>
      </section>

      {/* Featured */}
      {events.length > 0 && (
        <section className="section section-alt">
          <div className="wrap">
            <SectionHead center eyebrow="Featured" title="Also on the horizon." />
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
      )}

      {/* Calendar */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Full calendar" title="Everything on the schedule." />
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
