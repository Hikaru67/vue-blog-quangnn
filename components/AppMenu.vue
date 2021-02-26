<template>
  <div class="row">
    <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-outline-dark active">
        <input
          id="option1"
          type="radio"
          name="options"
          autocomplete="off"
          checked
        />
        List
      </label>
      <label class="btn btn-outline-dark">
        <input id="option2" type="radio" name="options" autocomplete="off" />
        New
      </label>
      <label class="btn btn-outline-dark">
        <input id="option3" type="radio" name="options" autocomplete="off" />
        Search
      </label>
      <label class="btn btn-outline-dark">
        <input id="option4" type="radio" name="options" autocomplete="off" />
        Edit
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
}
</script>

<style scoped>
.btn-group-vertical {
  width: 16em;
}
</style>
