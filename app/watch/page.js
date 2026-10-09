import { social, latestMessage } from "../site";
import { PageHeader, SectionHead } from "../../components/ui";
import { IcPlay, IcYouTube } from "../../components/icons";

export const metadata = {
  title: "Watch",
  description: "Watch and listen to messages from Calvary Chapel of Hammonton, any time.",
};

export default function Watch() {
  return (
    <>
      <PageHeader
        eyebrow="Watch &amp; listen"
        title="Messages, any time."
        lead="Missed a Sunday, traveling, or just want to see what we're about before you visit? Every message is here."
      />

      <section className="section">
        <div className="wrap">
          <div className="watch-card">
            <a className="watch-thumb watch-photo" href={latestMessage.watchUrl} aria-label="Play the latest message">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/watch/worship.jpg" alt="The worship team leading a Sunday service at Calvary Chapel of Hammonton" />
              <span className="home-play" aria-hidden="true"><IcPlay width={28} height={28} /></span>
            </a>
            <div className="watch-meta">
              <span className="eyebrow">{latestMessage.series}</span>
              <h3>{latestMessage.title}</h3>
              <p className="by">{latestMessage.speaker}</p>
              <a href={latestMessage.watchUrl} className="btn btn-primary" style={{ marginTop: 22 }}>
                <IcPlay width={20} height={20} /> Watch Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <SectionHead center eyebrow="The full library"
            title="Every message on our channel."
            lead="Sunday teachings and Wednesday studies, going back years. Subscribe and never miss one." />
          <div style={{ textAlign: "center" }}>
            <a href={social.youtube} className="btn btn-primary">
              <IcYouTube width={20} height={20} /> Visit Our YouTube Channel
            </a>
          </div>
          <div className="note" style={{ marginTop: 40 }}>
            <strong>Can&rsquo;t make it in person?</strong> Watch live or catch up later &mdash; either way, you&rsquo;re part of this.
          </div>
        </div>
      </section>
    </>
  );
}
