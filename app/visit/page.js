import { site, churchCenter } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import { IcClock, IcPin, IcPhone, IcMail, IcCoffee, IcKids, IcMap } from "../../components/icons";

export const metadata = {
  title: "Plan a visit",
  description: "Service times, directions, parking, and what to expect on your first Sunday at Calvary Chapel of Hammonton.",
};

export default function Visit() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&ll=${site.address.lat},${site.address.lng}&z=16&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address.mapsQuery)}`;

  return (
    <>
      <PageHeader
        eyebrow="Plan a visit"
        title="We'd love to meet you."
        lead="Here's everything you need to know before your first Sunday — so the only thing left to do is show up."
      />

      {/* Facts + map */}
      <section className="section">
        <div className="wrap">
          <div className="visit-grid">
            <div>
              <SectionHead eyebrow="Where &amp; when" title="Find us on Egg Harbor Rd." />
              <ul className="visit-facts">
                <li>
                  <span className="ic"><IcClock width={22} height={22} /></span>
                  <span>
                    <span className="k">Service times</span>
                    <span className="v">{site.services.map((s) => `${s.day} ${s.time}`).join("  \u00B7  ")}</span>
                  </span>
                </li>
                <li>
                  <span className="ic"><IcPin width={22} height={22} /></span>
                  <span>
                    <span className="k">Address</span>
                    <span className="v">{site.address.line1}, {site.address.line2}</span>
                  </span>
                </li>
                <li>
                  <span className="ic"><IcPhone width={22} height={22} /></span>
                  <span>
                    <span className="k">Church office</span>
                    <span className="v"><a href={site.phoneHref} style={{ color: "var(--pine)", fontWeight: 500 }}>{site.phone}</a> &middot; {site.officeHours}</span>
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
              <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: 28 }}>
                <a href={directions} className="btn btn-primary">Get directions</a>
                <a href={churchCenter.forms.contact} className="btn btn-ghost">Tell us you&rsquo;re coming</a>
              </div>
            </div>
            <div className="map-frame">
              <iframe src={mapSrc} loading="lazy" title={`Map to ${site.name}`} referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section section-alt">
        <div className="wrap">
          <SectionHead center eyebrow="What to expect" title="No surprises, no pressure." />
          <div className="cards">
            <article className="card">
              <div className="card-arch"><IcCoffee /></div>
              <div className="card-body">
                <h3>Come as you are</h3>
                <p>There&rsquo;s no dress code. You&rsquo;ll find people in jeans and people in their Sunday best, and nobody&rsquo;s counting. Grab coffee, find a seat, and take it all in.</p>
              </div>
            </article>
            <article className="card">
              <div className="card-arch"><IcKids /></div>
              <div className="card-body">
                <h3>Kids are welcome</h3>
                <p>Our Children&rsquo;s Ministry cares for your little ones during the service. Arrive a few minutes early and a volunteer will walk you through check-in.</p>
              </div>
            </article>
            <article className="card">
              <div className="card-arch"><IcMap /></div>
              <div className="card-body">
                <h3>Parking is free</h3>
                <p>Pull right into the lot on Egg Harbor Rd. Someone will be near the entrance to greet you and answer any question you have.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Worship service rhythm */}
      <section className="section">
        <div className="wrap prose">
          <SectionHead center eyebrow="The hour itself" title="What a service looks like." />
          <p>
            We gather to worship the Lord through music, to open God&rsquo;s Word together, and to pray
            for one another. Communion and water baptism are practiced regularly, in accordance with
            Scripture.
          </p>
          <blockquote>
            <p>They continued steadfastly in the apostles&rsquo; doctrine and fellowship, in the breaking of bread, and in prayers.</p>
            <span className="ref">Acts 2:42</span>
          </blockquote>
          <p>
            If you have a question we haven&rsquo;t answered here, call the office at{" "}
            <a href={site.phoneHref} style={{ color: "var(--pine)", fontWeight: 500 }}>{site.phone}</a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} style={{ color: "var(--pine)", fontWeight: 500 }}>{site.email}</a>.
            We&rsquo;d rather answer it now than have you wonder on Sunday morning.
          </p>
        </div>
      </section>
    </>
  );
}
