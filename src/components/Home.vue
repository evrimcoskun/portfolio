<template>
  <div class="home">
    <div class="profile">
      <img src="../assets/ec_portrait.jpg" class="profile__portrait" alt="Evrim's Portrait">
      <div class="profile__body"> 
        <h2 class="profile__title section-title">Hello World!</h2>
        <p class="profile__about">
          My name is Evrim Coskun. I am a web developer from Istanbul currently located in Germany.
        </p>
        <a href="https://github.com/evrimcoskun" target="_blank" class="button">Check out some of my code</a>
        <a href="./about.html" class="button button__secondary">Find out more about me</a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.profile__portrait {
    float: left;
    width: 250px;
    margin-right: 40px;
    border-radius: 50%;
}
.profile {
  display: flex;
}
.profile__about {
  margin-top: 0;
}
.home {

  margin: 60px 0;
}
</style>
