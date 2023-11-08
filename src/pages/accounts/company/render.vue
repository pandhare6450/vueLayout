<template>
 <div id="profileViewSection" class="profileManageDiv">
  <Header/>

  <div class="ContentBlock Box-root Box-background--white">
    <form>
      <div class="FormLayout Box-root Box-background--white">
        <div class="Box-root">
          <fieldset class="FormBlock">
            <div class="Box-root Padding-vertical--8">
              <div class="Box-root">
                <Field name="Email" :val="user.email"/>
                <Field name="Name" :val="user.name"/>
                <Field name="Surname" :val="user.surname"/>
                <Field name="Password" val="******"/>
                <Field name="Timezone" :val="user.timezone"/>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script setup>
import Header from '@pages/accounts/company/parts/head.vue'
import Field from '@pages/accounts/company/parts/fields.vue'
import { inject } from 'vue'
const user = inject('user')
</script>

<style lang="scss" scoped>

</style>