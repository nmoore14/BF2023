<script>
</script>

<div class="relative flex flex-col w-full hero">
    <div>
        <div class="relative flex flex-col w-full h-full justify-end items-center hero-inside">
            <div class="relative flex flex-row justify-center items-center hero-title">
                <h1 class="gray-200">Hero Title</h1>
            </div>
        </div>
    </div>
</div>

<style>
    .hero {
        height: auto;
        background-image: url('/public/microphone.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 3rem;
    }

    .hero-inside {
        height: 20rem;
    }

    .hero-title {
        width: 30rem;
        height: 6rem;
        margin-bottom: -2rem;
        background: linear-gradient(to bottom right, rgba(75, 85, 99, .35), rgba(229, 231, 235, .35));
        border-radius: 1em;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(109, 40, 217, 0.05);
        background-clip: padding-box;
        box-shadow: 10px 15px 40px rgba(0, 0, 0, .50);
    }
</style>
