export const agencyConfig = {
  internal: {
    adminEmail: "AC3AK1@gmail.com",
    phone: "+995 593 71 60 80",
    origin: "Munich, Germany",
    location: "Tbilisi, Georgia",
    experience: "10 Years of Engineering & Design",
    socials: {
      whatsapp: "https://wa.me/995593716080",
      instagram: "https://instagram.com/your_handle",
      github: "https://github.com/legenderl2fun",
      linkedin: "https://linkedin.com/in/your_profile",
      facebook: "https://facebook.com/your_page"
    }
  },

  offers: [
    {
      id: "premium-landing",
      discount: 40,
      active: true,
      tag: "Top Choice",
      en: {
        title: "Premium Website Development",
        desc: "High-end website built from scratch including design, domain, server deployment, and guided training.",
        details: [
          "Complete UI/UX design architecture and prototyping",
          "Domain name registration and server hosting setup",
          "Full deployment of the website on production servers",
          "Personal consultation meetings throughout the process",
          "System documentation and client training session",
          "Dedicated web developer guiding you at every step"
        ]
      },
      ge: {
        title: "პრემიუმ კლასის ვებსაიტი",
        desc: "უმაღლესი დონის ვებსაიტის აწყობა ნულიდან - მოიცავს დიზაინს, დომენს, სერვერსა და ინდივიდუალურ ტრენინგს.",
        details: [
          "დიზაინის მოფიქრება და სტრუქტურის შედგენა ნულიდან",
          "დომენის შეძენა და უსაფრთხო ჰოსტინგზე (სერვერზე) განთავსება",
          "საიტის სერვერზე ატვირთვა, ტესტირება და გაშვება",
          "პერსონალური შეხვედრები პროექტის განსახილველად",
          "სისტემის სამომხმარებლო სწავლება და ტრენინგი",
          "პროფესიონალი საიტის პროგრამისტი დაგეხმარებათ ყველა ეტაპზე"
        ]
      }
    },
    {
      id: "design-creation",
      discount: 25,
      active: true,
      tag: "Creative",
      en: {
        title: "UI/UX & Design Creation",
        desc: "Pixel-perfect modern digital product design, wireframing, and branding before writing any code.",
        details: [
          "Brainstorming and conceptualizing the core design language",
          "Creating high-fidelity wireframes in Figma",
          "Designing modern animations and seamless user interactions",
          "Fully responsive mobile and tablet design system",
          "User Persona and Customer Journey mapping"
        ]
      },
      ge: {
        title: "დიზაინის შექმნა",
        desc: "თვალისმომჭრელი, თანამედროვე UI/UX დიზაინის აწყობა და იდეების გენერირება კოდის დაწერამდე.",
        details: [
          "დიზაინზე ფიქრი, პროექტის სტილის და ბრენდინგის განსაზღვრა",
          "უმაღლესი ხარისხის პროტოტიპირება Figma-ში",
          "თანამედროვე ანიმაციებისა და ინტერაქციების დაგეგმვა",
          "სრულად რესპონსიული (მობილურზე მორგებული) დიზაინი",
          "მომხმარებლის ქცევის (User Journey) ანალიზი და მოწყობა"
        ]
      }
    },
    {
      id: "traffic-boost",
      discount: 50,
      active: true,
      tag: "Growth",
      en: {
        title: "Page SEO & Traffic Boost",
        desc: "Massive scaling of your user traffic through Technical SEO optimization and strategic rankings.",
        details: [
          "Deep technical SEO setup and Google Search Console integration",
          "Keyword targeting (e.g. 'Web development', 'Hire programmer')",
          "Page speed optimization for flawless ranking scoring",
          "Increasing user traffic and retention rates significantly",
          "Setup of analytics tracking and conversion funnels"
        ]
      },
      ge: {
        title: "ფეიჯების დაბუსტვა / SEO",
        desc: "მომხმარებლის ნაკადის საგრძნობლად გაზრდა SEO-ს, გუგლის რანკინგისა და სწორი სტრატეგიით.",
        details: [
          "ფეიჯების დაბუსტვა და მომხმარებლის ნაკადის საგრძნობლად გაზრდა",
          "გუგლის საძიებო სისტემის (SEO) ოპტიმიზაცია და რანკინგის ამაღლება",
          "ზუსტი ქივორდების კონფიგურაცია: 'საიტის პროგრამისტი', 'საიტების აწყობა'",
          "საიტის სისწრაფის მაქსიმიზაცია გაყიდვების გასაორმაგებლად",
          "ანალიტიკის დაყენება ვიზიტორების ზუსტი სტატისტიკისთვის"
        ]
      }
    }
  ],

  services: [
    {
      id: "custom-web",
      basePriceLabel: "$1,500+",
      icon: "Code2",
      en: {
        title: "Custom Web Applications",
        desc: "Bespoke SaaS platforms, dashboards, and scalable logic-heavy applications built with Next.js, React, and Node."
      },
      ge: {
        title: "ვებ-აპლიკაციები (SaaS)",
        desc: "რთული ლოგიკის მქონე, სწრაფი და უსაფრთხო პლატფორმები და დეშბორდები სპეციალურად თქვენი ბიზნესისთვის."
      }
    },
    {
      id: "landing-ecommerce",
      basePriceLabel: "$800+",
      icon: "Globe",
      en: {
        title: "Landing Pages & E-commerce",
        desc: "Lightning-fast, accessible, and high-converting websites optimized for sales and lead generation."
      },
      ge: {
        title: "საიტები და E-Commerce",
        desc: "სწრაფი, თანამედროვე და გაყიდვებზე ორიენტირებული ვებ-გვერდები და ონლაინ მაღაზიები."
      }
    },
    {
      id: "design-system",
      basePriceLabel: "$600+",
      icon: "Figma",
      en: {
        title: "UI/UX & Design Systems",
        desc: "Premium, Munich-grade aesthetics. We design intuitive, beautiful, and accessible modern interfaces."
      },
      ge: {
        title: "UI/UX დიზაინი",
        desc: "პროფესიონალური და თანამედროვე დიზაინ-სისტემები, რომლებიც მომხმარებელზეა მორგებული."
      }
    },
    {
      id: "ai-solutions",
      basePriceLabel: "$2,000+",
      icon: "Cpu",
      en: {
        title: "AI Agents & Intelligence",
        desc: "Integrate LLMs, computer vision, and custom agents into your pipeline for massive efficiency gains."
      },
      ge: {
        title: "AI და ინტელექტუალური სისტემები",
        desc: "თქვენს საიტზე თუ აპლიკაციაში უახლესი ხელოვნური ინტელექტის მოდელების ჩაშენება და ავტომატიზაცია."
      }
    },
    {
      id: "marketing-seo",
      basePriceLabel: "$400/mo+",
      icon: "TrendingUp",
      en: {
        title: "SEO & Digital Marketing",
        desc: "We boost your digital footprint, increase organic traffic with hyper-optimized SEO, and manage ad campaigns."
      },
      ge: {
        title: "SEO და მარკეტინგი (ბუსტი)",
        desc: "თქვენი ბიზნესის რანჟირება Google-ში, სოციალური მედიის ბუსტები და რეკლამირება ლოკალზე."
      }
    }
  ],

  process: [
    {
      en: { step: "01", title: "Discovery & Architecure", body: "We map out the exact business logic and structural needs of your application." },
      ge: { step: "01", title: "ანალიზი და არქიტექტურა", body: "ხდება ბიზნეს საჭიროებების გაანალიზება და პროგრამული სტრუქტურის შედგენა." }
    },
    {
      en: { step: "02", title: "UI/UX Prototyping", body: "Pixel-perfect, high-fidelity designs crafted in Figma before writing a single line of code." },
      ge: { step: "02", title: "UI/UX პროტოტიპირება", body: "იქმნება უმაღლესი დონის დიზაინი Figma-ში და თანხმდება კლიენტთან დეველოპმენტამდე." }
    },
    {
      en: { step: "03", title: "Development Phase", body: "We build using modern, scalable tech stacks tailored to extreme performance." },
      ge: { step: "03", title: "დეველოპმენტი", body: "აპლიკაციის აწყობა უახლესი ტექნოლოგიებით, რაც უზრუნველყოფს სისწრაფესა და სკალირებას." }
    },
    {
      en: { step: "04", title: "Testing & Launch", body: "Rigorous QA, SEO indexing, and seamless deployment into production." },
      ge: { step: "04", title: "გაშვება და ტესტირება", body: "იდეალური ოპტიმიზაციითა და ტესტირებით, პროდუქტის ბაზარზე ეფექტური ჩაშვება." }
    }
  ],
  
  seoKeywords: {
    en: ["Digital Agency Tbilisi", "Web Development Georgia", "Custom Software", "Next.js", "AI Integration", "Premium UI/UX"],
    ge: ["საიტის პროგრამისტი", "ვებ საიტის აწყობა", "საიტების დამზადება", "SEO გუგლის რანკინგი", "AI ინტეგრაცია"]
  },

  blog: [
    {
      id: "google-ranking-2024",
      date: "2024-03-20",
      en: {
        title: "How to Rank in Google in 2024",
        desc: "Best practices for technical SEO, web development strategies, and ranking in modern search engines.",
        content: "Ranking on Google requires more than just keywords today. It demands robust web development practices, high speed, and a semantic HTML structure.\n\nHiring a professional web developer ensures that your site is built with modern stacks like Next.js, handling server-side rendering natively, which Google bots love.\n\nFrom our 10 years of Munich experience, we have learned that SEO is intrinsically tied to clean code. Don't rely on heavy templates—build custom, performance-focused platforms."
      },
      ge: {
        title: "როგორ მოვხვდეთ გუგლის პირველ გვერდზე",
        desc: "SEO ოპტიმიზაცია, რანკინგი და პრაქტიკული რჩევები საიტის ტრაფიკის გასაზრდელად.",
        content: "დღეს გუგლში (Google) მოწინავე პოზიციებზე მოხვედრა პირდაპირ კავშირშია საიტის სიჩქარესთან, კოდის სისუფთავესთან და სტრუქტურასთან. უბრალო ტექსტების ჩაწერა აღარ მუშაობს; საიტის პროგრამისტი აქცენტს ტექნიკურ SEO-ზე უნდა აკეთებდეს.\n\nვებ საიტის აწყობა თანამედროვე ტექნოლოგიებით (როგორიცაა Next.js და React) საშუალებას გვაძლევს საიტი ჩაიტვირთოს წამებში. ეს პირდაპირ ზრდის მომხმარებლის (ვიზიტორის) შენარჩუნების პროცენტს და გუგლის ალგორითმიც მეტ ნდობას უცხადებს თქვენს ბრენდს.\n\nჩვენი ციფრული სააგენტო ფოკუსირებულია სწორედ ამ დეტალებზე. თუ გსურთ ვებ საიტის შექმნა, რომელიც ბიზნესს რეალურად მოუტანს შედეგს, საჭიროა SEO-ს ინტეგრირება დიზაინის ეტაპიდანვე."
      }
    },
    {
      id: "why-need-web-developer",
      date: "2024-03-15",
      en: {
        title: "Why You Need a Professional Web Developer",
        desc: "Templates fail at scale. Discover why a dedicated website programmer is essential for serious businesses.",
        content: "Many businesses start with DIY website builders, only to realize their extreme limitations when trying to scale or integrate custom business logic.\n\nA professional web developer doesn't just write code; they architect systems. From securing payment gateways to building intuitive admin panels and handling massive databases, custom development provides infinite flexibility.\n\nInvesting in correct digital infrastructure early prevents costly migrations later. Let experts handle performance optimization, security, and scalability."
      },
      ge: {
        title: "რატომ გჭირდებათ პროფესიონალი ვებ დეველოპერი?",
        desc: "შაბლონური საიტების მინუსები და გამოცდილი ვებ-დეველოპერის როლი ბიზნესის განვითარებაში.",
        content: "ხშირად დამწყები ბიზნესები ირჩევენ იაფ, შაბლონურ პლატფორმებს (Wix, Wordpress), თუმცა მალევე აწყდებიან პრობლემებს: საიტი ჭედავს, დიზაინი იზღუდება და SEO ფაქტობრივად არ მუშაობს.\n\nპროფესიონალი საიტის პროგრამისტი მხოლოდ კოდს არ წერს — ის ფიქრობს თქვენი ბიზნესის ციფრულ სტრატეგიაზე, უსაფრთხოებასა და სკალირებაზე. დიზაინერის და პროგრამისტის მიერ საიტების აწყობა ნიშნავს, რომ პროდუქტი 100%-ით მორგებულია თქვენს მომხმარებელზე.\n\nარ დაკარგოთ პოტენციური კლიენტები ნელი საიტის გამო. სანდო პარტნიორის პოვნა და გერმანული ტექნოლოგიებით მუშაობა დაგიზოგავთ დროსაც და ფინანსებსაც გრძელვადიან პერსპექტივაში."
      }
    },
    {
      id: "ai-in-web-development",
      date: "2024-03-10",
      en: {
        title: "Artificial Intelligence in Web Development",
        desc: "How AI automation is changing UI design and coding workflows.",
        content: "AI tools are significantly accelerating web development. However, human architectural decisions remain irreplaceable.\n\nIntegrating AI logic into customer-facing applications (like AI chatbots or automatic data analysis) adds immense value. We specialize in connecting these complex nodes seamlessly."
      },
      ge: {
        title: "ხელოვნური ინტელექტი ვებ-დეველოპმენტში",
        desc: "როგორ ცვლის AI ვებ საიტების აწყობის პროცესს.",
        content: "დღეს ხელოვნური ინტელექტი უამრავ პროცესს აავტომატიზებს. თუმცა, გამოცდილი საიტის პროგრამისტი კვლავ აუცილებელია არქიტექტურული გადაწყვეტილებების მისაღებად.\n\nჩვენ ვქმნით AI-ზე დაფუძნებულ მოდულებს თქვენი ბიზნესისთვის. ეს მოიცავს როგორც მომხმარებლებთან ავტომატურ კომუნიკაციას, ისე ბიზნეს მონაცემების გენერირებას რეალურ დროში."
      }
    },
    {
      id: "cost-of-building-website",
      date: "2024-03-05",
      en: {
        title: "How Much Does a Website Cost in 2024?",
        desc: "Understanding the pricing models for custom web applications and e-commerce stores.",
        content: "The cost of building a website is similar to building a house—it depends entirely on the blueprint.\n\nCustom web development costs more upfront but generates exponentially higher ROI because it doesn't incur the endless technical debt of generic platforms."
      },
      ge: {
        title: "რა ჯდება საიტის აწყობა 2024 წელს?",
        desc: "ფასების ფორმირება, E-commerce მაღაზიებისა და პრემიუმ საიტების ღირებულება.",
        content: "საიტის ფასი დამოკიდებულია მის ფუნქციონალზე. სავიზიტო ვებ საიტის აწყობა უფრო ბიუჯეტურია, ვიდრე მრავალფუნქციური ონლაინ მაღაზიის ან SaaS პლატფორმის აწყობა.\n\nგახსოვდეთ, რომ იაფი საიტი ხშირად ნიშნავს დაკარგულ კლიენტებს. პროფესიონალური საიტების დამზადება ინვესტიციაა — ის თქვენს მაგივრად ყიდის 24 საათის განმავლობაში. ჩვენი სააგენტო შემოგთავაზებთ ზუსტ ხარჯთაღრიცხვას დეტალური ანალიზის შემდეგ."
      }
    },
    {
      id: "digital-agency-georgia",
      date: "2024-02-28",
      en: {
        title: "Choosing a Digital Agency vs Freelancer",
        desc: "Why businesses scaling up require the unified workflow of a dedicated digital agency.",
        content: "Freelancers are great for localized, small script fixes. However, a digital product requires a designer, a frontend developer, a backend engineer, and an SEO specialist.\n\nAn agency provides this full ecosystem, ensuring your digital infrastructure communicates flawlessly across all layers."
      },
      ge: {
        title: "ციფრული სააგენტო თუ ფრილანსერი?",
        desc: "რატომ უნდა აირჩიოთ სააგენტო მასშტაბური ბიზნეს პროექტებისთვის.",
        content: "ფრილანსერი საიტის პროგრამისტი კარგი არჩევანია მარტივი ამოცანებისათვის. მაგრამ მასშტაბური ვებ საიტის აწყობა მოითხოვს გუნდურ მუშაობას: UI/UX დიზაინერი, პროგრამისტი, SEO სპეციალისტი დ მარკეტერი.\n\nციფრული სააგენტო გაძლევთ ამ ეკოსისტემას. თქვენ იღებთ სრულფასოვან პროდუქტს ერთი ფანჯრის პრინციპით — დიზაინიდან საიტის გაშვებამდე და შემდგომ მხარდაჭერამდე."
      }
    },
    {
      id: "ecommerce-guide",
      date: "2024-02-20",
      en: {
        title: "Definitive Guide to E-Commerce Scalability",
        desc: "Building online stores that handle massive traffic spikes without crashing.",
        content: "E-commerce is more than a digital catalog. It's an engine that needs to process secure payments, manage inventory, and load in under 2 seconds.\n\nUsing Next.js for e-commerce guarantees high SEO scores and immediate page transitions, severely reducing cart abandonment rates."
      },
      ge: {
        title: "E-Commerce (ონლაინ მაღაზიის) შექმნა",
        desc: "როგორ ავაწყოთ ონლაინ მაღაზია, რომელიც სწრაფად იყიდის თქვენს პროდუქტს.",
        content: "თანამედროვე ონლაინ მაღაზიის მთავარი გამოწვევა სისწრაფეა. მომხმარებელი 3 წამზე მეტს არ ელოდება. სწორედ ამიტომ, საიტების დამზადება მოძველებული ძრავების გამოყენებით უკვე წამგებიანია.\n\nNext.js და თანამედროვე ტექნოლოგიებით ვებ საიტის აწყობა გამორიცხავს შეფერხებებს. თქვენი E-commerce მაღაზია იქნება დაცული, სწრაფი და SEO-ზე ორიენტირებული საძიებო სისტემებში მოსახვედრად."
      }
    },
    {
      id: "speed-impact-on-sales",
      date: "2024-02-12",
      en: {
        title: "How Website Speed Impacts Sales (Directly)",
        desc: "Statistical analysis on conversion drop-offs due to latency.",
        content: "Amazon famously found that every 100ms of latency cost them 1% in sales. Speed is money.\n\nIf your website relies on heavy WordPress plugins, you are bleeding conversions. A custom-built, React-based UI compiles to lightweight, rapid-loading assets."
      },
      ge: {
        title: "საიტის სისწრაფის გავლენა გაყიდვებზე",
        desc: "რატომ კარგავთ კლიენტებს საიტის დაგვიანებული ჩატვირთვის გამო.",
        content: "კვლევები ადასტურებს: ჩატვირთვის 1 წამით დაგვიანება კომპანიას უჯდება გაყიდვების 7%-ს. ეს კრიტიკული მაჩვენებელია ციფრულ ეპოქაში.\n\nსაიტის პროგრამისტი პირველ რიგში კოდის ოპტიმიზაციაზე უნდა ზრუნავდეს. თითოეული დაკარგული მილიწამი თქვენი კონკურენტის უპირატესობაა. გერმანული სტანდარტით საიტების აწყობა სწორედ უზადო სისწრაფეს გულისხმობს."
      }
    },
    {
      id: "react-nextjs-benefits",
      date: "2024-02-05",
      en: {
        title: "React vs Legacy Stacks",
        desc: "Why modern digital agencies exclusively use React and Next.js.",
        content: "React fundamentally shifted how we build user interfaces through extreme modularity.\n\nNext.js took that and added Server-Side Rendering (SSR), giving developers the best of both worlds: dynamic, app-like interactivity with perfect SEO indexability."
      },
      ge: {
        title: "რატომ უნდა ავირჩიოთ React / Next.js?",
        desc: "თანამედროვე ტექნოლოგიების შედარება ძველ მიდგომებთან.",
        content: "ძველი, მონოლითური საიტები რთულად ექვემდებარება ცვლილებებს. React და Next.js კი მოდულარული სისტემებია — მათზე საიტების დამზადება ნიშნავს რომ თქვენი პლატფორმა ადვილად განახლებადია.\n\nგუგლის ბოტებს ძალიან უყვართ Next.js. საიტის პროგრამისტი, რომელიც ამ ტექნოლოგიას ფლობს, გაძლევთ გარანტიას რომ აპლიკაცია იქნება ტექნიკურად უმაღლეს დონეზე."
      }
    },
    {
      id: "ui-ux-design-importance",
      date: "2024-01-28",
      en: {
        title: "The Anatomy of High-Converting UI/UX",
        desc: "Aesthetic is important, but frictionless user journeys generate revenue.",
        content: "Design is not just how it looks; it is how it works. A confusing checkout flow destroys a beautiful landing page layout.\n\nOur Munich-centered design principles focus on minimalism, stark contrasts, and clear Call-To-Actions (CTAs) that guide users effortlessly to conversion points."
      },
      ge: {
        title: "რა არის UI/UX დიზაინი გაყიდვების გასაზრდელად?",
        desc: "დიზაინის ფსიქოლოგია და მომხმარებლის ქცევის მართვა.",
        content: "მხოლოდ ლამაზი ფერები საიტს ვერ გაყიდის. UI (User Interface) და UX (User Experience) არის მეცნიერება მომხმარებლის ქცევაზე. სად იყურება ვიზიტორი? რამდენ კლიკში შეძლებს ყიდვას?\n\nსანამ ვებ საიტის აწყობა დაიწყება, ჩვენი სააგენტო ამუშავებს ზუსტ სტრუქტურას (Wireframes), რათა მაქსიმალურად გაამარტივოს მომხმარებლის გზა სასურველ მიზნამდე."
      }
    },
    {
      id: "google-analytics-setup",
      date: "2024-01-15",
      en: {
        title: "Configuring Analytics for Accurate Tracking",
        desc: "Stop flying blind. How to set up Google Analytics 4 mapping accurately.",
        content: "Without analytics, scaling a business is pure guesswork. You need to know which campaigns yield traffic and which components get ignored.\n\nIntegrating Google Analytics, Tag Manager, and Meta Pixels properly requires semantic HTML structures and event listeners tied perfectly to user interactions."
      },
      ge: {
        title: "როგორ გამოვიყენოთ Google ანალიტიკა",
        desc: "მონაცემებზე დაფუძნებული გადაწყვეტილებები განვითარებისთვის.",
        content: "ანალიტიკის გარეშე ბიზნესის მართვა სიბნელეში სიარულს ჰგავს. საიდან შემოდიან თქვენი მომხმარებლები? რომელ გვერდზე ჩერდებიან ყველაზე დიდხანს?\n\nჩვენი ციფრული სააგენტო უზრუნველყოფს Google Analytics 4-ის და სხვა ტრეკინგ სისტემების სრულყოფილ ინტეგრაციას. პროფესიონალური ვებ საიტის შექმნა აუცილებლად მოიცავს ზუსტი სტატისტიკური ინსტრუმენტების გამართვას."
      }
    }
  ]
};
