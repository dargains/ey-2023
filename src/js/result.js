const { createApp } = Vue

createApp({
  data() {
    return {
      level: undefined
    }
  },
  created() {
    const result = window.location.search.split('=')[1]
    if (result < x) {
      this.level = 'iniciante'
    } else if (result > x && result < y) {
      this.level = 'intermediário'
    } else {
      this.level = 'avançado'
    }
  },
  computed: {
    
  },
  methods: {
  }
}).mount('#result')