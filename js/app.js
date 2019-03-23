const app = new Vue({
  el: '#app',
  data() {
    return {
      menu: ['Home', 'Work', "Contact"],
      title: 'TIPPER',
      headings: ['Tip:', 'Total:'],
      total: undefined,
      tip: {
        percent: [.1, .15, .20, .25],
        tipTotal: [],
        tipPlusTotal: []
      }
    }
  },
  computed: {
    tipUpdater() {
      this.tip.tipTotal = []
      if (this.total) {
        let cache
        this.tip.percent.forEach(percent => {
          cache = this.total * percent
          this.tip.tipTotal.push(cache.toFixed(2))
        })
      }
      return this.tip.tipTotal
    },
    tipPlusTotalUpdater() {
      this.tip.tipPlusTotal = []
      if (this.tip.tipTotal) {
        let cache
        this.tip.tipTotal.forEach(tip => {
          cache = Number(tip) + this.total
          this.tip.tipPlusTotal.push(cache.toFixed(2))
        })
      }
      return this.tip.tipPlusTotal
    }
  }
})