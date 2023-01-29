<script>
    export let forum;

    console.log(forum);
</script>

<div class="flex flex-row justify-start items-end w-full h-2 px-0 forum-header">
    <h1 class="title gray-500">Forum Info.</h1>
</div>
<div class="flex flex-col nowrap justify-center items-center modal-content">
    <div class="py-1 modal-header">
        <h1 class="header">{ forum.title }</h1>
    </div>
    <div class="flex flex-col justify-center items-center nowrap modal-body">
        <div class="flex flex-col justify-center items-center wrap forum-schedule">
            <h3 class="gray-700"><span class="bold uc-blue">When: </span>{ forum.date } at { forum.time }</h3>
            <h3 class="gray-700"><span class="bold uc-blue">Who: </span>{ forum.speaker }</h3>
            <h3 class="gray-700"><span class="bold uc-blue">Where: </span>{ forum.location }</h3>
        </div>
        <div class="py-1 forum-description">
            <p class="description">
                { forum.description }
            </p>
        </div>
    </div>
</div>

<style>
    .forum-header {
        margin-left: -.5rem;
        margin-top: .5rem;
        border-bottom: 1px solid var(--gray-500);
    }
</style>
