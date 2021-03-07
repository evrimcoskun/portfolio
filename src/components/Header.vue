<template>
  <header class="header">
    <h1 class="site-title header-item">Evrim C.</h1>
    <div class="menu header-item">
      <router-link v-for="item in menuItems" :key="item.id" :to="item.href" class="menu-item">{{item.title}}</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: [
          {href: '/', title: 'Home', id: 'home'},
          {href: '/work', title: 'Work', id: 'work'},
          {href: '/about', title: 'About', id: 'about'},
          {href: '/contact', title: 'Contact', id: 'contact'}
        ]
      };
    }
  }
  
</script>

<style>
  .header {
    padding: 20px 40px;
    border-bottom: 1px solid lightgrey;
  }
  .site-title {
    font-size: 2em;
    font-weight: 400;
    margin: 0;
  }
  .menu {
    margin-top: 10px;
  }
  .menu-item {
    margin-left: 16px;
    padding-bottom: 6px;
    font-size: 0.9em;
    color: #357b70;
    text-decoration: none;
    
  }
  .menu-item:hover {
    border-bottom: 2px solid;
  }
  .header {
    display: flex;
  }
  .header-item {
    flex: 0 1 200px;
  }
  .header-item:last-child {
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: right;
  }
  .router-link-exact-active {
    font-weight: 700;
  }
  .router-link-exact-active:hover {
    border-bottom: none;
    cursor: default;
  }
</style>
