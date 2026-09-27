import Link from "next/link";
import { churchCenter } from "../site";
import { PageHeader } from "../../components/ui";
import { IcKids, IcHeart, IcBook, IcConnect, IcPray, IcArrow } from "../../components/icons";

export const metadata = {
  title: "Ministries",
  description: "Children's Ministry, GriefShare, discipleship, and ways to get connected at Calvary Chapel of Hammonton.",
};

const MINISTRIES = [
  {
    icon: <IcKids width={30} height={30} />,
    title: "Children's Ministry",
    body: "A safe, warm, and joyful place where kids are taught biblically and learn who Jesus is at their own level, while you worship.",
    href: churchCenter.forms.children,
    cta: "Register your child",
  },
  {
    icon: <IcHeart width={30} height={30} />,
    title: "GriefShare",
    body: "Support for anyone walking through the loss of someone close. You don't have to carry it alone.",
    href: "/griefshare",
    cta: "Learn more",
    internal: true,
  },
  {
    icon: <IcBook width={30} height={30} />,
    title: "Discipleship",
    body: "New to following Jesus, or ready to go deeper? We'll walk with you and help you grow in grace.",
    href: churchCenter.forms.discipled,
    cta: "Get discipled",
  },
  {
    icon: <IcConnect width={30} height={30} />,
    title: "Get connected",
    body: "Church is a family, not an event. Find people, serve alongside them, and belong here.",
    href: churchCenter.forms.connected,
    cta: "Get connected",
  },
  {
    icon: <IcPray width={30} height={30} />,
    title: "Prayer",
    body: "Whatever you're facing, our prayer team wants to bring it before the Lord with you.",
    href: churchCenter.forms.prayer,
    cta: "Request prayer",
  },
];

export default function Ministries() {
  return (
    <>
      <PageHeader
        eyebrow="Ministries"
        title="Find your place."
        lead="Whatever season you're in — raising kids, grieving a loss, starting out in faith — there's a way in."
      />

      <section className="section">
        <div className="wrap">
          <div className="connect-grid">
            {MINISTRIES.map((m) => {
              const Card = m.internal ? Link : "a";
              return (
                <Card className="connect-card" href={m.href} key={m.title}>
                  <span className="ic">{m.icon}</span>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                  <span className="go">{m.cta} <IcArrow width={15} height={15} /></span>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
