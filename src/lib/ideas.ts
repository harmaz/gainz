export type Speed = "today" | "week" | "month"
export type Capital = "zero" | "low" | "some"
export type Style = "desk" | "out" | "stuff"

export type Idea = {
  id: string
  title: string
  blurb: string
  typicalPay: string
  firstDollar: Speed
  firstDollarLabel: string
  capital: Capital
  style: Style
  usesCursor: boolean
  needsCar: boolean
  stayHomeOk: boolean
  effort: string
  whyItPays: string
  todayMoves: string[]
  nextMoves: string[]
  watchOuts: string[]
  where: string[]
}

export const ideas: Idea[] = [
  {
    id: "sell-stuff",
    title: "Sell five things you already own",
    blurb:
      "Fastest legal cash for most people. Closets, drawers, and old electronics are inventory. No new skill, no application wait.",
    typicalPay: "$40–$400 this week",
    firstDollar: "today",
    firstDollarLabel: "Same day possible",
    capital: "zero",
    style: "stuff",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: true,
    effort: "2–4 hours",
    whyItPays:
      "Buyers already want used stuff. You are converting dead weight into cash instead of building a business.",
    todayMoves: [
      "Walk every room and pull 8–12 items you have not used in a year: cables, shoes, monitors, kitchen gadgets, games, tools.",
      "Photograph on a clean floor or table in daylight. One photo per item is enough to start.",
      "Post the five easiest items on Facebook Marketplace and OfferUp with a real price 10–15% under sold comps.",
      "Say “cash, pickup today, [neighborhood].” Answer messages within the hour.",
    ],
    nextMoves: [
      "Ship higher-value items (camera, GPU, bike) on eBay if local demand is thin.",
      "Bundle cables and small parts; they sit forever priced as singles.",
    ],
    watchOuts: [
      "Meet in a public place for local sales. Do not accept fake cashier’s checks or “I’ll send a mover with extra money.”",
      "Skip anything recalled, expired, or that you do not legally own.",
    ],
    where: ["Facebook Marketplace", "OfferUp", "eBay"],
  },
  {
    id: "delivery-gigs",
    title: "Delivery or rides for a few shifts",
    blurb:
      "Not glamorous. It is one of the few ways to turn tonight into cash if you have a car or e-bike and pass the app check.",
    typicalPay: "$15–$28 / hour after costs",
    firstDollar: "today",
    firstDollarLabel: "Tonight, if approved",
    capital: "zero",
    style: "out",
    usesCursor: false,
    needsCar: true,
    stayHomeOk: false,
    effort: "Signup + 3-hour block",
    whyItPays:
      "Platforms need bodies during dinner and weekends. You get paid for time and fuel, not for a clever idea.",
    todayMoves: [
      "Pick one app you can finish tonight: DoorDash, Uber Eats, or Instacart. Do not apply to six and stall on documents.",
      "Have license, insurance, and a bank account or debit card ready. Take the selfie / vehicle photos they ask for.",
      "If approved, work a 3-hour dinner window in a dense area. Track miles for taxes.",
    ],
    nextMoves: [
      "Add a second app only after you know when your area is actually busy.",
      "If the car is eating the profit, switch to a bike-friendly app or drop this and pick a local service instead.",
    ],
    watchOuts: [
      "Net pay is after gas, depreciation, and unpaid waiting. Walk away if a market is dead.",
      "Do not take off-app “pay me cash / use my account” offers. That is how people get banned or robbed.",
    ],
    where: ["DoorDash", "Uber Eats", "Instacart", "Uber", "Lyft"],
  },
  {
    id: "taskrabbit",
    title: "Paid chores: moving, mounting, IKEA, heavy lift",
    blurb:
      "Neighbors pay $40–$90 an hour to not do annoying physical jobs. If you are able-bodied, this beats waiting on freelance proposals.",
    typicalPay: "$40–$90 / hour",
    firstDollar: "week",
    firstDollarLabel: "Often this week",
    capital: "low",
    style: "out",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: false,
    effort: "Profile + first job",
    whyItPays:
      "Trust and showing up on time matter more than a portfolio. Demand is constant for TVs, furniture, and “my cousin bailed.”",
    todayMoves: [
      "Create a TaskRabbit, Thumbtack, or local Facebook profile with two clear offers: “TV mounting” and “help me move 1–2 rooms.”",
      "Price the first job slightly under the median so you get a review, then raise it.",
      "Post in a neighborhood group: exact service, hourly rate, available days, and that you bring a drill / dolly if you have one.",
    ],
    nextMoves: [
      "Buy a cheap stud finder and a decent drill if TV mounting clicks. That is a $40 tool that sells the job.",
      "Ask every client for a Google or platform review the same day.",
    ],
    watchOuts: [
      "Do not lift alone if the job needs two people. Decline unsafe stairs / pianos.",
      "Get the address and scope in writing. “Quick favor” jobs expand.",
    ],
    where: ["TaskRabbit", "Thumbtack", "Nextdoor", "Facebook groups"],
  },
  {
    id: "user-research",
    title: "Get paid to test products and talk",
    blurb:
      "Researchers pay $30–$150 for 15–60 minutes if you fit a screener. Desk-friendly, legal, and actually usable this week.",
    typicalPay: "$30–$150 / session",
    firstDollar: "week",
    firstDollarLabel: "This week if you match",
    capital: "zero",
    style: "desk",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: true,
    effort: "30 min setup",
    whyItPays:
      "Companies need humans, not another survey mill. Tech workers often match B2B software studies.",
    todayMoves: [
      "Make accounts on Respondent and UserTesting. Use a real webcam and a quiet room.",
      "Fill screeners honestly. Lying gets you banned and wastes everyone’s time.",
      "Turn on notifications and keep the next three evenings free for 45-minute slots.",
    ],
    nextMoves: [
      "Add Prolific for smaller studies. Stack 2–3 sessions on a Saturday.",
      "If you have a niche job title, say so — those studies pay more.",
    ],
    watchOuts: [
      "Ignore “we’ll send a check, buy software, send the rest back.” That is a classic scam.",
      "This is extra cash, not a job. Volume is lumpy.",
    ],
    where: ["Respondent", "UserTesting", "Prolific"],
  },
  {
    id: "neighborhood-tech",
    title: "Be the neighborhood computer person",
    blurb:
      "Parents, retirees, and small shops pay $50–$100 to fix Wi-Fi, printers, iPhones, and “the computer is slow.” You already know this.",
    typicalPay: "$50–$100 / visit",
    firstDollar: "week",
    firstDollarLabel: "This week",
    capital: "zero",
    style: "out",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: false,
    effort: "One afternoon of outreach",
    whyItPays:
      "The work is simple and embarrassing for the customer. Speed and patience are the product.",
    todayMoves: [
      "Write a 6-line offer: Wi-Fi, printer, new phone setup, photo backup, “make it not slow.” Flat $70 visit, cash or Venmo.",
      "Post in two neighborhood groups and text 10 people you already know.",
      "Offer one same-week slot. First customer is usually a friend-of-a-friend.",
    ],
    nextMoves: [
      "After three jobs, raise the rate and add a $40 “I’ll come back if it breaks this month” follow-up.",
      "Do not become unpaid IT for relatives. Bound it.",
    ],
    watchOuts: [
      "Do not promise data recovery you cannot do. Back up first.",
      "Never take the computer home unless you have a paper receipt and a known client.",
    ],
    where: ["Nextdoor", "Facebook groups", "word of mouth"],
  },
  {
    id: "upwork-small",
    title: "One small paid freelance job this week",
    blurb:
      "Use Cursor to ship a tiny, scoped thing: a landing page, a script, a bugfix. First dollars come from a tight offer, not a 40-page profile.",
    typicalPay: "$150–$800 first gig",
    firstDollar: "week",
    firstDollarLabel: "This week if you hustle proposals",
    capital: "zero",
    style: "desk",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: true,
    effort: "3–6 proposals today",
    whyItPays:
      "Buyers on Upwork, Contra, and local Slack groups need something done by Friday. You can out-ship people who still hand-type boilerplate.",
    todayMoves: [
      "Pick one offer: “Next.js landing page in 48 hours” or “Python script that cleans this spreadsheet.”",
      "Build a 1-page sample with Cursor today so you are not pitching vapor.",
      "Send 5 proposals that only talk about their problem, a deadline, and a fixed price. No life story.",
    ],
    nextMoves: [
      "After the first paid job, productize it: same thing, same price, same week.",
      "Ask for a referral the day you deliver.",
    ],
    watchOuts: [
      "Skip job posts that want free trials, “equity only,” or unpaid tests that are the actual work.",
      "Fixed price + written scope. Hourly mystery projects eat weekends.",
    ],
    where: ["Upwork", "Contra", "local Slack / Discord", "LinkedIn"],
  },
  {
    id: "local-websites",
    title: "One-page sites for local businesses",
    blurb:
      "Dentists, landscapers, and food trucks often have a dead Facebook page and no site. A clean one-pager is a $300–$1,200 job you can do with Cursor.",
    typicalPay: "$300–$1,200 / site",
    firstDollar: "week",
    firstDollarLabel: "7–14 days typical",
    capital: "zero",
    style: "out",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: false,
    effort: "Outreach + one build",
    whyItPays:
      "They already spend on ads. A site that shows hours, photos, and a tap-to-call button is an easy yes if you walk in with a mock.",
    todayMoves: [
      "Pick 15 businesses within a mile that have no real website. Screenshot what they have now.",
      "Using Cursor, mock one of them this afternoon with their real name, phone, and photos from their public page.",
      "Walk in or DM: “I made a draft. $450, live this week, you own it.”",
    ],
    nextMoves: [
      "Add hosting at $20/month if they want you to keep it up. That is optional; do not trap them.",
      "Same play for Google Business photo cleanup.",
    ],
    watchOuts: [
      "Do not copy a competitor’s copy word for word. Use their own words from reviews.",
      "Get 50% up front. Local “pay when I like it” often means never.",
    ],
    where: ["in person", "Instagram DMs", "Google Business"],
  },
  {
    id: "resume-linkedin",
    title: "Resume and LinkedIn rewrites",
    blurb:
      "Job hunters pay $75–$250 for a sharper resume. You plus Cursor can turn a messy PDF into something that sounds like a human.",
    typicalPay: "$75–$250 / rewrite",
    firstDollar: "week",
    firstDollarLabel: "This week",
    capital: "zero",
    style: "desk",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: true,
    effort: "Post + two samples",
    whyItPays:
      "People panic-apply with a bad document. A fast turnaround is the whole product.",
    todayMoves: [
      "Rewrite your own resume as the sample. Then rewrite a public sample for a fake “mid-level analyst.”",
      "Post the offer in two job-seeker groups and on LinkedIn: 48-hour turnaround, $99, two rounds.",
      "Deliver as PDF + the editable file. Ask what role they want, not “make it fancy.”",
    ],
    nextMoves: [
      "Add a $40 LinkedIn About + headline pass.",
      "If you like it, sell a small pack: resume + 10 tailored bullets for one posting.",
    ],
    watchOuts: [
      "Do not fabricate jobs or metrics. You can tighten language; you cannot invent a career.",
      "This market is noisy. Speed and a real before/after win.",
    ],
    where: ["LinkedIn", "Reddit job forums", "friends who are applying"],
  },
  {
    id: "tutoring",
    title: "Tutor what you already know",
    blurb:
      "CS, math, Excel, or intro programming. One student at $40–$80/hour is extra money without building a product.",
    typicalPay: "$40–$80 / hour",
    firstDollar: "week",
    firstDollarLabel: "This week",
    capital: "zero",
    style: "desk",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: true,
    effort: "Profile + first lesson",
    whyItPays:
      "Parents and career-switchers will pay for a calm explanation. You do not need a teaching credential for adult tutoring.",
    todayMoves: [
      "Pick one subject you can teach tomorrow without notes. Write a 4-line bio.",
      "List on Wyzant or Superprof, and also message two people who asked “how do I start coding?” last year.",
      "Offer a paid 45-minute first session this week, not a free forever trial.",
    ],
    nextMoves: [
      "If students keep coming, sell a 4-session pack prepaid.",
      "Use Cursor live to show how you debug — that is a differentiator for CS tutoring.",
    ],
    watchOuts: [
      "Be careful with minors: public platforms, parental involvement, no private unmanaged chats.",
      "Do not do their homework for them. Teach the method.",
    ],
    where: ["Wyzant", "Superprof", "local Facebook", "campus boards"],
  },
  {
    id: "car-detail-lawn",
    title: "Cars, lawns, or pressure washing",
    blurb:
      "Weekend cash if you can work outside. A bucket and a hose, or a $30 used mower, is enough to start. Body work, not branding work.",
    typicalPay: "$40–$150 / job",
    firstDollar: "today",
    firstDollarLabel: "This weekend",
    capital: "low",
    style: "out",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: false,
    effort: "Supplies + 6 texts",
    whyItPays:
      "People hate this work and can see the result immediately. You get paid the same day in cash or Venmo.",
    todayMoves: [
      "Choose one: interior car detail, lawn mow, or house-walkway pressure wash. Do not offer all three.",
      "Buy only what you need for one job. Text 10 neighbors with a photo example and a price.",
      "Do the first job tomorrow morning. Ask them to share the photo in the HOA or building chat.",
    ],
    nextMoves: [
      "If cars work, add a simple “I come to your driveway Saturday” route of 4 houses.",
      "Rent a pressure washer once before buying one.",
    ],
    watchOuts: [
      "Do not wash a stranger’s luxury car without a simple “I’m not liable for existing damage” note.",
      "Know local rules on dumping soapy water.",
    ],
    where: ["neighbors", "Nextdoor", "Facebook Marketplace services"],
  },
  {
    id: "rover",
    title: "Walk dogs or house-sit",
    blurb:
      "If you like animals and can be reliable, Rover and neighborhood sits pay without a technical interview.",
    typicalPay: "$20–$50 / walk, more for sits",
    firstDollar: "week",
    firstDollarLabel: "This week after profile",
    capital: "zero",
    style: "out",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: false,
    effort: "Profile + meet & greet",
    whyItPays:
      "Trust and calendar reliability. Owners overpay relative to the skill because the alternative is chaos.",
    todayMoves: [
      "Make a Rover or Wag profile with clear photos and your actual availability.",
      "Tell friends you can do weekday lunch walks. First clients are rarely strangers.",
      "Do a free or cheap meet-and-greet, then charge the platform rate.",
    ],
    nextMoves: [
      "House-sits pay more than walks if you can stay overnight.",
      "Keep a simple note of each dog’s quirks. That is how you get rebooked.",
    ],
    watchOuts: [
      "Only take dogs you can physically handle. Read the breed and energy honestly.",
      "Confirm keys, alarms, and emergency vet before the owner leaves town.",
    ],
    where: ["Rover", "Wag", "neighbors"],
  },
  {
    id: "event-staff",
    title: "Event and catering shifts",
    blurb:
      "Banquet halls, stadiums, and caterers hire extra hands. Applications are annoying; the shift itself is straightforward paid time.",
    typicalPay: "$16–$25 / hour + tips",
    firstDollar: "week",
    firstDollarLabel: "This week–next",
    capital: "zero",
    style: "out",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: false,
    effort: "2 applications",
    whyItPays:
      "They have a date and not enough people. Show up in black clothes, follow the lead, get paid.",
    todayMoves: [
      "Apply to Instawork, CoolWorks, or a local catering company. Also search “[city] banquet server.”",
      "Have black pants, black shoes, and a white or black shirt ready.",
      "Say yes to the first shift even if it is a weekday night. Reviews unlock more shifts.",
    ],
    nextMoves: [
      "Once you have one company that likes you, text them for every weekend.",
      "Bartending courses are optional; busser/server work does not wait on a certificate.",
    ],
    watchOuts: [
      "Treat it as a shift job. No-shows get you dropped fast.",
      "Confirm how you get paid before the event.",
    ],
    where: ["Instawork", "local caterers", "stadium staffing"],
  },
  {
    id: "productized-script",
    title: "Sell one boring automation",
    blurb:
      "Small teams still copy-paste between Google Sheets, Gmail, and Shopify. A $300 script you build in Cursor is extra money with leverage.",
    typicalPay: "$200–$1,000 / build",
    firstDollar: "month",
    firstDollarLabel: "2–4 weeks",
    capital: "zero",
    style: "desk",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: true,
    effort: "Find one painful workflow",
    whyItPays:
      "You are selling hours back, not “AI.” Owners pay when you name the exact chore.",
    todayMoves: [
      "Write down three chores you have seen at work or in a friend’s shop: weekly report, invoice chase, inventory sheet.",
      "Build a demo on fake data this weekend so you can screen-record a 60-second before/after.",
      "Message 10 people who do that chore. Price the first at $300 with a 1-week cap.",
    ],
    nextMoves: [
      "If two people buy, stop customizing. Same script, same onboarding call.",
      "Do not start a SaaS until you have been paid three times for the same thing.",
    ],
    watchOuts: [
      "Do not scrape or touch data you are not allowed to have.",
      "Written permission for any production system. Side projects on a day-job employer’s data are how people get fired.",
    ],
    where: ["warm intros", "indie hacker circles", "Shopify owners"],
  },
  {
    id: "shopify-wordpress",
    title: "Rescue broken WordPress or Shopify stores",
    blurb:
      "Plugins break, themes rot, checkout looks like 2014. Owners will pay $150–$600 to make it work again this week.",
    typicalPay: "$150–$600 / rescue",
    firstDollar: "week",
    firstDollarLabel: "This week",
    capital: "zero",
    style: "desk",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: true,
    effort: "Outreach + staging fix",
    whyItPays:
      "They are already losing sales. You are not selling a vision; you are unblocking a till.",
    todayMoves: [
      "List 20 local shops whose sites are slow, broken on mobile, or have mixed HTTP warnings.",
      "Send a short note with a screenshot of the actual bug and a fixed-price offer.",
      "Always work on a staging copy. Cursor helps, but backups first.",
    ],
    nextMoves: [
      "Offer a $79/month “I watch the plugins” retainer only after a rescue.",
      "Specialize: “Shopify checkout page” is easier to sell than “I do websites.”",
    ],
    watchOuts: [
      "Never take production admin without a backup. One bad plugin update and you own the outage.",
      "Avoid clients who want to clone another brand’s entire site.",
    ],
    where: ["Shopify owners", "Facebook business groups", "cold email"],
  },
  {
    id: "interview-coaching",
    title: "Mock interviews for people in your stack",
    blurb:
      "If you have passed real interviews, a 60-minute mock plus notes is a $80–$200 product. Cursor can help you generate follow-up drills.",
    typicalPay: "$80–$200 / session",
    firstDollar: "week",
    firstDollarLabel: "This week",
    capital: "zero",
    style: "desk",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: true,
    effort: "Calendly + one post",
    whyItPays:
      "Anxiety is high and official career coaches are expensive. Peer practice with honest feedback is scarce.",
    todayMoves: [
      "Write who you can help: “junior backend, Python, 45-min mock + written notes.”",
      "Post on LinkedIn and one community you already belong to. Put a calendar link.",
      "Do the first two at $80 to get testimonials, then raise.",
    ],
    nextMoves: [
      "Record (with permission) a sanitized example of your notes so future buyers see the artifact.",
      "Refuse to ghostwrite take-home tests. That is cheating and not a business.",
    ],
    watchOuts: [
      "Do not claim FAANG insider secrets you do not have.",
      "NDAs: do not reuse a candidate’s real company questions as your content.",
    ],
    where: ["LinkedIn", "Discord", "Blind-adjacent communities"],
  },
  {
    id: "tiny-paid-tool",
    title: "Ship a $19 tool, not a startup",
    blurb:
      "A narrow PDF helper, a CSV cleaner, a checklist generator. Sell on Gumroad. Cursor makes the build fast; distribution is the actual work.",
    typicalPay: "$0–$2k / month, lumpy",
    firstDollar: "month",
    firstDollarLabel: "2–6 weeks if you sell",
    capital: "low",
    style: "desk",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: true,
    effort: "One weekend build + listing",
    whyItPays:
      "Only if someone already has the pain. The money is in a specific buyer, not in “AI wrapper #400.”",
    todayMoves: [
      "Pick a tool you personally needed twice this year. If you cannot name the buyer, pick a different idea on this list.",
      "Build an ugly version this weekend that solves one job.",
      "Write the Gumroad page around the job, not the stack. Share it where those people already are.",
    ],
    nextMoves: [
      "Ten conversations beat ten features. Message people who complained about the pain.",
      "If nobody pays in three weeks, kill it and go back to services.",
    ],
    watchOuts: [
      "Do not scrape, wrap, or resell someone else’s product or copyrighted content.",
      "This is slow cash. Pair it with a same-week idea so rent is not waiting on strangers.",
    ],
    where: ["Gumroad", "Twitter/X", "niche Slack"],
  },
  {
    id: "photo-listings",
    title: "Photograph other people’s listings",
    blurb:
      "People selling furniture, cars, and rentals take terrible photos. A phone and daylight are enough to charge $40–$120 a visit.",
    typicalPay: "$40–$120 / visit",
    firstDollar: "week",
    firstDollarLabel: "This week",
    capital: "zero",
    style: "out",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: false,
    effort: "3 sample shots + posts",
    whyItPays:
      "Better photos sell faster. You are not competing with wedding photographers; you are beating a blurry kitchen shot.",
    todayMoves: [
      "Shoot 8 photos of one room or a car in your life as a sample.",
      "Offer Marketplace sellers “I’ll shoot your item this evening, $40, you get 12 photos.”",
      "Deliver same day via Google Drive. Speed is the product.",
    ],
    nextMoves: [
      "Pitch two landlords or a property manager for listing photos.",
      "A cheap LED panel helps interiors at night. Do not buy a camera first.",
    ],
    watchOuts: [
      "Do not photograph occupied homes with kids in frame without permission.",
      "Keep EXIF location off if the seller wants privacy.",
    ],
    where: ["Marketplace sellers", "landlords", "consignment shops"],
  },
  {
    id: "junk-haul",
    title: "Haul junk and Craigslist free piles",
    blurb:
      "If you can borrow or rent a truck for a day, people pay $75–$200 to make a couch disappear. Some of that “junk” resells.",
    typicalPay: "$75–$200 / haul",
    firstDollar: "today",
    firstDollarLabel: "This weekend",
    capital: "low",
    style: "out",
    usesCursor: false,
    needsCar: true,
    stayHomeOk: false,
    effort: "Truck + posts",
    whyItPays:
      "Disposal is annoying. You get paid to take it, then maybe paid again if it is decent furniture.",
    todayMoves: [
      "Check if you can borrow a truck or rent U-Haul for a 4-hour window.",
      "Post “couch / mattress / garage pile, same-day” with a clear minimum.",
      "Know the dump hours and fees so you do not eat the cost.",
    ],
    nextMoves: [
      "Resell metal, working appliances, and clean furniture. Dump the rest.",
      "Partner with someone for two-person jobs and split.",
    ],
    watchOuts: [
      "No hazardous waste, paint cans, or tires unless you know the rules.",
      "Two-person lifts. Heroics are how weekends become ER visits.",
    ],
    where: ["Marketplace", "Craigslist", "Nextdoor"],
  },
  {
    id: "paid-plasma",
    title: "Paid plasma (where legal)",
    blurb:
      "In the US, licensed centers pay for plasma. It is legal, regulated, and not a business. Treat it as a stopgap, not a plan.",
    typicalPay: "$50–$100 / visit, caps apply",
    firstDollar: "today",
    firstDollarLabel: "Often first visit",
    capital: "zero",
    style: "out",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: false,
    effort: "Screening appointment",
    whyItPays:
      "Biologics companies need plasma. You are selling time and a screened donation, not a hustle brand.",
    todayMoves: [
      "Find a licensed center (CSL, BioLife, etc.). Read their eligibility, ID, and hydration rules.",
      "Book the new-donor slot. First visits take longer because of screening.",
      "Eat and drink what they recommend. Do not go in depleted.",
    ],
    nextMoves: [
      "If you feel fine and they want return visits, use it as a bridge while a better idea ramps.",
      "Keep this off any “content brand.” It is private medical-adjacent income.",
    ],
    watchOuts: [
      "Skip it if a clinician would tell you not to. This is not advice, just a known legal option.",
      "Only licensed centers. Anyone offering cash for blood in a parking lot is a hard no.",
    ],
    where: ["CSL Plasma", "BioLife", "other licensed centers"],
  },
  {
    id: "rent-assets",
    title: "Rent something you already have",
    blurb:
      "Parking, a storage corner, a camera, a bike, a parking spot, a spare room. Income from an asset you are not using this week.",
    typicalPay: "$20–$400 / month typical",
    firstDollar: "week",
    firstDollarLabel: "This week–month",
    capital: "zero",
    style: "stuff",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: true,
    effort: "Listing + photos",
    whyItPays:
      "Someone else’s short-term need. You keep ownership. Best when the thing sits idle anyway.",
    todayMoves: [
      "List one thing: a parking space, a camera kit, a bike, or a clean spare room if that is actually available and allowed.",
      "Use the obvious marketplace: Facebook parking, Fat Llama / KitSplit for gear, or a housing platform for a legal room.",
      "Price at the median, require a deposit, and meet in a sensible way.",
    ],
    nextMoves: [
      "Insurance: check whether your policy allows renting the item or room.",
      "If a room is involved, follow local short-term rental and roommate laws. Illegal sublets are not extra money, they are a lawsuit.",
    ],
    watchOuts: [
      "Do not rent a car through informal apps if your insurance voids it.",
      "No sketchy “store these sealed boxes, don’t open them” gigs. That is how people become mules.",
    ],
    where: ["Facebook", "Fat Llama", "legal housing listings"],
  },
  {
    id: "writing-tutorials",
    title: "Paid technical writing or tutorials",
    blurb:
      "DevRel budgets, newsletters, and course sites still pay $200–$600 for a clear article. Slower than gigs, better hourly if you already write.",
    typicalPay: "$200–$600 / article",
    firstDollar: "month",
    firstDollarLabel: "2–4 weeks",
    capital: "zero",
    style: "desk",
    usesCursor: true,
    needsCar: false,
    stayHomeOk: true,
    effort: "One sample + pitches",
    whyItPays:
      "Companies need explanations their engineers will not write. A specific stack beats “I can write about AI.”",
    todayMoves: [
      "Publish one useful post on a problem you actually solved. Cursor can draft; you must verify every command.",
      "Pitch two newsletters or docs teams with the link and a second title they can buy.",
      "Price the first paid piece as a work-for-hire invoice, not exposure.",
    ],
    nextMoves: [
      "Keep a swipe file of publications that pay. Apply quarterly, not daily.",
      "Do not mass-generate SEO sludge. It does not pay well and it burns your name.",
    ],
    watchOuts: [
      "No plagiarizing docs or other blogs. Editors check.",
      "If you cover an employer’s product, read your employment agreement first.",
    ],
    where: ["newsletters", "dev publications", "company blogs"],
  },
  {
    id: "shift-work-retail",
    title: "A second shift: retail, warehouse, or grocery",
    blurb:
      "Unfashionable on purpose. If you need money this month, a W-2 evening shift is more reliable than a startup idea.",
    typicalPay: "$15–$22 / hour",
    firstDollar: "week",
    firstDollarLabel: "First paycheck in 1–2 weeks",
    capital: "zero",
    style: "out",
    usesCursor: false,
    needsCar: false,
    stayHomeOk: false,
    effort: "2 applications today",
    whyItPays:
      "They have hours to fill. You trade time for a predictable deposit. That is allowed, and it works.",
    todayMoves: [
      "Apply to two places that hire continuously: grocery, warehouse, big-box, or a campus job board.",
      "Be honest about hours you can actually work around your main job.",
      "Show up to the interview in something clean. This is not the place to optimize your personal brand.",
    ],
    nextMoves: [
      "Use the paycheck as a floor. Keep one higher-upside idea going on the side.",
      "Quit cleanly when the better stream is actually paying, not when it might.",
    ],
    watchOuts: [
      "Check moonlighting rules at your day job.",
      "Avoid anything that asks you to pay for a uniform mill or a “starter kit.” That is not a job.",
    ],
    where: ["Indeed", "store career pages", "warehouse open interviews"],
  },
]

export const speedLabel: Record<Speed, string> = {
  today: "Today / this weekend",
  week: "This week",
  month: "This month",
}

export const capitalLabel: Record<Capital, string> = {
  zero: "$0 to start",
  low: "Under ~$50",
  some: "Might spend more",
}

export const styleLabel: Record<Style, string> = {
  desk: "Mostly at a desk",
  out: "Leave the house",
  stuff: "Sell or rent what you have",
}

export function ideaMatches(
  idea: Idea,
  filters: {
    query: string
    speed: Speed | "any"
    capital: Capital | "any"
    style: Style | "any"
    cursorOnly: boolean
    noCar: boolean
    stayHome: boolean
  },
) {
  if (filters.cursorOnly && !idea.usesCursor) return false
  if (filters.noCar && idea.needsCar) return false
  if (filters.stayHome && !idea.stayHomeOk) return false
  if (filters.speed !== "any") {
    const order: Speed[] = ["today", "week", "month"]
    if (order.indexOf(idea.firstDollar) > order.indexOf(filters.speed)) {
      return false
    }
  }
  if (filters.capital !== "any") {
    const order: Capital[] = ["zero", "low", "some"]
    if (order.indexOf(idea.capital) > order.indexOf(filters.capital)) {
      return false
    }
  }
  if (filters.style !== "any" && idea.style !== filters.style) return false
  if (filters.query.trim()) {
    const q = filters.query.toLowerCase()
    const hay = [
      idea.title,
      idea.blurb,
      idea.typicalPay,
      ...idea.where,
      ...idea.todayMoves,
    ]
      .join(" ")
      .toLowerCase()
    if (!hay.includes(q)) return false
  }
  return true
}

export function recommend(ideasList: Idea[]) {
  const ids = ["sell-stuff", "upwork-small", "local-websites"]
  return ids
    .map((id) => ideasList.find((idea) => idea.id === id))
    .filter((idea): idea is Idea => Boolean(idea))
}
