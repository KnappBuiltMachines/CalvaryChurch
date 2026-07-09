import { IcArrow, IcKids } from "./icons";

export default function RegistrationList({ items, columns = 3 }) {
  if (!items?.length) return null;

  return (
    <div className={columns === 3 ? "reg-grid" : "reg-grid reg-grid-2"}>
      {items.map((e) => (
        <a className="reg-card" href={e.href} key={e.id}>
          <div className="reg-thumb" aria-hidden="true">
            {e.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={e.logo} alt="" />
            ) : (
              <IcKids width={34} height={34} />
            )}
          </div>
          <div className="reg-body">
            <span className={e.open ? "tag" : "tag tag-muted"}>
              {e.open ? "Registration open" : "Coming soon"}
            </span>
            <h3>{e.title}</h3>
            {e.when && <span className="when">{e.when}</span>}
            {e.blurb && <p>{e.blurb}</p>}
            <span className="go">
              Register <IcArrow width={15} height={15} />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
