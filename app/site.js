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
const CC = "https://cchammonton.churchcenter.com";

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
  registrations: {
    eventA: `${CC}/registrations/events/3532994`, // CONFIRM name
    eventB: `${CC}/registrations/events/3653618`, // CONFIRM name
  },
};

// --- Social ---------------------------------------------------------------
export const social = {
  youtube: "https://www.youtube.com/channel/UCZp40TlQUPF2tizVXxRqzcw",
  instagram: "https://www.instagram.com/cchammonton/",
  facebook: "https://www.facebook.com/cchammonton",
  twitter: "https://twitter.com/cchammonton",
};

// --- Google Calendar ------------------------------------------------------
export const calendarEmbedSrc =
  "https://calendar.google.com/calendar/embed?src=rql9mdaclft4gc0uvm5oh2lb99gg327j%40import.calendar.google.com&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&color=%23234B3A";

// --- Featured events (edit as things change) ------------------------------
export const events = [
  {
    title: "GriefShare: Loss of a Spouse",
    when: "August 16, 2026 \u00B7 1:00pm ET",
    blurb:
      "A one-day seminar for anyone grieving the death of a husband or wife. Contact Rita Cohen for more information.",
    href: "https://find.griefshare.org/events/295440",
    cta: "Register or learn more",
    tag: "Care",
  },
  {
    title: "Biblical Mediterranean Cruise",
    when: "Summer 2027",
    blurb:
      "Travel with Calvary Chapel of Hammonton through the lands of the New Testament, hosted with Stephen's Gate Tours.",
    href: "https://mayfairtravel.wetravel.com/trips/summer-2027-cc-hammonton-biblical-mediterranean-cruise-stephen-s-gate-tours-0325083818",
    cta: "See the itinerary",
    tag: "Travel",
  },
  {
    title: "Upcoming church event",              // CONFIRM name
    when: "See Church Center for dates",
    blurb: "Registration is open through Church Center.",
    href: churchCenter.registrations.eventA,
    cta: "Register",
    tag: "Register",
  },
];

// --- Latest message (edit weekly, or wire to YouTube later) ---------------
export const latestMessage = {
  title: "This Sunday's message",   // CONFIRM / edit
  series: "Sunday teaching",
  speaker: "Pastor Vince Lombardo",
  watchUrl: social.youtube,
};

// --- Statement of Faith (from the church's existing page) -----------------
export const beliefs = [
  { t: "One God, eternally three persons", b: "We believe there is one living and true God, eternally existing in three persons \u2014 the Father, the Son, and the Holy Spirit \u2014 equal in power and glory; and that this triune God created, upholds, and governs all things.", r: "Genesis 1:1; Deuteronomy 6:4; Matthew 28:19\u201320; John 10:30; Hebrews 1:3" },
  { t: "The authority of Scripture", b: "We believe the Scriptures of the Old and New Testaments are the Word of God, fully inspired without error, and the infallible rule of faith and practice. The Word of God is the foundation on which this church operates and by which it is governed.", r: "Nehemiah 8:8; John 17:17; 2 Timothy 3:16\u201317; Hebrews 4:12; 1 Peter 1:23\u201325" },
  { t: "God the Father", b: "We believe in God the Father \u2014 an infinite, eternal, personal Spirit, perfect in holiness, wisdom, power, and love; who concerns Himself mercifully in the affairs of men, hears and answers prayer, and saves from sin and death all who come to Him through Jesus Christ.", r: "Psalm 90:2; John 3:16; John 4:24; 1 Timothy 1:17" },
  { t: "Jesus Christ, the Son", b: "We believe in Jesus Christ, God's only begotten Son, conceived by the Holy Spirit: His virgin birth, sinless life, miracles and teachings, His substitutionary atoning death, bodily resurrection, ascension into heaven, perpetual intercession for His people, and personal, visible return to earth.", r: "Isaiah 7:14; Luke 1:34\u201335; John 1:1\u20132; 1 Corinthians 15:3\u20134; Hebrews 1:8" },
  { t: "The Holy Spirit", b: "We believe in the Holy Spirit, who came forth from the Father and Son to convict the world of sin, righteousness, and judgment, and to regenerate, sanctify, and empower for ministry all who believe in Christ.", r: "John 16:8\u201311; Acts 1:8; Romans 8:26; 2 Corinthians 3:18" },
  { t: "The Spirit indwells believers", b: "We believe the Holy Spirit indwells every believer in Jesus Christ, and that He is an abiding helper, teacher, and guide.", r: "John 14:16\u201317; John 16:13; Romans 8:26" },
  { t: "The gifts of the Spirit", b: "We believe in the present ministry of the Holy Spirit and in the exercise of all biblical gifts of the Spirit, according to the instructions given to us in 1 Corinthians 12\u201314.", r: "1 Corinthians 12\u201314" },
  { t: "Sin and salvation", b: "We believe all people are sinners by nature and therefore under condemnation; and that God saves and regenerates, on the basis of faith and by the Holy Spirit, those who repent of their sins and confess Jesus Christ as Lord.", r: "Romans 3:23; Romans 5:8; Ephesians 2:1\u20133, 8\u20139; Titus 3:5" },
  { t: "The universal church", b: "We believe in the universal church \u2014 the living spiritual body of which Christ is the head, and of which all who are born again are a part.", r: "1 Corinthians 12:12\u201313; Ephesians 4:15\u201316" },
  { t: "Baptism and the Lord's Supper", b: "We believe the Lord Jesus Christ instituted two ordinances for the church: full immersion water baptism of believers, and the Lord's Supper. We also believe He validated the ordinance of marriage.", r: "Matthew 28:19; Luke 22:19\u201320; 1 Corinthians 11:23\u201326; Matthew 19:4\u20135" },
  { t: "The Second Coming", b: "We believe in the Second Coming of Jesus Christ \u2014 His personal, visible return to earth and the establishment of His millennial kingdom \u2014 in the resurrection of the body, the final judgment, the eternal blessing of the righteous, and the endless separation of the wicked.", r: "Matthew 16:27; Acts 1:11; Revelation 19:11\u201316; Revelation 20:11\u201315" },
  { t: "Heaven and hell", b: "We believe in a literal Heaven and a literal Hell: that all who place their faith, hope, and trust in Jesus Christ will spend eternity in Heaven with the Lord, while those who reject His free gift of salvation will spend eternity separated from Him.", r: "Matthew 25:31\u201334; John 3:18; 1 Peter 1:4; Revelation 20:11\u201315" },
  { t: "The Pre-Tribulation Rapture", b: "We believe in the Pre-Tribulation Rapture of the Church, in which all believers will meet the Lord in the air and be taken out of this world prior to the Tribulation that will come upon the earth.", r: "Luke 21:36; Romans 5:9; 1 Thessalonians 4:13\u201316; Revelation 3:10" },
];
