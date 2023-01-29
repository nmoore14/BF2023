<script>
    import { createEventDispatcher } from 'svelte';
    import moment from 'moment';

    export let forum;

    let event_time = moment(forum.time, ["HH:mm"]).format("h:mm A");
    forum.time = event_time;

    const dispatch = createEventDispatcher();
    function sendClick() {
        dispatch('talk',{
            forum: forum
        });
    }


</script>

<div class="flex flex-row wrap justify-between items-start w-full h-4 my-0 px-0 py-0 bg-white rounded-sm minimal-card"
    on:click={sendClick}
>
    <div class="flex flex-col nowrap talk-info">
        <h2 class="event-title">{ forum.title }</h2>
        <h4 class="gray-700">{ forum.speaker }</h4>
    </div>
    <div class="flex flex-col nowrap talk-details">
        <h2 class="uc-blue event-time">{ forum.time }</h2>
    </div>
</div>
