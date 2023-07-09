<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/products"  class="font-bold" >Zaid Test products</NuxtLink>
           
            </nav>
        </header>

    </div>

    <div class="container mx-auto p-4">
    <slot />
</div>
<footer class="container mx-auto p-4 flex justiy-between border-t-2">
    <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">products</NuxtLink></li>

                </ul>
</footer>

</template>
<style scoped>
li{
    color: white;
}
.router-link-exact-active{
    color:rgb(79 70 229 / 1);
}
nav{
    border-bottom:1px solid #ccc ;
}

</style>