<template>
    <div class="flex row w-full justify-between header">
        <div class="brand">
            <h1>Brand</h1>
        </div>
        <nav class="flex row w-full justify-center items-center">
            <ul class="flex row w-full justify-center items-center">
                <li><NuxtLink class="link-item" to="/">Home</NuxtLink></li>
                <li><NuxtLink class="link-item" to="/forum">The Forum</NuxtLink></li>
                <li><NuxtLink class="link-item" to="/speakers">Speakers</NuxtLink></li>
                <li><NuxtLink class="link-item" to="/faq">FAQ</NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
    .header {
        background-color: $uc-blue;
    }

    li {
        list-style-type: none;
        padding: 1rem;
    }
    
    .link-item {
        text-decoration: none;
        color: $gray-200;
        font-family: $font;
    }
</style>
