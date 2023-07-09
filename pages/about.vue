<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt corrupti enim qui rerum voluptatem explicabo dolorem non provident obcaecati facere reprehenderit fugiat quidem iusto id sint nostrum, delectus adipisci veritatis esse, quaerat ducimus? Officiis alias sunt corrupti id eos voluptate cupiditate dolorum eaque consequatur aut blanditiis, repellat dolorem ipsum magni quisquam distinctio voluptatem velit, eveniet vel qui. Modi repellendus laudantium porro doloremque! Animi adipisci officiis eos laudantium aliquid id provident laborum, unde beatae natus quae culpa? Dolore similique, totam soluta vero alias necessitatibus quis. Quos necessitatibus libero ipsa recusandae unde, a corrupti culpa, possimus, officiis omnis quas ex natus minima!</p>
  <div>{{ data }}</div>
  </div>
</template>

<script setup>
const {data}=await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2{
    margin-bottom:20px ;
    font-size: 36px;
    color: white;

}
p{
    margin: 20px ;
    color: white;

}
</style>