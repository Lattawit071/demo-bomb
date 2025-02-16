<template>
  <div>
    <div class="mx-2 mt-3">
      <div class="p-3 bg-gray-50 flex justify-between items-center">
        <div
          class="search-this flex items-center justify-between w-full bg-white border border-gray-300 rounded-2xl px-3 py-2 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300"
        >
          <div class="flex items-center space-x-2">
            <img src="/search1.png" class="w-4 h-4" />
            <p class="text-gray-600 font-medium cursor-pointer">โปรเน็ต</p>
          </div>
          <div class="flex items-center space-x-2">
            <div><img src="/audio.png" class="w-4 h-4 cursor-pointer" /></div>
            <div><img src="/camera.png" class="w-4 h-4 cursor-pointer" /></div>
          </div>
        </div>
        <div class="flex items-center space-x-4 ml-3">
          <div class=""><p>ไทย</p></div>
          <img src="/more.png" class="w-4 h-4 cursor-pointer mr-3" />
        </div>
      </div>

      <!-- Div ที่จะซ่อน -->
      <div
        v-if="!isLoading && !isLoggedIn"
        class="kuy p-4 flex justify-between items-center text-sm border-b-2 border-gray-200 tttt"
      >
        <div>
          <p class="text-gray-700">มองหาสิทธิพิเศษอยู่ใช่ไหม?</p>
          <p class="font-bold text-gray-900">เข้าสู่ระบบเลย!</p>
        </div>
        <div>
          <button
            @click="handleLogin"
            class="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition duration-300"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>

      <!-- Loading effect -->
      <div v-if="isLoading" class="flex justify-center items-center p-4">
        <p class="text-gray-600">กำลังโหลด ... โปรดรอ</p>
      </div>

      <!-- Div ใหม่เมื่อเข้าสู่ระบบ -->
      <div v-if="isLoggedIn" class="border">
        <div class="flex border">
          <div>
            <p>ทรู5G รายเดือน</p>
            <p>0912345678</p>
          </div>
          <div><p>เปลี่ยนหมายเลข</p></div>
        </div>
        <div>
          <p>ทรู5G รายเดือน</p>
          <p>0912345678</p>

          <div><p>เปลี่ยนหมายเลข</p></div>
        </div>
      </div>

      <button
        @click="resetState"
        class="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
      >
        ย้อนกลับ
      </button>
    </div>
    <CustomerFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomerFooter from "./CustomerFooter.vue";

const isLoading = ref(false);
const isLoggedIn = ref(false);

const handleLogin = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    isLoggedIn.value = true;
  }, 2000); // จำลองเวลาโหลด 2 วินาที
};

const resetState = () => {
  isLoading.value = false;
  isLoggedIn.value = false;
};
</script>

<style scoped></style>
