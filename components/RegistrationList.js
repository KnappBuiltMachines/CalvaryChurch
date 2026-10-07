import { IcArrow, IcKids } from "./icons";

export default function RegistrationList({ items }) {
  if (!items?.length) return null;

  return (
    <div
      className="reg-grid"
      // A lone card centers instead of sitting in the left column of the grid.
      style={items.length === 1 ? { gridTemplateColumns: "minmax(0, 420px)", justifyContent: "center" } : undefined}
    >
      {items.map((e) => (
        <a className="reg-card" href={e.href} key={e.title}>
          {e.image ? (
            <div className="reg-media">
              {/* Plain <img>: artwork is already sized, no next/image config needed. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={e.image} alt={`${e.title} artwork`} loading="lazy" />
              {e.featured && (
                <span className="reg-featured">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l2.9 6.2 6.6.9-4.8 4.6 1.2 6.6L12 17.2 6.1 20.3l1.2-6.6L2.5 9.1l6.6-.9z" />
                  </svg>
                  Featured
                </span>
              )}
            </div>
          ) : (
            <div className="reg-thumb" aria-hidden="true">
              <IcKids width={34} height={34} />
            </div>
          )}

          <div className="reg-body">
            <span className={e.open ? "tag" : "tag tag-muted"}>
              {e.open ? "Registration Open" : "Coming Soon"}
            </span>
            <h3>{e.title}</h3>
            {e.when && <span className="when">{e.when}</span>}
            {e.blurb && <p>{e.blurb}</p>}
            <span className="go">
              {e.open ? "Register" : "Details"} <IcArrow width={15} height={15} />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
