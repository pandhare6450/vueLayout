<template>
  <div class="tabs">
    <div>

      <ul class="tabs__header">
        <li class="list" v-for="title in tabTitles" :key="title" :class="{ selected: title == selectedTitle }"
          @click="selectedTitle = title">
          {{ title }}
        </li>
      </ul>
      <hr />
    </div>
    <slot />
    <div>
      <button class="btn" @click="goNext" :class="{ disabled: i > len - 2 }"> Next
      </button>
      <button class="btn" @click="goPrev" :class="{ disabled: i == 0 }">Prev</button>
    </div>
    <!-- {{ tabTitles }} -->
  </div>
</template>


<script>
import { ref, provide } from 'vue';
export default {
  setup(props, context) {
    // console.log({context})
    const { slots } = context
    const tabTitles = ref(slots.default().map(tab => tab.props.title))
    let i = ref(0);
    let selectedTitle = ref(tabTitles.value[i.value])
    // console.log(selectedTitle);
    const len = tabTitles.value.length;
    const goNext = () => {
      if (i.value < len - 1)
        selectedTitle.value = tabTitles.value[++i.value]
    }
    const goPrev = () => {
      if (i.value < len && i.value > 0)
        selectedTitle.value = tabTitles.value[--i.value]
    }
    provide('selectedTitle', selectedTitle)
    return {
      tabTitles,
      selectedTitle,
      goNext,
      goPrev,
      i,
      len
    }
  }
}
</script>


<style scope>
.btn{
  padding: 4px;
  margin: 3px;
  float: right;
  background-color: white;
  border: none;
  color:brown;
  border-bottom: 1px solid brown
}

.disabled{
  opacity: 0.4;
}
.tabs {
  /* max-width:400px; */
  margin: 0 auto;
}


.tabs__header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
}



.list {
  cursor: pointer;
  margin: 0px auto;
  width: 127px;
  /* background-color: red; */
  text-align: center;
  /* transition: 0.4s all ease-out; */
}

hr {
  margin-top: -12px;
  /* border-top: 1px solid blue; */
}

.selected {
  border-bottom: 3px solid brown;
}
</style>