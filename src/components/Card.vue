<template>
  <div class="card"  v-bind:style="{background:card.bgcolor}">
  <div class="light" >
      <img src="../assets/chip-light.svg" alt="chip" class="chip" />
      <img v-bind:src="require('../assets/vendor-' + card.vendor + '.svg')"
       v-bind:class="vendorclass" alt="dark">
  </div>
  <div class="number">{{card.cardNumber}}</div>
        <div class="info"> 
          <aside class="holder">
          <span>Cardholder Name</span> 
          <p>{{card.cardHolder}}</p></aside>
          <aside class="valid">
          <span> Valid Until</span>
          <p>{{card.month}}/{{card.year}}</p>
          </aside>
        </div>
      
            
  </div>
</template>
<script>
export default {
   name:"Card",
props:{ card: Object },
computed:{
  vendorclass(){
    return this.card.vendor
  }
}
}
</script>
<style lang="scss">
.card {
  width: 37%;
  height: 230px;
  background-color:rgb(231, 55, 55);
  margin-left: 29%;
  border-radius: 12px;
}
.light{
     display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right:20px;
    margin-left: 30px;
}
.number {
    font-size: 1.4rem;
    letter-spacing: .05rem;
       margin-top:20px;
}
 .info aside.holder {
    flex: 1;
}
aside {
    display: block;
}
 .info {
    margin-top:20px;
    grid-row: auto/span 1;
    display: flex;
}
 div aside span {
    display: block;
    font-size:15px;
    margin-right: 25px;
}
  
</style>