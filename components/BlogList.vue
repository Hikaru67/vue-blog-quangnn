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
  computed: {
    /**
     * `categories` get list categories
     * @returns {array} list categories
     */
    categories() {
      return this.$store.state.blog.CATEGORIES
    },

    /**
     * `status` get list status
     * @returns {array} list status
     */
    status() {
      return this.$store.state.blog.STATUS
    },
  },
  methods: {
    /**
     * `getPosition` get position name
     * @param {array} listPosition - list positions
     * @returns {string} position name
     */
    getPosition(listPosition) {
      return listPosition
        .map((position) => this.$store.state.blog.POSITIONS[position - 1])
        .toString()
    },

    /**
     * `editBlog` redirect to editBLog Page
     * @param {string} blogId - id blog
     */
    editBlog(blogId) {
      window.location.href = '/blog/edit/' + blogId
    },

    /**
     * `deleteBlog` delete blog by id and redirect to list blog page
     * @param {string} blogId - id blog
     */
    deleteBlog(blogId) {
      axios
        .delete(this.$store.state.blog.API_BLOG_URL + blogId)
        .then(function () {
          alert('Delete blog success')
        })
        .catch(function (error) {
          alert(error)
        })
      window.location.href = '/blog/list'
    },
  },
}
</script>
