/* ==========================================================================
   PROJECTS — edit this file to add, remove or reorder work.
   Every text field has an English (en) and Khmer (km) version.
   Images live in assets/img/<slug>/ : cover.jpg, still-01.jpg..., bts-01.jpg...
   video: { type: "youtube", id } | { type: "facebook", urls: [] } | { type: "drive", id }
          | { type: "link", url } | { type: "soon" }
   ========================================================================== */

(function () {
  const seq = (slug, kind, n) =>
    Array.from({ length: n }, (_, i) => `assets/img/${slug}/${kind}-${String(i + 1).padStart(2, "0")}.jpg`);

  window.CATEGORIES = [
    { id: "documentary", en: "Documentary", km: "ភាពយន្តឯកសារ" },
    { id: "short-film", en: "Short film", km: "ភាពយន្តខ្លី" },
    { id: "podcast", en: "Podcast", km: "ផតខាស្ទ៍" },
    { id: "commercial", en: "TVC & PSA", km: "ពាណិជ្ជកម្ម និងសារសាធារណៈ" },
    { id: "campaign", en: "Campaign", km: "យុទ្ធនាការ" },
    { id: "photography", en: "Photography", km: "ការថតរូប" },
    { id: "design", en: "Design", km: "ការរចនា" },
  ];

  window.PROJECTS = [
    {
      slug: "she-dares",
      thumb: "assets/img/she-dares/cover.jpg", thumbPos: "center 16%",
      cat: "documentary",
      title: { en: "She Dares", km: "នាងហ៊ាន" },
      altTitle: "នាងហ៊ាន",
      role: { en: "Co-Director & Cinematographer", km: "សហអ្នកដឹកនាំរឿង និងអ្នកដឹកនាំការថត" },
      partner: { en: "DMC, Royal University of Phnom Penh", km: "ដេប៉ាតឺម៉ង់ប្រព័ន្ធផ្សព្វផ្សាយ និងសារគមនាគមន៍ (DMC) សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      format: { en: "Short documentary", km: "ភាពយន្តឯកសារខ្លី" },
      place: { en: "Ratanakiri Province", km: "ខេត្តរតនគិរី" },
      line: {
        en: "A girl in Ratanakiri breaks the silence around menstruation.",
        km: "ក្មេងស្រីម្នាក់នៅរតនគិរី បំបែកភាពស្ងៀមស្ងាត់ជុំវិញរឿងរដូវ។",
      },
      body: {
        en: [
          "In an Indigenous community in Ratanakiri, Sreyneth starts talking about something her village has always kept quiet: menstruation.",
          "We followed her at home, at school and around the village as she pushes back against the old taboos, and opens space for girls and women to talk about their bodies with dignity. I co-directed the film and was its cinematographer.",
        ],
        km: [
          "នៅក្នុងសហគមន៍ជនជាតិដើមភាគតិចមួយក្នុងខេត្តរតនគិរី ស្រីនេតចាប់ផ្តើមនិយាយអំពីរឿងដែលភូមិរបស់នាងតែងតែលាក់ទុក គឺរឿងរដូវ។",
          "យើងបានតាមដាននាងនៅផ្ទះ នៅសាលា និងជុំវិញភូមិ ខណៈដែលនាងតតាំងនឹងទំនៀមទម្លាប់ចាស់ៗ ហើយបើកឱកាសឱ្យក្មេងស្រី និងស្ត្រីអាចនិយាយអំពីរាងកាយរបស់ខ្លួនដោយសេចក្តីថ្លៃថ្នូរ។ ខ្ញុំជាសហអ្នកដឹកនាំរឿង និងជាអ្នកដឹកនាំការថតនៃខ្សែភាពយន្តនេះ។",
        ],
      },
      cover: "assets/img/she-dares/cover.jpg",
      coverShape: "poster",
      stills: seq("she-dares", "still", 8),
      bts: seq("she-dares", "bts", 7),
      video: { type: "youtube", id: "rCCgvuD5Ljk" },
      featured: true,
    },
    {
      slug: "absorb-the-light",
      thumb: "assets/img/absorb-the-light/still-01.jpg",
      cat: "documentary",
      title: { en: "Absorb the Light, Arise the Grow", km: "ទាញពន្លឺ បង្កើតពន្លក" },
      altTitle: "ទាញពន្លឺ បង្កើតពន្លក",
      role: { en: "Producer & Cinematographer", km: "ផលិតករ និងអ្នកដឹកនាំការថត" },
      partner: { en: "DMC, Royal University of Phnom Penh", km: "DMC សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      format: { en: "Short documentary", km: "ភាពយន្តឯកសារខ្លី" },
      place: { en: "Cambodia", km: "កម្ពុជា" },
      line: {
        en: "A farmer, a greenhouse and solar panels on the roof.",
        km: "កសិករម្នាក់ ផ្ទះកញ្ចក់មួយ និងផ្ទាំងសូឡានៅលើដំបូល។",
      },
      body: {
        en: [
          "Rom Sary wanted to farm without being at the mercy of the weather. So he built a hydroponic greenhouse and powered it with solar panels.",
          "It's a small, practical story about one person showing his community a way into clean energy. I produced the film and was its cinematographer.",
        ],
        km: [
          "លោក រុំ សារី ចង់ធ្វើកសិកម្មដោយមិនពឹងផ្អែកលើអាកាសធាតុ។ ដូច្នេះគាត់បានសាងសង់ផ្ទះកញ្ចក់ដាំដំណាំបែបអ៊ីដ្រូប៉ូនិក ហើយប្រើថាមពលពីផ្ទាំងសូឡា។",
          "វាជារឿងតូចមួយ ប៉ុន្តែជាក់ស្តែង អំពីមនុស្សម្នាក់ដែលបង្ហាញសហគមន៍របស់គាត់ពីផ្លូវឆ្ពោះទៅរកថាមពលស្អាត។ ខ្ញុំជាផលិតករ និងជាអ្នកដឹកនាំការថតនៃខ្សែភាពយន្តនេះ។",
        ],
      },
      cover: "assets/img/absorb-the-light/cover.jpg",
      coverShape: "poster",
      stills: seq("absorb-the-light", "still", 8),
      bts: seq("absorb-the-light", "bts", 7),
      video: { type: "youtube", id: "-qb0hydyM5Q" },
      featured: true,
    },
    {
      slug: "stem-short-films",
      cat: "short-film",
      title: { en: "Women in STEM — Two Short Films", km: "ស្ត្រីក្នុងវិស័យ STEM — ភាពយន្តខ្លីពីររឿង" },
      role: { en: "Cinematographer", km: "អ្នកដឹកនាំការថត" },
      partner: { en: "Plan International Cambodia", km: "អង្គការ Plan International Cambodia" },
      format: { en: "Two short dramas, vertical", km: "ភាពយន្តខ្លីពីររឿង ទម្រង់បញ្ឈរ" },
      place: { en: "Phnom Penh", km: "ភ្នំពេញ" },
      line: {
        en: "Two short dramas about why so few young women choose science.",
        km: "ភាពយន្តខ្លីពីររឿង អំពីមូលហេតុដែលស្ត្រីវ័យក្មេងតិចតួចជ្រើសរើសវិទ្យាសាស្ត្រ។",
      },
      body: {
        en: [
          "Two short films made for an education campaign on the low number of women in science, technology, engineering and maths.",
          "They were produced by the DMC Media Team with support from Plan International Cambodia. I was the cinematographer on both films, and I also had the chance to direct them.",
        ],
        km: [
          "ភាពយន្តខ្លីពីររឿងនេះ ត្រូវបានផលិតសម្រាប់យុទ្ធនាការអប់រំ ដើម្បីលើកឡើងពីការចូលរួមតិចតួចរបស់ស្ត្រីក្នុងវិស័យវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា (STEM)។",
          "ភាពយន្តទាំងពីរនេះផលិតដោយក្រុមមេឌៀ DMC ក្រោមការគាំទ្រពីអង្គការ Plan International Cambodia។ ខ្ញុំជាអ្នកដឹកនាំការថតលើភាពយន្តទាំងពីរ ហើយក៏មានឱកាសដឹកនាំរឿងទាំងពីរនេះផងដែរ។",
        ],
      },
      cover: "assets/img/stem-short-films/cover.jpg",
      coverShape: "landscape",
      stills: seq("stem-short-films", "still", 10),
      bts: seq("stem-short-films", "bts", 6),
      video: {
        type: "facebook",
        urls: ["https://www.facebook.com/reel/751199007308512", "https://www.facebook.com/reel/696496099481238"],
      },
      featured: false,
    },
    {
      slug: "the-dmc-way",
      cat: "podcast",
      title: { en: "The DMC Way", km: "The DMC Way" },
      role: { en: "Producer & Editor", km: "ផលិតករ និងអ្នកកាត់តវីដេអូ" },
      partner: { en: "DMC, Royal University of Phnom Penh", km: "DMC សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      format: { en: "Video podcast series", km: "ស៊េរីវីដេអូផតខាស្ទ៍" },
      place: { en: "Phnom Penh", km: "ភ្នំពេញ" },
      line: {
        en: "Alumni and future students, talking honestly about life after DMC.",
        km: "អតីតនិស្សិត និងសិស្សដែលនឹងចូលរៀន និយាយដោយស្មោះត្រង់អំពីជីវិតក្រោយ DMC។",
      },
      body: {
        en: [
          "The DMC Way puts prospective students in a room with alumni to talk about what happened after graduation: the jobs, the changes of direction, and what the programme actually gave them.",
          "I produced the series and edited the episodes, from planning the shoot in the faculty library to the final cut on YouTube.",
        ],
        km: [
          "The DMC Way នាំសិស្សដែលមានបំណងចូលរៀន មកជួបជជែកជាមួយអតីតនិស្សិត អំពីអ្វីដែលបានកើតឡើងក្រោយបញ្ចប់ការសិក្សា៖ ការងារ ការផ្លាស់ប្តូរទិសដៅ និងអ្វីដែលកម្មវិធីសិក្សាពិតជាបានផ្តល់ឱ្យពួកគេ។",
          "ខ្ញុំជាផលិតករនៃស៊េរីនេះ និងជាអ្នកកាត់តវគ្គនានា ចាប់ពីការរៀបចំការថតនៅក្នុងបណ្ណាល័យ រហូតដល់ការកាត់តចុងក្រោយសម្រាប់ YouTube។",
        ],
      },
      cover: "assets/img/the-dmc-way/cover.jpg",
      coverShape: "square",
      stills: seq("the-dmc-way", "still", 12),
      bts: seq("the-dmc-way", "bts", 6),
      video: { type: "youtube", id: "uIj2Uw-ehq8", list: "PLcCvWr6NJm_Bclzhl-yC8AcspORvxjgwF" },
      featured: false,
    },
    {
      slug: "the-next-level",
      cat: "podcast",
      title: { en: "The Next Level Podcast", km: "ផតខាស្ទ៍ ជំហានបន្ទាប់" },
      altTitle: "ជំហានបន្ទាប់",
      role: { en: "Producer & Editor", km: "ផលិតករ និងអ្នកកាត់តវីដេអូ" },
      partner: { en: "Faculty of Social Sciences and Humanities, RUPP", km: "មហាវិទ្យាល័យវិទ្យាសាស្ត្រសង្គម និងមនុស្សសាស្ត្រ សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      format: { en: "12-episode video podcast", km: "វីដេអូផតខាស្ទ៍ ១២ វគ្គ" },
      place: { en: "Phnom Penh", km: "ភ្នំពេញ" },
      line: {
        en: "Twelve episodes that walk high-school students through eleven university majors.",
        km: "១២ វគ្គ ដែលណែនាំសិស្សវិទ្យាល័យអំពីមុខជំនាញទាំង ១១ នៅសាកលវិទ្យាល័យ។",
      },
      body: {
        en: [
          "The Next Level is a 12-episode series for high-school students choosing what to study. Each episode covers one of the eleven majors offered by the Faculty of Social Sciences and Humanities at RUPP, with lecturers and current students explaining what the subject is really like.",
          "I produced and edited the series. It will be published on the RUPP page soon.",
        ],
        km: [
          "ជំហានបន្ទាប់ គឺជាស៊េរី ១២ វគ្គ សម្រាប់សិស្សវិទ្យាល័យដែលកំពុងជ្រើសរើសមុខជំនាញ។ វគ្គនីមួយៗណែនាំមុខជំនាញមួយក្នុងចំណោមមុខជំនាញទាំង ១១ របស់មហាវិទ្យាល័យវិទ្យាសាស្ត្រសង្គម និងមនុស្សសាស្ត្រ នៃសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ ដោយមានសាស្ត្រាចារ្យ និងនិស្សិតពន្យល់ពីការសិក្សាជាក់ស្តែង។",
          "ខ្ញុំជាផលិតករ និងជាអ្នកកាត់តស៊េរីនេះ។ ស៊េរីនេះនឹងចាក់ផ្សាយនៅលើទំព័រ RUPP ក្នុងពេលឆាប់ៗ។",
        ],
      },
      cover: "assets/img/the-next-level/cover.jpg",
      coverShape: "landscape",
      stills: seq("the-next-level", "still", 12),
      bts: seq("the-next-level", "bts", 6),
      video: { type: "soon", where: { en: "Coming soon on the RUPP page", km: "នឹងចាក់ផ្សាយនៅលើទំព័រ RUPP ឆាប់ៗនេះ" } },
      featured: true,
    },
    {
      slug: "dmc-tvc",
      cat: "commercial",
      title: { en: "DMC — “In Here, We…”", km: "DMC — “នៅទីនេះ យើង…”" },
      role: { en: "Cinematographer", km: "អ្នកដឹកនាំការថត" },
      partner: { en: "DMC, Royal University of Phnom Penh", km: "DMC សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      format: { en: "TV commercial", km: "ពាណិជ្ជកម្មទូរទស្សន៍ (TVC)" },
      place: { en: "RUPP campus", km: "បរិវេណ សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      line: {
        en: "A recruitment commercial built around one line: In here, we…",
        km: "ពាណិជ្ជកម្មជ្រើសរើសនិស្សិត ដែលបង្កើតឡើងជុំវិញឃ្លាតែមួយ៖ នៅទីនេះ យើង…",
      },
      body: {
        en: [
          "A TV commercial for the Department of Media and Communication, made to show high-school students what studying there actually looks like, and to bring in new enrolments.",
          "The structure is simple: in here, we write, we research, we design, we screen, we record, we intern, we celebrate. Each line is a real class or space on campus. I was the cinematographer.",
        ],
        km: [
          "ពាណិជ្ជកម្មទូរទស្សន៍សម្រាប់ដេប៉ាតឺម៉ង់ប្រព័ន្ធផ្សព្វផ្សាយ និងសារគមនាគមន៍ ដើម្បីបង្ហាញសិស្សវិទ្យាល័យពីការសិក្សាជាក់ស្តែងនៅទីនោះ និងទាក់ទាញនិស្សិតថ្មី។",
          "រចនាសម្ព័ន្ធសាមញ្ញ៖ នៅទីនេះ យើងសរសេរ យើងស្រាវជ្រាវ យើងរចនា យើងចាក់បញ្ចាំង យើងថតសំឡេង យើងហាត់ការ យើងអបអរ។ ឃ្លានីមួយៗគឺជាថ្នាក់រៀន ឬកន្លែងពិតប្រាកដនៅក្នុងបរិវេណសាលា។ ខ្ញុំជាអ្នកដឹកនាំការថត។",
        ],
      },
      cover: "assets/img/dmc-tvc/cover.jpg",
      coverShape: "landscape",
      stills: seq("dmc-tvc", "still", 12),
      bts: seq("dmc-tvc", "bts", 3),
      video: { type: "youtube", id: "PoSktzGYZB4" },
      featured: true,
    },
    {
      slug: "one-month-many-moods",
      cat: "commercial",
      title: { en: "One Month, Many Moods", km: "មួយខែ អារម្មណ៍ច្រើន" },
      role: { en: "Cinematographer & Editor", km: "អ្នកដឹកនាំការថត និងអ្នកកាត់តវីដេអូ" },
      partner: { en: "DMC Media Team", km: "ក្រុមមេឌៀ DMC" },
      format: { en: "Public service announcement", km: "សារសេវាសាធារណៈ (PSA)" },
      place: { en: "Phnom Penh", km: "ភ្នំពេញ" },
      line: {
        en: "A PSA about the mood changes that come with the menstrual cycle.",
        km: "សារសេវាសាធារណៈ អំពីការប្រែប្រួលអារម្មណ៍ក្នុងអំឡុងវដ្តរដូវ។",
      },
      body: {
        en: [
          "One Month, Many Moods (OMMM) is a public service announcement about the emotional and mood changes many women go through during their menstrual cycle, and why the people around them should take those changes seriously.",
          "I shot and edited it.",
        ],
        km: [
          "មួយខែ អារម្មណ៍ច្រើន (OMMM) គឺជាសារសេវាសាធារណៈ អំពីការប្រែប្រួលផ្លូវចិត្ត និងអារម្មណ៍ ដែលស្ត្រីជាច្រើនជួបប្រទះក្នុងអំឡុងវដ្តរដូវ និងមូលហេតុដែលមនុស្សនៅជុំវិញខ្លួនគួរយកចិត្តទុកដាក់។",
          "ខ្ញុំជាអ្នកថត និងជាអ្នកកាត់តវីដេអូនេះ។",
        ],
      },
      cover: "assets/img/one-month-many-moods/cover.jpg",
      coverShape: "landscape",
      stills: seq("one-month-many-moods", "still", 12),
      bts: seq("one-month-many-moods", "bts", 6),
      video: { type: "drive", id: "1GAXmQPyVv2ilCjaypQ4UjiVrJDl2FiP9" },
      featured: false,
    },
    {
      slug: "plan-international",
      thumb: "assets/img/plan-international/bts-03.jpg",
      cat: "campaign",
      title: { en: "Plan International — Education Campaign", km: "Plan International — យុទ្ធនាការអប់រំ" },
      role: { en: "Producer, Videographer & Editor", km: "ផលិតករ អ្នកថតវីដេអូ និងអ្នកកាត់តវីដេអូ" },
      partner: { en: "Plan International Cambodia", km: "អង្គការ Plan International Cambodia" },
      format: { en: "Social video series", km: "ស៊េរីវីដេអូបណ្តាញសង្គម" },
      place: { en: "Phnom Penh", km: "ភ្នំពេញ" },
      line: {
        en: "Short videos on child marriage and on women in STEM.",
        km: "វីដេអូខ្លីៗ អំពីអាពាហ៍ពិពាហ៍កុមារ និងស្ត្រីក្នុងវិស័យ STEM។",
      },
      body: {
        en: [
          "A series of short social videos raising awareness of child marriage and of how few women work in science, technology, engineering and maths.",
          "Produced by the DMC Media Team with support from Plan International Cambodia. I produced, filmed and edited the series for social media.",
        ],
        km: [
          "ស៊េរីវីដេអូខ្លីៗសម្រាប់បណ្តាញសង្គម ដើម្បីលើកកម្ពស់ការយល់ដឹងអំពីអាពាហ៍ពិពាហ៍កុមារ និងចំនួនស្ត្រីតិចតួចដែលធ្វើការក្នុងវិស័យវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា។",
          "ផលិតដោយក្រុមមេឌៀ DMC ក្រោមការគាំទ្រពីអង្គការ Plan International Cambodia។ ខ្ញុំជាផលិតករ អ្នកថត និងអ្នកកាត់តស៊េរីនេះសម្រាប់បណ្តាញសង្គម។",
        ],
      },
      cover: "assets/img/plan-international/cover.jpg",
      coverShape: "landscape",
      stills: seq("plan-international", "still", 10),
      bts: seq("plan-international", "bts", 6),
      video: { type: "link", url: "https://www.facebook.com/PlanInternationalCambodia", label: { en: "Watch on Plan International Cambodia", km: "ទស្សនានៅលើទំព័រ Plan International Cambodia" } },
      featured: true,
    },
    {
      slug: "unicef-cambodia",
      thumb: "assets/img/unicef-cambodia/bts-02.jpg",
      cat: "campaign",
      title: { en: "UNICEF Cambodia — Girls’ Education", km: "UNICEF Cambodia — ការអប់រំក្មេងស្រី" },
      role: { en: "Producer, Videographer & Editor", km: "ផលិតករ អ្នកថតវីដេអូ និងអ្នកកាត់តវីដេអូ" },
      partner: { en: "UNICEF Cambodia", km: "UNICEF កម្ពុជា" },
      format: { en: "Social video series", km: "ស៊េរីវីដេអូបណ្តាញសង្គម" },
      place: { en: "Phnom Penh", km: "ភ្នំពេញ" },
      line: {
        en: "A campaign for inclusive education and empowerment for girls.",
        km: "យុទ្ធនាការសម្រាប់ការអប់រំបរិយាប័ន្ន និងការលើកកម្ពស់សិទ្ធិអំណាចក្មេងស្រី។",
      },
      body: {
        en: [
          "An education campaign on inclusive education and empowerment for girls, produced by the DMC Media Team with support from UNICEF Cambodia.",
          "I produced, filmed and edited the videos. They will be published on UNICEF Cambodia’s Facebook page.",
        ],
        km: [
          "យុទ្ធនាការអប់រំស្តីពីការអប់រំបរិយាប័ន្ន និងការលើកកម្ពស់សិទ្ធិអំណាចក្មេងស្រី ផលិតដោយក្រុមមេឌៀ DMC ក្រោមការគាំទ្រពី UNICEF កម្ពុជា។",
          "ខ្ញុំជាផលិតករ អ្នកថត និងអ្នកកាត់តវីដេអូទាំងនេះ។ វីដេអូនឹងចាក់ផ្សាយនៅលើទំព័រហ្វេសប៊ុករបស់ UNICEF កម្ពុជា។",
        ],
      },
      cover: "assets/img/unicef-cambodia/cover.jpg",
      coverShape: "poster",
      stills: seq("unicef-cambodia", "still", 5),
      bts: seq("unicef-cambodia", "bts", 6),
      video: { type: "soon", where: { en: "Coming soon on UNICEF Cambodia’s Facebook page", km: "នឹងចាក់ផ្សាយនៅលើទំព័រហ្វេសប៊ុក UNICEF កម្ពុជា ឆាប់ៗនេះ" } },
      featured: false,
    },
    {
      slug: "24-hours",
      thumb: "assets/img/24-hours/still-01.jpg",
      cat: "photography",
      title: { en: "24 Hours", km: "២៤ ម៉ោង" },
      altTitle: "២៤ ម៉ោង",
      role: { en: "Photographer", km: "អ្នកថតរូប" },
      partner: { en: "Personal project", km: "គម្រោងផ្ទាល់ខ្លួន" },
      format: { en: "Documentary photo series", km: "ស៊េរីរូបថតឯកសារ" },
      place: { en: "Derm Ko Market, Phnom Penh", km: "ផ្សារដើមគ ភ្នំពេញ" },
      line: {
        en: "A day and a night with the people who keep Derm Ko market running.",
        km: "មួយថ្ងៃ មួយយប់ ជាមួយអ្នកដែលធ្វើឱ្យផ្សារដើមគដំណើរការ។",
      },
      body: {
        en: [
          "Most of the people working at Derm Ko market came to Phnom Penh from provinces across Cambodia, looking for a better living in the city.",
          "According to the World Bank, the national poverty rate fell to 16.6% in 2022, but poverty in urban areas has held on because of high living costs, low incomes and too few jobs. The vendors, porters and drivers of Derm Ko are a big part of the informal economy that keeps the city fed. This series follows them across 24 hours: their work, their resilience, and the role they play in the life of the city.",
        ],
        km: [
          "អ្នកធ្វើការភាគច្រើននៅផ្សារដើមគ បានចាកចេញពីស្រុកកំណើតនៅតាមខេត្តនានាទូទាំងប្រទេស មកកាន់ទីក្រុងភ្នំពេញ ដើម្បីស្វែងរកជីវភាពល្អប្រសើរ។",
          "យោងតាមធនាគារពិភពលោក អត្រាភាពក្រីក្រជាតិបានធ្លាក់ចុះមកត្រឹម ១៦,៦% នៅឆ្នាំ ២០២២ ប៉ុន្តែភាពក្រីក្រនៅតំបន់ទីក្រុងនៅតែបន្ត ដោយសារថ្លៃជីវភាពខ្ពស់ ប្រាក់ចំណូលទាប និងការងារមិនគ្រប់គ្រាន់។ អ្នកលក់ អ្នកលីសែង និងអ្នកបើកបរនៅផ្សារដើមគ គឺជាផ្នែកដ៏សំខាន់នៃសេដ្ឋកិច្ចក្រៅប្រព័ន្ធ។ ស៊េរីរូបថតនេះតាមដានពួកគេពេញ ២៤ ម៉ោង៖ ការងារ ភាពអត់ធ្មត់ និងតួនាទីរបស់ពួកគេក្នុងជីវិតទីក្រុង។",
        ],
      },
      cover: "assets/img/24-hours/cover.jpg",
      coverShape: "landscape",
      stills: seq("24-hours", "still", 26),
      bts: [],
      video: null,
      featured: true,
      gallery: "dense",
    },
    {
      slug: "dmc-post",
      cat: "design",
      title: { en: "DMC Post Magazine", km: "ទស្សនាវដ្តី DMC Post" },
      role: { en: "Editorial Designer", km: "អ្នករចនាទស្សនាវដ្តី" },
      partner: { en: "DMC, Royal University of Phnom Penh", km: "DMC សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ" },
      format: { en: "Print magazine", km: "ទស្សនាវដ្តីបោះពុម្ព" },
      place: { en: "Phnom Penh", km: "ភ្នំពេញ" },
      line: {
        en: "Designing the whole issue of the student feature magazine.",
        km: "រចនាទស្សនាវដ្តីអត្ថបទពិសេសរបស់និស្សិតទាំងមូល។",
      },
      body: {
        en: [
          "In second year at DMC, every student writes two feature stories for DMC Post as the final project of the academic year.",
          "I had the chance to collect those features and design the whole magazine.",
        ],
        km: [
          "នៅឆ្នាំទីពីរ នៅ DMC និស្សិតម្នាក់ៗត្រូវសរសេរអត្ថបទពិសេសពីរ សម្រាប់ទស្សនាវដ្តី DMC Post ជាគម្រោងបញ្ចប់ឆ្នាំសិក្សា។",
          "ខ្ញុំមានឱកាសប្រមូលអត្ថបទទាំងនោះ ហើយរចនាទស្សនាវដ្តីទាំងមូល។",
        ],
      },
      cover: "assets/img/dmc-post/cover.jpg",
      coverShape: "landscape",
      stills: seq("dmc-post", "still", 1),
      bts: [],
      video: null,
      featured: false,
      gallery: "wide",
    },
    {
      slug: "social-posters",
      cat: "design",
      title: { en: "Social Media Design", km: "ការរចនាសម្រាប់បណ្តាញសង្គម" },
      role: { en: "Graphic Designer", km: "អ្នករចនាក្រាហ្វិក" },
      partner: { en: "TW Digital · Kakcent · Kouprey Creative", km: "TW Digital · កាក់សេន · Kouprey Creative" },
      format: { en: "Social posts & print", km: "ប៉ុស្តិ៍បណ្តាញសង្គម និងការបោះពុម្ព" },
      place: { en: "Phnom Penh", km: "ភ្នំពេញ" },
      line: {
        en: "Where I started: posters and social content for three agencies and brands.",
        km: "ចំណុចចាប់ផ្តើមរបស់ខ្ញុំ៖ ផូស្ទ័រ និងមាតិកាបណ្តាញសង្គម សម្រាប់ភ្នាក់ងារ និងម៉ាកបី។",
      },
      body: {
        en: [
          "I started out as a graphic designer, and it's how I found my way into film. Design taught me to say one clear thing with an image, and to stay inside a brand's rules while doing it.",
          "TW Digital Communication is a digital agency doing websites, UX/UI and social advertising. Kakcent makes financial-literacy content for Cambodians and sells books on money management. Kouprey Creative Solution is a branding studio affiliated with TW Digital. For all three I designed social posts and campaign graphics in Khmer and English.",
        ],
        km: [
          "ខ្ញុំចាប់ផ្តើមជាអ្នករចនាក្រាហ្វិក ហើយវាជាផ្លូវដែលនាំខ្ញុំមករកវិស័យភាពយន្ត។ ការរចនាបានបង្រៀនខ្ញុំឱ្យនិយាយរឿងមួយឱ្យច្បាស់តាមរយៈរូបភាព ហើយគោរពតាមគោលការណ៍ម៉ាកយីហោ។",
          "TW Digital Communication គឺជាភ្នាក់ងារឌីជីថល ដែលផ្តល់សេវាបង្កើតគេហទំព័រ UX/UI និងការផ្សាយពាណិជ្ជកម្មលើបណ្តាញសង្គម។ កាក់សេន បង្កើតមាតិកាអប់រំផ្នែកហិរញ្ញវត្ថុសម្រាប់ប្រជាជនកម្ពុជា និងលក់សៀវភៅស្តីពីការគ្រប់គ្រងលុយកាក់។ Kouprey Creative Solution គឺជាស្ទូឌីយោម៉ាកយីហោ ដែលជាសម្ព័ន្ធមិត្តរបស់ TW Digital។ ខ្ញុំបានរចនាប៉ុស្តិ៍ និងក្រាហ្វិកយុទ្ធនាការជាភាសាខ្មែរ និងអង់គ្លេស សម្រាប់ទាំងបី។",
        ],
      },
      cover: "assets/img/social-posters/cover.jpg",
      coverShape: "landscape",
      stills: seq("social-posters", "still", 3),
      bts: [],
      video: null,
      featured: false,
      gallery: "wide",
    },
  ];
})();
