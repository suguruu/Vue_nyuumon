var counterButton = vue.extend({
  template: '<span>{{counter}} items<button v-on:click="addToCart">add</button>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    addToCart: function() {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

new Vue({
  el: '#fruits-counter',
  components: {
    'counter-button': counterButton
  },
  data: {
    total: 0,
    fruits: [
      {name: 'peer'},
      {name: 'strawberry'}
    ]
  },
  methods: {
    incrementCartStatus: function() {
      this.total += 1
    }
  }
})
