<template>
  <div class="issues">
    <h1>Issues</h1>
    <ul>
      <li v-for="issue in issues" :key="issue.id">
        <strong>#{{issue.id}}</strong> — {{issue.msg}}
      </li>
    </ul>
    <form @submit.prevent="createIssue">
      <input v-model="message" />
      <input type="submit" value="Add new Issue" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Issues extends Vue {
  message = ''
  issues = [
    {id: 1, msg: 'foo'},
    {id: 2, msg: 'bar'},
  ]
  createIssue() {
    console.log('new issue: ' + this.message)
    this.issues.push({id: 4, msg: this.message})
    this.message = ''
  }
}
</script>