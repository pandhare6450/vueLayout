<template>
    <div class="bkpdhmrd_rightbar">
        <div class="bkpdhmrd_topContent">
            <navbar/>
        </div>
        <div class="bkpdhmrd_rsection">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import navbar from '@layouts/navbar.vue';
</script>