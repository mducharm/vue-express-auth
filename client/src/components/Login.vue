<template>
  <div>
    <h2>Login</h2>
    <form @submit="login">
      <input type="text" name="email">
      <br>
      <input type="password" name="password">
      <br>
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
export default {
  name: "Login",
  methods: {
    login: e => {
      let email = "user@email.com";
      let password = "password";
      let login = () => {
        let data = {
          email: email,
          password: password
        };
        axios
          .post("/api/login", data)
          .then(response => {
            console.log("Logged in");
            router.push("/dashboard");
          })
          .catch(errors => {
            console.log("Cannot log in");
          });
      };
      login();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
