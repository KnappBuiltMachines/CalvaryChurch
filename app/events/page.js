import { registrations, calendarEmbedSrc, churchCenter } from "../site";
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
        </div>
      </section>


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
