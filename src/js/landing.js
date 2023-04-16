const { createApp } = Vue

createApp({
  data() {
    return {

    }
  },
  mounted() {
    this.$el.classList.remove("hiddenPage")
  },
  computed: {

  },
  methods: {
    scrolldown() {
      const nextElement = document.querySelector('.infoBlock')
      nextElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
}).mount('#landing')