import { beliefs } from "../site";
import { PageHeader } from "../../components/ui";

export const metadata = {
  title: "Statement of faith",
  description: "What Calvary Chapel of Hammonton believes about God, Scripture, salvation, the church, and the return of Christ.",
};

export default function Beliefs() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="What we believe."
        lead="The Word of God is the foundation on which this church operates and the basis by which it is governed."
      />

      <section className="section">
        <div className="wrap">
          <div className="beliefs">
            {beliefs.map((b) => (
              <article className="belief" key={b.t}>
                <span className="num" aria-hidden="true" />
                <div>
                  <h3>{b.t}</h3>
                  <p>{b.b}</p>
                  <span className="refs">{b.r}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
