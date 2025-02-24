<template>
  <div class="loginlanding-content">
    <h1 class="loginlanding-title">Ready to Log Inn Folkss!!!!!</h1>
    <div class="Log-in">
      <h1 class="Login-title">Log In</h1>
      <hr>
      <form @submit.prevent = "handleSubmit">
        <div class="input-group">
          <label for="email">Email:</label>
          <InputText id="email" placeholder="Enter your email " type="email" v-model="loginForm.email" />
          <small v-for="(error, index) in v$.loginForm.email.$errors" :key="index">{{ error.$message }}</small>
          
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <InputText id="password" placeholder="Enter your Password" type="password" v-model="loginForm.password" />
          <small v-for="(error, index) in v$.loginForm.password.$errors" :key="index">{{ error.$message }}</small>

        </div>
        <button type="submit">Log In</button>

        <router-link to="/"><button >sign In</button></router-link>
        
      </form>
    </div>

  </div>

</template>

<script setup>
import { email, helpers, minLength, required } from '@vuelidate/validators'
import { useToast } from 'primevue'
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'

const toast = useToast()
const router = useRouter()

const loginForm = reactive({
  email: '',
  password: '',
})

// Vuelidate validation rules
const rules = computed(() => ({
  loginForm: {
    email: {
      required: helpers.withMessage('Email required', required),
      email: helpers.withMessage('Enter valid email', email),
    },
    password: {
      required: helpers.withMessage('Password required', required),
      minLength: helpers.withMessage('Password must be at least 8 characters', minLength(8)),
    },
  },
}))

const v$ = useVuelidate(rules, { loginForm }, { $autoDirty: true })

// Handle form submission
const handleSubmit = () => {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Check if user exists with the given email & password
  const validUser = storedUsers.find(
    (user) => user.email === loginForm.email && user.password === loginForm.password
  );

  if (validUser) {
    // Save the current logged-in user separately
    localStorage.setItem('currentUser', JSON.stringify(validUser));

    toast.add({
      severity: "success",
      summary: "Login Successful",
      detail: `Welcome, ${validUser.name}`,
      life: 3000,
    });

    router.push("/home");
  } else {
    toast.add({
      severity: "error",
      summary: "Login Failed",
      detail: "Invalid email or password.",
      life: 3000,
    });
  }
};

</script>
