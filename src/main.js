import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data(){ return {
    cards: [
      {
        id:'1',
        cardNumber:'7899 6565 4387 2344',
        cardHolder:'micke olson',
        month:"6",
        year:"23",
        cvv:'100',
        vendor:'bitcoin',
        bgcolor:"gold"
      },
      {
        id:'2',
        cardNumber:'2344 4749 7989 6556',
        cardHolder:'Pia andersson',
        month:"6",
        year:"24",
        cvv:'200',
        vendor:'ninja',
        bgcolor:"purple"
      },
      {
        id:'3',
        cardNumber:'6988 7388 4432 5454',
        cardHolder:'sini Jamwal',
        month:"7",
        year:"25",
        cvv:'300',
        vendor:'evil',
        bgcolor:"grey"

      },
      {
        id:'4',
        cardNumber:'5675 2022 8482 4878',
        cardHolder:'greta thunberg',
        month:"8",
        year:"25",
        cvv:'400',
        vendor:'blockchain',
        bgcolor:"green"
      }
    ]
  }},
  mounted(){
    this.$root.$on("addcard", card =>{
      this.cards.push(card); 
    })
  },

  render: h => h(App)
}).$mount('#app')
