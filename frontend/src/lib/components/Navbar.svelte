<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    // your script goes here
    let cameraBtn;
    function showCamera() {
        cameraBtn.click();
        console.log('clicking the camera');
    }
</script>

<nav class="fixed span-c-all span-r-top flex flex-row justify-between items-end px-1 pb-1 bg-uc-blue">
    <h1 class="title gray-200">Business Forum 2023</h1>
    <div class="menu-toggle">
        <input id="camera" type="file" accept="image/*" capture="camera" style="display: none;" bind:this={cameraBtn}/>
        <button class="camera-btn" on:click="{showCamera}">
            <Icon icon="material-symbols:photo-camera-rounded" class="icon-lg gray-200"/>
        </button>
    </div>
</nav>

<style>
    .camera-btn {
        background-color: rgba(0, 0, 0, 0);
        border: none;
    }
</style>
