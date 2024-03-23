<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submit() {
      try {
        const response = await axios.post('http://localhost:8000/api-token/', {
          username: this.username,
          password: this.password,
        });
        console.log(response.data.access);
        localStorage.setItem('token', response.data.access)
        window.location.href = '/'
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>
<template>
    <div class="login">
      <h1>Login</h1>
      <form  @submit.prevent="submit">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" >Login</button>
      </form>
      
    </div>
</template>

<style scoped>
.login {
  /* max-width: 400px; */
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>