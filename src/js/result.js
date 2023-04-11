const { createApp } = Vue

createApp({
  data() {
    return {
      level: '',
    }
  },
  created() {
    const level = window.location.search.split('=')[1]
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

  },
  methods: {
  }
}).mount('#result')