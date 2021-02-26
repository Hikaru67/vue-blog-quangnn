<template>
  <div>
    <div v-if="search">
      <h3><p>Search Blog</p></h3>
      <form class="">
        <label class=""
          >Tiêu đề
          <input
            id="searchTitle"
            type="text"
            readonly
            class="form-control"
            placeholder="Title"
          />
        </label>
        <button class="btn btn-outline-success mb-2" type="submit">
          Search
        </button>
      </form>
    </div>
    <br />
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
          <th>{{ blog.id }}</th>
          <th>{{ blog.title }}</th>
          <th>{{ getCategory(blog.category) }}</th>
          <th>{{ getStatus(blog.status) }}</th>
          <th>{{ getPosition(blog.position) }}</th>
          <th>{{ blog.data_pubblic }}</th>
          <th style="color: green">Edit</th>
          <th style="color: red">Delete</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogList',
  data() {
    return {
      search: true,
      listBlogs: null,
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    axios
      .get('http://localhost:3001/blogs')
      .then((response) => (this.listBlogs = response.data))
  },
  methods: {
    getPosition(position) {
      let positions = ''
      position.forEach(function (element) {
        switch (element) {
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
      }
    },
    getStatus(status) {
      return status ? 'Yes' : 'No'
    },
  },
}
</script>
