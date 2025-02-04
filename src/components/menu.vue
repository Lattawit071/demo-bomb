<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// ฟังก์ชันสำหรับเปลี่ยนเส้นทางไปยังหน้าต่างๆ
const goToSale = () => {
  router.push("/sale");
};

const goToService = () => {
  router.push("/service");
};

const goToRetention = () => {
  router.push("/retention");
};

// ฟังก์ชันย้อนกลับไปหน้า login
const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6"
  >
    <div class="w-full max-w-sm">
      <button
        @click="goBack"
        class="absolute top-4 left-4 text-white text-sm bg-transparent hover:bg-white hover:text-blue-600 transition font-semibold p-2 rounded-md border-2 border-white"
      >
        Back
      </button>
      <div class="w-full space-y-4 mt-16">
        <button
          @click="goToSale"
          class="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition font-semibold"
        >
          Sale
        </button>
        <button
          @click="goToService"
          class="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition font-semibold"
        >
          Service
        </button>
        <button
          @click="goToRetention"
          class="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition font-semibold"
        >
          Retention
        </button>
      </div>
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
