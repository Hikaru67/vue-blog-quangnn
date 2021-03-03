<template>
  <div>
    <h3>Edit Blog</h3>
    <BlogCreateEdit :current-blog="blog"></BlogCreateEdit>
  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { mapMutations } from 'vuex'
// eslint-disable-next-line no-unused-vars
import BlogCreateEdit from '~/components/BlogCreateEdit'

export default {
  name: 'Edit',
  data() {
    return {
      blog: '',
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    axios
      .get(this.$store.state.blog.API_BLOG_URL + this.$route.params.id)
      .then((response) => (this.blog = response.data))
  },
}
</script>
