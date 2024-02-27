<template>
    <div class="perche">
        <h1>Tendre une perche</h1>
        <Expression>
            <div
                id="perche"
                :class="{ tendu }"
            >
                <img
                    src="../assets/perche.png"
                    alt="Une perche"
                >
            </div>
        </Expression>
        <Actions
            :precedent="precedent"
            :suivant="suivant"
        >
            <button
                @click="tendu = !tendu"
                class="btn"
            >
                {{ tendu ? 'Détendre' : 'Tendre' }}
            </button>
        </Actions>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Expression from '../components/Expression.vue';
import Actions from '../components/Actions.vue';

defineProps({
    precedent: { type: String, default: null },
    suivant: { type: String, default: null },
});

const tendu = ref(false);
</script>
