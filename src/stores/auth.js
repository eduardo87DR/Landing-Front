import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { jwtDecode } from "jwt-decode"
import axios from "axios"
import router from "@/router"

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token") || "")

  const isAuthenticated = computed(() => !!token.value)

  async function login(identifier, password) {
    try {
      const response = await axios.post(
        "https://thinkguille.space/auth/login",
        {
          identifier,
          password
        }
      )
      token.value = response.data.token
      localStorage.setItem("token", token.value)
      router.push("/dashboard") // redirige al dashboard
    } catch (error) {
      throw error // deja que el componente maneje el error
    }
  }

  function logout() {
    token.value = ""
    localStorage.removeItem("token")
    router.push("/login")
  }

  function getUser() {
    try {
      return token.value ? jwtDecode(token.value) : null
    } catch {
      return null
    }
  }

  return {
    token,
    isAuthenticated,
    login,
    logout,
    getUser
  }
})
