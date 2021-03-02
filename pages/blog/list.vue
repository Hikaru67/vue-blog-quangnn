<template>
  <div>
    <BlogList @list-blog="getListBlog"></BlogList>
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
          <td>{{ getCategory(blog.category) }}</td>
          <td>{{ getStatus(blog.status) }}</td>
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
import BlogList from '~/components/BlogList'

export default {
  name: 'List',
  data() {
    return {
      listBlogs: {},
    }
  },
  methods: {
    getListBlog(listBlogs) {
      this.listBlogs = listBlogs
    },
    getPosition(listPosition) {
      let positions = ''
      listPosition.forEach(function (position) {
        switch (position) {
          case 1:
            positions += 'Việt Nam, '
            break
          case 2:
            positions += 'Châu Âu, '
            break
          case 3:
            positions += 'Châu Á, '
            break
          case 4:
            positions += 'Châu Mỹ, '
            break
        }
      })
      return positions
    },
    getCategory(category) {
      switch (category) {
        case 0:
          return 'Thời sự'
        case 1:
          return 'Thế giới'
        case 2:
          return 'Kinh doanh'
        case 3:
          return 'Giải trí'
        case 4:
          return 'Thể thao'
        case 5:
          return 'Pháp'
        case 6:
          return 'Y tế'
        default:
          return category
      }
    },
    getStatus(status) {
      return status ? 'Yes' : 'No'
    },
    editBlog(blogId) {
      // this.$emit('edit-blog', blogId)
      window.location.href = '/blog/edit/' + blogId
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
      // this.$emit('delete-blog', blogId)
      window.location.href = '/blog/list'
    },
  },
}
</script>
