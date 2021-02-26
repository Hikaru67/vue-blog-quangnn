<template>
  <div class="container">
    <AppHeader></AppHeader>
    <div class="row">
      <div class="col-lg-3">
        <AppMenu></AppMenu>
      </div>
      <div class="col-lg-9">
        <AppPage></AppPage>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import AppHeader from '~/components/AppHeader'
// eslint-disable-next-line no-unused-vars
import AppMenu from '~/components/AppMenu'

export default {}
</script>

<style>
.container {
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
