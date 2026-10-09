// =============================================================================
//  Calvary Chapel of Hammonton — site configuration
//  ONE place to edit church facts, links, events, and sermons.
//  Values below were pulled from the live cchammonton.org pages.
//  Anything marked  // CONFIRM  needs a human to verify.
// =============================================================================

export const site = {
  name: "Calvary Chapel of Hammonton",
  shortName: "Calvary Chapel",
  tagline: "Loving God, loving people",
  town: "Hammonton, NJ",
  pastors: "Pastor Vince and Dianne Lombardo",

  address: {
    line1: "660 S. Egg Harbor Rd.",
    line2: "Hammonton, NJ 08037",
    lat: 39.620799,
    lng: -74.780999,
    mapsQuery: "660 S Egg Harbor Rd, Hammonton, NJ 08037",
  },
  phone: "609.704.8778",
  phoneHref: "tel:+16097048778",
  email: "info@cchammonton.org",
  officeHours: "Monday to Thursday, 9:00am \u2013 1:00pm",

  services: [
    { day: "Sundays", time: "9:00am & 10:30am" },
    { day: "Wednesdays", time: "7:00pm" },
  ],
};

// --- Church Center (Planning Center) --------------------------------------
// These handle giving, forms, registrations, groups, and check-in.
// The site links directly to them rather than rebuilding them.
export const CHURCH_CENTER_BASE = "https://cchammonton.churchcenter.com";
const CC = CHURCH_CENTER_BASE;

export const churchCenter = {
  home: `${CC}/pages/home`,
  giving: `${CC}/giving`,
  groups: `${CC}/groups`,
  calendar: `${CC}/calendar`,
  forms: {
    prayer: `${CC}/people/forms/407122`,        // "Get Prayer"
    discipled: `${CC}/people/forms/407234`,     // "Get Discipled"
    connected: `${CC}/people/forms/407235`,     // "Get Connected"
    children: `${CC}/people/forms/517537`,      // Children's Ministry
    contact: `${CC}/people/forms/554231`,       // CONFIRM what this form is
  },
  registrationsIndex: `${CC}/registrations/events`,
};

// Third-party giving option (crypto, PayPal, stocks, Apple Pay, etc.)
export const everyOrgGiving =
  "https://www.every.org/calvary-chapel-of-hammonton?utm_campaign=donate-link#/donate/bank";

// =============================================================================
//  ★ OPEN REGISTRATIONS — edit this list when sign-ups change
// =============================================================================
//  These cards show on /events.
//
//  TO ADD an event:     copy a block below, change the fields, commit.
//  TO REMOVE an event:  delete its block (or set  open: false  to gray it out).
//  TO REORDER:          drag blocks up or down. Top of list shows first.
//
//  href   Open the event in Church Center and copy the URL from the address
//         bar. It looks like:  .../registrations/events/3532994
//
//  image  Save the event artwork from Church Center into  public/events/
//         then reference it here as  "/events/your-file.jpg"
//         Leave it out entirely and the card shows an icon instead.
//
//  Optional fields:
//    tag       Badge text. Default "Registration Open".
//    cta       Link text.  Default "Register".
//    position  Which part of the artwork to keep when it's cropped to 16:9,
//              e.g. "center top". Default "center".
//
//  Commit to `main` and Vercel redeploys in about a minute.
// =============================================================================

export const registrations = [
  {
    title: "God’s Design Marriage Conference",
    when: "Saturday, November 14, 2026 · 9:00am",
    blurb:
      "A one-day conference with Calvary Chapel Gloucester County on God’s design for marriage. Pastor Vince & Dianne are among the speakers. Lunch and childcare provided.",
    image: "/events/marriage-conference-2026.jpg",
    position: "center top",
    href: "https://www.cc-gc.org/marriage-conference/",
    tag: "Tickets Available",
    cta: "Get Tickets",
    featured: true,
    open: true,
  },
  {
    title: "Homeschool Co-Op 2026–2027",
    when: "Thursdays · Sept 17 – Nov 19, 2026",
    blurb:
      "Learning and fellowship for homeschool families, 9:30am–1:00pm. Please register every adult and child attending; $20 per family each semester covers materials.",
    image: "/events/homeschool-coop-2026-2027.jpg",
    href: `${CC}/registrations/events/3812136`,
    open: true,
  },
  {
    title: "AWANA 2026\u20132027",
    when: "September 2, 2026 \u2013 May 26, 2027",
    blurb: "Weekly clubs where kids memorize Scripture, play hard, and grow in faith.",
    image: "/events/awana-2026-2027.jpg",
    href: `${CC}/registrations/events/3716027`,
    open: true,
  },
];

// =============================================================================
//  ★ STAFF PAGE ON/OFF
//  false = /staff is hidden: removed from the menu, footer, and About/Pastor
//  pages, and the URL shows "not found". Flip to true once photos and bios
//  below are filled in.
// =============================================================================
export const showStaff = false;

// =============================================================================
//  ★ STAFF — edit this list to update the /staff page
// =============================================================================
//  One block per person. Top of the list shows first.
//
//  photo  Upload a headshot into  public/staff/  and reference it here as
//         "/staff/firstname-lastname.jpg". Square photos work best.
//         Leave it as  ""  and the card shows the person's initials instead.
//
//  bio    Each item in the list is its own paragraph. Add or remove lines freely.
//
//  email  Optional. Leave as  ""  to hide it.
//
//  TO ADD a person:     copy a block below, change the fields, commit.
//  TO REMOVE a person:  delete their block.
// =============================================================================

export const staff = [
  {
    name: "Staff Member Name",
    role: "Title / Role",
    photo: "",
    email: "",
    bio: [
      "A few sentences about this person: how long they've been at Calvary Chapel of Hammonton and what they oversee.",
      "A second paragraph for family, testimony, or a favorite verse.",
    ],
  },
  {
    name: "Staff Member Name",
    role: "Title / Role",
    photo: "",
    email: "",
    bio: [
      "A few sentences about this person: how long they've been at Calvary Chapel of Hammonton and what they oversee.",
    ],
  },
  {
    name: "Staff Member Name",
    role: "Title / Role",
    photo: "",
    email: "",
    bio: [
      "A few sentences about this person: how long they've been at Calvary Chapel of Hammonton and what they oversee.",
    ],
  },
  {
    name: "Staff Member Name",
    role: "Title / Role",
    photo: "",
    email: "",
    bio: [
      "A few sentences about this person: how long they've been at Calvary Chapel of Hammonton and what they oversee.",
    ],
  },
  {
    name: "Staff Member Name",
    role: "Title / Role",
    photo: "",
    email: "",
    bio: [
      "A few sentences about this person: how long they've been at Calvary Chapel of Hammonton and what they oversee.",
    ],
  },
];

// --- Social ---------------------------------------------------------------
export const social = {
  youtube: "https://www.youtube.com/channel/UCZp40TlQUPF2tizVXxRqzcw",
  instagram: "https://www.instagram.com/cchammonton/",
  facebook: "https://www.facebook.com/cchammonton",
  twitter: "https://x.com/cchammonton",
};

// --- Google Calendar ------------------------------------------------------
export const calendarEmbedSrc =
  "https://calendar.google.com/calendar/embed?src=rql9mdaclft4gc0uvm5oh2lb99gg327j%40import.calendar.google.com&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&color=%23234B3A";

// --- Featured events (edit as things change) ------------------------------
export const events = [
  {
    title: "Biblical Mediterranean Cruise",
    when: "Summer 2027",
    blurb:
      "Travel with Calvary Chapel of Hammonton through the lands of the New Testament, hosted with Stephen's Gate Tours.",
    href: "https://mayfairtravel.wetravel.com/trips/summer-2027-cc-hammonton-biblical-mediterranean-cruise-stephen-s-gate-tours-0325083818",
    cta: "See the Itinerary",
    tag: "Travel",
  },
];

// --- Latest message (edit weekly, or wire to YouTube later) ---------------
export const latestMessage = {
  title: "This Sunday's Message",   // CONFIRM / edit
  series: "Sunday Teaching",
  speaker: "Pastor Vince Lombardo",
  watchUrl: social.youtube,
};

// --- Statement of Faith (from the church's existing page) -----------------
export const beliefs = [
  { t: "One God, Eternally Three Persons", b: "We believe there is one living and true God, eternally existing in three persons \u2014 the Father, the Son, and the Holy Spirit \u2014 equal in power and glory; and that this triune God created, upholds, and governs all things.", r: "Genesis 1:1; Deuteronomy 6:4; Matthew 28:19\u201320; John 10:30; Hebrews 1:3" },
  { t: "The Authority of Scripture", b: "We believe the Scriptures of the Old and New Testaments are the Word of God, fully inspired without error, and the infallible rule of faith and practice. The Word of God is the foundation on which this church operates and by which it is governed.", r: "Nehemiah 8:8; John 17:17; 2 Timothy 3:16\u201317; Hebrews 4:12; 1 Peter 1:23\u201325" },
  { t: "God the Father", b: "We believe in God the Father \u2014 an infinite, eternal, personal Spirit, perfect in holiness, wisdom, power, and love; who concerns Himself mercifully in the affairs of men, hears and answers prayer, and saves from sin and death all who come to Him through Jesus Christ.", r: "Psalm 90:2; John 3:16; John 4:24; 1 Timothy 1:17" },
  { t: "Jesus Christ, the Son", b: "We believe in Jesus Christ, God's only begotten Son, conceived by the Holy Spirit: His virgin birth, sinless life, miracles and teachings, His substitutionary atoning death, bodily resurrection, ascension into Heaven, perpetual intercession for His people, and personal, visible return to earth.", r: "Isaiah 7:14; Luke 1:34\u201335; John 1:1\u20132; 1 Corinthians 15:3\u20134; Hebrews 1:8" },
  { t: "The Holy Spirit", b: "We believe in the Holy Spirit, who came forth from the Father and Son to convict the world of sin, righteousness, and judgment, and to regenerate, sanctify, and empower for ministry all who believe in Christ.", r: "John 16:8\u201311; Acts 1:8; Romans 8:26; 2 Corinthians 3:18" },
  { t: "The Spirit Indwells Believers", b: "We believe the Holy Spirit indwells every believer in Jesus Christ, and that He is an abiding helper, teacher, and guide.", r: "John 14:16\u201317; John 16:13; Romans 8:26" },
  { t: "The Gifts of the Spirit", b: "We believe in the present ministry of the Holy Spirit and in the exercise of all biblical gifts of the Spirit, according to the instructions given to us in 1 Corinthians 12\u201314.", r: "1 Corinthians 12\u201314" },
  { t: "Sin and Salvation", b: "We believe all people are sinners by nature and therefore under condemnation; and that God saves and regenerates, on the basis of faith and by the Holy Spirit, those who repent of their sins and confess Jesus Christ as Lord.", r: "Romans 3:23; Romans 5:8; Ephesians 2:1\u20133, 8\u20139; Titus 3:5" },
  { t: "The Universal Church", b: "We believe in the universal church \u2014 the living spiritual body of which Christ is the head, and of which all who are born again are a part.", r: "1 Corinthians 12:12\u201313; Ephesians 4:15\u201316" },
  { t: "Baptism and the Lord's Supper", b: "We believe the Lord Jesus Christ instituted two ordinances for the church: full immersion water baptism of believers, and the Lord's Supper. We also believe He validated the ordinance of marriage.", r: "Matthew 28:19; Luke 22:19\u201320; 1 Corinthians 11:23\u201326; Matthew 19:4\u20135" },
  { t: "The Second Coming", b: "We believe in the Second Coming of Jesus Christ \u2014 His personal, visible return to earth and the establishment of His millennial kingdom \u2014 in the resurrection of the body, the final judgment, the eternal blessing of the righteous, and the endless separation of the wicked.", r: "Matthew 16:27; Acts 1:11; Revelation 19:11\u201316; Revelation 20:11\u201315" },
  { t: "Heaven and Hell", b: "We believe in a literal Heaven and a literal Hell: that all who place their faith, hope, and trust in Jesus Christ will spend eternity in Heaven with the Lord, while those who reject His free gift of salvation will spend eternity separated from Him.", r: "Matthew 25:31\u201334; John 3:18; 1 Peter 1:4; Revelation 20:11\u201315" },
  { t: "The Pre-Tribulation Rapture", b: "We believe in the Pre-Tribulation Rapture of the church, in which all believers will meet the Lord in the air and be taken out of this world prior to the Tribulation that will come upon the earth.", r: "Luke 21:36; Romans 5:9; 1 Thessalonians 4:13\u201316; Revelation 3:10" },
];
