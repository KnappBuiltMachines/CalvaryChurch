import Link from "next/link";

export function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="pagehead">
      <div className="pagehead-arch" aria-hidden="true" />
      <div className="wrap pagehead-inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="pagehead-lead">{lead}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ eyebrow, title, body, href, cta, external = true }) {
  const Btn = external ? "a" : Link;
  return (
    <section className="section">
      <div className="wrap">
        <div className="give">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {body && <p>{body}</p>}
          <Btn href={href} className="btn">{cta}</Btn>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <div className={center ? "section-head center" : "section-head"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}
