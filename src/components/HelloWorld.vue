<template>
  <div class="hello">
    <h1 data-cafe="testcafe-h1">HELLO CI/CD</h1>
    <h2>測試 localhost CI</h2>
    <ul class="list">
      <li v-for="item in data" :key="item" class="list-item">
        <PuSkeleton height="200px" width="200px" :loading="isLoading">
          <img src="https://picsum.photos/200" alt="">
        </PuSkeleton>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      data: 5,
      isLoading: false
    }
  },
  created () {
    this.getLoading()
  },
  methods: {
    getLoading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  }
}
</script>

<style>
  .list {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
  }
  .list-item {
    padding: 20px;
  }
</style>
