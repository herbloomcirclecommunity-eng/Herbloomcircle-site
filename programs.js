/**
 * Her Bloom Circle — Programs data
 * -----------------------------------------------------------------
 * Edit this file to add, remove, or update programs. Every program
 * listed here automatically appears in both the Index and the
 * Circle views, and generates its own Details panel — you never
 * need to touch index.html to change program content.
 *
 * Fields:
 *   id          unique short id, used in the URL as #details-<id>
 *   number      the catalog number shown next to the title, e.g. "00–01"
 *   title       program name
 *   category    short category label
 *   ageRange    who it's for, e.g. "Ages 8–13"
 *   status      "Open" | "Full" | "Coming Soon" | "Completed"
 *   image       path to a featured image (falls back gracefully if missing)
 *   summary     one sentence, shown in the Index row and Circle card
 *   description a few sentences, shown in the Details panel
 *   experience  short phrase: what participants will experience
 *   format      when/where it happens, e.g. "Weekly, Tuesdays 4–5:30pm"
 *   cta         { label, href } — the call to action in the Details panel
 */
window.HBC_PROGRAMS = [
  {
    id: "bloom-book-club",
    number: "00–01",
    title: "Bloom Book Club",
    category: "Reading & Conversation",
    ageRange: "Ages 8–13",
    status: "Open",
    image: "assets/images/programs/bloom-book-club.jpg",
    summary: "A small-group reading circle built around books girls actually want to talk about.",
    description: "Bloom Book Club gathers girls in small groups to read, discuss, and respond to stories that reflect their lives and stretch their imaginations. No book reports — just real conversation, guided by a mentor who listens as much as she leads.",
    experience: "Guided discussion, read-aloud time, and a take-home copy of every book.",
    format: "Weekly, Tuesdays 4:00–5:30pm",
    cta: { label: "Join the Interest List", href: "#contact" }
  },
  {
    id: "confidence-journaling",
    number: "00–02",
    title: "Confidence Journaling",
    category: "Reflection & Wellness",
    ageRange: "Ages 9–15",
    status: "Open",
    image: "assets/images/programs/confidence-journaling.jpg",
    summary: "A quiet weekly practice of writing, naming feelings, and building self-trust.",
    description: "Through guided prompts and a dedicated journal, girls build a private practice of reflection — learning to name what they feel, celebrate what they're proud of, and work through what's hard, one page at a time.",
    experience: "A keepsake journal, guided prompts, and optional small-group sharing.",
    format: "Weekly, Thursdays 4:00–5:00pm",
    cta: { label: "Join the Interest List", href: "#contact" }
  },
  {
    id: "creative-studio",
    number: "00–03",
    title: "Creative Studio",
    category: "Art & Expression",
    ageRange: "Ages 7–14",
    status: "Open",
    image: "assets/images/programs/creative-studio.jpg",
    summary: "Open studio time in drawing, painting, and mixed media — no grading, just making.",
    description: "Creative Studio is unstructured on purpose. Girls choose their own materials and projects, supported by a rotating group of artist-mentors, so creativity stays a source of joy rather than a performance.",
    experience: "Open access to art supplies, seasonal showcases, and mentor check-ins.",
    format: "Weekly, Saturdays 10:00–11:30am",
    cta: { label: "Join the Interest List", href: "#contact" }
  },
  {
    id: "mother-daughter-circle",
    number: "00–04",
    title: "Mother-Daughter Circle",
    category: "Family & Connection",
    ageRange: "All ages, paired",
    status: "Open",
    image: "assets/images/programs/mother-daughter-circle.jpg",
    summary: "A monthly gathering that gives mothers, guardians, and daughters shared time and language.",
    description: "Mother-Daughter Circle is a monthly evening built around guided conversation, a shared activity, and a meal — creating space for connection that's easy to lose in the pace of everyday life.",
    experience: "Guided activities, a shared meal, and take-home conversation prompts.",
    format: "Monthly, last Friday of the month, 6:00–8:00pm",
    cta: { label: "Join the Interest List", href: "#contact" }
  },
  {
    id: "bloom-mentorship",
    number: "00–05",
    title: "Bloom Mentorship",
    category: "Guidance & Leadership",
    ageRange: "Ages 10–17",
    status: "Open",
    image: "assets/images/programs/bloom-mentorship.jpg",
    summary: "One-on-one pairings with trained community mentors, built to last a full program year.",
    description: "Every girl in Bloom Mentorship is paired with a trained, background-checked mentor for consistent one-on-one time — someone who shows up, week after week, as a steady presence and a sounding board.",
    experience: "Weekly one-on-one time, seasonal group mentor events, and a year-long pairing.",
    format: "Weekly, schedule set with your mentor",
    cta: { label: "Join the Interest List", href: "#contact" }
  },
  {
    id: "hair-beauty-self-care",
    number: "00–06",
    title: "Hair, Beauty & Self-Care",
    category: "Wellness & Identity",
    ageRange: "Ages 8–15",
    status: "Open",
    image: "assets/images/programs/hair-beauty-self-care.jpg",
    summary: "A hands-on space to build healthy self-care routines and a confident sense of self.",
    description: "This program blends practical self-care skills with honest conversation about identity, media, and self-image — helping girls build routines and confidence that hold up outside the room.",
    experience: "Hands-on sessions, guest practitioners, and open conversation.",
    format: "Twice monthly, Saturdays 1:00–2:30pm",
    cta: { label: "Join the Interest List", href: "#contact" }
  },
  {
    id: "money-skills-for-girls",
    number: "00–07",
    title: "Money Skills for Girls",
    category: "Financial Literacy",
    ageRange: "Ages 12–17",
    status: "Coming Soon",
    image: "assets/images/programs/money-skills-for-girls.jpg",
    summary: "The basics of budgeting, saving, and financial confidence, taught early and plainly.",
    description: "Money Skills for Girls introduces budgeting, saving, and the basics of credit in plain language, with real examples and guest speakers from the community, so financial confidence starts long before adulthood.",
    experience: "Interactive workshops, real-world budgeting exercises, guest speakers.",
    format: "Monthly, details announced soon",
    cta: { label: "Join the Interest List", href: "#contact" }
  },
  {
    id: "future-ready",
    number: "00–08",
    title: "Future Ready",
    category: "College & Career",
    ageRange: "Ages 14–18",
    status: "Coming Soon",
    image: "assets/images/programs/future-ready.jpg",
    summary: "College exploration, career conversations, and mentorship for older girls in the circle.",
    description: "Future Ready supports older girls through college exploration, application support, and honest conversations with women working in fields they're curious about.",
    experience: "College visits, application workshops, and career-panel conversations.",
    format: "Monthly, details announced soon",
    cta: { label: "Join the Interest List", href: "#contact" }
  },
  {
    id: "bloom-events",
    number: "00–09",
    title: "Bloom Events",
    category: "Community Experiences",
    ageRange: "All ages",
    status: "Open",
    image: "assets/images/programs/bloom-events.jpg",
    summary: "Seasonal community gatherings that bring every program together in one room.",
    description: "A few times a year, every Bloom program comes together — for a celebration, a showcase, or simply a chance for the whole community to be in one room. See the Events section for what's next.",
    experience: "Seasonal celebrations, showcases, and community meals.",
    format: "See Events for upcoming dates",
    cta: { label: "See Upcoming Events", href: "#events" }
  },
  {
    id: "partner-with-us",
    number: "00–10",
    title: "Partner With Us",
    category: "Schools & Organizations",
    ageRange: "Organizations",
    status: "Open",
    image: "assets/images/programs/partner-with-us.jpg",
    summary: "Schools, faith groups, and community organizations who want to bring Bloom programming to their girls.",
    description: "We partner with schools, faith communities, and youth organizations to bring Bloom programs on-site or to co-host events. If you work with girls and want to bring this circle to them, we'd love to talk.",
    experience: "Custom program design, staff training, and shared events.",
    format: "By inquiry",
    cta: { label: "Start a Partnership Conversation", href: "#contact" }
  }
];
