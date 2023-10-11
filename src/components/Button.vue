<template>
    <button class="border-2 bg-gray-500 transition hover:shadow hover:-translate-y-1 py-4 px-3 rounded-md text-white">
        {{ props.label }}
    </button>
</template>

<script lang="ts" setup>
    const props = defineProps<{label?: string}>()
</script>
