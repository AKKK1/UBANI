export const agencyConfig = {
  internal: {
    adminEmail: "AC3AK1@gmail.com",
    phone: "593 71 60 80",
    origin: "Munich, Germany",
    location: "Tbilisi, Georgia",
    experience: "10 Years of Engineering & Design",
  },

  offers: [
    {
      id: "spring-boost",
      discount: 30, // Percentage
      active: true,
      tag: "Spring Deal",
      en: {
        title: "E-Commerce Start Kit",
        desc: "Complete shop built on modern stack with CMS and high conversions.",
      },
      ge: {
        title: "E-Commerce სტარტერ პაკეტი",
        desc: "სრული ონლაინ მაღაზია თანამედროვე ტექნოლოგიებით, CMS-ით და მაღალი კონვერსიით.",
      }
    },
    {
      id: "ai-integrate",
      discount: 20,
      active: true,
      tag: "Innovation",
      en: {
        title: "AI Business Integration",
        desc: "Automate your workflows and add GenAI capabilities to your existing business.",
      },
      ge: {
        title: "AI ბიზნეს ინტეგრაცია",
        desc: "თქვენი ბიზნეს პროცესების ავტომატიზაცია და AI-ს ინტეგრირება.",
      }
    },
    {
      id: "landing-page",
      discount: 50,
      active: true,
      tag: "Startup",
      en: {
        title: "Premium Landing Page",
        desc: "An eye-catching, highly optimized introductory site for your brand.",
      },
      ge: {
        title: "პრემიუმ სავიზიტო საიტი",
        desc: "თვალისმომჭრელი და ოპტიმიზირებული საიტი თქვენი ბრენდისთვის.",
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
    ge: ["ციფრული სააგენტო", "საიტების დამზადება", "პროგრამირება", "მარკეტინგი", "AI აპლიკაციები", "უნიკალური დიზაინი"]
  }
};
