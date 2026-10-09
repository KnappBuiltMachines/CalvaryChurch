import Link from "next/link";
import { site, showStaff } from "../site";
import { PageHeader } from "../../components/ui";
import { IcArrow } from "../../components/icons";

export const metadata = {
  title: "Meet Our Pastor",
  description: `A welcome from ${site.pastors} of ${site.name}.`,
};

export default function Pastor() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Meet Our Pastor"
        lead="A personal welcome from Pastor Vince and Dianne."
      />

      <section className="section">
        <div className="wrap pastor-page">
          <figure className="pastor-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about/pastor-vince-dianne.jpg"
              alt={site.pastors}
              width={1402}
              height={1122}
            />
          </figure>

          <div className="pastor-letter">
            <p>
              As Pastor of {site.name}, let me personally welcome you to our website, and tell you
              how excited I am about your interest in our church! I hope that our site will provide
              you with the information you&rsquo;re looking for, but if not, please feel free to
              contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <p>
              On behalf of my wife and myself, I would like to personally invite you to worship the
              Lord with us, and enjoy the fellowship of like-minded believers. It is our prayer for
              you that you grow in grace and have a deeper understanding of God&rsquo;s love for
              you!
            </p>
            <p className="pastor-signature serif-italic">{site.pastors}</p>

            <div className="pastor-actions">
              <Link href="/visit" className="btn btn-primary">Plan Your Visit</Link>
              {showStaff && (
                <Link href="/staff" className="go">Meet Our Staff <IcArrow width={15} height={15} /></Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
