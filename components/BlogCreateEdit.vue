<template>
  <div>
    <h3>New Blogs</h3>
    <div class="card-body" style="border: white">
      <form action="" enctype="multipart/form-data">
        <div class="form-group">
          <label for="title">Tiêu đề</label>
          <input id="title" type="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="description">Mô tả ngắn</label>
          <input id="description" type="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="detail">Chi tiết</label>
          <textarea
            id="detail"
            type="email"
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
          <label for="type-blog"></label>
          <select id="type-blog" name="type-blog">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <input
          id="location1"
          type="checkbox"
          name="location"
          value="location1"
        />
        <label for="location1">Việt Nam</label><br />
        <input
          id="location2"
          type="checkbox"
          name="location"
          value="location2"
        />
        <label for="location2">Châu Á</label><br />
        <input
          id="location3"
          type="checkbox"
          name="location"
          value="location3"
        />
        <label for="location3">Châu Âu</label><br />
        <input
          id="location4"
          type="checkbox"
          name="location"
          value="location4"
        />
        <label for="location4">Châu Mỹ</label><br />

        <p>Public</p>
        <input id="public1" type="radio" name="public" value="yes" />
        <label for="public1">Male</label><br />
        <input id="public2" type="radio" name="public" value="no" />
        <label for="public2">Female</label><br />

        <p>Date Public</p>
        <label for="datePublic">
          <input id="datePublic" type="date" name="datePublic" />
        </label>
        <br />
        <div style="text-align: center">
          <button type="submit" class="btn btn-success">Submit</button>
          <button type="reset" class="btn btn-primary">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCreateEdit',
  data() {
    return {
      typeAction: 'create',
    }
  },
}
</script>
