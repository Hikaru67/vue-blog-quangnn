<template>
  <div>
    <h3>List Blog</h3>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Tin</th>
          <th scope="col">Loại</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Vị trí</th>
          <th scope="col">Ngày public</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="blog in listBlogs" :key="blog.id">
          <td>{{ blog.id }}</td>
          <td>{{ blog.title }}</td>
          <td>{{ categories[blog.category] }}</td>
          <td>{{ status[blog.public] }}</td>
          <td>{{ getPosition(blog.position) }}</td>
          <td>{{ blog.data_pubblic }}</td>
          <td>
            <button class="btn btn-outline-info" @click="editBlog(blog.id)">
              Edit
            </button>
          </td>
          <td>
            <button class="btn btn-outline-danger" @click="deleteBlog(blog.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { mapMutations } from 'vuex'

export default {
  name: 'BlogList',
  // eslint-disable-next-line vue/require-prop-types
  props: ['listBlogs'],
  data() {
    return {
      // listBlogs: [],
    }
  },
  computed: {
    categories() {
      return this.$store.state.blog.CATEGORIES
    },
    status() {
      return this.$store.state.blog.STATUS
    },
  },
  mounted() {
    // this.sendListBlogs(this.title)
  },
  methods: {
    // getPosition will convert position property type number to string
    getPosition(listPosition) {
      return listPosition
        .map((position) => this.$store.state.blog.POSITIONS[position - 1])
        .toString()
    },

    // editBlog will redirect to editBLog Page
    editBlog(blogId) {
      // this.$emit('edit-blog', blogId)
      window.location.href = '/blog/edit/' + blogId
    },

    // deleteBlog will delete current blog and redirect to list blog page
    deleteBlog(blogId) {
      axios
        .delete(this.$store.state.blog.API_BLOG_URL + blogId)
        .then(function (response) {
          // eslint-disable-next-line no-console
          console.log(response)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        })
      // this.$emit('delete-blog', blogId)
      window.location.href = '/blog/list'
    },
  },
}
</script>
