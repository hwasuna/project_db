<template>
    <div class="container">
    <EventForm/>
    </div>
</template>

<script>
    import EventForm from '@/components/EventForm.vue';
    export default {
        name: "EventView",
        components: {
            EventForm,
        },
    };
</script>

<style scoped>
    .container{
        flex-direction: column;
        display: flex;
        justify-content: center;
    }

</style>