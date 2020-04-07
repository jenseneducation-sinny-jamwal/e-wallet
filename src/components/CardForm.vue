<template>
  <form @submit.prevent="addNewCard">
    <label for="number">Card Number</label>
    <input type="text" id="number" maxlength="16"
      v-model="card.cardNumber"
      placeholder="XXXX-XXXX-XXXX-XXXX"
    />
    <label for="cardholder">Cardholder Name</label>
    <input type="text" id="cardholder"
      v-model="card.cardHolder" placeholder="Firstname Lastname"
    />

   <div>
      <div>
        <label for="month">Month</label>
        <select name="month" v-model="card.month">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label for="year">Year</label>
        <select name="year" v-model="card.year">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>

    <label for="vendor">Vendor</label>
    <select class="vendor" v-model="card.vendor" @change="$emit('option', card.vendor)">
      <option value="bitcoin">Bitcoin Inc</option>
      <option value="blockchain">Blockchain Inc</option>
      <option value="evil">Evil Corp</option>
         <option value="ninja">Ninja Bank</option>
    </select>
     <button >Add New Card</button>
  </form>
</template>
  

<script>
export default {
  name: 'cardForm',
props:{
  card: Object
},
methods:{
  addNewCard(){
    this.$root.$emit("addcard", this.card)
    this.$router.go(-1)
  }
}
 
}
</script>
<style lang="scss">
body{
  width:100%;
  
}
form {
  width: 35%;
  margin-left: 290px;
  label {
    text-align: left;
    display: block;
    margin: 1rem 0 0.5rem 0;
  }
  div {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-flow: column;
      select {
        width: 190px;
      }
    }
  }
  input, select {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
  }
}
button {
    width: 100%;
    padding: 20px;
    margin-top:25px;
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
</style>