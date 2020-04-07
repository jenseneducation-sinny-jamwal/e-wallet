<template>
    <div class="card-stack">
     <card v-for="card in cards" :key="card.id"
        v-bind:card="card" 
        v-on:click.native="changeCard(card)"/>
    </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "CardStack",
  components: { Card },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  },
 methods:{
     changeCard(card){
     this.$emit("changeCard", card)
     }
    }
  
}
</script>
<style lang="scss">
.card-stack {
    margin: 2rem 0 12rem;
    display: grid;
    grid-auto-rows: 4rem;
    .card{
        overflow: hidden;
        transform: scale(1);
         &:hover {
      transform: scale(1.03);
      box-shadow: grey;
    }
    }
}
</style>