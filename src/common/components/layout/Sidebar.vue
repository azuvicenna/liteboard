<script setup lang="ts">
const menuItems = [
  { name: 'Library Game', icon: '🎮', active: true },
  { name: 'Favorit', icon: '⭐', active: false },
  { name: 'High Scores', icon: '🏆', active: false },
];
</script>

<template>
  <aside class="w-64 bg-bg-surface border-r border-border flex flex-col justify-between shrink-0 z-20 h-full">
    
    <div>
      <div class="p-8 pb-4">
        <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400 tracking-tight">
          LiteBoard
        </h1>
        <p class="text-xs text-text-muted mt-1 font-medium">Offline Game Collection</p>
      </div>

      <nav class="px-4 space-y-2 mt-4">
        <a 
          v-for="item in menuItems" 
          :key="item.name"
          href="#" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
          :class="[
            item.active 
              ? 'bg-bg-hover text-text-main shadow-lg border border-border/50 shadow-indigo-900/20' 
              : 'text-text-sec hover:bg-bg-hover/50 hover:text-text-main'
          ]"
        >
          <span class="text-lg">{{ item.icon }}</span>
          <span class="text-sm" :class="item.active ? 'font-semibold' : 'font-medium'">
            {{ item.name }}
          </span>
        </a>
      </nav>
    </div>

    <div class="p-4 border-t border-border">
      <button class="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-bg-hover transition-colors group">
        
        <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shrink-0">
          A
        </div>

        <div class="text-left overflow-hidden">
          <p class="text-sm font-bold text-text-main group-hover:text-white truncate">
            Atyla Azfa
          </p>
          <p class="text-xs text-emerald-400 flex items-center gap-1.5">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Online
          </p>
        </div>

        <div class="ml-auto text-text-muted group-hover:text-white transition-colors">
          <span class="text-sm">⚙️</span>
        </div>

      </button>
    </div>

  </aside>
</template>