<template>
  <div class="mb-70">
    <Header />
    <div class="mx-2">
      <div class="pic flex justify-center items-center mt-10">
        <img src="/3.jpg" class="w-1/4" />
      </div>
      <div class="mt-4">
        <p class="p-2">โปรชั่นทั่วไป</p>
        <div class="flex gap-8 justify-between">
          <!-- กล่องโปรโมชั่น ทรูออนไลน์ -->
          <div
            class="border-2 border-red-700 rounded-md p-2 text-sm max-w-xs mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <p class="text-center font-bold text-md mb-4">ลูกค้า ทรูออนไลน์</p>
            <p class="text-center mb-3 text-gray-600">แพ็คแกจ</p>

            <div class="flex justify-between mb-3">
              <div class="flex">
                <p class="text-red-700 font-bold text-xl mr-1">99.-</p>
                <p class="text-sm pt-2">เดือน</p>
              </div>
              <button
                class="w-6 h-6 flex justify-center items-center border-2 border-red-700 rounded-full ml-2"
                :class="{ 'bg-red-700': isCheckedLeft }"
                @click="toggleCheckLeft"
              >
                <span v-if="isCheckedLeft" class="text-white font-bold">✔</span>
                <span v-else class="text-red-700">✔</span>
              </button>
            </div>
          </div>

          <!-- กล่องเครื่องเปล่า -->
          <div
            class="border-2 border-red-700 rounded-md p-6 text-sm max-w-xs mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <p class="text-center font-bold text-md mb-4 text-gray-800">
              เครื่องเปล่า
            </p>
            <p class="text-center mb-3 text-gray-600">แพ็คแกจ</p>

            <div class="flex justify-between mb-3">
              <div class="flex">
                <p class="text-red-700 font-bold text-xl mr-1">990.-</p>
                <p class="text-sm pt-2">เดือน</p>
              </div>
              <button
                class="w-6 h-6 flex ml-2 justify-center items-center border-2 border-red-700 rounded-full"
                :class="{ 'bg-red-700': isCheckedRight }"
                @click="toggleCheckRight"
              >
                <span v-if="isCheckedRight" class="text-white font-bold"
                  >✔</span
                >
                <span v-else class="text-red-700">✔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- แสดงเนื้อหาที่ถูกเลือกจากปุ่มด้านซ้าย -->
        <div
          v-if="isCheckedLeft"
          class="border border-gray-200 p-1 rounded-md text-xs mt-2"
        >
          <div>
            <!-- กล่อง checkbox 1 -->
            <div class="flex box1">
              <button
                class="w-6 h-6 flex mr-1 justify-center items-center border-2 border-red-700 rounded-full ml-2"
                :class="{ 'bg-red-700': isCheckedBox1 }"
                @click="toggleCheckBox1"
              >
                <span v-if="isCheckedBox1" class="text-white font-bold">✔</span>
                <span v-else class="text-red-700">✔</span>
              </button>
              <p>บริการ CCTV Cloud Service ดูย้อนหลัง 7 วัน</p>
              <p class="font-bold text-red-500 ml-1">99.-</p>
            </div>
            <div
              v-if="isCheckedBox1"
              class="border-gray-400 border rounded-lg mx-3 bg-gray-200 text-gray-600 mt-1"
            >
              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">ฟรี ! กล้อง CCTV มูลค่า 990 บาท</p>
              </div>

              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">สัญญา 18 เดือน</p>
              </div>
              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">
                  สำหรับลูกค้าปัจจุบันที่ใช้งานมากกว่าหรือเท่ากับ 90 วัน
                </p>
              </div>
            </div>

            <!-- กล่อง checkbox 2 -->
            <div class="flex box2 mt-2">
              <button
                class="w-6 h-6 flex mr-1 justify-center items-center border-2 border-red-700 rounded-full ml-2"
                :class="{ 'bg-red-700': isCheckedBox2 }"
                @click="toggleCheckBox2"
              >
                <span v-if="isCheckedBox2" class="text-white font-bold">✔</span>
                <span v-else class="text-red-700">✔</span>
              </button>
              <p>บริการ CCTV Cloud Service ดูย้อนหลัง 7 วัน</p>
              <p class="font-bold text-red-500 ml-1">129.-</p>
            </div>
            <div
              v-if="isCheckedBox2"
              class="border-gray-400 border rounded-lg mx-3 bg-gray-200 text-gray-600 mt-1"
            >
              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">ฟรี ! กล้อง CCTV มูลค่า 990 บาท</p>
              </div>

              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">ฟรี ! ประกันภัยที่อยู่อาศัย นาน 24 เดือน</p>
              </div>
              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">สัญญา 24 เดือน</p>
              </div>
              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">
                  1 หมายเลขทรูออนไลน์ ต่อ 1 สิทธิประกันภัยที่อยู่อาศัย
                </p>
              </div>
              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">
                  สำหรับลูกค้าปัจจุบันที่ใช้งานมากกว่าหรือเท่ากับ 90 วัน
                </p>
              </div>
            </div>

            <!-- กล่อง checkbox 3 -->
            <div class="flex box3 mt-2">
              <button
                class="w-6 h-6 flex mr-1 justify-center items-center border-2 border-red-700 rounded-full ml-2"
                :class="{ 'bg-red-700': isCheckedBox3 }"
                @click="toggleCheckBox3"
              >
                <span v-if="isCheckedBox3" class="text-white font-bold">✔</span>
                <span v-else class="text-red-700">✔</span>
              </button>
              <p>บริการ CCTV Cloud Service ดูย้อนหลัง 7 วัน</p>
              <p class="font-bold text-red-500 ml-1">159.-</p>
            </div>
            <div
              v-if="isCheckedBox3"
              class="border-gray-400 border rounded-lg mx-3 bg-gray-200 text-gray-600 mt-1"
            >
              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">ฟรี ! กล้อง CCTV มูลค่า 990 บาท</p>
              </div>

              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">สัญญา 18 เดือน</p>
              </div>
              <div class="flex">
                <div class="w-1 h-1 bg-black rounded-full mt-2 ml-2"></div>
                <p class="ml-2">
                  สำหรับลูกค้าปัจจุบันที่ใช้งานมากกว่าหรือเท่ากับ 90 วัน
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="isCheckedRight || (isCheckedLeft && isAnyChecked)"
          class="flex justify-center mt-4"
        >
          <p
            class="font-bold text-white bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg px-4 py-2 cursor-pointer hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 transition-all duration-300"
          >
            ซื้อเลย
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
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
const isCheckedRight = ref(false);
const toggleCheckRight = () => {
  isCheckedRight.value = !isCheckedRight.value;
  if (isCheckedRight.value) {
    isCheckedLeft.value = false; // ปิดปุ่มซ้ายเมื่อกดปุ่มขวา
    isCheckedBox1.value = false; // ปิด checkbox อื่น ๆ เมื่อกดปุ่มขวา
    isCheckedBox2.value = false;
    isCheckedBox3.value = false;
  }
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
