<template>
  <div>
    <h3><p>Search Blog</p></h3>
    <!--    <form>-->
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
      @click="search(listBlogs)"
    >
      Search
    </button>
    <!--    </form>-->
    <List :list-blogs="itemFilted"></List>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import List from '~/components/List'

export default {
  name: 'Search',
  /* filters: {
    filterByTitle(blogs, titles) {
      // eslint-disable-next-line no-undef
      return titles
        ? blogs.filter((blog) => blog.title.includes(titles))
        : blogs
    },
  }, */
  // eslint-disable-next-line vue/require-prop-types
  props: ['listBlogs'],
  data() {
    return {
      title: '',
      itemFilted: this.listBlogs,
    }
  },
  methods: {
    search(blogs) {
      // eslint-disable-next-line vue/no-mutating-props
      this.itemFilted = this.title
        ? this.listBlogs.filter((blog) => blog.title.includes(this.title))
        : this.listBlogs
    },
  },
}
</script>
