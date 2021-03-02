<template>
  <div>
    <div class="container">
      <AppHeader></AppHeader>
      {{ page }}
      <div class="row">
        <div class="col-lg-3">
          <!--          <AppMenu :current-page="page" @change-page="selectedPage"></AppMenu>-->
          <div
            class="btn-group-vertical btn-group-toggle"
            data-toggle="buttons"
            style="width: 15em"
          >
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
              <input
                id="option2"
                type="radio"
                name="options"
                autocomplete="off"
              />
              New
            </label>
            <label class="btn btn-outline-dark">
              <input
                id="option3"
                type="radio"
                name="options"
                autocomplete="off"
              />
              Search
            </label>
            <label class="btn btn-outline-dark">
              <input
                id="option4"
                type="radio"
                name="options"
                autocomplete="off"
              />
              Edit
            </label>
          </div>
        </div>
        <div class="col-lg-9">
          <!--          <AppPage :page="page" @change-page="selectedPage"></AppPage>-->
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
