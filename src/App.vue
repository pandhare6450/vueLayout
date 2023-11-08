<template>
  <div class="bkpdhmrd db-World-root dashboard_main">
    <div class="db-World-wrapper Box-root Flex-flex Flex-direction--column">
        <div class="db-World-scrollWrapper">
            <div class="bkpdhmrd_left db-World-sideNavContainer">
              <leftbar/>
            </div>
            <div class="bkpdhmrd_right db-World-mainWrapper" id="rdinventory_main">
                <div class="db-World-mainPane" tabindex="-1" style="z-index: unset;">
                    <div class="db-World-contentPane" role="main">
                        <div id="page_section" class="page_section" style="position: relative;">
                            <rightbar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import leftbar from '@layouts/leftbar.vue';
import rightbar from '@layouts/rightbar.vue';
</script>
