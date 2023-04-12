const { createApp } = Vue

createApp({
  data() {
    return {
      level: '',
      copy: [
        {
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
        }
      ],
      activeContent: undefined,
    }
  },
  created() {
    const level = window.location.search.split('=')[1]
    this.result = level
    this.level = (() => {
      switch (level) {
        case "1":
          return 'inicial'
        case "2":
          return 'médio'
        default:
          return 'elevado'
      }
    })()
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
    selectedCopy() {
      return this.copy[this.result - 1]
    }
  },
  methods: {
    handleToggle(index) {
      if (this.activeContent === index) {
        this.activeContent = undefined
      } else {
        this.activeContent = index
      }
    }
  }
}).mount('#result')