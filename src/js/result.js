const { createApp } = Vue

createApp({
  data() {
    return {
      copy: [
        {
          level: "inicial",
          hero: {
            topText: "Encontra-se, neste momento, na fase inicial do seu percurso enquanto empreendedor. Deve explorar a sua ideia e apostar no seu crescimento, investindo, para o efeito, nos seguintes atributos:",
            bullets: [
              "Construir e validar um MVP",
              "Definir um modelo de negócios sustentável",
              "Encontrar o financiamento ideal",
              "Alcançar os primeiros clientes",
            ],
            bottomText: "Explore os recursos e conteúdos seguintes, os quais se encontram especificamente direcionados para a fase de maturidade em que se encontra.",
            image: "assets/images/initial_hero.jpg"
          },
          content: {
            multimedia: [
              "How to Plan an MVP",
              "Bitalk",
              "The single biggest reason why start-ups succeed",
              "Productivityist",
              "Modern Startup Marketing",
              "Modelo de Negócio",
              "Business Plan Writing 101: Wharton Entrepreneurship Series",
              "The Side Hustle Show",
              "How I Built This",
              "Entrepreneur on Fire",
              "Mixergy",
              "How to Start a Startup - Podcast",
              "How to Start a Startup - Youtube",
              "Start Now. Cry Later",
              "Why the best hire might not have the perfect resume",
              "The Surprising Habits of Original Thinkers",
              "Harvard i-lab | Entrepreneurship 101 with Gordon Jones",
              "The Lean Startup",
              "Business Model Canvas Tutorial",
              "How to Conduct a SWOT Analysis",
            ],
            books: [
              "The Lean Startup",
              "Zero To One - Notes On Start Ups, Or How To Build The Future",
              "Agile Product Management with Scrum: Creating Products that Customers Love",
              "Disciplined Entrepreneurship: 24 Steps to a Successful Startup",
              "Startup: Manual Do Empreendedor",
              "Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers",
              "Rich Dad, Poor Dad",
              "Value Proposition Design",
            ],
            guides: [
              "Criar e Consolidar Empresas (G)Locais passo a passo",
              "Incubadoras Certificadas",
              "The ultimate guide to creating a successful startup team",
              "The Secrets of Great Teamwork",
              "10 Rules To Build A Wildly Successful Business",
              "Guia para a Inovação",
              "9 Steps to Help You Start a Startup",
              "How to Grow a Small Business in 10 Easy Steps",
              "Guia do Empreendedor",
              "Manual do Empreendedor",
              "Guia para Plano de Negócios",
              "3 Apps to Help You Write a Business Plan",
              "Investigação & desenvolvimento: Ecossistema da UP",
              "Associação Portuguesa de Capital de Risco",
              "Listagem de Business Angels",
            ],
            funding: [
              "Vouchers para Startups - Novos Produtos Verdes e Digitais",
              "EU Funding",
              "Vale Incubação",
              "Startup Weekend",
              "Startup Voucher",
              "Pitch Voucher",
              "Apoios à contratação",
              "IAPMEI",
              "Sistemas de Incentivos",
              "Academia de PME",
              "Fábrica de Startups",
              "Linha ADN-Startup",
              "Programa de Incentivos",
            ],
            toolkits: [
              "Toolkit Porto Digital",
              "Business Model Canvas Template",
              "Entrepreneurship community",
              "How to Start a Startup",
              "Caderno do Empreendedor",
              "Mapa do ecossistema",
              "Capacitação em negócios",
              "Startup Portugal",
              "AICEP",
              "IAPMEI",
            ],
            courses: [
              "Entrepreneurship 101: Who is Your Customer?",
              "Starting a Business",
              "How to Build a Startup",
              "Developing Innovative Ideas for New Companies: The First Step in Entrepreneurship",
              "Business Model Canvas: A Tool for Entrepreneurs and Innovators",
              "Business Model Canvas",
              "Time-to-start-your-startup",
              "Entrepreneurial Mindset",
              "Entrepreneurship Specialization",
              "Becoming an Entrepreneur",
              "Entrepreneurship 101: Who is your customer?",
              "Essentials of Entrepreneurship: Thinking & Action",
              "Developing An Entrepreneurial Mindset: First Step Towards Success"
            ]
          }
        },
        {
          level: "média",
          hero: {
            topText: "Uma vez implementados os pilares basilares da sua empresa, é o momento para investir na estratégia de marketing e na forma como poderá aumentar o alcance do seu produto/serviço. Deve explorar os seguintes atributos:",
            bullets: [
              "Gerar/incrementar o volume de vendas;",
              "Aumentar o financiamento captado;",
              "Criar um portfólio de clientes;",
              "Investir na estrutura e recursos afetos ao projeto",
            ],
            bottomText: "Explore os recursos e conteúdos seguintes, os quais se encontram especificamente direcionados para a fase de maturidade em que se encontra.",
            image: "assets/images/middle_hero.jpg"
          },
          content: {
            multimedia: [
              "Marketing Break",
              "Bitalk",
              "The Consumer VC",
              "The Root Causes of Product Failure",
              "This Is Product Management",
              "3 ways to create a work culture that brings out the best in employees",
              "How to Get Meetings with Investors and Raise Money",
              "Masters of Scale",
              "How To Find Product Market Fit",
              "Modern Startup Marketing",
              "Startup Business Models and Pricing",
              "How to Start a Startup - Youtube",
              "Start Now. Cry Later",
              "The Tim Ferriss Show",
              "The School of Greatness",
              "The GaryVee Audio Experience",
              "Do Zero ao Topo",
              "The Power of Vulnerability",
              "The Happy Secret to Better Work",
              "How Great Leaders Inspire Action",
              "The Lean Startup"
            ],
            books: [
              "The Lean Startup",
              "Agile Product Management with Scrum: Creating Products that Customers Love",
              "Zero To One - Notes On Start Ups, Or How To Build The Future",
              "Disciplined Entrepreneurship: 24 Steps to a Successful Startup",
              "Startup: Manual Do Empreendedor",
              "Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers",
              "Value Proposition Design"
            ],
            guides: [
              "7 Effective Ways to Lead Teams",
              "The Secrets of Great Teamwork",
              "The ultimate guide to creating a successful startup team",
              "How To Build Customer Loyalty: Five Strategies For Small Businesses",
              "Guia para a Inovação",
              "Product Strategy for Startups in 2023",
              "10 Tips to help you boost team performance",
              "Toolkit",
              "15 Strategies for Quickly Expanding Your Business",
              "All About Market Potential: How to Analyze Market Potential",
              "Guia do Empreendedor",
              "Manual do Empreendedor",
              "The 10 Most Popular Startup Revenue Models",
              "7 Different Business Model Ideas for Your Startup",
              "Guia para Plano de Negócios",
              "3 Apps to Help You Write a Business Plan",
              "Business Models For Startups: Choose The Best One",
              "Criar e Consolidar Empresas (G)Locais passo a passo",
              "8 Types of business models & the value they deliver",
              "Revolut Business Model: How Does UK's Most Valuable Private Tech Startup Work?",
              "Investigação & desenvolvimento: Ecossistema da UP",
              "Associação Portuguesa de Capital de Risco",
              "Listagem de Business Angels",
            ],
            funding: [
              "Startup Voucher",
              "Portugal Ventures",
              "Road2WebSummit",
              "200M",
            ],
            toolkits: [
              "One Stop Shop",
              "Start & Scale Guide",
              "GrowthHackers",
              "Trello - Project management tool",
              "LivePlan",
              "Innovation Scoring",
            ],
            courses: [
              "Entrepreneurial Strategic Management",
              "Marketing in a Digital World",
              "Social Entrepreneurship",
              "Entrepreneurship: Raising Startup Capital",
              "Entrepreneurship: Bootstrapping Your Business",
              "New Enterprises",
              "Entrepreneurial Operations: Launching a Startup",
              "Social Media Advertising",
              "New Venture Finance: Startup Funding for Entrepreneurs",
              "Beyond Silicon Valley: Growing Entrepreneurship in Transitioning Economies",
              "Strategic Innovation: Managing Innovation Initiatives",
              "Developing the Opportunity",
              "The Carlson-Polizzotto Method of Value Creation",
              "Entrepreneurship Series by Stanford Graduate School of Business",
              "Growth Tribe",
            ]
          }
        },
        {
          level: "elevado",
          hero: {
            topText: "Após a superação dos principais desafios iniciais ao desenvolvimento do seu produto/serviço, a sua start-up encontra-se pronta para dar o próximo passo: escalar para o nível seguinte. Deve explorar os seguintes atributos:",
            bullets: [
              "Direcionar a sua estratégia para o crescimento;",
              "Expandir a distribuição e internacionalizar o produto/serviço;",
              "Aumentar a capacidade financeira e de operações;",
              "Escalar os diferentes departamentos existentes.",
            ],
            bottomText: "Explore os recursos e conteúdos seguintes, os quais se encontram especificamente direcionados para a fase de maturidade em que se encontra.",
            image: "assets/images/advanced_hero.jpg"
          },
          content: {
            multimedia: [
              "The Product Podcast",
              "HBR IdeaCast",
              "Kirsty Nathoo - Managing Startup Finances",
              "The Full Ratchet",
              "Key Success Factors To Build A Successful International Startup | Marc Kegelaers | TEDxUHasselt",
              "Lessons from a startup that scaled up | Kurtis McBride | TEDxUW",
              "The Tony Robbins Podcast",
              "The James Altucher Show",
              "The Pitch",
              "a16z",
              "Conversas com Norte",
              "Marketing FutureCast",
              "How to Build a Business That Lasts 100 Years",
              "The Art of Innovation",
            ],
            books: [
              "Positioning: The Battle for Your Mind",
              "Startup CFO: The Finance Handbook For Your Growing Business",
              "Scaling Up: How a Few Companies Make It...and Why the Rest Don't",
              "The Innovator's Dilemma",
              "Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity",
              "Building a StoryBrand: Clarify Your Message So Customers Will Listen",
            ],
            guides: [
              "5 Strategies to Expand Your Products & Services",
              "Employee Feedback: The Key to Retention During the Great Resignation",
              "Os 10 passos para a internacionalizar o seu negócio",
            ],
            funding: [
              "Eficiência Coletiva e Clusters",
              "Programa para atrair talento",
              "Business Abroad",
              "The Growth Program",
            ],
            toolkits: [
              "MIT Technology Review",
              "Innovation Management",
              "Harvard Business Review",
              "Strategyzer",
              "Comparador de mercados",
            ],
            courses: [
              "Scaling Up Your Venture Without Screwing Up",
              "Technology Entrepreneurship",
            ]
          }
        }
      ],
      groups: [
        {
          id: "multimedia",
          label: "Multimédia",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_multimedia.jpg"
        },
        {
          id: "books",
          label: "Livros",
          description: "Inspire-se nas histórias fascinantes que permitiram aos empreendedores alcançar o sucessoperiências",
          image: "assets/images/content_books.jpg"
        },
        {
          id: "guides",
          label: "Guias",
          description: "Encontre insights, estratégias e perspetivas valiosas para aplicar no seu negócio",
          image: "assets/images/content_guides.jpg"
        },
        {
          id: "funding",
          label: "Funding",
          description: "Aceda aos principais programas portugueses e europeus de financiamento, incubação e formação",
          image: "assets/images/content_funding.jpg"
        },
        {
          id: "toolkits",
          label: "Toolkits",
          description: "Explore recursos, ferramentas e comunidades úteis para a materialização da estratégia da sua empresa",
          image: "assets/images/content_toolkits.jpg"
        },
        {
          id: "courses",
          label: "Cursos",
          description: "Explore um conjunto de cursos e formações direcionadas para a capacitação de empreendedores",
          image: "assets/images/content_courses.jpg"
        },
      ],
      baseContent: {
        multimedia: [
          {
            title: "How to Plan an MVP",
            author: "Michael Seibel",
            url: "https://www.youtube.com/watch?v=1hHMwLxN6EM",
            image: "assets/images/content/multimedia/howtoplanamvp.jpg"
          },
          {
            title: "Bitalk",
            author: "",
            url: "https://bitalk.pt/home",
            image: "assets/images/content/multimedia/bitalk.jpg"
          },
          {
            title: "The single biggest reason why start-ups succeed",
            author: "Bill Gross",
            url: "https://www.youtube.com/watch?v=bNpx7gpSqbY",
            image: "assets/images/content/multimedia/thesinglebiggestreason.jpg"
          },
          {
            title: "Productivityist",
            author: "",
            url: "https://productivityist.com/category/podcast/",
            image: "assets/images/content/multimedia/Productivityist.jpg"
          },
          {
            title: "Modern Startup Marketing",
            author: "Anna Furmanov",
            url: "https://podcasts.apple.com/us/podcast/modern-startup-marketing/id1534533276",
            image: "assets/images/content/multimedia/modernstartupmarketing.jpg"
          },
          {
            title: "Modelo de Negócio",
            author: "IAPMEI",
            url: "https://www.youtube.com/watch?v=bmMspXAZkP0",
            image: "assets/images/content/multimedia/modelodenegocio.jpg"
          },
          {
            title: "Business Plan Writing 101: Wharton Entrepreneurship Series",
            author: "Patrick FitzGerald",
            url: "https://www.youtube.com/watch?v=zlrb_X6fYZ0",
            image: "assets/images/content/multimedia/businessplawriting101.jpg"
          },
          {
            title: "The Side Hustle Show",
            author: "Nick Loper",
            url: "https://www.sidehustlenation.com/side-hustle-show/",
            image: "assets/images/content/multimedia/thesidehustleshow.jpg"
          },
          {
            title: "How I Built This",
            author: "",
            url: "https://www.npr.org/podcasts/510313/how-i-built-this",
            image: "assets/images/content/multimedia/howibuiltthis.jpg"
          },
          {
            title: "Entrepreneurs on Fire",
            author: "",
            url: "https://www.eofire.com/",
            image: "assets/images/content/multimedia/EntrepreneursonFire.jpg"
          },
          {
            title: "Mixergy",
            author: "",
            url: "https://mixergy.com/",
            image: "assets/images/content/multimedia/Mixergy.jpg"
          },
          {
            title: "How to Start a Startup - Podcast",
            author: "Sam Altman",
            url: "https://open.spotify.com/show/7AcBdjWl2s4brEcW7YKVWf",
            image: "assets/images/content/multimedia/howtostartastartup.jpg"
          },
          {
            title: "Start Now. Cry Later",
            author: "",
            url: "https://open.spotify.com/show/7fEglWUCXIsXuDTiFKC1hp",
            image: "assets/images/content/multimedia/startnowcrylater.jpg"
          },
          {
            title: "Why the best hire might not have the perfect resume",
            author: "Regina Hartley",
            url: "https://www.ted.com/talks/regina_hartley_why_the_best_hire_might_not_have_the_perfect_resume",
            image: "assets/images/content/multimedia/whythebesthire.jpg"
          },
          {
            title: "How to Start a Startup - Youtube",
            author: "Sam Altman",
            url: "https://www.youtube.com/watch?v=CBYhVcO4WgI",
            image: "assets/images/content/multimedia/howtostartastartup.jpg"
          },
          {
            title: "The Surprising Habits of Original Thinkers",
            author: "Adam Grant",
            url: "https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers",
            image: "assets/images/content/multimedia/thesurprisinghabits.jpg"
          },
          {
            title: "Harvard i-lab | Entrepreneurship 101 with Gordon Jones",
            author: "",
            url: "https://www.youtube.com/watch?v=7IoBUOsy_ew",
            image: "assets/images/content/multimedia/harvardilab.jpg"
          },
          {
            title: "The Lean Startup",
            author: "Eric Ries",
            url: "https://www.youtube.com/watch?v=fEvKo90qBns",
            image: "assets/images/content/multimedia/theleanstartup.jpg"
          },
          {
            title: "Business Model Canvas Tutorial",
            author: "",
            url: "https://www.youtube.com/watch?v=QoAOzMTLP5s",
            image: "assets/images/content/multimedia/businessmodelcanvas.jpg"
          },
          {
            title: "How to Conduct a SWOT Analysis",
            author: "",
            url: "https://www.youtube.com/watch?v=I_6AVRGLXGA",
            image: "assets/images/content/multimedia/howtoconductaswotanalysis.jpg"
          },
          {
            title: "Marketing Break",
            author: "",
            url: "https://www.break.marketing/inicio-podcast",
            image: ""
          },
          {
            title: "The Consumer VC",
            author: "",
            url: "https://theconsumervc.com/",
            image: ""
          },
          {
            title: "The Root Causes of Product Failure",
            author: "Marty Cagan",
            url: "https://www.youtube.com/watch?v=9dccd8lihpQ&list=RDQMhfVwKdbCZG0&index=13",
            image: ""
          },
          {
            title: "This Is Product Management",
            author: null,
            url: "https://tipm.feedbackloop.com/",
            image: ""
          },
          {
            title: "3 ways to create a work culture that brings out the best in employees",
            author: "Chris White",
            url: "https://www.youtube.com/watch?v=2y8SA6cLUys",
            image: ""
          },
          {
            title: "How to Get Meetings with Investors and Raise Money",
            author: "Aaron Harris",
            url: "https://www.youtube.com/watch?v=Jzz4AEIddzY",
            image: ""
          },
          {
            title: "Masters of Scale",
            author: null,
            url: "https://mastersofscale.com/",
            image: ""
          },
          {
            title: "How To Find Product Market Fit",
            author: "David Rusenko",
            url: "https://www.youtube.com/watch?v=0LNQxT9LvM0",
            image: ""
          },
          {
            title: "Startup Business Models and Pricing",
            author: null,
            url: "https://www.youtube.com/watch?v=oWZbWzAyHAE",
            image: ""
          },
          {
            title: "The Tim Ferriss Show",
            author: null,
            url: "https://tim.blog/podcast/",
            image: ""
          },
          {
            title: "The School of Greatness",
            author: null,
            url: "https://lewishowes.com/sogpodcast/",
            image: ""
          },
          {
            title: "The GaryVee Audio Experience",
            author: null,
            url: "https://www.garyvaynerchuk.com/podcast/",
            image: ""
          },
          {
            title: "Do Zero ao Topo",
            author: null,
            url: "https://open.spotify.com/show/48ljM9qIbODhemJ7lLGjeR",
            image: ""
          },
          {
            title: "The Power of Vulnerability",
            author: "Brene Brown",
            url: "https://www.ted.com/talks/brene_brown_the_power_of_vulnerability",
            image: ""
          },
          {
            title: "The Happy Secret to Better Work",
            author: "Shawn Achor",
            url: "https://www.ted.com/talks/shawn_achor_the_happy_secret_to_better_work",
            image: ""
          },
          {
            title: "How Great Leaders Inspire Action",
            author: "Simon Sinek",
            url: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action",
            image: ""
          },
          {
            title: "The Product Podcast",
            author: null,
            url: "https://productschool.com/product-podcast/",
            image: ""
          },
          {
            title: "HBR IdeaCast",
            author: null,
            url: "https://hbr.org/2018/01/podcast-ideacast",
            image: ""
          },
          {
            title: "Kirsty Nathoo - Managing Startup Finances",
            author: "",
            url: "https://www.youtube.com/watch?v=LBC16jhiwak",
            image: ""
          },
          {
            title: "The Full Ratchet",
            author: "",
            url: "https://fullratchet.net/podcast-episodes/",
            image: ""
          },
          {
            title: "Key Success Factors To Build A Successful International Startup | Marc Kegelaers | TEDxUHasselt",
            author: "",
            url: "https://www.youtube.com/watch?v=jWsKHhc9-T4",
            image: ""
          },
          {
            title: "Lessons from a startup that scaled up | Kurtis McBride | TEDxUW",
            author: "",
            url: "https://www.youtube.com/watch?v=m4MjzBSCLx0",
            image: ""
          },
          {
            title: "The Tony Robbins Podcast",
            author: "",
            url: "https://www.tonyrobbins.com/podcasts/",
            image: ""
          },
          {
            title: "The James Altucher Show",
            author: "",
            url: "https://jamesaltucher.com/podcasts/",
            image: ""
          },
          {
            title: "The Pitch",
            author: "",
            url: "https://www.gimletmedia.com/the-pitch",
            image: ""
          },
          {
            title: "a16z",
            author: "",
            url: "https://future.com/a16z-podcast/",
            image: ""
          },
          {
            title: "Conversas com Norte",
            author: "",
            url: "https://anchor.fm/conversas-com-norte",
            image: ""
          },
          {
            title: "Marketing FutureCast",
            author: "",
            url: "https://open.spotify.com/show/4hwJiWpVYKrWf6ZB19Pzs2",
            image: ""
          },
          {
            title: "How to Build a Business That Lasts 100 Years",
            author: "",
            url: "https://www.ted.com/talks/martin_reeves_how_to_build_a_business_that_lasts_100_years",
            image: ""
          },
          {
            title: "The Art of Innovation",
            author: "",
            url: "https://www.youtube.com/watch?v=Mtjatz9r-Vc",
            image: ""
          }

        ],
        books: [
          {
            title: "The Lean Startup",
            author: "Eric Ries",
            url: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
            image: "assets/images/content/books/theleanstartup.png"
          },
          {
            title: "Zero To One - Notes On Start Ups, Or How To Build The Future",
            author: "Blake Masters e Peter Thiel",
            url: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
            image: "assets/images/content/books/zerotoone.jpeg"
          },
          {
            title: "Disciplined Entrepreneurship: 24 Steps to a Successful Startup",
            author: "Bill Aulet",
            url: "https://www.goodreads.com/book/show/18652777-disciplined-entrepreneurship",
            image: "assets/images/content/books/Disciplined Entrepreneurship.jpeg"
          },
          {
            title: "Rich Dad, Poor Dad",
            author: "Robert T. Kiyosaki, Sharon L. Lechter",
            url: "https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad",
            image: "assets/images/content/books/richdadpoordad.jpeg"
          },
          {
            title: "Startup: Manual Do Empreendedor",
            author: "Steve Blank e Bob Dorf",
            url: "https://www.goodreads.com/book/show/28015259-startup",
            image: "assets/images/content/books/startupmanualdoempreendedor.jpeg"
          },
          {
            title: "Agile Product Management with Scrum: Creating Products that Customers Love",
            author: "Roman Pichler",
            url: "https://www.goodreads.com/book/show/7950745-agile-product-management-with-scrum",
            image: "assets/images/content/books/agileproductmanagementwithscrum.jpeg"
          },
          {
            title: "Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers",
            author: "Alexander Osterwalder",
            url: "https://www.goodreads.com/book/show/7935732-business-model-generation",
            image: "assets/images/content/books/BusinessModelGeneration.jpeg"
          },
          {
            title: "Value Proposition Design",
            author: "Alexander Osterwalder, Yves Pigneur, Patricia Papadakos, Gregory Bernarda, Alan Smith, Nguyễn Thụy Khánh Chương",
            url: "https://www.goodreads.com/book/show/22337524-value-proposition-design",
            image: "assets/images/content/books/valuepropositiondesign.jpeg"
          },
          {
            title: "Positioning: The Battle for Your Mind",
            author: "Philip Kotler, Al Ries, Jack Trout",
            url: "https://www.goodreads.com/book/show/760025.Positioning",
            image: "assets/images/content/books/positioning.jpeg"
          },
          {
            title: "Startup CFO: The Finance Handbook For Your Growing Business",
            author: "Kyle Brennan",
            url: "https://www.goodreads.com/book/show/43596288-startup-cfo",
            image: "assets/images/content/books/startupcfo.jpeg"
          },
          {
            title: "Scaling Up: How a Few Companies Make It...and Why the Rest Don't",
            author: "Verne Harnish",
            url: "https://www.goodreads.com/book/show/22212880-scaling-up",
            image: "assets/images/content/books/scalingup.jpeg"
          },
          {
            title: "The Innovator's Dilemma",
            author: "Clayton M. Christensen, L.J. Ganser",
            url: "https://www.goodreads.com/book/show/2615.The_Innovator_s_Dilemma",
            image: "assets/images/content/books/theinnovatorsdilemma.jpeg"
          },
          {
            title: "Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity",
            author: "Kim Malone Scott",
            url: "https://www.goodreads.com/book/show/44300042-radical-candor",
            image: "assets/images/content/books/radicalcandor.jpeg"
          },
          {
            title: "Building a StoryBrand: Clarify Your Message So Customers Will Listen",
            author: "Donald Miller",
            url: "https://www.goodreads.com/book/show/34460583-building-a-storybrand",
            image: "assets/images/content/books/buildingastorybrand.jpeg"
          },
        ],
        guides: [
          {
            title: "Criar e Consolidar Empresas (G)Locais passo a passo",
            author: "",
            url: "https://www.iapmei.pt/getattachment/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo/Guias-e-Manuais-de-Apoio/CriarConsolidarPassoaPasso.pdf.aspx?lang=pt-PT",
            image: "assets/images/content/guides/glocal.jpg"
          },
          {
            title: "Incubadoras Certificadas",
            author: "",
            url: "https://www.iapmei.pt/getattachment/Paginas/StartUP-Visa-pt/StartUP-Visa_Incubadoras-Certificadas_PUB_2021_03marco.pdf.aspx?lang=pt-PT",
            image: "assets/images/content/guides/rni.jpg"
          },
          {
            title: "The ultimate guide to creating a successful startup team",
            author: "",
            url: "https://fastercapital.com/content/The-ultimate-guide-to-creating-a-successful-startup-team.html",
            image: "assets/images/content/guides/fastercapital.jpg"
          },
          {
            title: "The Secrets of Great Teamwork",
            author: "",
            url: "https://hbr.org/2016/06/the-secrets-of-great-teamwork",
            image: ""
          },
          {
            title: "10 Rules To Build A Wildly Successful Business",
            author: "",
            url: "https://www.forbes.com/sites/ericwagner/2014/01/14/10-rules-to-build-a-wildly-successful-business/?sh=709ad0fd1b96",
            image: ""
          },
          {
            title: "Guia para a Inovação",
            author: "Porto Digital",
            url: "https://www.portodigital.pt/wp-content/uploads/2020/06/Guia-para-a-Inovac%CC%A7a%CC%83o_spread.pdf",
            image: "assets/images/content/guides/guiaparaainovacao.jpg"
          },
          {
            title: "9 Steps to Help You Start a Startup",
            author: "",
            url: "https://www.thehartford.com/business-insurance/strategy/how-to-start-a-business/startup",
            image: ""
          },
          {
            title: "How to Grow a Small Business in 10 Easy Steps",
            author: "",
            url: "https://www.thehartford.com/business-insurance/strategy/accelerate-growth/how-to-grow-small-business",
            image: ""
          },
          {
            title: "Guia do Empreendedor",
            author: "IAPMEI",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo-(1)/DOCS_Emp/GuiaEmpreendedor_sd.aspx",
            image: "assets/images/content/guides/guiadoempreendedor.jpg"
          },
          {
            title: "Manual do Empreendedor",
            author: "IAPMEI",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo-(1)/DOCS_Emp/ManualEmpreendedor_sd.aspx",
            image: "assets/images/content/guides/manualdoempreendedor.jpg"
          },
          {
            title: "Guia para Plano de Negócios",
            author: "IAPMEI",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo/Documentos-Financiamento/ComoElaborarPlanodeNegocioGuiaExplicativo.aspx",
            image: "assets/images/content/guides/guiaparaplanodenegocios.jpg"
          },
          {
            title: "3 Apps to Help You Write a Business Plan",
            author: "",
            url: "https://www.entrepreneur.com/starting-a-business/3-apps-to-help-you-write-a-business-plan/225616",
            image: ""
          },
          {
            title: "Investigação & desenvolvimento: Ecossistema da UP",
            author: "",
            url: "https://www.up.pt/portal/pt/investigar/ecossistema-de-investigacao/unidades-de-id/",
            image: "assets/images/content/guides/ecossitemadaup.jpg"
          },
          {
            title: "Associação Portuguesa de Capital de Risco",
            author: "",
            url: "https://www.apcri.pt/associados/",
            image: "assets/images/content/guides/apcri.jpg"
          },
          {
            title: "Listagem de Business Angels",
            author: "Pedro Almeida",
            url: "https://www.pedroalmeidavc.com/venture-capital-and-business-angel-investors-in-portugal/",
            image: ""
          },
          {
            title: "7 Effective Ways to Lead Teams",
            author: "Sean Silverthorne",
            url: "https://hbswk.hbs.edu/item/7-effective-ways-to-lead-teams",
            image: ""
          },
          {
            title: "How To Build Customer Loyalty: Five Strategies For Small Businesses",
            author: "Sagar Tarawade",
            url: "https://www.forbes.com/sites/forbesbusinesscouncil/2021/06/21/how-to-build-customer-loyalty-five-strategies-for-small-businesses/?sh=387fa91d7e97",
            image: ""
          },
          {
            title: "Product Strategy for Startups in 2023",
            author: "TechMagic",
            url: "https://www.techmagic.co/blog/product-strategy-for-startups/",
            image: ""
          },
          {
            title: "10 Tips to help you boost team performance",
            author: "",
            url: "https://online.hbs.edu/blog/post/how-to-improve-team-performance",
            image: ""
          },
          {
            title: "Toolkit",
            author: "Porto Digital",
            url: "https://www.portodigital.pt/wp-content/uploads/2020/05/TOOLKIT_v2_issuu-compressed.pdf",
            image: "assets/images/content/guides/toolkit.jpg"
          },
          {
            title: "15 Strategies for Quickly Expanding Your Business",
            author: "R.L. ADAMS",
            url: "https://www.entrepreneur.com/growing-a-business/15-strategies-for-quickly-expanding-your-business/306049",
            image: ""
          },
          {
            title: "All About Market Potential: How to Analyze Market Potential",
            author: "Masterclass",
            url: "https://www.masterclass.com/articles/market-potential",
            image: ""
          },
          {
            title: "The 10 Most Popular Startup Revenue Models",
            author: "",
            url: "https://fi.co/insight/the-10-most-popular-startup-revenue-models",
            image: ""
          },
          {
            title: "7 Different Business Model Ideas for Your Startup",
            author: "University Lab Partners",
            url: "https://www.universitylabpartners.org/blog/7-different-business-model-ideas-for-your-startup",
            image: ""
          },
          {
            title: "Business Models For Startups: Choose The Best One",
            author: "",
            url: "https://www.uptech.team/blog/business-models-for-startups",
            image: ""
          },
          {
            title: "8 Types of business models & the value they deliver",
            author: "",
            url: "https://online.hbs.edu/blog/post/types-of-business-models",
            image: ""
          },
          {
            title: "Revolut Business Model: How Does UK's Most Valuable Private Tech Startup Work?",
            author: "Nikhil Bansal",
            url: "https://www.apptunix.com/blog/revolut-business-model/",
            image: ""
          },
          {
            title: "5 Strategies to Expand Your Products & Services",
            author: "Susan E. DeFranzo",
            url: "https://www.snapsurveys.com/blog/5-strategies-expand-products-services/",
            image: ""
          },
          {
            title: "Employee Feedback: The Key to Retention During the Great Resignation",
            author: "Michael Beer",
            url: "https://hbswk.hbs.edu/item/employee-feedback-the-key-to-retention-during-the-great-resignation",
            image: ""
          },
          {
            title: "Os 10 passos para a internacionalizar o seu negócio",
            author: "",
            url: "https://www.cgd.pt/Site/Saldo-Positivo/negocios/Pages/passos-para-internacionalizar.aspx",
            image: ""
          },
        ],
        funding: [
          {
            title: "Vouchers para Startups - Novos Produtos Verdes e Digitais",
            author: "",
            url: "https://startupportugal.com/pt/programs/vouchers-para-startups-novos-produtos-verdes-e-digitais/",
            image: ""
          },
          {
            title: "EU Funding",
            author: "",
            url: "https://europa.eu/youreurope/business/finance-funding/getting-funding/eu-funding-programmes/index_pt.htm",
            image: ""
          },
          {
            title: "Vale Incubação",
            author: "",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Incentivos-Financiamento/Sistemas-de-Incentivos/Incentivos-Portugal-2020/Vale-Incubacao.aspx",
            image: ""
          },
          {
            title: "Startup Weekend",
            author: "",
            url: "https://startupweekend.org/",
            image: ""
          },
          {
            title: "Startup Voucher",
            author: "",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo-(1)/StartUP-Voucher-2019-2022.aspx",
            image: ""
          },
          {
            title: "Pitch Voucher",
            author: "",
            url: "https://startupportugal.com/pt/programs/pitch-voucher-2/",
            image: ""
          },
          {
            title: "Apoios à contratação",
            author: "",
            url: "https://www.iefp.pt/apoios-a-contratacao",
            image: ""
          },
          {
            title: "Sistemas de Incentivos",
            author: "",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Incentivos-Financiamento/Sistemas-de-Incentivos.aspx",
            image: ""
          },
          {
            title: "Academia de PME",
            author: "",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Assistencia-Tecnica-e-Formacao/Academia-de-PME.aspx",
            image: ""
          },
          {
            title: "Fábrica de Startups",
            author: "",
            url: "https://www.fabricadestartups.com/",
            image: ""
          },
          {
            title: "Linha ADN-Startup",
            author: "",
            url: "https://www.bpfomento.pt/pt/catalogo/apoio-ao-desenvolvimento-de-negocio-adn-start-up/",
            image: ""
          },
          {
            title: "Programa de Incentivos",
            author: "",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Incentivos-Financiamento/Sistemas-de-Incentivos/Arquivo/Incentivos-Portugal-2020/SI-Empreendedorismo.aspx",
            image: ""
          },
          {
            title: "Portugal Ventures",
            author: "",
            url: "https://www.portugalventures.pt/",
            image: ""
          },
          {
            title: "Road2WebSummit",
            author: "",
            url: "https://startupportugal.com/pt/programs/road-2-web-summit-2/",
            image: ""
          },
          {
            title: "200M",
            author: "",
            url: "https://www.200m.pt/",
            image: ""
          },
          {
            title: "Eficiência Coletiva e Clusters",
            author: "IAPMEI",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Eficiencia-Coletiva-e-Clusters.aspx",
            image: ""
          },
          {
            title: "Programa para atrair talento",
            author: "IAPMEI",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo-(1)/Tech-Visa.aspx",
            image: ""
          },
          {
            title: "Business Abroad",
            author: "",
            url: "https://startupportugal.com/pt/programs/business-abroad/",
            image: ""
          },
          {
            title: "The Growth Program",
            author: "",
            url: "https://thegrowthprogram.pt/",
            image: ""
          },
          {
            title: "IAPMEI",
            author: "",
            url: "https://financiamento.iapmei.pt/inicio/home",
            image: ""
          },
        ],
        toolkits: [
          {
            title: "Toolkit Porto Digital",
            author: "",
            url: "https://toolkit.portodigital.pt/",
            image: ""
          },
          {
            title: "Business Model Canvas Template",
            author: "Strategyzer",
            url: "https://www.strategyzer.com/canvas/business-model-canvas",
            image: ""
          },
          {
            title: "Entrepreneurship community",
            author: "StartupNation",
            url: "https://startupnation.com/",
            image: ""
          },
          {
            title: "Caderno do Empreendedor",
            author: "Vasco Nogueira, Vítor Freitas",
            url: "https://www.booki.pt/loja/prod/caderno-do-empreendedor/9789893322918/",
            image: ""
          },
          {
            title: "Mapa do ecossistema",
            author: "",
            url: "https://map.scaleupporto.pt/dashboard",
            image: ""
          },
          {
            title: "Capacitação em negócios",
            author: "Porto Business School",
            url: "www.pbs.up.pt",
            image: ""
          },
          {
            title: "Startup Portugal",
            author: "",
            url: "https://startupportugal.com/pt/",
            image: ""
          },
          {
            title: "AICEP",
            author: "",
            url: "https://www.portugalglobal.pt/PT/Paginas/Index.aspx",
            image: ""
          },
          {
            title: "IAPMEI",
            author: "",
            url: "https://www.iapmei.pt/",
            image: ""
          },
          {
            title: "One Stop Shop",
            author: "Startup Portugal",
            url: "https://startupportugal.com/pt/one-stop-shop-pt/",
            image: ""
          },
          {
            title: "Start & Scale Guide",
            author: "",
            url: "https://www.portodigital.pt/wp-content/uploads/2020/05/startscaleguide.pdf",
            image: ""
          },
          {
            title: "GrowthHackers",
            author: "",
            url: "https://growthhackers.com/",
            image: ""
          },
          {
            title: "Trello - Project management tool",
            author: "",
            url: "https://trello.com/",
            image: ""
          },
          {
            title: "LivePlan",
            author: "",
            url: "https://www.liveplan.com/",
            image: ""
          },
          {
            title: "Innovation Scoring",
            author: "",
            url: "https://www.innovationscoring.pt/",
            image: ""
          },
          {
            title: "MIT Technology Review",
            author: "",
            url: "https://www.technologyreview.com/",
            image: ""
          },
          {
            title: "Innovation Management",
            author: "",
            url: "https://www.innovationmanagement.se/",
            image: ""
          },
          {
            title: "Harvard Business Review",
            author: "",
            url: "https://hbr.org/",
            image: ""
          },
          {
            title: "Strategyzer",
            author: "",
            url: "https://www.strategyzer.com/",
            image: ""
          },
          {
            title: "Comparador de mercados",
            author: "AICEP",
            url: "https://www.portugalexporta.pt/produtos-e-servicos/informacao-de-mercado/comparador-mercados",
            image: ""
          },
          {
            title: "How to Start a Startup",
            author: "Startup Class",
            url: "http://startupclass.samaltman.com/",
            image: ""
          }
        ],
        courses: [
          {
            title: "Entrepreneurship 101: Who is Your Customer?",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurship-1",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Starting a Business",
            author: "Udemy",
            url: "https://www.udemy.com/course/starting-a-business-101/",
            image: "assets/images/content/courses/udemy.jpg"
          },
          {
            title: "How to Build a Startup",
            author: "Udacity",
            url: "https://www.udacity.com/course/how-to-build-a-startup--ep245",
            image: "assets/images/content/courses/udacity.jpg"
          },
          {
            title: "Developing Innovative Ideas for New Companies: The First Step in Entrepreneurship",
            author: "Coursera",
            url: "https://www.coursera.org/learn/innovative-ideas",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Business Model Canvas: A Tool for Entrepreneurs and Innovators",
            author: "Coursera",
            url: "https://www.coursera.org/learn/business-model-canvas",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Business Model Canvas",
            author: "Skillshare",
            url: "https://www.skillshare.com/browse/business-model-canvas",
            image: "assets/images/content/courses/skillshare.jpg"
          },
          {
            title: "Time-to-start-your-startup",
            author: "Linkedin",
            url: "https://www.linkedin.com/learning/entrepreneurship-foundations-2",
            image: "assets/images/content/courses/linkedin.jpg"
          },
          {
            title: "Entrepreneurial Mindset",
            author: "EDX",
            url: "https://www.edx.org/course/entrepreneurial-mindset",
            image: "assets/images/content/courses/edx.jpg"
          },
          {
            title: "Entrepreneurship Specialization",
            author: "Coursera",
            url: "https://www.coursera.org/specializations/wharton-entrepreneurship",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Becoming an Entrepreneur",
            author: "EDX",
            url: "https://www.edx.org/course/becoming-an-entrepreneur",
            image: "assets/images/content/courses/edx.jpg"
          },
          {
            title: "Entrepreneurship 101: Who is your customer?",
            author: "EDX",
            url: "https://www.edx.org/course/entrepreneurship-101-who-is-your-customer",
            image: "assets/images/content/courses/edx.jpg"
          },
          {
            title: "Essentials of Entrepreneurship: Thinking & Action",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurial-thinking",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Developing An Entrepreneurial Mindset: First Step Towards Success",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurial-mindset",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Entrepreneurial Strategic Management",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurial-strategic-management",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Marketing in a Digital World",
            author: "Coursera",
            url: "https://www.coursera.org/learn/marketing-digital",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Social Entrepreneurship",
            author: "Coursera",
            url: "https://www.coursera.org/learn/social-entrepreneurship",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Entrepreneurship: Raising Startup Capital",
            author: "Linkedin",
            url: "https://www.linkedin.com/learning/entrepreneurship-raising-startup-capital",
            image: "assets/images/content/courses/linkedin.jpg"
          },
          {
            title: "Entrepreneurship: Bootstrapping Your Business",
            author: "Linkedin",
            url: "https://www.linkedin.com/learning/entrepreneurship-bootstrapping-your-business",
            image: "assets/images/content/courses/linkedin.jpg"
          },
          {
            title: "New Enterprises",
            author: "MIT OpenCourseWare",
            url: "https://ocw.mit.edu/courses/sloan-school-of-management/15-390-new-enterprises-spring-2013/index.htm",
            image: ""
          },
          {
            title: "Entrepreneurial Operations: Launching a Startup",
            author: "EDX",
            url: "https://www.edx.org/course/entrepreneurial-operations-launching-a-startup",
            image: "assets/images/content/courses/edx.jpg"
          },
          {
            title: "Social Media Advertising",
            author: "Coursera",
            url: "https://www.coursera.org/learn/social-media-advertising",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "New Venture Finance: Startup Funding for Entrepreneurs",
            author: "Coursera",
            url: "https://www.coursera.org/learn/startup-funding",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Beyond Silicon Valley: Growing Entrepreneurship in Transitioning Economies",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurship-development",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Strategic Innovation: Managing Innovation Initiatives",
            author: "Coursera",
            url: "https://www.coursera.org/learn/strategic-innovation-innovation-at-the-frontier",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Developing the Opportunity",
            author: "Coursera",
            url: "https://www.coursera.org/learn/wharton-entrepreneurship-opportunity",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "The Carlson-Polizzotto Method of Value Creation",
            author: "Innovation for Impact (i4i)",
            url: "https://www.coursera.org/learn/valuecreation",
            image: ""
          },
          {
            title: "Entrepreneurship Series by Stanford Graduate School of Business",
            author: "Stanford",
            url: "https://www.youtube.com/watch?v=86unGITRPLs",
            image: ""
          },
          {
            title: "Growth Tribe",
            author: "",
            url: "https://growthtribe.io/",
            image: ""
          },
          {
            title: "Scaling Up Your Venture Without Screwing Up",
            author: "Coursera",
            url: "https://www.coursera.org/learn/scaling-up-your-venture-without-screwing-up",
            image: "assets/images/content/courses/coursera.jpg"
          },
          {
            title: "Technology Entrepreneurship",
            author: "EDX",
            url: "https://www.edx.org/course/technology-entrepreneurship-founding-a-start-up-3",
            image: "assets/images/content/courses/edx.jpg"
          },
        ]
      }
    }
  },
  mounted() {
    const isMobile = window.innerWidth <= 1024;
    this.$el.classList.remove("hiddenPage")
    this.groups.forEach(({ id }) => {
      new Swiper('.swiper-' + id, {
        slidesPerView: isMobile ? 'auto' : 4,
        slidesPerGroup: 1,
        spaceBetween: isMobile ? 0 : 8,
        centeredSlides: isMobile,
        navigation: {
          enabled: !isMobile,
          nextEl: '.swiper-button-next-' + id,
          prevEl: '.swiper-button-prev-' + id,
        },
        pagination: {
          enabled: isMobile,
          el: '.swiper-pagination-' + id,
          clickable: true,
        },
      });
    })
    const images = document.querySelectorAll(".parallax")
    images.forEach(image => {
      new Parallax(image);
    })
  },
  computed: {
    level() {
      console.log(decodeURIComponent(window.location.search.split('=')[1]))
      return decodeURIComponent(window.location.search.split('=')[1])
    },
    selectedCopy() {
      return this.copy.find(({ level }) => level === this.level)
    },
    content() {
      const selectedContent = this.selectedCopy.content
      const result = {}
      for (group in selectedContent) {
        result[group] = selectedContent[group].map(((item) => this.baseContent[group].find(copy => copy.title === item)))
      }
      return result
    }
  },
  methods: {
    handleToggle(el) {
      const item = el.target.closest('.contentItem')
      if (item.classList.contains('contentItem--expanded')) {
        item.classList.remove('contentItem--expanded')
      } else {
        item.classList.add('contentItem--expanded')
      }
    },
    scrolldown() {
      const nextElement = document.querySelector('.contentGroup')
      nextElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
}).mount('#result')