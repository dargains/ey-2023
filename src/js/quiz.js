const { createApp } = Vue

createApp({
  data() {
    return {
      questions: [
        {
          title: 'Qual o estágio de desenvolvimento do produto/serviço?',
          answers: [
            'Não existe, é ainda uma ideia',
            'Existe, mas encontra-se ainda em desenvolvimento',
            'Pronto a ser comercializado'
          ],
          answered: null
        },
        {
          title: 'De que forma se encontra determinada a dimensão potencial do mercado que se pretende alcançar?',
          answers: [
            'Equipa composta por elementos com experiência técnica, de negócio e marketing (3 áreas de expertise, pelo menos)',
            'A equipa detém uma visão alinhada sobre o desenvolvimento do projeto e compreende os riscos e recompensas inerentes',
            'O capital está a ser utilizado para desenvolver o produto, contratar uma equipa e escalar operações, numa lógica estrutural'
          ],
          answered: null
        },
        {
          title: 'Pergunta 3',
          answers: [
            'resposta 1',
            'resposta 2',
            'resposta 3'
          ],
          answered: null
        },
      ],
      activeQuestion: 0,
      showHiddenCard: false,
    }
  },
  computed: {
    currentQuestion() {
      return this.activeQuestion + 1 > 9 || "0" + (this.activeQuestion + 1)
    },
    totalQuestions() {
      return this.questions.length > 9 || "0" + this.questions.length
    }
  },
  mounted() {
    this.$el.classList.remove("hiddenPage")
  },
  methods: {
    handleGoBack() {
      if (this.activeQuestion > 0) {
        this.activeQuestion = this.activeQuestion - 1
      }
    },
    handleGoForward() {
      if (this.activeQuestion < this.questions.length - 1) {
        this.activeQuestion = this.activeQuestion + 1
      }
    },
    handleFinishQuiz() {
      const answers = this.questions.map(question => question.answered)
      const result = answers.reduce((a, b) => a + b) / this.questions.length
      let level = ""
      const firstThreshold = 1.6
      const secondThreshold = 2.3
      if (result <= firstThreshold) {
        level = "inicial"
      } else if (result > firstThreshold && result <= secondThreshold) {
        level = "médio"
      } else {
        level = "elevado"
      }
      window.location.href = 'resultado.html?result=' + level
    },
    handleShowHiddenCard() {
      console.log('object');
      this.showHiddenCard = true
    },
    handleHideHiddenCard() {
      this.showHiddenCard = false
    },
  }
}).mount('#quiz')