<template>
  <div>
    <div class="container">
      <AppHeader></AppHeader>
      <div class="row">
        <div class="col-lg-3">
          <AppMenu :current-page="page" @change-page="selectedPage"></AppMenu>
        </div>
        <div class="col-lg-9">
          <!--          <AppPage :page="page" @change-page="selectedPage"></AppPage>-->
          <Nuxt></Nuxt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import AppHeader from '~/components/AppHeader'
// eslint-disable-next-line no-unused-vars
import AppMenu from '~/components/AppMenu'

export default {
  name: 'Blog',
  data() {
    return {
      pages: ['List', 'Search', 'New', 'Edit'],
      page: 2,
    }
  },
  methods: {
    selectedPage(page) {
      this.page = page
    },
    getPage() {},
  },
}
</script>

<style>
.container {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
