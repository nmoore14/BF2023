<script>
    import { writable } from 'svelte/store';
    import Modal, { bind } from 'svelte-simple-modal';
    import Events from './lib/Events.js';
    import Navbar from './components/Navbar.svelte';
    import Hero from './components/Hero.svelte';
    import Footer from './components/Footer.svelte';
    import MinimalCard from './components/cards/MinimalCard.svelte';
    import TalkInfo from './components/modals/TalkInfo.svelte';

    const modal = writable(null);
    const showModal = (forum) => {
        modal.set(bind(TalkInfo, { forum: forum }));
    }

    let forums = Events;

    function handleTalk(event) {
        showModal(event.detail.forum);
    }
</script>

<main class="absolute flex flex-col nowrap w-screen h-screen bg-uc-blue">
    <Modal show={$modal}
        styleBg={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        styleWindow={{ boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.15)' }}
    >
    </Modal>
    <Navbar/>
    <Hero />
    <div class="relative flex flex-col justify-start items-start nowrap w-full h-full scroll-y content">
        {#each forums as forum}
            <MinimalCard forum={forum} on:talk={handleTalk}/>
        {/each}
    </div>
    <Footer/>
</main>

<style>
</style>
