<template>
  <div>
    <h3>New Blog</h3>
    <BlogCreateEdit></BlogCreateEdit>
    <div class="card-body" style="border: white">
      <form
        method="post"
        enctype="multipart/form-data"
        novalidate="true"
        @submit="checkForm"
      >
        <div v-if="errors.length" style="color: red">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <div class="form-group">
          <label for="title">Tiêu đề</label>
          <input
            id="title"
            v-model="blog.title"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="des">Mô tả ngắn</label>
          <input id="des" v-model="blog.des" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="detail">Chi tiết</label>
          <textarea
            id="detail"
            v-model="blog.detail"
            type="text"
            class="form-control"
            style="height: 200px"
          >
          </textarea>
        </div>
        <div class="form-group">
          <p>Hình ảnh</p>
          <input id="image" type="file" />
        </div>
        <div class="form-group">
          <p>Loại</p>
          <label for="category"></label>
          <select id="category" v-model="blog.category" name="type-blog">
            <option
              v-for="(Category, index) in categories"
              :key="Category"
              :value="index"
            >
              {{ Category }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <p>Vị trí</p>
          <label
            v-for="(Position, index) in positions"
            id="index"
            :key="Position"
          >
            <input
              v-model="blog.position"
              type="checkbox"
              name="position"
              :value="index + 1"
            />
            {{ Position }}
          </label>
          <br />
        </div>

        <p>Public</p>
        <input
          id="public1"
          v-model="blog.public"
          type="radio"
          name="public"
          :value="true"
        />
        <label for="public1">Yes</label><br />

        <input
          id="public2"
          v-model="blog.public"
          type="radio"
          name="public"
          :value="false"
        />
        <label for="public2">No</label><br />

        <p>Date Public</p>
        <label for="datePublic">
          <input
            id="datePublic"
            v-model="blog.data_pubblic"
            type="date"
            name="datePublic"
          />
        </label>
        {{ blog }}
        <br />
        <div style="text-align: center">
          <button type="submit" class="btn btn-success" @click="addBlog()">
            Submit
          </button>
          <button type="reset" class="btn btn-primary">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Create',
  data() {
    return {
      errors: [],
      categories: [
        'Thời sự',
        'Thế giới',
        'Kinh doanh',
        'Giải trí',
        'Thể thao',
        'Pháp',
        'Y tế',
      ],
      positions: ['Việt Nam', 'Châu Á', 'Châu Âu', 'Châu Mỹ'],
      blog: {
        title: '',
        des: '',
        detail: '',
        thumbs: '',
        category: '',
        position: [],
        public: '',
        data_pubblic: '',
      },
    }
  },
  methods: {
    validate() {
      this.errors = []

      if (!this.blog.title) {
        this.errors.push('Title required.')
      }
      if (!this.blog.category) {
        this.errors.push('Category r  equired.')
      }
      if (!this.blog.public) {
        this.errors.push('Status required.')
      }
      if (!this.blog.data_pubblic) {
        this.errors.push('Date public required.')
      }
      if (!this.blog.position) {
        this.errors.push('Position required.')
      }

      return !this.errors.length
    },
    addBlog() {
      console.log(this.blog)
      if (this.validate())
        axios
          .post('http://127.0.0.1:8000/blogs', this.blog)
          .then(function (response) {
            // eslint-disable-next-line no-console
            console.log(response)
            alert(response.statusText)
            window.location.href = '/blog/list'
          })
          .catch(function (error) {
            // eslint-disable-next-line no-console
            console.log(error)
          })
    },
    checkForm(e) {
      this.errors = []

      if (!this.blog.title) {
        this.errors.push('Title required.')
      }
      if (!this.blog.category) {
        this.errors.push('Category required.')
      }
      if (!this.blog.public) {
        this.errors.push('Status required.')
      }
      if (!this.blog.data_pubblic) {
        this.errors.push('Date public required.')
      }
      if (!this.blog.position) {
        this.errors.push('Position required.')
      }

      if (!this.errors.length) {
        return true
      }

      e.preventDefault()
    },
  },
}
</script>
