<template>
  <!--  <div class="row">-->
  <!--    <div-->
  <!--      class="btn-group-vertical btn-group-toggle"-->
  <!--      data-toggle="buttons"-->
  <!--      style="width: 15em"-->
  <!--    >-->
  <!--      &lt;!&ndash;      <button-->
  <!--        v-for="(Page, index) in pages"-->
  <!--        :key="Page"-->
  <!--        class="btn btn-outline-dark btn-group-toggle"-->
  <!--        :class="{ active: currentPage === index + 1 }"-->
  <!--        data-toggle="buttons"-->
  <!--        @click="changePage(index + 1)"-->
  <!--      >-->
  <!--        {{ Page }}-->
  <!--      </button>&ndash;&gt;-->
  <!--      <NuxtLink v-for="Page in pages" :key="Page" :to="'/blog/' + Page">-->
  <!--        <label class="btn btn-outline-dark active">-->
  <!--          <input type="radio" name="options" autocomplete="off" checked />-->
  <!--          {{ Page }}-->
  <!--        </label>-->
  <!--      </NuxtLink>-->
  <!--    </div>-->
  <!--  </div>-->
  <div
    class="btn-group-vertical btn-group-toggle"
    data-toggle="buttons"
    style="width: 15em"
  >
    <label
      v-for="Page in pages"
      :key="Page"
      class="btn btn-outline-dark"
      @click="changePage(Page)"
    >
      <input id="option1" type="radio" name="options" autocomplete="off" />
      {{ Page }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  // eslint-disable-next-line vue/require-prop-types
  // props: ['page'],
  data() {
    return {
      currentPage: this.page,
      pages: ['List', 'Search', 'New', 'Edit'],
    }
  },
  methods: {
    // changePage(page) {
    //   // eslint-disable-next-line no-console
    //   console.log(this.$route.fullPath)
    //   // eslint-disable-next-line vue/no-mutating-props
    //   this.currentPage = page
    //   // eslint-disable-next-line no-console
    //   this.$emit('change-page', page)
    // },
    changePage(page) {
      this.$emit('change-page', this.pages.indexOf(page))
      window.location.href = '/blog/' + page.toLowerCase()
    },
  },
}
</script>

<style scoped>
.btn-group-vertical {
  width: 16em;
}
</style>
