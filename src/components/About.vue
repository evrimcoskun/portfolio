<template>
  <div class="about">
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate, blanditiis, error hic autem harum temporibus molestias doloribus porro iure beatae? Totam, ratione doloribus ad neque, dolorum corporis ducimus assumenda debitis cupiditate sapiente deleniti quo, vitae eos laudantium! Explicabo tempore praesentium assumenda, nulla quam eaque quo culpa totam suscipit ipsa architecto dignissimos atque alias iure accusamus autem tempora eveniet molestiae. Laborum cum, non rem facilis assumenda adipisci aliquid, mollitia illum nemo quia enim? Impedit architecto nam minima, rem illo illum adipisci repudiandae placeat ut, quasi, ea nobis officia suscipit ab commodi cum similique doloremque quidem sint. Quis, blanditiis? Dolores, similique?</p>
    <div class="illustration">
      <Illustration />
    </div>
  </div>
</template>

<script>
import Illustration from './Illustration.vue'
export default {
  name: 'About',
  components: {
    Illustration
  }
}
</script>

<style>
.illustration {
  text-align: center
}
</style>
