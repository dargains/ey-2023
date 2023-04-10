const { createApp } = Vue

createApp({
  data() {
    return {
      questions: [
        {
          title: 'Pergunta 1',
          answers: [
            'resposta 1',
            'resposta 2',
            'resposta 3'
          ],
          answered: null
        },
        {
          title: 'Pergunta 2',
          answers: [
            'resposta 1',
            'resposta 2',
            'resposta 3'
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
      showHiddenCard: false
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
      window.location.href = 'resultado.html?result='+result
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