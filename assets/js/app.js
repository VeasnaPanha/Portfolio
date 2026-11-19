/* ==========================================================================
   Veasna Panha — site script
   - CONFIG: contact details (edit here)
   - STRINGS: all interface text in English + Khmer
   ========================================================================== */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  const CONFIG = {
    name: "Veasna Panha",
    email: "veasnapanha22@gmail.com",
    phone: "+855 96 3433 142",
    phoneHref: "+855963433142",
    telegram: "PANHAVP",
    city: { en: "Phnom Penh, Cambodia", km: "ភ្នំពេញ កម្ពុជា" },
    available: true, // set to false when fully booked
    social: [
      // { label: "Facebook", url: "https://facebook.com/..." },
      // { label: "Instagram", url: "https://instagram.com/..." },
      // { label: "LinkedIn", url: "https://linkedin.com/in/..." },
      // { label: "YouTube", url: "https://youtube.com/@..." },
    ],
  };

  /* ---------------- Strings ---------------- */
  const S = {
    "nav.work": ["Work", "ស្នាដៃ"],
    "nav.services": ["Services", "សេវាកម្ម"],
    "nav.about": ["About", "អំពីខ្ញុំ"],
    "nav.contact": ["Contact", "ទំនាក់ទំនង"],
    "nav.start": ["Start a project", "ចាប់ផ្តើមគម្រោង"],
    "nav.menu": ["Menu", "ម៉ឺនុយ"],
    "skip": ["Skip to content", "រំលងទៅមាតិកា"],

    "role.short": ["Producer · Cinematographer", "ផលិតករ · អ្នកដឹកនាំការថត"],
    "status.open": ["Available for new projects", "ទទួលគម្រោងថ្មី"],
    "status.closed": ["Fully booked right now", "ពេលនេះមិនទំនេរទេ"],
    "time.local": ["Local time in Phnom Penh", "ម៉ោងនៅភ្នំពេញ"],

    "home.h1": ["Films about people, made in Cambodia.", "ភាពយន្តអំពីមនុស្ស ផលិតនៅកម្ពុជា។"],
    "home.intro": [
      "I’m Veasna Panha, a producer and cinematographer in Phnom Penh. I make documentaries, commercials, podcasts and campaign films, and I’ve worked on them with Plan International, UNICEF and the Royal University of Phnom Penh.",
      "ខ្ញុំឈ្មោះ វាសនា បញ្ញា ជាផលិតករ និងអ្នកដឹកនាំការថតនៅភ្នំពេញ។ ខ្ញុំផលិតភាពយន្តឯកសារ ពាណិជ្ជកម្ម ផតខាស្ទ៍ និងវីដេអូយុទ្ធនាការ ហើយបានធ្វើការជាមួយអង្គការ Plan International, UNICEF និងសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។",
    ],
    "home.viewWork": ["See the work", "មើលស្នាដៃ"],
    "home.featured": ["Featured film", "ខ្សែភាពយន្តពិសេស"],
    "home.watch": ["Watch the film", "ទស្សនាខ្សែភាពយន្ត"],
    "home.caseStudy": ["Read the case study", "អានព័ត៌មានលម្អិត"],
    "home.selected": ["Selected work", "ស្នាដៃជ្រើសរើស"],
    "home.allWork": ["All projects", "គម្រោងទាំងអស់"],
    "home.what": ["What I do", "អ្វីដែលខ្ញុំធ្វើ"],
    "home.whatH": ["From the first call to the final export.", "ចាប់ពីការពិភាក្សាដំបូង រហូតដល់ការបញ្ចេញវីដេអូចុងក្រោយ។"],
    "home.allServices": ["Services & process", "សេវាកម្ម និងដំណើរការ"],
    "home.partners": ["Worked with", "បានសហការជាមួយ"],
    "home.partnersH": ["NGOs, a university and agencies.", "អង្គការ សាកលវិទ្យាល័យ និងភ្នាក់ងារនានា។"],
    "stat.years": ["years making media", "ឆ្នាំក្នុងការផលិតមេឌៀ"],
    "stat.projects": ["projects in this portfolio", "គម្រោងក្នុងផលប័ត្រនេះ"],
    "stat.eps": ["podcast episodes produced", "វគ្គផតខាស្ទ៍ដែលបានផលិត"],
    "stat.langs": ["languages, Khmer & English", "ភាសា ខ្មែរ និងអង់គ្លេស"],

    "cta.h": ["Got a project? Tell me about it.", "មានគម្រោងមែនទេ? ប្រាប់ខ្ញុំមក។"],
    "cta.p": ["Send a short brief by email or Telegram, and we’ll take it from there.", "ផ្ញើសេចក្តីសង្ខេបខ្លីមួយតាមអ៊ីមែល ឬ Telegram ហើយយើងនឹងបន្តពីទីនោះ។"],

    "work.kicker": ["Index", "បញ្ជី"],
    "work.h1": ["Work", "ស្នាដៃ"],
    "work.lead": ["Documentaries, short films, podcasts, commercials, campaigns, photography and design, from 2021 to now.", "ភាពយន្តឯកសារ ភាពយន្តខ្លី ផតខាស្ទ៍ ពាណិជ្ជកម្ម យុទ្ធនាការ ការថតរូប និងការរចនា ចាប់ពីឆ្នាំ ២០២១ ដល់បច្ចុប្បន្ន។"],
    "work.all": ["All", "ទាំងអស់"],
    "work.grid": ["Grid", "ក្រឡា"],
    "work.list": ["List", "បញ្ជី"],
    "work.empty": ["Nothing in this category yet.", "មិនទាន់មានគម្រោងក្នុងប្រភេទនេះនៅឡើយទេ។"],

    "p.role": ["Role", "តួនាទី"],
    "p.partner": ["With", "សហការជាមួយ"],
    "p.format": ["Format", "ទម្រង់"],
    "p.place": ["Location", "ទីតាំង"],
    "p.film": ["The film", "ខ្សែភាពយន្ត"],
    "p.watch": ["Watch", "ទស្សនា"],
    "p.watchOn": ["Watch on", "ទស្សនានៅលើ"],
    "p.film1": ["Short film 1", "ភាពយន្តខ្លីទី ១"],
    "p.film2": ["Short film 2", "ភាពយន្តខ្លីទី ២"],
    "p.loadVideo": ["Play video", "ចាក់វីដេអូ"],
    "p.stills": ["Stills", "រូបភាពពីខ្សែភាពយន្ត"],
    "p.photos": ["Photographs", "រូបថត"],
    "p.pages": ["Pages", "ទំព័រ"],
    "p.bts": ["Behind the scenes", "ពីក្រោយឆាក"],
    "p.next": ["Next project", "គម្រោងបន្ទាប់"],
    "p.back": ["All work", "ស្នាដៃទាំងអស់"],
    "p.notFound": ["Project not found.", "រកមិនឃើញគម្រោងនេះទេ។"],

    "svc.kicker": ["Services", "សេវាកម្ម"],
    "svc.h1": ["What I can make for you.", "អ្វីដែលខ្ញុំអាចផលិតឱ្យអ្នក។"],
    "svc.lead": [
      "I work as a producer, a cinematographer, or both. On smaller jobs I’ll shoot and edit myself; on bigger ones I put together a crew and run the production.",
      "ខ្ញុំធ្វើការជាផលិតករ អ្នកដឹកនាំការថត ឬទាំងពីរ។ សម្រាប់គម្រោងតូច ខ្ញុំថត និងកាត់តដោយខ្លួនឯង ហើយសម្រាប់គម្រោងធំ ខ្ញុំរៀបចំក្រុមការងារ និងគ្រប់គ្រងការផលិត។",
    ],
    "svc.process": ["How a project runs", "ដំណើរការនៃគម្រោងមួយ"],
    "svc.faq": ["Questions people ask", "សំណួរដែលគេតែងសួរ"],

    "about.kicker": ["About", "អំពីខ្ញុំ"],
    "about.h1": ["I started in design. Then I picked up a camera.", "ខ្ញុំចាប់ផ្តើមពីការរចនា។ បន្ទាប់មក ខ្ញុំកាន់កាមេរ៉ា។"],
    "about.p1": [
      "I’m an audiovisual production associate at the Department of Media and Communication (DMC), Royal University of Phnom Penh, where I’m also finishing a BA in Media Management.",
      "ខ្ញុំជាជំនួយការផលិតកម្មសោតទស្សន៍ នៅដេប៉ាតឺម៉ង់ប្រព័ន្ធផ្សព្វផ្សាយ និងសារគមនាគមន៍ (DMC) នៃសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ហើយខ្ញុំក៏កំពុងបញ្ចប់ការសិក្សាថ្នាក់បរិញ្ញាបត្រផ្នែកគ្រប់គ្រងប្រព័ន្ធផ្សព្វផ្សាយផងដែរ។",
    ],
    "about.p2": [
      "For more than four years I’ve worked on TV commercials, documentaries, short films, podcasts and education campaigns, mostly for NGOs and the university. I like the whole process: finding the story, planning the shoot, running the set and sitting in the edit until it’s right.",
      "អស់រយៈពេលជាងបួនឆ្នាំ ខ្ញុំបានធ្វើការលើពាណិជ្ជកម្មទូរទស្សន៍ ភាពយន្តឯកសារ ភាពយន្តខ្លី ផតខាស្ទ៍ និងយុទ្ធនាការអប់រំ ភាគច្រើនសម្រាប់អង្គការ និងសាកលវិទ្យាល័យ។ ខ្ញុំចូលចិត្តដំណើរការទាំងមូល៖ ស្វែងរករឿង រៀបចំផែនការថត គ្រប់គ្រងកន្លែងថត និងអង្គុយកាត់តរហូតដល់វាល្អ។",
    ],
    "about.p3": [
      "Before film I was a graphic designer, making posters and social content for agencies in Phnom Penh. That still shapes how I frame a shot.",
      "មុនពេលចូលវិស័យភាពយន្ត ខ្ញុំជាអ្នករចនាក្រាហ្វិក ដែលរចនាផូស្ទ័រ និងមាតិកាបណ្តាញសង្គមសម្រាប់ភ្នាក់ងារនានានៅភ្នំពេញ។ បទពិសោធន៍នោះនៅតែជះឥទ្ធិពលលើរបៀបដែលខ្ញុំរៀបចំស៊ុមរូបភាព។",
    ],
    "about.cv": ["Download CV (PDF)", "ទាញយក CV (PDF)"],
    "about.exp": ["Experience", "បទពិសោធន៍ការងារ"],
    "about.edu": ["Education", "ការសិក្សា"],
    "about.skills": ["Skills", "ជំនាញ"],
    "about.tools": ["Tools", "កម្មវិធី"],
    "about.langs": ["Languages", "ភាសា"],
    "about.deg": ["BA in Media Management", "បរិញ្ញាបត្រផ្នែកគ្រប់គ្រងប្រព័ន្ធផ្សព្វផ្សាយ"],
    "about.degOrg": ["Department of Media and Communication (DMC), RUPP", "ដេប៉ាតឺម៉ង់ប្រព័ន្ធផ្សព្វផ្សាយ និងសារគមនាគមន៍ (DMC) សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ"],
    "about.ref": ["References available on request.", "អាចផ្តល់ឯកសារយោងតាមការស្នើសុំ។"],
    "about.portrait": ["Veasna Panha, Phnom Penh", "វាសនា បញ្ញា, ភ្នំពេញ"],

    "c.kicker": ["Contact", "ទំនាក់ទំនង"],
    "c.h1": ["Let’s make something.", "តោះ ផលិតអ្វីមួយជាមួយគ្នា។"],
    "c.lead": [
      "Fill in what you know. It doesn’t need to be a full brief; a few lines about the idea, the timing and the budget is plenty to start.",
      "សូមបំពេញអ្វីដែលអ្នកដឹង។ មិនចាំបាច់ជាសេចក្តីសង្ខេបពេញលេញទេ គ្រាន់តែពីរបីបន្ទាត់អំពីគំនិត ពេលវេលា និងថវិកា ក៏គ្រប់គ្រាន់ដើម្បីចាប់ផ្តើម។",
    ],
    "c.name": ["Your name", "ឈ្មោះរបស់អ្នក"],
    "c.org": ["Organisation", "ស្ថាប័ន / ក្រុមហ៊ុន"],
    "c.reply": ["Email or Telegram", "អ៊ីមែល ឬ Telegram"],
    "c.type": ["What is it?", "ប្រភេទគម្រោង"],
    "c.budget": ["Budget (USD)", "ថវិកា (ដុល្លារ)"],
    "c.date": ["When do you need it?", "ត្រូវការនៅពេលណា?"],
    "c.msg": ["Tell me about the project", "ប្រាប់ខ្ញុំអំពីគម្រោង"],
    "c.msgPh": ["What’s the story, who is it for, where will it be shown?", "តើរឿងអ្វី សម្រាប់អ្នកណា ហើយនឹងបង្ហាញនៅទីណា?"],
    "c.sendMail": ["Send by email", "ផ្ញើតាមអ៊ីមែល"],
    "c.sendTg": ["Send on Telegram", "ផ្ញើតាម Telegram"],
    "c.required": ["Please add your name and a few words about the project.", "សូមបញ្ចូលឈ្មោះ និងព័ត៌មានខ្លីៗអំពីគម្រោង។"],
    "c.mailOk": ["Your email app should open with the message ready. If it doesn’t, write to me at", "កម្មវិធីអ៊ីមែលរបស់អ្នកនឹងបើកជាមួយសារដែលបានរៀបចំរួច។ បើមិនបើកទេ សូមផ្ញើមក"],
    "c.tgOk": ["Message copied. Paste it into the Telegram chat that just opened.", "បានចម្លងសាររួចហើយ។ សូមបិទភ្ជាប់ (Paste) ក្នុង Telegram ដែលទើបបើក។"],
    "c.direct": ["Direct", "ទំនាក់ទំនងផ្ទាល់"],
    "c.email": ["Email", "អ៊ីមែល"],
    "c.phone": ["Phone / Telegram", "ទូរស័ព្ទ / Telegram"],
    "c.based": ["Based in", "មូលដ្ឋាន"],
    "c.copy": ["Copy", "ចម្លង"],
    "c.copied": ["Copied", "បានចម្លង"],
    "c.replyTime": ["Telegram is usually the quickest way to reach me.", "Telegram ជាធម្មតាជាមធ្យោបាយលឿនបំផុតដើម្បីទាក់ទងខ្ញុំ។"],
    "c.travel": ["Available to shoot anywhere in Cambodia.", "អាចធ្វើដំណើរទៅថតគ្រប់ទីកន្លែងក្នុងប្រទេសកម្ពុជា។"],

    "t.doc": ["Documentary", "ភាពយន្តឯកសារ"],
    "t.tvc": ["Commercial / TVC", "ពាណិជ្ជកម្ម / TVC"],
    "t.psa": ["PSA / campaign", "សារសាធារណៈ / យុទ្ធនាការ"],
    "t.social": ["Social video series", "ស៊េរីវីដេអូបណ្តាញសង្គម"],
    "t.pod": ["Podcast", "ផតខាស្ទ៍"],
    "t.event": ["Event coverage", "ថតព្រឹត្តិការណ៍"],
    "t.photo": ["Photography", "ការថតរូប"],
    "t.design": ["Design", "ការរចនា"],
    "t.other": ["Something else", "ផ្សេងៗ"],
    "b.none": ["Not sure yet", "មិនទាន់ច្បាស់"],
    "b.1": ["Under $500", "តិចជាង $500"],
    "b.2": ["$500 – $1,500", "$500 – $1,500"],
    "b.3": ["$1,500 – $5,000", "$1,500 – $5,000"],
    "b.4": ["$5,000+", "លើស $5,000"],

    "f.nav": ["Pages", "ទំព័រ"],
    "f.contact": ["Contact", "ទំនាក់ទំនង"],
    "f.follow": ["Elsewhere", "បណ្តាញផ្សេងទៀត"],
    "f.rights": ["All work shown with thanks to the teams and partners involved.", "ស្នាដៃទាំងអស់បង្ហាញដោយការដឹងគុណចំពោះក្រុមការងារ និងដៃគូពាក់ព័ន្ធ។"],
    "f.top": ["Back to top", "ត្រឡប់ទៅលើ"],
    "f.cv": ["CV (PDF)", "CV (PDF)"],

    "nf.h": ["This page is off the reel.", "ទំព័រនេះមិនមានទេ។"],
    "nf.p": ["The link may be old or mistyped.", "តំណនេះប្រហែលចាស់ ឬវាយខុស។"],
    "nf.home": ["Back to home", "ត្រឡប់ទៅទំព័រដើម"],
  };

  /* ---------------- Language ---------------- */
  const LS_KEY = "vp-lang";
  const safeGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const safeSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const params = new URLSearchParams(location.search);
  let lang = params.get("lang") === "km" || params.get("lang") === "en" ? params.get("lang") : safeGet(LS_KEY) || "en";
  const t = (k) => (S[k] ? S[k][lang === "km" ? 1 : 0] : k);
  const L = (o) => (o == null ? "" : typeof o === "string" ? o : o[lang] || o.en);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
    arrowUR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    tg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.9 4.3l-3.2 15.1c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2l-11 6.9-4.7-1.5c-1-.3-1-1 .2-1.5l18.5-7.1c.9-.3 1.6.2 1.4 1.2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/></svg>',
  };

  const LOGO =
    '<svg viewBox="0 0 807 216" role="img" aria-label="Veasna Panha"><g transform="translate(0 0)"><g fill="currentColor" fill-rule="evenodd"><path d="M0 0H216V216H0ZM48 58H73L94 126L115 58H140L108 158H80Z"/><path transform="translate(256 0)" d="M0 0H25L46 68L67 0H92L60 100H32Z"/><path transform="translate(357 0)" d="M0 0H64V22H24V39H58V61H24V78H64V100H0Z"/><path transform="translate(430 0)" d="M32 0H64L96 100H70L65 81H31L26 100H0ZM37 60H59L48 23Z"/><path transform="translate(535 0)" d="M74 0V22H32Q24 22 24 30V31Q24 39 32 39H50C66 39 76 48 76 64V74C76 90 66 100 50 100H0V78H44Q52 78 52 70V69Q52 61 44 61H26C10 61 0 52 0 36V26C0 10 10 0 26 0Z"/><path transform="translate(620 0)" d="M0 0H26L58 57V0H82V100H56L24 43V100H0Z"/><path transform="translate(711 0)" d="M32 0H64L96 100H70L65 81H31L26 100H0ZM37 60H59L48 23Z"/><path transform="translate(256 116)" d="M0 0H46C64 0 76 12 76 32C76 52 64 64 46 64H24V100H0ZM24 22V42H44C50 42 53 38 53 32C53 26 50 22 44 22Z"/><path transform="translate(341 116)" d="M32 0H64L96 100H70L65 81H31L26 100H0ZM37 60H59L48 23Z"/><path transform="translate(446 116)" d="M0 0H26L58 57V0H82V100H56L24 43V100H0Z"/><path transform="translate(537 116)" d="M0 0H24V39H56V0H80V100H56V61H24V100H0Z"/><path transform="translate(626 116)" d="M32 0H64L96 100H70L65 81H31L26 100H0ZM37 60H59L48 23Z"/></g><circle cx="172" cy="140" r="18" fill="#D7261E"/></g></svg>';

  const page = document.body.dataset.page;
  const P = window.PROJECTS || [];
  const CATS = window.CATEGORIES || [];
  const catName = (id) => L(CATS.find((c) => c.id === id) || { en: id });
  const projUrl = (p) => `project.html?p=${encodeURIComponent(p.slug)}`;

  /* ---------------- Header / footer ---------------- */
  function navLinks() {
    return [
      ["work.html", "nav.work", "work"],
      ["services.html", "nav.services", "services"],
      ["about.html", "nav.about", "about"],
      ["contact.html", "nav.contact", "contact"],
    ];
  }
  function renderChrome() {
    const cur = page === "project" ? "work" : page;
    const links = navLinks()
      .map(([h, k, id]) => `<a class="nav-link" href="${h}"${id === cur ? ' aria-current="page"' : ""}>${t(k)}</a>`)
      .join("");
    const langBtns = `<div class="lang" role="group" aria-label="Language"><button type="button" data-lang="en" aria-pressed="${lang === "en"}">EN</button><button type="button" class="km" data-lang="km" aria-pressed="${lang === "km"}" lang="km">ខ្មែរ</button></div>`;
    const header = document.getElementById("site-header");
    if (header) {
      header.className = "site-header";
      header.innerHTML = `<div class="wrap"><a class="brand" href="index.html" aria-label="Veasna Panha — home">${LOGO}</a>
        <nav class="nav" aria-label="Main">${links}${langBtns}<a class="btn btn--red btn--sm" href="contact.html">${t("nav.start")}</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${t("nav.menu")}"><span></span><span></span></button></nav></div>`;
    }
    let mm = document.getElementById("mobile-menu");
    if (!mm) { mm = document.createElement("div"); mm.id = "mobile-menu"; mm.className = "mobile-menu"; document.body.appendChild(mm); }
    mm.innerHTML = `<nav aria-label="Mobile">${navLinks().map(([h, k], i) => `<a href="${h}">${t(k)} <small>0${i + 1}</small></a>`).join("")}</nav>
      <div class="mm-foot"><a href="mailto:${CONFIG.email}">${CONFIG.email}</a><a href="https://t.me/${CONFIG.telegram}">Telegram @${CONFIG.telegram}</a><span>${L(CONFIG.city)}</span></div>`;

    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.className = "site-footer";
      const soc = CONFIG.social.length
        ? `<div class="ft-col"><h5 class="mono">${t("f.follow")}</h5><ul>${CONFIG.social.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}</ul></div>`
        : `<div class="ft-col"><h5 class="mono">${t("f.follow")}</h5><ul><li><a href="https://t.me/${CONFIG.telegram}" target="_blank" rel="noopener">Telegram</a></li><li><a href="assets/files/Veasna-Panha-CV.pdf" target="_blank" rel="noopener">${t("f.cv")}</a></li></ul></div>`;
      footer.innerHTML = `<div class="wrap"><div class="ft-top">
        <div><a class="ft-logo" href="index.html" aria-label="Veasna Panha — home">${LOGO}</a><p class="fg2" style="margin-top:22px;max-width:36ch">${t("role.short")}. ${L(CONFIG.city)}.</p></div>
        <div class="ft-col"><h5 class="mono">${t("f.nav")}</h5><ul>${navLinks().map(([h, k]) => `<li><a href="${h}">${t(k)}</a></li>`).join("")}</ul></div>
        <div class="ft-col"><h5 class="mono">${t("f.contact")}</h5><ul><li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li><li><a href="tel:${CONFIG.phoneHref}">${CONFIG.phone}</a></li><li><a href="https://t.me/${CONFIG.telegram}" target="_blank" rel="noopener">@${CONFIG.telegram}</a></li></ul></div>
        ${soc}</div>
        <div class="ft-bot mono"><span>© ${new Date().getFullYear()} Veasna Panha</span><span class="keep-latin" data-clock>PNH --:--</span><a href="#top" class="link-u">${t("f.top")} ↑</a></div>
        <p class="fg2" style="font-size:13px;margin:18px 0 0">${t("f.rights")}</p></div>`;
    }
  }

  function bindChrome() {
    document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    const mb = document.querySelector(".menu-btn");
    if (mb) mb.addEventListener("click", () => {
      const open = !document.body.classList.contains("menu-open");
      document.body.classList.toggle("menu-open", open);
      mb.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
  }

  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.setAttribute("placeholder", t(el.dataset.i18nPh)); });
    document.querySelectorAll("[data-status]").forEach((el) => { el.textContent = t(CONFIG.available ? "status.open" : "status.closed"); });
    document.querySelectorAll("[data-city]").forEach((el) => { el.textContent = L(CONFIG.city); });
    const titleKey = document.body.dataset.title;
    if (titleKey) document.title = `${t(titleKey)} — Veasna Panha`;
  }

  function setLang(l) {
    if (l === lang) return;
    lang = l; safeSet(LS_KEY, l);
    const u = new URL(location.href); u.searchParams.delete("lang"); history.replaceState(null, "", u);
    renderAll();
  }

  /* ---------------- Clock ---------------- */
  function tickClock() {
    let s;
    try { s = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Phnom_Penh", hour: "2-digit", minute: "2-digit" }).format(new Date()); }
    catch (e) { s = ""; }
    document.querySelectorAll("[data-clock]").forEach((el) => (el.textContent = `PNH ${s} (GMT+7)`));
  }

  /* ---------------- Cards ---------------- */
  function card(p, cls = "") {
    return `<a class="card rv ${cls}" href="${projUrl(p)}">
      <div class="card-media"><img src="${p.thumb || p.cover}"${p.thumbPos ? ` style="object-position:${p.thumbPos}"` : ""} alt="${esc(L(p.title))}" loading="lazy" decoding="async"><span class="tag mono">${esc(catName(p.cat))}</span></div>
      <div class="card-meta"><h3 class="card-title">${esc(L(p.title))}</h3><span class="card-role mono">${esc(L(p.role))}</span></div>
      <p class="card-sub">${esc(L(p.line))}</p></a>`;
  }
  function row(p, i) {
    return `<a class="row rv" href="${projUrl(p)}" data-img="${p.thumb || p.cover}">
      <img class="thumb" src="${p.thumb || p.cover}" alt="" loading="lazy">
      <span class="num mono">${String(i + 1).padStart(2, "0")}</span>
      <span class="row-title">${esc(L(p.title))}</span>
      <span class="mono fg2">${esc(catName(p.cat))}</span>
      <span class="mono fg2">${esc(L(p.role))}</span>
      <span class="arrow">${ICON.arrowUR}</span></a>`;
  }

  /* ---------------- Home ---------------- */
  function renderHome() {
    const strip = document.getElementById("strip");
    if (strip) {
      const picks = [
        ["she-dares", 3], ["she-dares", 8], ["absorb-the-light", 2], ["the-next-level", 6], ["dmc-tvc", 3],
        ["one-month-many-moods", 1], ["stem-short-films", 6], ["24-hours", 3], ["the-dmc-way", 3], ["absorb-the-light", 6], ["she-dares", 1], ["24-hours", 20],
      ];
      const frames = picks.map(([s, n], i) => {
        const p = P.find((x) => x.slug === s); const src = p.stills[n - 1] || p.cover;
        return `<a class="frame" href="${projUrl(p)}" tabindex="-1"><img src="${src}" alt="" loading="${i < 5 ? "eager" : "lazy"}"><span class="fno">${String(i + 1).padStart(3, "0")} · ${esc(L(p.title)).toUpperCase()}</span></a>`;
      }).join("");
      strip.innerHTML = `<div class="strip-track" aria-hidden="true">${frames}${frames}</div>`;
    }
    const f = P.find((p) => p.slug === "she-dares");
    const feat = document.getElementById("featured");
    if (feat && f) {
      feat.innerHTML = `<div class="feature">
        <div class="feature-poster rv"><img src="${f.cover}" alt="${esc(L(f.title))} poster" loading="lazy"><button class="play" type="button" data-video="${f.video.id}" aria-label="${t("home.watch")}">${ICON.play}</button></div>
        <div class="rv"><span class="mono fg2"><span class="idx">●</span>${t("home.featured")} · ${esc(L(f.format))}</span>
          <h2 class="display h2" style="margin-top:20px">${esc(L(f.title))}</h2>
          <p class="cs-km-title" lang="km">${f.altTitle}</p>
          <p class="lead" style="margin-top:24px">${esc(L(f.body)[0])}</p>
          <dl><div><dt class="mono">${t("p.role")}</dt><dd>${esc(L(f.role))}</dd></div><div><dt class="mono">${t("p.place")}</dt><dd>${esc(L(f.place))}</dd></div></dl>
          <div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn btn--red" type="button" data-video="${f.video.id}">${ICON.play}${t("home.watch")}</button><a class="btn" href="${projUrl(f)}">${t("home.caseStudy")}${ICON.arrow}</a></div>
        </div></div>`;
    }
    const sel = document.getElementById("selected");
    if (sel) {
      const order = ["absorb-the-light", "dmc-tvc", "the-next-level", "plan-international", "24-hours", "stem-short-films"];
      const layout = ["wide", "narrow", "narrow", "wide", "wide", "narrow"];
      sel.innerHTML = order.map((s, i) => card(P.find((p) => p.slug === s), layout[i])).join("");
    }
    const sv = document.getElementById("svc-short");
    if (sv) sv.innerHTML = SERVICES.map((s, i) => `<div class="svc rv"><span class="mono red">0${i + 1}</span><h3 class="display h3">${esc(L(s.t))}</h3><div><p>${esc(L(s.d))}</p></div></div>`).join("");
    const pt = document.getElementById("partners");
    if (pt) pt.innerHTML = PARTNERS.map((x) => `<li class="rv"><span class="mono">${esc(L(x.k))}</span><b>${esc(L(x.n))}</b></li>`).join("");
  }

  const SERVICES = [
    { t: { en: "Documentary", km: "ភាពយន្តឯកសារ" }, d: { en: "Research, access, interviews and field shoots, including in the provinces, through to the final edit and subtitles.", km: "ការស្រាវជ្រាវ ការទាក់ទង បទសម្ភាសន៍ និងការថតតាមទីតាំង រួមទាំងនៅតាមខេត្ត រហូតដល់ការកាត់តចុងក្រោយ និងអក្សររត់។" },
      x: { en: ["Story development", "Interviews", "Aerial footage", "Khmer/English subtitles"], km: ["អភិវឌ្ឍសាច់រឿង", "បទសម្ភាសន៍", "ការថតពីលើអាកាស", "អក្សររត់ខ្មែរ/អង់គ្លេស"] } },
    { t: { en: "Commercials & PSAs", km: "ពាណិជ្ជកម្ម និងសារសាធារណៈ" }, d: { en: "TVCs and public service announcements, from the idea and the shot list to a finished spot, with cut-downs for social.", km: "ពាណិជ្ជកម្មទូរទស្សន៍ និងសារសេវាសាធារណៈ ចាប់ពីគំនិត និងបញ្ជីការថត រហូតដល់វីដេអូបញ្ចប់ ព្រមទាំងកំណែខ្លីសម្រាប់បណ្តាញសង្គម។" },
      x: { en: ["Concept", "Casting & locations", "16:9 + vertical versions"], km: ["គំនិតច្នៃប្រឌិត", "ជ្រើសតួ និងទីតាំង", "កំណែ 16:9 និងបញ្ឈរ"] } },
    { t: { en: "Campaign & social video", km: "វីដេអូយុទ្ធនាការ និងបណ្តាញសង្គម" }, d: { en: "Series of short videos for NGOs and institutions that need to explain something clearly to a young audience.", km: "ស៊េរីវីដេអូខ្លីៗសម្រាប់អង្គការ និងស្ថាប័ន ដែលត្រូវការពន្យល់អ្វីមួយឱ្យច្បាស់ដល់ទស្សនិកជនវ័យក្មេង។" },
      x: { en: ["Series planning", "Reels & stories", "Explainers"], km: ["រៀបចំផែនការស៊េរី", "Reels និង Stories", "វីដេអូពន្យល់"] } },
    { t: { en: "Podcast & studio series", km: "ផតខាស្ទ៍ និងស៊េរីស្ទូឌីយោ" }, d: { en: "Multi-camera video podcasts and talk formats: set, lighting, sound, guests and a full season of edits.", km: "វីដេអូផតខាស្ទ៍ច្រើនកាមេរ៉ា និងកម្មវិធីសន្ទនា៖ ការរៀបចំឈុត ពន្លឺ សំឡេង ភ្ញៀវ និងការកាត់តពេញមួយរដូវកាល។" },
      x: { en: ["Format & set", "Multi-camera", "Season editing"], km: ["ទម្រង់ និងឈុត", "ច្រើនកាមេរ៉ា", "កាត់តពេញរដូវកាល"] } },
    { t: { en: "Photography", km: "ការថតរូប" }, d: { en: "Documentary photo series, events, and campaign portraits.", km: "ស៊េរីរូបថតឯកសារ ព្រឹត្តិការណ៍ និងរូបថតបុគ្គលសម្រាប់យុទ្ធនាការ។" },
      x: { en: ["Photo stories", "Events & conferences", "Portraits"], km: ["រឿងរ៉ាវតាមរូបថត", "ព្រឹត្តិការណ៍ និងសន្និសីទ", "រូបថតបុគ្គល"] } },
    { t: { en: "Design", km: "ការរចនា" }, d: { en: "Posters, social graphics and editorial layout that sit alongside the film work.", km: "ផូស្ទ័រ ក្រាហ្វិកបណ្តាញសង្គម និងការរៀបចំប្លង់ទស្សនាវដ្តី ដែលដើរស្របជាមួយការងារភាពយន្ត។" },
      x: { en: ["Film posters", "Social graphics", "Magazines"], km: ["ផូស្ទ័រភាពយន្ត", "ក្រាហ្វិកបណ្តាញសង្គម", "ទស្សនាវដ្តី"] } },
  ];
  const PARTNERS = [
    { k: { en: "NGO", km: "អង្គការ" }, n: { en: "Plan International Cambodia", km: "Plan International Cambodia" } },
    { k: { en: "UN agency", km: "ទីភ្នាក់ងារអង្គការសហប្រជាជាតិ" }, n: { en: "UNICEF Cambodia", km: "UNICEF កម្ពុជា" } },
    { k: { en: "University", km: "សាកលវិទ្យាល័យ" }, n: { en: "Royal University of Phnom Penh", km: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" } },
    { k: { en: "Department", km: "ដេប៉ាតឺម៉ង់" }, n: { en: "Department of Media and Communication", km: "ដេប៉ាតឺម៉ង់ប្រព័ន្ធផ្សព្វផ្សាយ និងសារគមនាគមន៍" } },
    { k: { en: "Agency", km: "ភ្នាក់ងារ" }, n: { en: "TW Digital Communication", km: "TW Digital Communication" } },
    { k: { en: "Education", km: "ការអប់រំ" }, n: { en: "Kakcent", km: "កាក់សេន" } },
    { k: { en: "Studio", km: "ស្ទូឌីយោ" }, n: { en: "Kouprey Creative Solution", km: "Kouprey Creative Solution" } },
    { k: { en: "Agency", km: "ភ្នាក់ងារ" }, n: { en: "Decore and Advertising Cambodia", km: "Decore and Advertising Cambodia" } },
  ];

  /* ---------------- Work ---------------- */
  let workFilter = params.get("c") || "all";
  let workView = safeGet("vp-view") || "grid";
  function renderWork() {
    const fl = document.getElementById("filters");
    const out = document.getElementById("work-out");
    if (!fl || !out) return;
    const count = (id) => (id === "all" ? P.length : P.filter((p) => p.cat === id).length);
    fl.innerHTML = [{ id: "all", en: S["work.all"][0], km: S["work.all"][1] }, ...CATS]
      .filter((c) => count(c.id))
      .map((c) => `<button class="chip" type="button" data-f="${c.id}" aria-pressed="${workFilter === c.id}">${esc(L(c))}<sup>${count(c.id)}</sup></button>`)
      .join("");
    const vt = document.getElementById("view-toggle");
    vt.innerHTML = `<button type="button" data-v="grid" aria-pressed="${workView === "grid"}">${t("work.grid")}</button><button type="button" data-v="list" aria-pressed="${workView === "list"}">${t("work.list")}</button>`;
    const items = P.filter((p) => workFilter === "all" || p.cat === workFilter);
    if (!items.length) out.innerHTML = `<p class="empty">${t("work.empty")}</p>`;
    else if (workView === "list") out.innerHTML = `<div class="list">${items.map(row).join("")}</div>`;
    else {
      const pat = ["wide", "narrow", "narrow", "wide"];
      out.innerHTML = `<div class="grid-work">${items.map((p, i) => card(p, pat[i % 4])).join("")}</div>`;
    }
    fl.querySelectorAll("[data-f]").forEach((b) => b.addEventListener("click", () => {
      workFilter = b.dataset.f;
      const u = new URL(location.href); workFilter === "all" ? u.searchParams.delete("c") : u.searchParams.set("c", workFilter); history.replaceState(null, "", u);
      renderWork(); reveal();
    }));
    vt.querySelectorAll("[data-v]").forEach((b) => b.addEventListener("click", () => { workView = b.dataset.v; safeSet("vp-view", workView); renderWork(); reveal(); }));
    bindHoverPreview();
  }
  function bindHoverPreview() {
    let hp = document.querySelector(".hover-preview");
    if (!hp) { hp = document.createElement("div"); hp.className = "hover-preview"; hp.innerHTML = "<img alt=''>"; document.body.appendChild(hp); }
    const img = hp.firstChild;
    document.querySelectorAll(".row[data-img]").forEach((r) => {
      r.addEventListener("mouseenter", () => { img.src = r.dataset.img; hp.classList.add("on"); });
      r.addEventListener("mouseleave", () => hp.classList.remove("on"));
      r.addEventListener("mousemove", (e) => { hp.style.left = e.clientX + 200 + "px"; hp.style.top = e.clientY + "px"; });
    });
  }

  /* ---------------- Project ---------------- */
  function videoBlock(p) {
    const v = p.video;
    if (!v) return "";
    const head = `<div class="sec-head"><div><span class="mono"><span class="idx">01</span>${t("p.film")}</span></div></div>`;
    if (v.type === "youtube") {
      const thumb = `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`;
      const watch = `https://www.youtube.com/watch?v=${v.id}${v.list ? "&list=" + v.list : ""}`;
      return `${head}<div class="video" data-embed="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0${v.list ? "&list=" + v.list : ""}">
        <button class="poster-btn" type="button" aria-label="${t("p.loadVideo")}"><img src="${thumb}" onerror="this.src='${p.stills[0] || p.cover}'" alt=""><span class="play">${ICON.play}</span><span class="vlabel mono">${t("p.loadVideo")}</span></button></div>
        <div class="cs-links"><a class="btn btn--sm" href="${watch}" target="_blank" rel="noopener">${t("p.watchOn")} YouTube${ICON.arrowUR}</a></div>`;
    }
    if (v.type === "facebook") {
      const items = v.urls.map((u, i) => `<div><div class="video" data-embed="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(u)}&show_text=false&autoplay=true">
        <button class="poster-btn" type="button" aria-label="${t("p.loadVideo")}"><img src="${p.stills[i * 5] || p.cover}" alt=""><span class="play">${ICON.play}</span><span class="vlabel mono">${t(i ? "p.film2" : "p.film1")}</span></button></div>
        <div class="cs-links"><a class="btn btn--sm" href="${u}" target="_blank" rel="noopener">${t("p.watchOn")} Facebook${ICON.arrowUR}</a></div></div>`).join("");
      return `${head}<div class="videos-2">${items}</div>`;
    }
    if (v.type === "drive") {
      return `${head}<div class="video" data-embed="https://drive.google.com/file/d/${v.id}/preview">
        <button class="poster-btn" type="button" aria-label="${t("p.loadVideo")}"><img src="${p.stills[0] || p.cover}" alt=""><span class="play">${ICON.play}</span><span class="vlabel mono">${t("p.loadVideo")}</span></button></div>
        <div class="cs-links"><a class="btn btn--sm" href="https://drive.google.com/file/d/${v.id}/view" target="_blank" rel="noopener">${t("p.watchOn")} Google Drive${ICON.arrowUR}</a></div>`;
    }
    return "";
  }
  function galleryBlock(list, label, num, cls = "") {
    if (!list || !list.length) return "";
    return `<section class="sec--tight"><div class="wrap"><div class="sec-head"><div><span class="mono"><span class="idx">${num}</span>${label}</span></div><span class="mono fg2 keep-latin">${list.length}</span></div>
      <div class="gallery ${cls}" data-gallery>${list.map((src, i) => `<button type="button" data-i="${i}"><img src="${src}" alt="${label} ${i + 1}" loading="lazy" decoding="async"></button>`).join("")}</div></div></section>`;
  }
  function renderProject() {
    const out = document.getElementById("project");
    if (!out) return;
    const slug = params.get("p");
    const i = P.findIndex((x) => x.slug === slug);
    if (i < 0) {
      out.innerHTML = `<section class="page-head"><div class="wrap"><h1 class="display h2">${t("p.notFound")}</h1><p style="margin-top:28px"><a class="btn" href="work.html">${t("p.back")}${ICON.arrow}</a></p></div></section>`;
      return;
    }
    const p = P[i], nx = P[(i + 1) % P.length];
    document.title = `${L(p.title)} — Veasna Panha`;
    const md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", L(p.line));
    const v = p.video;
    let links = "";
    if (v && v.type === "link") links = `<div class="cs-links"><a class="btn btn--red" href="${v.url}" target="_blank" rel="noopener">${esc(L(v.label))}${ICON.arrowUR}</a></div>`;
    if (v && v.type === "soon") links = `<div class="note-soon mono"><span class="rec-dot"></span>${esc(L(v.where))}</div>`;
    const alt = p.altTitle && lang === "en" ? `<p class="cs-km-title" lang="km">${p.altTitle}</p>` : lang === "km" && p.altTitle !== L(p.title) ? `<p class="cs-km-title">${esc(p.title.en)}</p>` : "";
    let n = 1; const num = () => String(++n).padStart(2, "0");
    const hasVid = v && ["youtube", "facebook", "drive"].includes(v.type);
    if (!hasVid) n = 0;
    const stillLabel = p.cat === "photography" ? t("p.photos") : p.cat === "design" ? t("p.pages") : t("p.stills");
    out.innerHTML = `
      <section class="cs-head"><div class="wrap">
        <div class="cs-crumb mono"><a href="work.html">${t("p.back")}</a><span>/</span><a href="work.html?c=${p.cat}">${esc(catName(p.cat))}</a></div>
        <h1 class="display h1">${esc(L(p.title))}</h1>${alt}
        <div class="cs-meta">
          <div><dt class="mono">${t("p.role")}</dt><dd>${esc(L(p.role))}</dd></div>
          <div><dt class="mono">${t("p.partner")}</dt><dd>${esc(L(p.partner))}</dd></div>
          <div><dt class="mono">${t("p.format")}</dt><dd>${esc(L(p.format))}</dd></div>
          <div><dt class="mono">${t("p.place")}</dt><dd>${esc(L(p.place))}</dd></div>
        </div></div></section>
      <section class="sec--tight"><div class="wrap cs-body">
        <figure class="cs-cover ${p.coverShape === "poster" ? "" : "landscape"}" style="margin:0"><img src="${p.cover}" alt="${esc(L(p.title))}"></figure>
        <div class="text">${L(p.body).map((x) => `<p>${esc(x)}</p>`).join("")}${links}</div>
      </div></section>
      ${hasVid ? `<section class="sec--tight"><div class="wrap">${videoBlock(p)}</div></section>` : ""}
      ${galleryBlock(p.stills, stillLabel, num(), p.gallery || "")}
      ${galleryBlock(p.bts, t("p.bts"), num())}
      <div class="wrap"><a class="next-proj" href="${projUrl(nx)}"><span class="mono fg2">${t("p.next")} →</span><h2 class="display h2" style="margin-top:14px">${esc(L(nx.title))}</h2></a></div>`;
    bindEmbeds(out);
  }

  function bindEmbeds(root) {
    root.querySelectorAll(".video[data-embed]").forEach((box) => {
      const b = box.querySelector(".poster-btn");
      if (!b) return;
      b.addEventListener("click", () => {
        box.innerHTML = `<iframe src="${box.dataset.embed}" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>`;
      });
    });
  }

  /* ---------------- Services ---------------- */
  const PROCESS = [
    { t: { en: "Brief", km: "សេចក្តីសង្ខេប" }, d: { en: "We talk through the idea, the audience, the deadline and the budget. You get a written proposal and a quote.", km: "យើងពិភាក្សាអំពីគំនិត ទស្សនិកជន ពេលវេលា និងថវិកា។ អ្នកនឹងទទួលបានសំណើជាលាយលក្ខណ៍អក្សរ និងតម្លៃ។" } },
    { t: { en: "Pre-production", km: "មុនការផលិត" }, d: { en: "Research, script or interview plan, shot list, locations, crew and a shooting schedule.", km: "ការស្រាវជ្រាវ ស្គ្រីប ឬផែនការសម្ភាសន៍ បញ្ជីការថត ទីតាំង ក្រុមការងារ និងកាលវិភាគថត។" } },
    { t: { en: "Production", km: "ការផលិត" }, d: { en: "The shoot. I run the set, look after the people on camera, and keep to the schedule.", km: "ការថត។ ខ្ញុំគ្រប់គ្រងកន្លែងថត មើលថែមនុស្សនៅមុខកាមេរ៉ា និងរក្សាតាមកាលវិភាគ។" } },
    { t: { en: "Post-production", km: "ក្រោយការផលិត" }, d: { en: "Edit, colour, sound, graphics and Khmer/English subtitles, with time for your feedback.", km: "ការកាត់ត ពណ៌ សំឡេង ក្រាហ្វិក និងអក្សររត់ខ្មែរ/អង់គ្លេស ព្រមទាំងពេលវេលាសម្រាប់មតិកែលម្អរបស់អ្នក។" } },
    { t: { en: "Delivery", km: "ការប្រគល់" }, d: { en: "Final files in the formats you need: broadcast, YouTube, vertical cut-downs and stills.", km: "ឯកសារចុងក្រោយតាមទម្រង់ដែលអ្នកត្រូវការ៖ ទូរទស្សន៍ YouTube កំណែបញ្ឈរ និងរូបភាព។" } },
  ];
  const FAQ = [
    { q: { en: "Do you work outside Phnom Penh?", km: "តើអ្នកធ្វើការនៅក្រៅភ្នំពេញដែរឬទេ?" }, a: { en: "Yes. She Dares was filmed in Ratanakiri, and I travel to shoot anywhere in Cambodia.", km: "បាទ។ ខ្សែភាពយន្ត នាងហ៊ាន ត្រូវបានថតនៅខេត្តរតនគិរី ហើយខ្ញុំអាចធ្វើដំណើរទៅថតគ្រប់ទីកន្លែងក្នុងប្រទេសកម្ពុជា។" } },
    { q: { en: "Can you deliver in both Khmer and English?", km: "តើអាចផលិតជាភាសាខ្មែរ និងអង់គ្លេសបានទេ?" }, a: { en: "Yes. I work in both languages, and I can deliver subtitles in either or both.", km: "បាទ។ ខ្ញុំធ្វើការបានទាំងពីរភាសា ហើយអាចផ្តល់អក្សររត់ជាភាសាណាមួយ ឬទាំងពីរ។" } },
    { q: { en: "How much does a project cost?", km: "តើគម្រោងមួយតម្លៃប៉ុន្មាន?" }, a: { en: "It depends on the shoot days, the crew and the length of the edit. Send me a brief with a rough budget and I’ll tell you what’s possible for it.", km: "វាអាស្រ័យលើចំនួនថ្ងៃថត ក្រុមការងារ និងរយៈពេលកាត់ត។ សូមផ្ញើសេចក្តីសង្ខេប និងថវិកាប្រហាក់ប្រហែល ហើយខ្ញុំនឹងប្រាប់ពីអ្វីដែលអាចធ្វើបាន។" } },
    { q: { en: "How long does it take?", km: "តើត្រូវការពេលប៉ុន្មាន?" }, a: { en: "A short social video can be turned around quickly; a documentary takes longer because of research and access. Tell me your deadline first, and I’ll tell you honestly whether it’s realistic.", km: "វីដេអូខ្លីសម្រាប់បណ្តាញសង្គមអាចធ្វើបានលឿន ប៉ុន្តែភាពយន្តឯកសារត្រូវការពេលយូរជាង ដោយសារការស្រាវជ្រាវ និងការទាក់ទង។ សូមប្រាប់ពីពេលកំណត់របស់អ្នក ហើយខ្ញុំនឹងប្រាប់ដោយស្មោះត្រង់ថាតើវាអាចធ្វើទៅបានឬអត់។" } },
    { q: { en: "Can I hire you for just one part, such as filming or editing?", km: "តើអាចជួលអ្នកសម្រាប់តែផ្នែកណាមួយ ដូចជាការថត ឬការកាត់តបានទេ?" }, a: { en: "Yes. I can join your team as cinematographer or editor only.", km: "បាទ។ ខ្ញុំអាចចូលរួមជាមួយក្រុមរបស់អ្នក ក្នុងនាមជាអ្នកដឹកនាំការថត ឬអ្នកកាត់តតែប៉ុណ្ណោះ។" } },
  ];
  function renderServices() {
    const sl = document.getElementById("svc-list");
    if (sl) sl.innerHTML = SERVICES.map((s, i) => `<div class="svc rv"><span class="mono red">0${i + 1}</span><h3 class="display h3">${esc(L(s.t))}</h3><div><p>${esc(L(s.d))}</p><ul>${L(s.x).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></div>`).join("");
    const pr = document.getElementById("process");
    if (pr) pr.innerHTML = PROCESS.map((s, i) => `<div class="step rv"><span class="n">0${i + 1}</span><h4>${esc(L(s.t))}</h4><p>${esc(L(s.d))}</p></div>`).join("");
    const fq = document.getElementById("faq");
    if (fq) fq.innerHTML = FAQ.map((f) => `<details><summary>${esc(L(f.q))}</summary><p>${esc(L(f.a))}</p></details>`).join("");
  }

  /* ---------------- About ---------------- */
  const EXP = [
    { d: "Jan 2025 — now", r: { en: "Audiovisual Production Associate", km: "ជំនួយការផលិតកម្មសោតទស្សន៍" }, o: { en: "Department of Media and Communication (DMC), RUPP", km: "ដេប៉ាតឺម៉ង់ប្រព័ន្ធផ្សព្វផ្សាយ និងសារគមនាគមន៍ (DMC) សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      b: { en: ["Produce promotional videos and digital content for the department", "Support student and staff productions from planning through post-production", "Manage the audiovisual equipment room and lending", "Give technical support to students and lecturers"],
           km: ["ផលិតវីដេអូផ្សព្វផ្សាយ និងមាតិកាឌីជីថលសម្រាប់ដេប៉ាតឺម៉ង់", "គាំទ្រការផលិតរបស់និស្សិត និងបុគ្គលិក ចាប់ពីការរៀបចំផែនការ រហូតដល់ក្រោយការផលិត", "គ្រប់គ្រងបន្ទប់សម្ភារៈសោតទស្សន៍ និងការខ្ចីសម្ភារៈ", "ផ្តល់ជំនួយបច្ចេកទេសដល់និស្សិត និងសាស្ត្រាចារ្យ"] } },
    { d: "Jan 2026 — Aug 2026", r: { en: "Assistant Faculty (IT)", km: "ជំនួយការមហាវិទ្យាល័យ (IT)" }, o: { en: "Faculty of Social Sciences and Humanities, RUPP", km: "មហាវិទ្យាល័យវិទ្យាសាស្ត្រសង្គម និងមនុស្សសាស្ត្រ សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      b: { en: ["Ran the faculty website and social media", "Planned, organised and promoted faculty events", "Produced PR materials for the faculty", "Archived documents and managed digital assets"],
           km: ["គ្រប់គ្រងគេហទំព័រ និងបណ្តាញសង្គមរបស់មហាវិទ្យាល័យ", "រៀបចំផែនការ រៀបចំ និងផ្សព្វផ្សាយព្រឹត្តិការណ៍", "ផលិតសម្ភារៈទំនាក់ទំនងសាធារណៈ", "រក្សាទុកឯកសារ និងគ្រប់គ្រងទ្រព្យសកម្មឌីជីថល"] } },
    { d: "2024 — 2025", r: { en: "Designer & Editor", km: "អ្នករចនា និងអ្នកកាត់ត" }, o: { en: "TW Communication", km: "TW Communication" },
      b: { en: ["Designed posters for social media and print", "Shot product videos and photos with the marketing team", "Covered events, conferences and meetings on location", "Edited photos and video"],
           km: ["រចនាផូស្ទ័រសម្រាប់បណ្តាញសង្គម និងការបោះពុម្ព", "ថតវីដេអូ និងរូបថតផលិតផលជាមួយក្រុមទីផ្សារ", "ថតព្រឹត្តិការណ៍ សន្និសីទ និងកិច្ចប្រជុំ", "កាត់តរូបថត និងវីដេអូ"] } },
    { d: "2021 — 2024", r: { en: "Designer & Social Media Marketer", km: "អ្នករចនា និងអ្នកទីផ្សារបណ្តាញសង្គម" }, o: { en: "Decore and Advertising Cambodia", km: "Decore and Advertising Cambodia" },
      b: { en: ["Designed digital and print marketing for clients", "Made 3D furniture visualisations in SketchUp", "Ran social media content and client communication", "Prepared quotations, invoices and project documents"],
           km: ["រចនាសម្ភារៈទីផ្សារឌីជីថល និងបោះពុម្ពសម្រាប់អតិថិជន", "បង្កើតរូបភាព 3D គ្រឿងសង្ហារិមក្នុង SketchUp", "គ្រប់គ្រងមាតិកាបណ្តាញសង្គម និងទំនាក់ទំនងអតិថិជន", "រៀបចំតារាងតម្លៃ វិក្កយបត្រ និងឯកសារគម្រោង"] } },
  ];
  function renderAbout() {
    const tl = document.getElementById("timeline");
    if (tl) tl.innerHTML = EXP.map((e) => `<div class="tl rv"><div><span class="mono red keep-latin">${e.d}</span></div><div><h4>${esc(L(e.r))}</h4><div class="org">${esc(L(e.o))}</div><ul>${L(e.b).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></div>`).join("");
    const sk = document.getElementById("skills");
    const SK = { en: ["Production management", "Cinematography", "Documentary filming", "Project management", "Video editing", "Motion graphics", "Graphic design", "Photography"],
                 km: ["ការគ្រប់គ្រងផលិតកម្ម", "ការដឹកនាំការថត", "ការថតភាពយន្តឯកសារ", "ការគ្រប់គ្រងគម្រោង", "ការកាត់តវីដេអូ", "ក្រាហ្វិកចលនា", "ការរចនាក្រាហ្វិក", "ការថតរូប"] };
    if (sk) sk.innerHTML = L(SK).map((x) => `<li>${esc(x)}</li>`).join("");
    const lg = document.getElementById("langs");
    if (lg) lg.innerHTML = (lang === "km" ? ["ខ្មែរ — ភាសាកំណើត", "អង់គ្លេស — ស្ទាត់ជំនាញ"] : ["Khmer — native", "English — fluent"]).map((x) => `<li>${x}</li>`).join("");
  }

  /* ---------------- Contact ---------------- */
  function renderContact() {
    const types = document.getElementById("types");
    if (types) {
      const prev = [...types.querySelectorAll("input:checked")].map((i) => i.value);
      types.innerHTML = ["t.doc", "t.tvc", "t.psa", "t.social", "t.pod", "t.event", "t.photo", "t.design", "t.other"]
        .map((k) => `<label><input type="checkbox" name="type" value="${k}"${prev.includes(k) ? " checked" : ""}><span>${t(k)}</span></label>`).join("");
    }
    const bud = document.getElementById("f-budget");
    if (bud) {
      const v = bud.value;
      bud.innerHTML = ["b.none", "b.1", "b.2", "b.3", "b.4"].map((k) => `<option value="${k}">${t(k)}</option>`).join("");
      if (v) bud.value = v;
    }
    document.querySelectorAll("[data-email]").forEach((e) => (e.textContent = CONFIG.email));
    document.querySelectorAll("[data-phone]").forEach((e) => (e.textContent = CONFIG.phone + " · @" + CONFIG.telegram));
  }
  function bindContact() {
    const form = document.getElementById("brief");
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";
    const status = document.getElementById("form-status");
    const compose = () => {
      const fd = new FormData(form);
      const name = (fd.get("name") || "").toString().trim();
      const msg = (fd.get("message") || "").toString().trim();
      if (!name || !msg) { status.textContent = t("c.required"); status.className = "form-status err"; return null; }
      const types = fd.getAll("type").map((k) => S[k][0]).join(", ") || "-";
      const budget = S[fd.get("budget")] ? S[fd.get("budget")][0] : "-";
      const lines = [
        "Hi Panha,", "",
        msg, "",
        "— Name: " + name,
        "— Organisation: " + ((fd.get("org") || "").toString().trim() || "-"),
        "— Reply to: " + ((fd.get("reply") || "").toString().trim() || "-"),
        "— Project type: " + types,
        "— Budget: " + budget,
        "— Needed by: " + ((fd.get("date") || "").toString() || "-"),
      ];
      return { name, types, text: lines.join("\n") };
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const c = compose(); if (!c) return;
      const subject = `Project enquiry: ${c.types === "-" ? "new project" : c.types} (${c.name})`;
      location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(c.text)}`;
      status.className = "form-status"; status.innerHTML = `${t("c.mailOk")} <a class="link-u" href="mailto:${CONFIG.email}">${CONFIG.email}</a>.`;
    });
    document.getElementById("send-tg").addEventListener("click", async () => {
      const c = compose(); if (!c) return;
      try { await navigator.clipboard.writeText(c.text); } catch (e) {
        const ta = document.createElement("textarea"); ta.value = c.text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (_) {} ta.remove();
      }
      window.open(`https://t.me/${CONFIG.telegram}`, "_blank", "noopener");
      status.className = "form-status"; status.textContent = t("c.tgOk");
    });
  }

  /* ---------------- Copy buttons ---------------- */
  function bindCopy() {
    document.querySelectorAll("[data-copy]").forEach((b) => {
      b.textContent = t("c.copy");
      b.onclick = async () => {
        const v = b.dataset.copy === "email" ? CONFIG.email : CONFIG.phone;
        try { await navigator.clipboard.writeText(v); } catch (e) {}
        toast(`${t("c.copied")}: ${v}`);
      };
    });
  }
  let toastT;
  function toast(msg) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg; el.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("on"), 2200);
  }

  /* ---------------- Lightbox ---------------- */
  const lb = { el: null, list: [], i: 0 };
  function lbBuild() {
    if (lb.el) return;
    const el = document.createElement("div");
    el.className = "lb"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-label", "Image viewer");
    el.innerHTML = `<span class="lb-count mono"></span><img alt=""><button class="lb-btn lb-close" type="button" aria-label="Close">${ICON.close}</button><button class="lb-btn lb-prev" type="button" aria-label="Previous">${ICON.left}</button><button class="lb-btn lb-next" type="button" aria-label="Next">${ICON.right}</button>`;
    document.body.appendChild(el); lb.el = el;
    el.querySelector(".lb-close").onclick = lbClose;
    el.querySelector(".lb-prev").onclick = () => lbGo(-1);
    el.querySelector(".lb-next").onclick = () => lbGo(1);
    el.addEventListener("click", (e) => { if (e.target === el) lbClose(); });
    let sx = null;
    el.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    el.addEventListener("touchend", (e) => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) lbGo(dx < 0 ? 1 : -1); sx = null; });
  }
  function lbShow() { const img = lb.el.querySelector("img"); img.src = lb.list[lb.i]; lb.el.querySelector(".lb-count").textContent = `${String(lb.i + 1).padStart(2, "0")} / ${String(lb.list.length).padStart(2, "0")}`; }
  function lbGo(d) { lb.i = (lb.i + d + lb.list.length) % lb.list.length; lbShow(); }
  function lbOpen(list, i) { lbBuild(); lb.list = list; lb.i = i; lbShow(); lb.el.classList.add("open"); document.body.style.overflow = "hidden"; lb.el.querySelector(".lb-close").focus(); }
  function lbClose() { lb.el.classList.remove("open"); document.body.style.overflow = ""; }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-gallery] button");
    if (!b) return;
    const g = b.closest("[data-gallery]");
    lbOpen([...g.querySelectorAll("img")].map((i) => i.getAttribute("src")), +b.dataset.i);
  });

  /* ---------------- Video modal (home) ---------------- */
  let vm;
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-video]");
    if (!b) return;
    if (!vm) {
      vm = document.createElement("div"); vm.className = "vmodal"; vm.setAttribute("role", "dialog"); vm.setAttribute("aria-modal", "true");
      vm.innerHTML = `<button class="lb-btn" type="button" aria-label="Close">${ICON.close}</button><div class="video"></div>`;
      document.body.appendChild(vm);
      const close = () => { vm.classList.remove("open"); vm.querySelector(".video").innerHTML = ""; document.body.style.overflow = ""; };
      vm.querySelector(".lb-btn").onclick = close; vm.addEventListener("click", (ev) => { if (ev.target === vm) close(); }); vm._close = close;
    }
    vm.querySelector(".video").innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.video}?autoplay=1&rel=0" title="She Dares" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    vm.classList.add("open"); document.body.style.overflow = "hidden";
  });

  document.addEventListener("keydown", (e) => {
    if (lb.el && lb.el.classList.contains("open")) {
      if (e.key === "Escape") lbClose(); if (e.key === "ArrowRight") lbGo(1); if (e.key === "ArrowLeft") lbGo(-1);
    }
    if (vm && vm.classList.contains("open") && e.key === "Escape") vm._close();
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) document.querySelector(".menu-btn").click();
  });

  /* ---------------- Reveal + header behaviour ---------------- */
  let io;
  function reveal() {
    const els = document.querySelectorAll(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    if (!io) io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }
  let lastY = 0;
  function onScroll() {
    const h = document.getElementById("site-header"); if (!h) return;
    const y = window.scrollY;
    h.classList.toggle("is-solid", y > 40);
    h.classList.toggle("is-hidden", y > 400 && y > lastY && !document.body.classList.contains("menu-open"));
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- Boot ---------------- */
  function renderAll() {
    renderChrome(); bindChrome(); applyStatic();
    if (page === "home") renderHome();
    if (page === "work") renderWork();
    if (page === "project") renderProject();
    if (page === "services") { renderServices(); renderHome(); }
    if (page === "about") renderAbout();
    if (page === "contact") { renderContact(); bindContact(); }
    bindCopy(); tickClock(); reveal(); onScroll();
  }
  renderAll();
  setInterval(tickClock, 30000);
})();
