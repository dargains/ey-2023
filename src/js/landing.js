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

    const slideUps = document.querySelectorAll(".slide-up")

    slideUps.forEach(element => {
      window.addEventListener('scroll', () => {
        if (this.isElementInViewport(element)) {
          element.classList.add('active');
        }
      });
    })
  },
  computed: {

  },
  methods: {
    scrolldown() {
      const nextElement = document.querySelector('.infoBlock')
      nextElement.scrollIntoView({ behavior: 'smooth' })
    },
    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  }
}).mount('#landing')