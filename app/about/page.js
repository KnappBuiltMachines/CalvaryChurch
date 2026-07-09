import Link from "next/link";
import { site } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import { IcCross } from "../../components/icons";

export const metadata = {
  title: "Who we are",
  description: "Calvary Chapel of Hammonton is a family of believers dedicated to bringing honor and glory to God through all we do.",
};

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Who we are."
        lead="A family of believers, dedicated to bringing honor and glory to God through all we do."
      />

      <section className="section">
        <div className="wrap prose">
          <p>
            We realize that no matter what happens in our lives, God will use it for our good and His
            glory. Our supreme desire is to know Christ and to be conformed to His image by the power
            of the Holy Spirit.
          </p>
          <p>
            Our reason for existence is to love, worship, and bring glory to God. Our heart&rsquo;s
            desire is to help one another build deeper relationships with God, as well as with each
            other. We gather regularly to equip the family of God &mdash; worshiping our Lord through
            music, breaking bread, praying together, and encouraging relationships among like-minded
            believers. Discipleship, communion, and water baptism are actively practiced in accordance
            with God&rsquo;s infallible Word.
          </p>
          <blockquote>
            <p>They continued steadfastly in the apostles&rsquo; doctrine and fellowship, in the breaking of bread, and in prayers.</p>
            <span className="ref">Acts 2:42</span>
          </blockquote>
          <p>
            Sharing God&rsquo;s love with those near and far is also a priority. Jesus sent His
            followers out to make disciples of all nations &mdash; and He promised to be with them
            always, even to the end of the age.
          </p>
          <blockquote>
            <p>Go therefore and make disciples of all the nations&hellip; and lo, I am with you always.</p>
            <span className="ref">Matthew 28:19&ndash;20</span>
          </blockquote>
          <p>
            All of this is only possible through the inspiration, empowerment, and direction of the
            Holy Spirit. We would love to have you join us.
          </p>
        </div>
      </section>

      {/* Pastor */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="split">
            <div className="split-panel" aria-hidden="true"><IcCross /></div>
            <div>
              <SectionHead eyebrow="Our pastor" title="A personal welcome." />
              <p style={{ color: "var(--muted)", fontSize: 18 }}>
                &ldquo;Let me personally welcome you to our church, and tell you how excited I am about
                your interest. On behalf of my wife and myself, I would like to invite you to worship
                the Lord with us and enjoy the fellowship of like-minded believers. It is our prayer
                for you that you grow in grace and have a deeper understanding of God&rsquo;s love for
                you.&rdquo;
              </p>
              <p className="signature">&mdash; {site.pastors}</p>
              <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: 28 }}>
                <Link href="/beliefs" className="btn btn-primary">What we believe</Link>
                <Link href="/visit" className="btn btn-ghost">Plan a visit</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
