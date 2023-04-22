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
              "StartupNation - Entrepreneurship community",
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

            ],
            books: [

            ],
            guides: [
              "7 Effective Ways to Lead Teams",
              "The Secrets of Great Teamwork",
              "The ultimate guide to creating a successful startup team",
              "How To Build Customer Loyalty: Five Strategies For Small Businesses",
              "Guia para a Inovação",
              "Product Strategy for Startups in 2023",
              "10 Tips to help you boost team performance",
              "Porto Digital",
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

            ],
            toolkits: [

            ],
            courses: [

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

            ],
            books: [

            ],
            guides: [

            ],
            funding: [

            ],
            toolkits: [

            ],
            courses: [

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
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_books.jpg"
        },
        {
          id: "guides",
          label: "Guias",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_guides.jpg"
        },
        {
          id: "funding",
          label: "Funding",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_funding.jpg"
        },
        {
          id: "toolkits",
          label: "Toolkits",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_toolkits.jpg"
        },
        {
          id: "courses",
          label: "Cursos",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_courses.jpg"
        },
      ],
      baseContent: {
        multimedia: [
          {
            title: "How to Plan an MVP",
            author: "Michael Seibel",
            url: "https://www.youtube.com/watch?v=1hHMwLxN6EM",
            image: ""
          },
          {
            title: "Bitalk",
            author: "",
            url: "https://bitalk.pt/home",
            image: ""
          },
          {
            title: "The single biggest reason why start-ups succeed",
            author: "Bill Gross",
            url: "https://www.youtube.com/watch?v=bNpx7gpSqbY",
            image: ""
          },
          {
            title: "Productivityist",
            author: "",
            url: "https://productivityist.com/category/podcast/",
            image: ""
          },
          {
            title: "Modern Startup Marketing",
            author: "",
            url: "https://podcasts.apple.com/us/podcast/modern-startup-marketing/id1534533276",
            image: ""
          },
          {
            title: "Modelo de Negócio",
            author: "IAPMEI",
            url: "https://www.youtube.com/watch?v=bmMspXAZkP0",
            image: ""
          },
          {
            title: "Business Plan Writing 101: Wharton Entrepreneurship Series",
            author: "",
            url: "https://www.youtube.com/watch?v=zlrb_X6fYZ0",
            image: ""
          },
          {
            title: "The Side Hustle Show",
            author: "",
            url: "https://www.sidehustlenation.com/side-hustle-show/",
            image: ""
          },
          {
            title: "How I Built This",
            author: "",
            url: "https://www.npr.org/podcasts/510313/how-i-built-this",
            image: ""
          },
          {
            title: "Entrepreneur on Fire",
            author: "",
            url: "https://www.eofire.com/",
            image: ""
          },
          {
            title: "Mixergy",
            author: "",
            url: "https://mixergy.com/",
            image: ""
          },
          {
            title: "How to Start a Startup - Podcast",
            author: "Sam Altman",
            url: "https://open.spotify.com/show/7AcBdjWl2s4brEcW7YKVWf",
            image: ""
          },
          {
            title: "Start Now. Cry Later",
            author: "",
            url: "https://open.spotify.com/show/7fEglWUCXIsXuDTiFKC1hp",
            image: ""
          },
          {
            title: "Why the best hire might not have the perfect resume",
            author: "Regina Hartley",
            url: "https://www.ted.com/talks/regina_hartley_why_the_best_hire_might_not_have_the_perfect_resume",
            image: ""
          },
          {
            title: "How to Start a Startup - Youtube",
            author: "Sam Altman",
            url: "https://www.youtube.com/watch?v=CBYhVcO4WgI",
            image: ""
          },
          {
            title: "The Surprising Habits of Original Thinkers",
            author: "Adam Grant",
            url: "https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers",
            image: ""
          },
          {
            title: "Harvard i-lab | Entrepreneurship 101 with Gordon Jones",
            author: "",
            url: "https://www.youtube.com/watch?v=7Io",
            image: ""
          },
          {
            title: "The Lean Startup",
            author: "Eric Ries",
            url: "https://www.youtube.com/watch?v=fEvKo90qBns",
            image: ""
          },
          {
            title: "Business Model Canvas Tutorial",
            author: "",
            url: "https://www.youtube.com/watch?v=QoAOzMTLP5s",
            image: ""
          },
          {
            title: "How to Conduct a SWOT Analysis",
            author: "",
            url: "https://www.youtube.com/watch?v=I_6AVRGLXGA",
            image: ""
          },

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
            title: "Scaling Up: How a Few Companies Make It...and Why the Rest Don't, Rockefeller Habits 2.0",
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
            image: "assets/images/content/guides/iapmei.png"
          },
          {
            title: "Incubadoras Certificadas",
            author: "",
            url: "https://www.iapmei.pt/getattachment/Paginas/StartUP-Visa-pt/StartUP-Visa_Incubadoras-Certificadas_PUB_2021_03marco.pdf.aspx?lang=pt-PT",
            image: "assets/images/content/guides/rni.png"
          },
          {
            title: "The ultimate guide to creating a successful startup team",
            author: "",
            url: "https://fastercapital.com/content/The-ultimate-guide-to-creating-a-successful-startup-team.html",
            image: "assets/images/content/guides/fastercapital.png"
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
            image: ""
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
            image: "assets/images/content/guides/guiadoempreendedor.png"
          },
          {
            title: "Manual do Empreendedor",
            author: "IAPMEI",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo-(1)/DOCS_Emp/ManualEmpreendedor_sd.aspx",
            image: "assets/images/content/guides/manualdoempreendedor.png"
          },
          {
            title: "Guia para Plano de Negócios",
            author: "IAPMEI",
            url: "https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo/Documentos-Financiamento/ComoElaborarPlanodeNegocioGuiaExplicativo.aspx",
            image: "assets/images/content/guides/guiaparaplanodenegocios.png"
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
            image: ""
          },
          {
            title: "Associação Portuguesa de Capital de Risco",
            author: "",
            url: "https://www.apcri.pt/associados/",
            image: ""
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
            image: ""
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
        ],
        courses: [
          {
            title: "Entrepreneurship 101: Who is Your Customer?",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurship-1",
            image: ""
          },
          {
            title: "Starting a Business",
            author: "Udemy",
            url: "https://www.udemy.com/course/starting-a-business-101/",
            image: ""
          },
          {
            title: "How to Build a Startup",
            author: "Udacity",
            url: "https://www.udacity.com/course/how-to-build-a-startup--ep245",
            image: ""
          },
          {
            title: "Developing Innovative Ideas for New Companies: The First Step in Entrepreneurship",
            author: "Coursera",
            url: "https://www.coursera.org/learn/innovative-ideas",
            image: ""
          },
          {
            title: "Business Model Canvas: A Tool for Entrepreneurs and Innovators",
            author: "Coursera",
            url: "https://www.coursera.org/learn/business-model-canvas",
            image: ""
          },
          {
            title: "Business Model Canvas",
            author: "Skillshare",
            url: "https://www.skillshare.com/browse/business-model-canvas",
            image: ""
          },
          {
            title: "Time-to-start-your-startup",
            author: "Linkedin",
            url: "https://www.linkedin.com/learning/entrepreneurship-foundations-2",
            image: ""
          },
          {
            title: "Entrepreneurial Mindset",
            author: "EDX",
            url: "https://www.edx.org/course/entrepreneurial-mindset",
            image: ""
          },
          {
            title: "Entrepreneurship Specialization",
            author: "Coursera",
            url: "https://www.coursera.org/specializations/wharton-entrepreneurship",
            image: ""
          },
          {
            title: "Becoming an Entrepreneur",
            author: "EDX",
            url: "https://www.edx.org/course/becoming-an-entrepreneur",
            image: ""
          },
          {
            title: "Entrepreneurship 101: Who is your customer?",
            author: "EDX",
            url: "https://www.edx.org/course/entrepreneurship-101-who-is-your-customer",
            image: ""
          },
          {
            title: "Essentials of Entrepreneurship: Thinking & Action",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurial-thinking",
            image: ""
          },
          {
            title: "Developing An Entrepreneurial Mindset: First Step Towards Success",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurial-mindset",
            image: ""
          },
          {
            title: "Entrepreneurial Strategic Management",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurial-strategic-management",
            image: ""
          },
          {
            title: "Marketing in a Digital World",
            author: "Coursera",
            url: "https://www.coursera.org/learn/marketing-digital",
            image: ""
          },
          {
            title: "Social Entrepreneurship",
            author: "Coursera",
            url: "https://www.coursera.org/learn/social-entrepreneurship",
            image: ""
          },
          {
            title: "Entrepreneurship: Raising Startup Capital",
            author: "Linkedin",
            url: "https://www.linkedin.com/learning/entrepreneurship-raising-startup-capital",
            image: ""
          },
          {
            title: "Entrepreneurship: Bootstrapping Your Business",
            author: "Linkedin",
            url: "https://www.linkedin.com/learning/entrepreneurship-bootstrapping-your-business",
            image: ""
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
            image: ""
          },
          {
            title: "Social Media Advertising",
            author: "Coursera",
            url: "https://www.coursera.org/learn/social-media-advertising",
            image: ""
          },
          {
            title: "New Venture Finance: Startup Funding for Entrepreneurs",
            author: "Coursera",
            url: "https://www.coursera.org/learn/startup-funding",
            image: ""
          },
          {
            title: "Beyond Silicon Valley: Growing Entrepreneurship in Transitioning Economies",
            author: "Coursera",
            url: "https://www.coursera.org/learn/entrepreneurship-development",
            image: ""
          },
          {
            title: "Strategic Innovation: Managing Innovation Initiatives",
            author: "Coursera",
            url: "https://www.coursera.org/learn/strategic-innovation-innovation-at-the-frontier",
            image: ""
          },
          {
            title: "Developing the Opportunity",
            author: "Coursera",
            url: "https://www.coursera.org/learn/wharton-entrepreneurship-opportunity"
          },
          {
            title: "The Carlson-Polizzotto Method of Value Creation",
            author: "Innovation for Impact (i4i)",
            url: "https://www.coursera.org/learn/valuecreation"
          },
          {
            title: "Entrepreneurship Series by Stanford Graduate School of Business",
            author: "Stanford",
            url: "https://www.youtube.com/watch?v=86unGITRPLs"
          },
          {
            title: "Growth Tribe",
            author: "",
            url: "https://growthtribe.io/"
          },
          {
            title: "Scaling Up Your Venture Without Screwing Up",
            author: "Coursera",
            url: "https://www.coursera.org/learn/scaling-up-your-venture-without-screwing-up"
          },
          {
            title: "Technology Entrepreneurship",
            author: "EDX",
            url: "https://www.edx.org/course/technology-entrepreneurship-founding-a-start-up-3"
          },
        ]
      }
    }
  },
  mounted() {
    this.$el.classList.remove("hiddenPage")
    this.groups.forEach(({ id }) => {
      new Swiper('.swiper-' + id, {
        slidesPerView: 4,
        spaceBetween: 8,
        navigation: {
          nextEl: '.swiper-button-next-' + id,
          prevEl: '.swiper-button-prev-' + id,
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