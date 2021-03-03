<template>
  <div>
    <BlogList :list-blogs="listBlogs"></BlogList>
  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { mapMutations } from 'vuex'
// eslint-disable-next-line no-unused-vars
import BlogList from '~/components/BlogList'

export default {
  name: 'List',
  data() {
    return {
      listBlogs: '',
    }
  },

  // Get data from api
  mounted() {
    axios.get(this.$store.state.blog.API_BLOG_URL).then((response) => {
      this.listBlogs = response.data
    })
  },
}
</script>
