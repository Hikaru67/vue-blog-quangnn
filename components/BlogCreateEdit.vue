<template>
  <div></div>
</template>

<script>
import axios from 'axios'

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
      .get('http://127.0.0.1:8000/blogs')
      .then((response) => (this.listBlogs = response.data))
  },
}
</script>
