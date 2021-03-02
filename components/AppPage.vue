<template>
  <div>
    <component
      :is="currentPage"
      :page="page"
      :blog-id="blogId"
      @edit-blog="getBlogId"
    ></component>
    {{ page }}
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import BlogList from '~/components/BlogList'
// eslint-disable-next-line no-unused-vars
import BlogCreateEdit from '~/components/BlogCreateEdit'

export default {
  name: 'AppPage',
  // eslint-disable-next-line vue/require-prop-types
  props: ['page'],
  data() {
    return {
      blogId: '',
    }
  },
  computed: {
    currentPage() {
      return this.page === 1 || this.page === 2 ? 'BlogList' : 'BlogCreateEdit'
    },
  },
  beforeCreate() {
    switch (this.$route.fullPath) {
      case 'blog/List':
        // eslint-disable-next-line vue/no-mutating-props
        this.page = 1
        break
    }
  },
  methods: {
    getBlogId(blogId) {
      this.blogId = blogId
      // eslint-disable-next-line vue/no-mutating-props
      this.page = 4
      this.$emit('change-page', 4)
    },
  },
}
</script>
