<script setup lang="ts">
import { ref } from 'vue';

const categories = ['All Games', 'Strategy', 'Card', 'Puzzle'];
const activeCategory = ref('All Games');
</script>

<template>
    <header
        class="px-8 py-6 flex justify-between items-center z-10 sticky top-0 bg-bg-app/80 backdrop-blur-md border-b border-white/5">

        <div class="flex gap-2">
            <button v-for="cat in categories" :key="cat" @click="activeCategory = cat"
                class="px-4 py-1.5 rounded-full text-xs transition-all border cursor-pointer" :class="[
                    activeCategory === cat
                        /* STATE AKTIF: Putih Terang (Sesuai HTML: bg-slate-100 text-slate-900) */
                        ? 'bg-bg-active text-text-dark font-bold border-bg-active shadow-lg shadow-white/10 scale-105'

                        /* STATE TIDAK AKTIF: Gelap Transparan (Sesuai HTML: bg-slate-800/50) */
                        : 'bg-bg-hover/50 text-text-sec font-medium border-border hover:bg-bg-hover hover:text-text-main'
                ]">
                {{ cat }}
            </button>
        </div>

        <div class="relative">
            <input type="text" placeholder="Cari game..."
                class="bg-bg-surface border border-border-high text-text-main text-sm rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-text-muted shadow-sm">
            <span class="absolute left-3.5 top-2.5 text-text-muted text-xs pointer-events-none">
                🔍
            </span>
        </div>

    </header>
</template>