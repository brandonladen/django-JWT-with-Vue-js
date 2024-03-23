<template>
  <div id="app">
    <nav id="top-nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
      <button v-if="isLoggedIn" @click="logout" class="logout-btn">Logout</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
}

#top-nav {
  background-color: #333;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 16px;
}

.nav-link:hover {
  text-decoration: underline;
}

.logout-btn {
  margin-left: 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
}

.logout-btn:hover {
  background-color: #cc4737;
}
</style>
