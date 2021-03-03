<template>
  <div>
    <h3><p>Search Blog</p></h3>
    <label class=""
      >Tiêu đề
      <input
        id="searchTitle"
        v-model="title"
        type="text"
        class="form-control"
        placeholder="Title"
      />
    </label>
    <button
      class="btn btn-outline-success mb-2"
      type="submit"
      @click="search()"
    >
      Search
    </button>
    <br />
    <BlogList :list-blogs="listBlogsFiltered"></BlogList>
  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { mapMutations } from 'vuex'
// eslint-disable-next-line no-unused-vars
import BlogList from '~/components/BlogList'

export default {
  name: 'Search',
  data() {
    return {
      title: '',
      listBlogsFiltered: {},
      listBlogs: {},
    }
  },

  // Get data from api
  mounted() {
    axios.get(this.$store.state.blog.API_BLOG_URL).then((response) => {
      this.listBlogs = response.data
      this.listBlogsFiltered = this.listBlogs
    })
  },
  methods: {
    // search will filter list blog by title
    search() {
      this.listBlogsFiltered = this.title
        ? this.listBlogs.filter((blog) => blog.title.includes(this.title))
        : this.listBlogs
    },
  },
}
</script>
