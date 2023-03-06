<template>
  <div class="w-full flex col justify-center items-start p-1 forum-card">
    <div class="w-full card-header">
      <h1 class="title">The Forum</h1>
    </div>
    <div class="my-1 card-content">
      <p class="body-text">
        The Hutton School of Business at University of the Cumberlands maintains an innovative stance in providing
        cutting edge educational service to its students. We believe that success is defined by how well we extend the
        range of possibilities for our students. At the Hutton School of Business, we strive to provide an environment
        that encourages and recognizes innovation and creativity in the education of business students. It is with this
        overarching goal in mind that the Business Forum for Young Professionals was created.
      </p>
    </div>
    <nuxt-link to="/forum" class="my-1 link-cta">Read More...</nuxt-link>
  </div>
</template>

<style lang="scss">
.forum-card {
  border-radius: .25rem;
  background-color: $off-white;
  border-left: $uc-red solid 4px;
}

.link-cta {
  text-decoration: none;
  font-family: $font;
  background-color: $uc-blue;
  color: $gray-200;
  padding: .5rem .75rem;
  border-radius: .25rem;
}
</style>
