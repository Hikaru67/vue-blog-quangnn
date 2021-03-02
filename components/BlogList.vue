<template>
  <div>
    <!--    <div v-if="searchPage">
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
    <br />-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogList',
  filters: {
    filterByTitle(blogs) {
      // eslint-disable-next-line no-undef
      return blogs.filter((blog) => blog.title.includes('lý'))
    },
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['title'],
  data() {
    return {
      listBlogs: [],
    }
  },
  computed: {
    searchPage() {
      return this.page === 2
    },
  },
  mounted() {
    this.sendListBlogs(this.title)
  },
  methods: {
    sendListBlogs(title) {
      axios
        .get('http://127.0.0.1:8000/blogs')
        .then((response) =>
          this.$emit('list-blog', this.search(response.data, title))
        )
    },
    search(blogs, title) {
      return title ? blogs.filter((blog) => blog.title.includes(title)) : blogs
    },
    editBlog(blogId) {
      this.$emit('edit-blog', blogId)
    },
    deleteBlog(blogId) {
      axios
        .delete('http://127.0.0.1:8000/blogs' + blogId)
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
