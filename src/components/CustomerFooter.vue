<template>
  <footer
    class="fixed bottom-0 left-0 right-0 bg-gray-100 border-gray-200 border-t py-2"
  >
    <div class="flex justify-around items-center">
      <router-link
        to="/customer/0912345678"
        class="flex flex-col items-center"
        :replace="true"
      >
        <img src="/home.png" alt="หน้าหลัก" class="w-8 h-8 mb-1" />
        <span class="text-sm text-gray-700">หน้าหลัก</span>
      </router-link>
      <div class="flex flex-col items-center">
        <img src="/package.png" alt="แพ็คเกจ" class="w-8 h-8 mb-1" />
        <span class="text-sm text-gray-700">แพ็คเกจ</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="/heart.png" alt="สิทธิพิเศษ" class="w-8 h-8 mb-1" />
        <span class="text-sm text-gray-700">สิทธิพิเศษ</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="/shop.png" alt="ไลฟ์สไตล์" class="w-8 h-8 mb-1" />
        <span class="text-sm text-gray-700">ไลฟ์สไตล์</span>
      </div>
      <div class="flex flex-col items-center">
        <img src="/mali.png" alt="คุยกับมะลิ" class="w-8 h-8 mb-1" />
        <span class="text-sm text-gray-700">คุยกับมะลิ</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// ไม่มีฟังก์ชันเสริมในที่นี้
</script>

<style scoped>
/* ไม่จำเป็นต้องมี CSS เพิ่มเติม เพราะใช้ Tailwind */
</style>
