<template>
  <div id="app">
    <Issues/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Issues from './components/Issues.vue';

@Component({
  components: {
    Issues,
  },
})
export default class App extends Vue {}
</script>