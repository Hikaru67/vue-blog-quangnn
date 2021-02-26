<template>
  <div>
    <BlogList v-if="typePage === 'list'"></BlogList>
    <BlogCreateEdit v-if="typePage === 'create&edit'"></BlogCreateEdit>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import BlogList from '~/components/BlogList'
// eslint-disable-next-line no-unused-vars
import BlogCreateEdit from '~/components/BlogCreateEdit'

export default {
  name: 'AppPage',
  data() {
    return {
      typePage: 'list',
    }
  },
}
</script>
