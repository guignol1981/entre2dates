<template>
    <main class="min-h-screen grid place-content-center">
        <div class="border bg-gray-50">
            <div class="p-6"> 
                <div class="flex flex-col gap-2">
                    <label for="date" class="p-3">#Date a venir</label>
                    <input type="date">
                </div>
            </div>
            <div class="mt-6">
                <Button class="w-full" label="#Soumettre"></Button>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import Button from '../components/Button.vue';

</script>
