<template>
  <div>
    <Create v-if="createPage"></Create>
    <Edit v-else :blog-id="blogId"></Edit>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import Create from '~/components/Create'
// eslint-disable-next-line no-unused-vars
import Edit from '~/components/Edit'

export default {
  name: 'BlogCreateEdit',
  // eslint-disable-next-line vue/require-prop-types
  props: ['page', 'blogId'],
  data() {
    return {
      typeAction: 'create',
    }
  },
  computed: {
    createPage() {
      return this.page === 3
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    axios
      .get('http://localhost:3001/blogs')
      .then((response) => (this.listBlogs = response.data))
  },
}
</script>
