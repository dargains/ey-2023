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
          image: "assets/images/content_multimedia.jpg"
        },
        {
          title: "Guias",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_multimedia.jpg"
        },
        {
          title: "Funding",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_multimedia.jpg"
        },
        {
          title: "Toolkits",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_multimedia.jpg"
        },
        {
          title: "Cursos",
          description: "Construa capacidades e conhecimentos com os maiores especialistas da área, através da sua partilha de experiências",
          image: "assets/images/content_multimedia.jpg"
        },
      ],
      activeContent: undefined,
    }
  },
  mounted() {
    this.$el.classList.remove("hiddenPage")
    this.slider = new Swiper('.swiper', {
      slidesPerView: 4,
      spaceBetween: 8,
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
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