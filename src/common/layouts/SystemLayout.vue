<script setup lang="ts">
import Sidebar from '../components/layout/Sidebar.vue';
import Navbar from '../components/layout/Navbar.vue';
</script>

<template>
    <div
        class="flex h-screen w-screen overflow-hidden bg-bg-app text-text-main selection:bg-indigo-500 selection:text-white">

        <Sidebar />

        <main class="flex-1 flex flex-col relative overflow-hidden">

            <div class="absolute top-0 left-0 w-full h-96 bg-indigo-900/10 blur-[100px] pointer-events-none"></div>

            <Navbar />

            <div class="flex-1 overflow-y-auto p-8 pt-2">
                <router-view/>
            </div>

        </main>
    </div>
</template>