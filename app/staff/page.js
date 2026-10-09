import { notFound } from "next/navigation";
import { staff, showStaff } from "../site";
import { PageHeader } from "../../components/ui";

export const metadata = {
  title: "Our Staff",
  description: "Meet the staff of Calvary Chapel of Hammonton.",
};

// "Vince Lombardo" -> "VL" (used when no photo is set)
const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Staff() {
  // Hidden until photos and bios are ready. Turn on with  showStaff  in site.js.
  if (!showStaff) notFound();

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Our Staff"
        lead="The people who serve Calvary Chapel of Hammonton week in and week out."
      />

      <section className="section">
        <div className="wrap">
          <div className="staff-list">
            {staff.map((p, i) => (
              <article className="staff-member" key={`${p.name}-${i}`}>
                <div className="staff-photo">
                  {p.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.photo} alt={p.name} loading="lazy" />
                  ) : (
                    <span className="staff-initials" aria-hidden="true">{initials(p.name)}</span>
                  )}
                </div>
                <div className="staff-body">
                  <h2>{p.name}</h2>
                  {p.role && <span className="staff-role">{p.role}</span>}
                  {p.bio?.map((para, j) => <p key={j}>{para}</p>)}
                  {p.email && (
                    <a className="staff-email" href={`mailto:${p.email}`}>{p.email}</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
