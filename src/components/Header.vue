<template>
  <nav class="navbar">
    <div class="logo">
      <img class="img-logo" src="../assets/images/Logo.png" alt="Logo" />
      <span class="logo-name">Musvid</span>
    </div>
    <div class="hamburger" @click="toggleNav">
      <i class="pi pi-bars"></i>
    </div>
    <ul class="header-nav-list" :class="{ active: isMenuOpen }">
      <li class="nav-links"><router-link to="/home"> <i class="pi pi-home mr-2"></i>Home </router-link></li>   
      <li class="nav-links"><router-link to="/favourites">Favourites <i class="pi pi-heart-fill"></i></router-link></li>
      <li class="nav-links">Search <i class="pi pi-search"></i></li>
      <li v-if="currentUser.isLoggedIn" class="nav-links">Welcome, {{ currentUser.name }}</li>
      <li v-if="currentUser.isLoggedIn" class="nav-links">
        <span><button @click="handleLogOut">Log Out <i class="pi pi-sign-out" style="font-weight:bolder"></i></button></span>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue"
import { useRouter } from "vue-router"
const router = useRouter()
const isMenuOpen = ref(false)
const currentUser = reactive({
  name: null,
  isLoggedIn: false,
})
const toggleNav = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const loadCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  if (user) {
    currentUser.name = user.name
    currentUser.isLoggedIn = true
  }
}
const handleLogOut = () => {
  localStorage.removeItem("currentUser")
  currentUser.isLoggedIn = false
  router.push("/login")
}
onMounted(() => {
  loadCurrentUser()
})
</script>