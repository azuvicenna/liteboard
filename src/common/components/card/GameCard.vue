<script setup lang="ts">
import { computed } from 'vue';

// Definisi Tipe Data Props
interface Props {
    title: string;
    category: string;
    icon: string;
    players: string;
    tags: string; // misal: "10m" atau "Lokal"
    status?: 'READY' | 'DEV' | 'PLAN';

    // Tema warna kartu (sesuai design HTML tadi)
    theme?: 'emerald' | 'indigo' | 'amber' | 'red';
}

const props = withDefaults(defineProps<Props>(), {
    status: 'READY',
    theme: 'emerald',
});

// Mapping class Tailwind berdasarkan tema warna
// Ini cara teraman agar class tidak hilang saat di-compile
const themeClasses = computed(() => {
    const themes = {
        emerald: {
            border: 'hover:border-emerald-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
            textHover: 'group-hover:text-emerald-400',
            btn: 'bg-emerald-500',
            badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
            gradientHover: 'group-hover:from-emerald-900/40',
        },
        indigo: {
            border: 'hover:border-indigo-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
            textHover: 'group-hover:text-indigo-400',
            btn: 'bg-indigo-500',
            badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
            gradientHover: 'group-hover:from-indigo-900/40',
        },
        amber: {
            border: 'hover:border-amber-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
            textHover: 'group-hover:text-amber-400',
            btn: 'bg-amber-500',
            badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
            gradientHover: 'group-hover:from-amber-900/40',
        },
        red: {
            border: 'hover:border-red-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]',
            textHover: 'group-hover:text-red-400',
            btn: 'bg-red-500',
            badge: 'bg-red-500/10 text-red-400 border-red-500/20',
            gradientHover: 'group-hover:from-red-900/40',
        },
    };
    return themes[props.theme];
});
</script>

<template>
    <div class="group relative bg-bg-surface rounded-2xl p-1 border border-border transition-all duration-300 cursor-pointer hover:-translate-y-1"
        :class="[themeClasses.border, themeClasses.shadow]">
        <div class="h-40 bg-gradient-to-br from-bg-hover to-bg-surface rounded-xl flex items-center justify-center relative overflow-hidden transition-colors"
            :class="themeClasses.gradientHover">
            <span class="text-6xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-300">
                {{ icon }}
            </span>

            <div
                class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                <span
                    class="text-white px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    :class="themeClasses.btn">
                    Mainkan
                </span>
            </div>
        </div>

        <div class="p-5">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h3 class="font-bold text-lg text-text-main transition-colors" :class="themeClasses.textHover">
                        {{ title }}
                    </h3>
                    <p class="text-xs text-text-muted">{{ category }}</p>
                </div>

                <span class="text-[10px] font-bold px-2 py-1 rounded border" :class="themeClasses.badge">
                    {{ status }}
                </span>
            </div>

            <div class="flex items-center gap-3 mt-4 text-xs text-text-sec font-medium">
                <span class="flex items-center gap-1">👤 {{ players }}</span>
                <span class="flex items-center gap-1">🔖 {{ tags }}</span>
            </div>
        </div>
    </div>
</template>