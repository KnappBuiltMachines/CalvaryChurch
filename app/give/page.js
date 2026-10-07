import { churchCenter, everyOrgGiving, site } from "../site";
import { PageHeader } from "../../components/ui";
import { IcGift, IcHeart } from "../../components/icons";

export const metadata = {
  title: "Give",
  description: "Give to Calvary Chapel of Hammonton \u2014 100% of your gift supports the church, or give through Every.org by crypto, PayPal, stocks, Apple Pay, and more.",
};

export default function Give() {
  return (
    <>
      <PageHeader
        eyebrow="Give"
        title="Generosity that changes lives."
        lead="Everything we have is a gift. Giving is how ministry happens here in Hammonton and far beyond. Choose the option that works best for you below."
      />

      {/* OPTION 1 — Church Center (white) */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="give-option">
            <div className="give-option-head">
              <span className="ic"><IcGift width={30} height={30} /></span>
              <div>
                <h2>Calvary Chapel</h2>
                <p className="give-lede">100% of your contribution goes straight to supporting our church.</p>
              </div>
            </div>
            <p>
              Donating to Calvary Chapel of Hammonton supports a community dedicated to bringing honor
              and glory to God through various ministries and outreach programs. Your contributions
              help fund:
            </p>
            <ul className="give-funds">
              <li><strong>Community Outreach</strong> &mdash; programs that provide support and assistance to those in need within the local community.</li>
              <li><strong>Youth &amp; Children&rsquo;s Ministries</strong> &mdash; activities and educational programs that nurture the spiritual growth of young members.</li>
              <li><strong>Missionary Work</strong> &mdash; efforts to spread the message of faith and provide aid to communities around the world.</li>
              <li><strong>Church Maintenance &amp; Development</strong> &mdash; ensuring the church facilities are well-maintained and can continue to serve as a place of worship and community gathering.</li>
            </ul>
            <a href={churchCenter.giving} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Give Through Church Center &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* OPTION 2 — Every.org (cream) */}
      <section className="section">
        <div className="wrap">
          <div className="give-option">
            <div className="give-option-head">
              <span className="ic"><IcHeart width={30} height={30} /></span>
              <div>
                <h2>Every.org</h2>
                <p className="give-lede">A third-party option that lets you give in multiple ways &mdash; crypto, PayPal, stocks, Apple Pay, and more.</p>
              </div>
            </div>
            <p>
              100% of your donation is tax-deductible to the extent allowed by US law. Your donation is
              made to Every.org, a tax-exempt US 501(c)(3) charity that grants unrestricted funds to
              Calvary Chapel of Hammonton on your behalf. As a legal matter, Every.org must provide any
              donations to Calvary Chapel of Hammonton on an unrestricted basis, regardless of any
              designations or restrictions made by you.
            </p>
            <a href={everyOrgGiving} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Give Through Every.org &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* IN PERSON / BY MAIL (white) */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="note">
            <strong>Prefer to give in person?</strong> You can give during any service, or mail a check
            to the church office at {site.address.line1}, {site.address.line2}. Questions about giving?
            Email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
          </div>
        </div>
      </section>
    </>
  );
}
