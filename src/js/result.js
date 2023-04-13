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
            bottomText: "Explore os recursos e conteúdos seguintes, os quais se encontram especificamente direcionados para a fase de maturidade em que a sua start-up se encontra.",
            image: "assets/images/inicial_hero.jpg"
          }
        },
        {
          level: "médio",
          hero: {
            topText: "Uma vez implementados os pilares basilares da sua empresa, é o momento para investir na estratégia de marketing e na forma como poderá aumentar o alcance do seu produto/serviço. Deve explorar os seguintes atributos:",
            bullets: [
              "Gerar/incrementar o volume de vendas;",
              "Aumentar o financiamento captado;",
              "Criar um portfólio de clientes;",
              "Investir na estrutura e recursos afetos ao projeto",
            ],
            bottomText: "Explore os recursos e conteúdos seguintes, os quais se encontram especificamente direcionados para a fase de maturidade em que se encontra.",
            image: "assets/images/inicial_hero.jpg"
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
            bottomText: "Explore os recursos e conteúdos seguintes, os quais se encontram especificamente direcionados para a fase de maturidade em que a sua start-up se encontra.",
            image: "assets/images/inicial_hero.jpg"
          }
        }
      ],
      content: [
        {
          title: "Multimédia",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_multimedia.jpg"
        },
        {
          title: "Livros",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_books.jpg"
        },
        {
          title: "Guias",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_guides.jpg"
        },
        {
          title: "Funding",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_funding.jpg"
        },
        {
          title: "Toolkits",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_toolkits.jpg"
        },
        {
          title: "Cursos",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_courses.jpg"
        },
      ],
    }
  },
  mounted() {
    this.$el.classList.remove("hiddenPage")
    this.content.forEach(({ title }) => {
      console.log('.swiper-' + title)
      new Swiper('.swiper-' + title, {
        slidesPerView: 4,
        spaceBetween: 8,
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next-' + title,
          prevEl: '.swiper-button-prev-' + title,
        },
      });
    })
  },
  computed: {
    level() {
      return window.location.search.split('=')[1]
    },
    selectedCopy() {
      return this.copy.find(({ level }) => level === this.level)
    },
  },
  methods: {
    handleToggle(el) {
      const item = el.target.closest('.contentItem')
      if (item.classList.contains('contentItem--expanded')) {
        item.classList.remove('contentItem--expanded')
      } else {
        item.classList.add('contentItem--expanded')
      }
    }
  }
}).mount('#result')