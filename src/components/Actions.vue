<template>
    <div class="actions">
        <div class="nav">
            <router-link class="btn nav" v-if="precedent" :to="precedent">
                &larr;
            </router-link>
        </div>
        <div class="slot">
            <slot />
        </div>
        <div class="nav">
            <router-link class="btn nav" v-if="suivant" :to="suivant">
                &rarr;
            </router-link>
        </div>
    </div>
</template>

<script setup>
defineProps({
    precedent: { type: String, default: null },
    suivant: { type: String, default: null },
});
</script>
