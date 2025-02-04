<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authenticate } from "/src/js/userpass";

const username = ref("12345678");
const password = ref("12345678");
const message = ref("");
const router = useRouter();

const login = () => {
  if (authenticate(username.value, password.value)) {
    router.push("/menu");
  } else {
    message.value = "Invalid username or password. Please try again.";
  }
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6"
  >
    <h1 class="text-4xl font-bold text-white mb-6">SSR</h1>
    <div class="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center text-gray-700 mb-4">
        Login
      </h2>
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button
        @click="login"
        class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold"
      >
        Login
      </button>
      <p v-if="message" class="mt-4 text-center text-sm text-red-600">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .max-w-sm {
    width: 100%;
  }
}
</style>
