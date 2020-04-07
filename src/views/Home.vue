<template>
  <div class="home">
      <TopCard msg ="E-Wallet"/>
      <h4>Active Card</h4>
     <Card v-bind:card="card"/>
    <CardStack v-bind:cards="cards" v-on:changeCard="changeCard"/>
    <button v-on:click="()=>$router.push('About')">Add New Card</button>
  </div>
</template>

<script>
import CardStack from '@/components/CardStack.vue'
import TopCard from '@/components/TopCard.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'Home',
  components: {
    CardStack,
    Card,
    TopCard
  },
  data(){
    return{
     card: {
        cardNumber:'9876 6565 4387 6543',
        cardHolder:'Olle Olofsson',
        month:"2",
        year:"25",
        cvv:'100',
        vendor:'bitcoin' 
     }
    }
  },
 computed:{
 cards(){ return this.$root.$data.cards
 }
 } ,
 methods:{
   changeCard(card){
     this.card = card
   }
 } 
}
</script>
<style lang="scss">
body{
 display: block;
}
.home {
  width: 100%;
  margin: auto;
  padding: 2rem;
  max-width: 1000px;
  background: white;
  h4{
  color:rgb(161, 152, 152)
}
  button {
    width: 40%;
    padding: 20px;
    margin-right: 50px;
    border: 3px solid black;
    text-align: center;
    border-radius: 10px;
    color:black;
    transition: 0.7s;
    text-decoration: none;
    font-size: 20px;
    
    &:hover {
      color:white;
      background: #000;
      transition: 0.7s;
    
    
    }
  }
}
</style>