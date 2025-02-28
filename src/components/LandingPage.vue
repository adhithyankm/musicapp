<template>
  <div class="landingpage">
    <div class="landing-header">
      <nav class="landing-Nav">
        <div class="logo">
          <img class="img-logo" src="../assets/images/Logo.png" alt="Logo" />
          <span class="logo-name">Musvid</span>
        </div>
        <ul class="header-nav-list">
          <li class="nav-links">
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="landing-content">
      <div class="landing-left">
        <img class="contentimage" src="../assets/images/pexels-teddy-2263436.jpg" alt="Sorry...." />
        <h1 class="landing-title">
          Welcome to the world <br />of Music!!!!!
        </h1>
        <p class="landing-subtitle">
          "Music is the heartbeat of the soul – it connects us, inspires us, and makes every moment magical. <br />
          Dive into the rhythm, feel the melody, <br />and let the world of music bring joy to your life!" 🎵💖
        </p>
      </div>
      <hr />
      <div class="sign-up">
        <h1 class="signup-title">Create Account</h1>
        <hr />
        <form @submit.prevent="handleSignUp">
          <div class="input-group">
            <label for="name">Name:</label>
            <InputText id="name" placeholder="Enter your Name" type="text" v-model="form.name" />
            <small v-for="(error, index) in v$.form.name.$errors" :key="index">{{ error.$message }}</small>
          </div>
          <div class="input-group">
            <label for="email">Email:</label>
            <InputText id="email" placeholder="Enter your email" type="email" v-model="form.email" />
            <small v-for="(error, index) in v$.form.email.$errors" :key="index">{{ error.$message }}</small>
          </div>
          <div class="input-group">
            <label for="password">Password:</label>
            <InputText id="password" placeholder="Enter your Password" type="password" v-model="form.password" />
            <small v-for="(error, index) in v$.form.password.$errors" :key="index">{{ error.$message }}</small>
          </div>
          <div class="input-group">
            <label for="nickname">NickName:</label>
            <InputText id="nickname" placeholder="NickName" type="text" v-model="form.nickname" />
            <small v-for="(error, index) in v$.form.nickname.$errors" :key="index">{{ error.$message }}</small>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive } from "vue"
import { useVuelidate } from "@vuelidate/core"
import { alpha, email, helpers, minLength, required } from "@vuelidate/validators"
import { useRouter } from "vue-router"
import { useToast } from "primevue"
const toast = useToast()
const router = useRouter()
const form = reactive({ name: "", email: "", password: "", nickname: "" })
const rules = computed(() => ({
  form: {
    name: {
      required: helpers.withMessage("Name required", required),
      alpha: helpers.withMessage("Name must be letters only", alpha)
    },
    email: {
      required: helpers.withMessage("Email required", required),
      email: helpers.withMessage("Enter a valid email", email)
    },
    password: {
      required: helpers.withMessage("Password required", required),
      minLength: helpers.withMessage("Password must be at least 8 characters", minLength(8))
    },
    nickname: {
      required: helpers.withMessage("NickName required", required),
      alpha: helpers.withMessage("NickName must be letters only", alpha)
    }
  }
}))
const v$ = useVuelidate(rules, { form }, { $autoDirty: true })
const handleSignUp = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) {
    toast.add({ severity: "error", summary: "Validation Failed", detail: "Please fill all the required fields.", life: 3000 })
    return
  }
  const existingUsers = JSON.parse(localStorage.getItem("users")) || []
  const userExists = existingUsers.some(user => user.email === form.email)
  if (userExists) {
    toast.add({ severity: "error", summary: "User Exists", detail: "An account with this email already exists.", life: 3000 })
    return
  }
  existingUsers.push({ ...form })
  localStorage.setItem("users", JSON.stringify(existingUsers))
  toast.add({ severity: "success", summary: "Sign Up Successful", detail: `Account created for ${form.name}`, life: 3000 })
  router.push("/login")
}
</script>
