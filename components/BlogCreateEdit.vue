<template>
  <div>
    <div class="card-body" style="border: white">
      <form enctype="multipart/form-data" method="post" @submit="checkForm">
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
            name="title"
          />
        </div>
        <div class="form-group">
          <label for="des">Mô tả ngắn</label>
          <input
            id="des"
            v-model="blog.des"
            name="des"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="detail">Chi tiết</label>
          <textarea
            id="detail"
            v-model="blog.detail"
            type="text"
            class="form-control"
            style="height: 200px"
            name="detail"
          >
          </textarea>
        </div>
        <div class="form-group">
          <p>Hình ảnh</p>
          <input id="thumbs" name="thumbs" type="file" />
        </div>
        <div class="form-group">
          <p>Loại</p>
          <label for="category"></label>
          <select id="category" v-model="blog.category" name="category">
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
          :value="1"
          :checked="blog.public === 1"
        />
        <label for="public1">Yes</label><br />

        <input
          id="public2"
          v-model="blog.public"
          type="radio"
          name="public"
          :value="0"
          :checked="blog.public === 0"
        />
        <label for="public2">No</label><br />

        <p>Date Public</p>
        <label for="datePublic">
          <input
            id="datePublic"
            v-model="blog.data_pubblic"
            type="date"
            name="data_pubblic"
          />
        </label>

        <br />
        <div style="text-align: center">
          <button
            type="submit"
            class="btn btn-success"
            @click="currentBlog ? updateBlog() : addBlog()"
          >
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
// eslint-disable-next-line no-unused-vars
import { mapMutations } from 'vuex'

export default {
  name: 'BlogCreateEdit',
  // eslint-disable-next-line vue/require-prop-types
  props: ['currentBlog'],
  data() {
    return {
      errors: [],
      newBlog: {
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
  computed: {
    blog() {
      if (this.currentBlog) return this.currentBlog
      return this.newBlog
    },
    categories() {
      return this.$store.state.blog.CATEGORIES
    },
    status() {
      return this.$store.state.blog.STATUS
    },
    positions() {
      return this.$store.state.blog.POSITIONS
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    axios
      .get(this.$store.state.blog.API_BLOG_URL)
      .then((response) => (this.listBlogs = response.data))
  },
  methods: {
    // addBlog will add a new blog to database
    addBlog() {
      if (this.validate())
        axios
          .post(this.$store.state.blog.API_BLOG_URL, this.blog)
          .then(function () {
            alert('Add blog success')
            window.location.href = '/blog/list'
          })
          .catch(function (error) {
            alert(error)
          })
      window.scrollTo(0, 0)
    },

    // updateBlog will update blog was selected
    updateBlog() {
      if (this.validate())
        axios
          .put(
            this.$store.state.blog.API_BLOG_URL + this.$route.params.id,
            this.blog
          )
          .then(function () {
            alert('Update blog success')
            window.location.href = '/blog/list'
          })
          .catch(function (error) {
            alert(error)
          })
      window.scrollTo(0, 0)
    },

    // validate will check data validity
    validate() {
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
      if (!this.blog.position[0]) {
        this.errors.push('Position required.')
      }

      return !this.errors.length
    },

    // checkFrom will prevent form from being submitted
    checkForm(e) {
      e.preventDefault()
    },
  },
}
</script>
