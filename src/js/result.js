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
      ]
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
  },
  computed: {
    selectedCopy() {
      return this.copy[this.result - 1]
    }
  },
  methods: {
  }
}).mount('#result')