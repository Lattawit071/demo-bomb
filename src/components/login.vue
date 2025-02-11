<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authenticate } from "/src/js/userpass";

const username = ref("");
const password = ref("");
const rememberMe = ref(false);
const message = ref("");
const showPassword = ref(false);
const router = useRouter();

const login = () => {
  if (authenticate(username.value, password.value)) {
    if (rememberMe.value) {
      localStorage.setItem("savedUsername", username.value);
      localStorage.setItem("savedPassword", password.value);
    } else {
      localStorage.removeItem("savedUsername");
      localStorage.removeItem("savedPassword");
    }
    router.push("/demo");
  } else {
    message.value = "Invalid username or password. Please try again.";
  }
};

const loadSavedCredentials = () => {
  const savedUsername = localStorage.getItem("savedUsername");
  const savedPassword = localStorage.getItem("savedPassword");
  if (savedUsername && savedPassword) {
    username.value = savedUsername;
    password.value = savedPassword;
    rememberMe.value = true;
  }
};

loadSavedCredentials();
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div
      class="bg-white p-8 shadow-lg border-4 border-white flex flex-col items-center w-full max-w-md"
    >
      <img src="/logo.png" alt="Logo" class="w-32 h-32 object-contain mb-6" />

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 transition-all duration-300 hover:border-blue-400"
      />

      <!-- Password Field with Toggle -->
      <div class="w-full relative">
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Password"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400"
        />
        <span
          @click="showPassword = !showPassword"
          class="absolute inset-y-0 right-3 flex items-center cursor-pointer text-xl"
        >
          {{ showPassword ? "👁️" : "🔒" }}
        </span>
      </div>

      <!-- Remember Me Checkbox -->
      <div class="flex items-center w-full my-4">
        <input
          id="rememberMe"
          type="checkbox"
          v-model="rememberMe"
          class="mr-2"
        />
        <label for="rememberMe" class="text-gray-600 text-sm"
          >Remember Me</label
        >
      </div>

      <button
        @click="login"
        class="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition font-semibold"
      >
        Sign In
      </button>

      <!-- Support Contact -->
      <p class="mt-4 text-center text-sm text-gray-500">
        * หากพบปัญหา กรุณา ติดต่อ 087-789-0708 *
      </p>

      <!-- Error Message -->
      <p v-if="message" class="mt-4 text-center text-sm text-red-600">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .max-w-md {
    width: 100%;
  }
}
</style>
