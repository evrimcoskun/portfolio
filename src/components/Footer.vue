<template>
  <footer class="footer">
    © Evrim Coskun {{date}}
  </footer>
</template>

<script>
export default {
  computed: {
    date() {
      const date = new Date();
      return date.getFullYear();
    }
  }
}
</script>

<style>
.footer {
  padding: 60px 40px;
  font-size: .8em;
  text-align: center;
}
</style>
