<template>
  <div class="row">
    <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
      <button
        v-for="(Page, index) in pages"
        :key="Page"
        class="btn btn-outline-dark btn-group-toggle"
        :class="{ active: currentPage === index + 1 }"
        data-toggle="buttons"
        @click="changePage(index + 1)"
      >
        {{ Page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  // eslint-disable-next-line vue/require-prop-types
  props: ['page'],
  data() {
    return {
      currentPage: this.page,
      pages: ['List', 'Search', 'New', 'Edit'],
    }
  },
  methods: {
    changePage(page) {
      // eslint-disable-next-line vue/no-mutating-props
      this.currentPage = page
      // eslint-disable-next-line no-console
      this.$emit('change-page', page)
    },
  },
}
</script>

<style scoped>
.btn-group-vertical {
  width: 16em;
}
</style>
