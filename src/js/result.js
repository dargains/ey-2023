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
              "Construir e validar um MVP;",
              "Definir um modelo de negócios sustentável;",
              "Encontrar o financiamento ideal;",
              "Alcançar os primeiros clientes.",
            ],
            bottomText: "Explore os recursos e conteúdos seguintes, os quais se encontram especificamente direcionados para a fase de maturidade em que se encontra.",
            image: "assets/images/initial_hero.jpg"
          },
          content: {
            multimedia: [

            ],
            books: [
              "The Lean Startup",
              "Zero To One - Notes On Start Ups, Or How To Build The Future"
            ],
            guides: [

            ],
            funding: [

            ],
            toolkits: [

            ],
            courses: [
              "Entrepreneurship 101: Who is Your Customer?"
            ]
          }
        },
        {
          level: "medio",
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

          }
        ],
        books: [
          {
            title: "The Lean Startup",
            author: "Eric Ries",
            url: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
            image: "assets/images/content/books/livro1.jpg"
          },
          {
            title: "Zero To One - Notes On Start Ups, Or How To Build The Future",
            author: "Blake Masters e Peter Thiel",
            url: "https://www.goodreads.com/book/show/10127019-the-lean-startup",
            image: "assets/images/content/books/livro1.jpg"
          }
        ],
        guides: [
          {

          }
        ],
        funding: [
          {

          }
        ],
        toolkits: [
          {

          }
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
      return window.location.search.split('=')[1]
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