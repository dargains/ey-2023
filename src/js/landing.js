const { createApp } = Vue

createApp({
  data() {
    return {

    }
  },
  mounted() {
    this.$el.classList.remove("hiddenPage")
    const images = document.querySelectorAll(".parallax")
    images.forEach(image => {
      new Parallax(image);
    })
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