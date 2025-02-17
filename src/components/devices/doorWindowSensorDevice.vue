<template>
  <div class="mb-70">
    <Header />
    <div class="mx-auto max-w-4xl p-4">
      <!-- รูปภาพด้านบน -->
      <div class="flex justify-center items-center mt-10">
        <img src="/7.jpg" alt="Product" class="rounded-lg shadow-lg w-3/5" />
      </div>

      <!-- ชื่อสินค้า -->
      <div class="mt-6 text-center">
        <p class="text-lg font-semibold text-gray-800">
          TrueLivingTECH Door Windows Sensor เซนเซอร์อัจฉริยะตรวจจับผู้บุกรุก
        </p>
      </div>

      <!-- หัวข้อโปรโมชัน -->
      <p class="mt-6 text-lg font-bold text-gray-900">โปรชั่นทั่วไป</p>

      <!-- การ์ดสินค้า -->
      <div class="flex gap-6 mt-6 justify-center">
        <div
          class="border-2 border-red-700 rounded-lg p-5 max-w-xs shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <p class="text-center text-lg font-bold mb-3 text-gray-800">
            เครื่องเปล่า
          </p>
          <p class="text-gray-600 text-center">แพ็คแกจ</p>
          <div class="flex justify-between items-center mt-4">
            <p class="text-red-700 font-bold text-xl">490.-</p>
            <button
              class="w-8 h-8 flex justify-center items-center border-2 border-red-700 rounded-full"
              :class="{ 'bg-red-700': isCheckedRight }"
              @click="toggleCheckRight"
            >
              <span v-if="isCheckedRight" class="text-white font-bold text-lg"
                >✔</span
              >
              <span v-else class="text-red-700 font-bold text-lg">✔</span>
            </button>
          </div>
        </div>
      </div>

      <!-- แท็บแสดงเนื้อหา -->
      <div
        v-if="isCheckedRight"
        class="mt-8 border border-gray-300 rounded-lg shadow-md"
      >
        <div class="flex">
          <button
            @click="activeTab = 'details'"
            :class="
              activeTab === 'details'
                ? 'bg-white text-red-700'
                : 'bg-gray-200 text-gray-700'
            "
            class="flex-1 px-6 py-3 text-center font-bold transition-all duration-300 border-b-2 border-gray-300"
          >
            รายละเอียดสินค้า
          </button>
          <button
            @click="activeTab = 'script'"
            :class="
              activeTab === 'script'
                ? 'bg-white text-red-700'
                : 'bg-gray-200 text-gray-700'
            "
            class="flex-1 px-6 py-3 text-center font-bold transition-all duration-300 border-b-2 border-gray-300"
          >
            สคริป
          </button>
        </div>

        <!-- เนื้อหาแท็บ -->
        <div class="p-6 bg-white">
          <div v-if="activeTab === 'details'">
            <p class="text-gray-700 leading-relaxed">
              คุณสมบัติ • Door Windows Sensor เซนเซอร์อัจฉริยะตรวจจับผู้บุกรุก •
              เชื่อมต่อผ่านสัญญาณไร้สาย Zigbee เท่านั้น •
              อุปกรณ์ต้องใช้งานร่วมกับ Zigbee Mini Hub (Gateway)
              เพื่อเป็นตัวกลางในการเชื่อมต่อ ...
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <img
                src="/detail1.jpg"
                alt="Detail 1"
                class="rounded-lg shadow-md"
              />
              <img
                src="/detail2.jpg"
                alt="Detail 2"
                class="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div v-else-if="activeTab === 'script'">
            <p class="text-gray-700 leading-relaxed">
              หน้าที่การทำงานและสคริป ตรวจจับการเปิด/ปิด ประตูหรือหน้าต่าง
              หลังจากตรวจจับได้แล้ว อุปกรณ์จะทำแจ้งเตือนไปยังสมาร์ทโฟนของคุณ ...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../Header.vue";
import { ref, computed } from "vue";

// สถานะของกล่องด้านซ้าย
const isCheckedLeft = ref(false);
const toggleCheckLeft = () => {
  isCheckedLeft.value = !isCheckedLeft.value;
  if (isCheckedLeft.value) {
    isCheckedRight.value = false; // ปิดปุ่มขวาเมื่อกดปุ่มซ้าย
    isCheckedBox1.value = false; // ปิด checkbox อื่น ๆ เมื่อกดปุ่มซ้าย
    isCheckedBox2.value = false;
    isCheckedBox3.value = false;
  }
};

// สถานะของกล่องด้านขวา
const isCheckedRight = ref(true);
const activeTab = ref("details");
const toggleCheckRight = () => {
  isCheckedRight.value = !isCheckedRight.value;
};

// สถานะของปุ่มติ๊กถูกภายในกล่อง
const isCheckedBox1 = ref(false);
const toggleCheckBox1 = () => {
  isCheckedBox1.value = !isCheckedBox1.value;
  // ปิดกล่องอื่น ๆ เมื่อเลือก checkbox1
  if (isCheckedBox1.value) {
    isCheckedBox2.value = false;
    isCheckedBox3.value = false;
  }
};

const isCheckedBox2 = ref(false);
const toggleCheckBox2 = () => {
  isCheckedBox2.value = !isCheckedBox2.value;
  // ปิดกล่องอื่น ๆ เมื่อเลือก checkbox2
  if (isCheckedBox2.value) {
    isCheckedBox1.value = false;
    isCheckedBox3.value = false;
  }
};

const isCheckedBox3 = ref(false);
const toggleCheckBox3 = () => {
  isCheckedBox3.value = !isCheckedBox3.value;
  // ปิดกล่องอื่น ๆ เมื่อเลือก checkbox3
  if (isCheckedBox3.value) {
    isCheckedBox1.value = false;
    isCheckedBox2.value = false;
  }
};

// Computed property to check if any checkbox is checked
const isAnyChecked = computed(() => {
  return isCheckedBox1.value || isCheckedBox2.value || isCheckedBox3.value;
});
</script>
