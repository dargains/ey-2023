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

            ],
            books: [
              "The Lean Startup",
              "Zero To One - Notes On Start Ups, Or How To Build The Future",
              "Agile Product Management with Scrum: Creating Products that Customers Love",
              "Disciplined Entrepreneurship: 24 Steps to a Successful Startup",
              "Startup: Manual Do Empreendedor",
              "Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers",

            ],
            guides: [
              "Criar e Consolidar Empresas (G)Locais passo a passo",
              "Incubadoras Certificadas",
              "The ultimate guide to creating a successful startup team",
              "The Secrets of Great Teamwork",
              "10 Rules To Build A Wildly Successful Business",
              "Guia para a Inovação",

            ],
            funding: [
              "Vouchers para Startups - Novos Produtos Verdes e Digitais",
              "EU Funding",
              "Vale Incubação",
              "Startup Weekend",

            ],
            toolkits: [

            ],
            courses: [
              "Entrepreneurship 101: Who is Your Customer?"
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
            title: "",
            author: "",
            url: "",
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
            title: "Agile Product Management with Scrum: Creating Products that Customers Love",
            author: "Roman Pichler",
            url: "https://www.goodreads.com/book/show/7950745-agile-product-management-with-scrum",
            image: "assets/images/content/books/agileproductmanagementwithscrum.jpeg"
          },
          {
            title: "Disciplined Entrepreneurship: 24 Steps to a Successful Startup",
            author: "Bill Aulet",
            url: "https://www.goodreads.com/book/show/18652777-disciplined-entrepreneurship",
            image: "assets/images/content/books/Disciplined Entrepreneurship.jpeg"
          },
          {
            title: "Startup: Manual Do Empreendedor",
            author: "Steve Blank e Bob Dorf",
            url: "https://www.goodreads.com/book/show/28015259-startup",
            image: "assets/images/content/books/startupmanualdoempreendedor.jpeg"
          },
          {
            title: "Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers",
            author: "Alexander Osterwalder",
            url: "https://www.goodreads.com/book/show/7935732-business-model-generation",
            image: "assets/images/content/books/BusinessModelGeneration.jpeg"
          },
          {
            title: "",
            author: "",
            url: "",
            image: ""
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
            title: "The Secrets of Great Teamwork",
            author: "",
            url: "https://hbr.org/2016/06/the-secrets-of-great-teamwork",
            image: ""
          },
          {
            title: "The ultimate guide to creating a successful startup team",
            author: "",
            url: "https://fastercapital.com/content/The-ultimate-guide-to-creating-a-successful-startup-team.html",
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
            title: "",
            author: "",
            url: "",
            image: ""
          },
        ],
        toolkits: [
          {
            title: "",
            author: "",
            url: "",
            image: ""
          },
        ],
        courses: [
          {
            title: "Entrepreneurship 101: Who is Your Customer?",
            author: "Coursera"
          }
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