<template>

  <div class="about">
        <TopCard msg="Add New Card"/>
<h4>NEW CARD</h4>
   <Card v-bind:card="card" v-bind:class="card"/>
    <CardForm v-bind:card="card" @option="changeVendor"/>
      
    
    
  </div>
</template>

<script>
import CardForm from '@/components/CardForm.vue'
import TopCard from '@/components/TopCard.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'About',
   components: {
    CardForm,
    Card,
    TopCard
  },
  data: () => ({
    card: {
      id:Date.now(),
      chip: require("../assets/chip-light.svg"),
      cardNumber: "XXXX XXXX XXXX XXXX",
      cardHolder: "",
      month: "",
      year: "",
      vendor: "bitcoin",
      bgcolor:"red"
    }
  }),
   methods: {
    changeVendor(vendor) {
      if (vendor === "ninja-bank") {
        this.card.vendor = require('../assets/vendor-' + vendor );
      }
      if (vendor === "evil-corp") {
         this.card.vendor = require('../assets/vendor-' + vendor );
      }
      if (vendor === "blockchain-inc") {
        this.card.vendor = require('../assets/vendor-' + vendor );
      }
      if (vendor === "bitcoin-inc") {
        this.card.vendor = require('../assets/vendor-' + vendor );
      }
    }
  }
 
  }
</script>

<style lang="scss">
body{
 display: block;
}
.about {
  width: 100%;
  margin: auto;
  padding: 2rem;
  max-width: 1000px;
  background: white;
}
h4{
  color:rgb(161, 152, 152)
}
</style>