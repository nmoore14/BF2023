<script>
    import "../app.css";

    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Hero from "$lib/components/Hero.svelte";
</script>
<main class="absolute flex flex-col nowrap w-screen h-screen bg-gray-200">
    <Navbar />
    <Hero />
    <div class="relative w-full flex flex-col px-4 content">
        <slot />
    </div>
    <Footer />
</main>
