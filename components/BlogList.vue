<template>
  <div>
    <div v-if="searchPage">
      <Search
        :list-blogs="listBlogs"
        @edit-blog="editBlog"
        @delete-blog="deleteBlog"
      ></Search>
    </div>
    <List
      v-else
      :list-blogs="listBlogs"
      @edit-blog="editBlog"
      @delete-blog="deleteBlog"
    ></List>
    <br />
  </div>
</template>

<script>
import axios from 'axios'

// eslint-disable-next-line no-unused-vars
import List from '~/components/List'
// eslint-disable-next-line no-unused-vars
import Search from '~/components/Search'

export default {
  name: 'BlogList',
  filters: {
    filterByTitle(blogs) {
      // eslint-disable-next-line no-undef
      return blogs.filter((blog) => blog.title.includes('lý'))
    },
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['page'],
  data() {
    return {
      listBlogs: '',
    }
  },
  computed: {
    searchPage() {
      return this.page === 2
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    axios
      .get('http://localhost:3001/blogs')
      .then((response) => (this.listBlogs = response.data))
  },
  methods: {
    editBlog(blogId) {
      this.$emit('edit-blog', blogId)
    },
    deleteBlog(blogId) {
      axios
        .delete('http://localhost:3001/blogs/' + blogId)
        .then(function (response) {
          // eslint-disable-next-line no-console
          console.log(response)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
}
</script>
