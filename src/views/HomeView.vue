<script setup lang="ts">
import GameCard from '@/common/components/card/GameCard.vue';

// Data Game yang SIAP (Phase 1)
const games = [
    {
        title: 'Domino Gaple',
        category: 'Board • Classic',
        icon: '🁘',
        theme: 'emerald',
        players: '2-4 Pemain',
        tags: '10m',
    },
    {
        title: 'Blackjack',
        category: 'Card • Math',
        icon: '♠️',
        theme: 'indigo',
        players: 'vs Dealer',
        tags: 'Logic',
    },
    {
        title: 'Congklak',
        category: 'Traditional • Board',
        icon: '🥥',
        theme: 'amber',
        players: '2 Pemain',
        tags: 'Lokal',
    },
    {
        title: 'Minesweeper',
        category: 'Puzzle • Retro',
        icon: '💣',
        theme: 'red',
        players: 'Solo',
        tags: 'IQ Test',
    },
] as const;

// Data Game COMING SOON (Phase 2)
// Kita pisah karena strukturnya agak beda (ada progress bar)
const upcomingGames = [
    {
        title: 'Catur (Chess)',
        category: 'Grand Strategy',
        icon: '♟️',
        status: 'Development',
        progress: 20,
        colorClass: 'bg-blue-600',
    },
    {
        title: 'Mahjong',
        category: 'Complex Strategy',
        icon: '🀄',
        status: 'Planned',
        progress: 5,
        colorClass: 'bg-purple-600',
    },
];
</script>

<template>
    <div>

        <h2 class="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
            <span class="w-1 h-6 bg-emerald-500 rounded-full"></span>
            Siap Dimainkan (Phase 1)
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-12">
            <GameCard v-for="game in games" :key="game.title" :title="game.title" :category="game.category"
                :icon="game.icon" :theme="game.theme" :players="game.players" :tags="game.tags" />
        </div>

        <h2 class="text-xl font-bold text-text-muted mb-6 flex items-center gap-2 opacity-80">
            <span class="w-1 h-6 bg-slate-600 rounded-full"></span>
            Akan Datang (Coming Soon)
        </h2>

        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

            <div v-for="item in upcomingGames" :key="item.title"
                class="bg-bg-surface rounded-2xl p-1 border border-border border-dashed relative">
                <div class="absolute inset-0 z-10 bg-bg-app/40 flex items-center justify-center">
                    <div
                        class="bg-bg-surface text-text-sec px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-2 border border-border shadow-xl">
                        🔒 {{ item.status }}
                    </div>
                </div>

                <div class="h-40 bg-bg-hover/50 rounded-xl flex items-center justify-center">
                    <span class="text-6xl text-slate-700">{{ item.icon }}</span>
                </div>

                <div class="p-5">
                    <div class="mb-2">
                        <h3 class="font-bold text-lg text-text-sec">{{ item.title }}</h3>
                        <p class="text-xs text-text-muted">{{ item.category }}</p>
                    </div>

                    <div class="w-full bg-bg-hover h-1.5 rounded-full mt-4">
                        <div class="h-1.5 rounded-full" :class="item.colorClass"
                            :style="{ width: item.progress + '%' }"></div>
                    </div>
                    <p class="text-[10px] text-right text-text-muted mt-1">{{ item.progress }}% Complete</p>
                </div>
            </div>

        </div>

    </div>
</template>