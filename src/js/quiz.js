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
          title: 'Qual o nível de maturidade do produto/serviço?',
          answers: [
            'O produto/serviço ainda não se encontra validado ou ainda é um Minimum Viable Product (MVP)',
            'Foi validado e é um Minimum Viable Product (MVP)',
            'Encontra-se em beta tests/pronto e está pronto a ser comercializado/em comercialização'
          ],
          answered: null
        },
        {
          title: 'Em que estágio de utilização está o produto/serviço?',
          answers: [
            'O produto/serviço não tem utilizadores/clientes',
            'O produto/serviço está em avaliação por parte dos alpha testers',
            'O produto/serviço está a ser avaliado por beta testers/early adopters/clientes'
          ],
          answered: null
        },
        {
          title: 'Os canais de distribuição estão estabelecidos?',
          answers: [
            'Ainda não se encontram definidos os canais de distribuição',
            'Os canais de distribuição encontram-se definidos e considerados no business plan',
            'Os canais de distribuição estão estabelecidos e em utilização'
          ],
          answered: null
        },
        {
          title: 'Qual o nível de experiência dos fundadores/empreendedores?',
          answers: [
            'Inexistente, é a primeira experiência empreendedora',
            'Detêm algum nível de experiência empreendedora prévia',
            'Detêm uma sólida experiência empreendedora'
          ],
          answered: null
        },
        {
          title: 'Quão diversificada é a equipa de gestão?',
          answers: [
            'Equipa com apenas 1 área de expertise',
            'Equipa com experiência em 2 áreas de expertise: técnica e de negócio, ou outra área de expertise',
            'Equipa composta por elementos com experiência técnica, de negócio e marketing (3 áreas de expertise, pelo menos)'
          ],
          answered: null
        },
        {
          title: 'Qual a atual maturidade estratégica da start-up?',
          answers: [
            'Não existe ainda uma estratégia quanto ao desenvolvimento do produto/serviço',
            'Existe, pelo menos, uma visão e missão ou estratégia definidas',
            'Existe uma visão, missão e plano estratégico bem definidos e em implementação'
          ],
          answered: null
        },
        {
          title: 'Qual o nível de entrosamento e funcionamento da equipa de projeto?',
          answers: [
            'A equipa ainda não está formada. Tem apenas 1 elemento',
            'A equipa está motivada e partilha a visão e a missão para o desenvolvimento do projeto',
            'A equipa detém uma visão alinhada sobre o desenvolvimento do projeto e compreende os riscos e recompensas inerentes'
          ],
          answered: null
        },
        {
          title: 'De que forma se desagrega o capital angariado pela ideia ou start-up?',
          answers: [
            'Ainda sem capacidade de capital/Apenas capitais próprios',
            'Em processo de obtenção de capital',
            'Já tem a participação de investidores externos ao projeto'
          ],
          answered: null
        },
        {
          title: 'Quem são os investidores da start-up?',
          answers: [
            'São os empreendedores, exclusivamente com recursos próprios ou de amigos/familiares',
            'Business angels e/ou projetos financiados',
            'Venture capitalists'
          ],
          answered: null
        },
        {
          title: 'Qual o destino que está a ser dado ao financiamento alcançado?',
          answers: [
            'Apenas destinado a pequenas despesas correntes',
            'O capital está a ser utilizado para responder a necessidades de curto prazo e de desenvolvimento do produto/serviço',
            'O capital está a ser utilizado para desenvolver o produto, contratar uma equipa e escalar operações, numa lógica estrutural'
          ],
          answered: null
        },
        {
          title: 'Qual é a sua capacidade de financiamento atual?',
          answers: [
            'Sem capacidade de financiamento, com o capital a esgotar-se em 6 meses',
            'Capacidade de financiamento de 6-12 meses',
            'Capacidade para financiar o projeto durante 1 ou mais anos'
          ],
          answered: null
        },
        {
          title: 'Qual o número de clientes que possui atualmente?',
          answers: [
            'Nenhum',
            'Alguns clientes de teste',
            'Vários, já estabelecidos, com perspetivas de crescimento em valor e em volume'
          ],
          answered: null
        },
        {
          title: 'De que forma se encontra determinada a dimensão potencial do mercado que se pretende alcançar?',
          answers: [
            'Encontra-se em análise',
            'Encontra-se definida',
            'Acompanha uma relação direta com o mercado e com os clientes'
          ],
          answered: null
        },
        {
          title: 'Os concorrentes encontram-se identificados?',
          answers: [
            'Poucos concorrentes identificados',
            'Alguns concorrentes identificados',
            'Concorrentes amplamente identificados, inclusivamente com trocas de informação realizadas'
          ],
          answered: null
        },
        {
          title: 'Qual o grau de penetração de mercado do produto ou serviço?',
          answers: [
            'Os produtos/serviços ainda não existem e também não estão no mercado',
            'Produto/serviço lançado ainda numa lógica de experimentação e desenvolvimento',
            'Produto/serviço com vendas de acordo com o definido no plano de negócios'
          ],
          answered: null
        },
        {
          title: 'O modelo de negócio da empresa encontra-se definido?',
          answers: [
            'Iniciado, mas não estabilizado',
            'Definido, mas com possibilidade de alterações',
            'Definido e estabilizado'
          ],
          answered: null
        },
        {
          title: 'O produto é escalável com a estrutura atual?',
          answers: [
            'Não. Está longe de ser escalável',
            'Ainda não é escalável, mas está a caminhar nesse sentido',
            'Sim, é escalável com a estrutura atual'
          ],
          answered: null
        },
        {
          title: 'De que forma o projeto está a gerar rendimento?',
          answers: [
            'O projeto não gera rendimento, subsistindo através de capitais próprios',
            'O rendimento gerado está a ser exclusivamente destinado ao desenvolvimento do produto/serviço',
            'A empresa já conseguiu atingir, pelo menos, o ponto de break even'
          ],
          answered: null
        },
        {
          title: 'Os Key Performance Indicators (KPI) encontram-se definidos e alinhados com a visão e missão da start-up?',
          answers: [
            'Não existem KPIs definidos',
            'Existem alguns KPIs definidos',
            'Os KPIs definidos refletem totalmente a visão e missão delineados para a start-up'
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
      return this.activeQuestion + 1 > 9 ? this.activeQuestion + 1 : "0" + (this.activeQuestion + 1)
    },
    totalQuestions() {
      return this.questions.length > 9 ? this.questions.length : "0" + this.questions.length
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
      this.showHiddenCard = true
    },
    handleHideHiddenCard() {
      this.showHiddenCard = false
    },
  }
}).mount('#quiz')