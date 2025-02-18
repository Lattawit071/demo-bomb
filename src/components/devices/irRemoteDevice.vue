<template>
  <div class="mb-16">
    <Header />
    <div class="max-w-4xl p-6">
      <div class="mt-6 text-center">
        <p class="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
          TrueLivingTECH Zigbee Mini Hub
        </p>
        <p class="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
          (Gateway)
        </p>
      </div>
      <div class="flex justify-center items-center mt-5">
        <img src="/5.jpg" alt="Product" class="w-2/5" />
      </div>

      <p class="mt-6 text-lg sm:text-xl font-bold">โปรชั่นทั่วไป</p>

      <div class="flex gap-4 mt-6 justify-center">
        <div
          class="border-2 border-red-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-white w-full sm:w-1/2 lg:w-1/3"
        >
          <div class="text-center">
            <p class="font-bold text-base sm:text-lg text-gray-700">
              เครื่องเปล่า
            </p>
          </div>
          <div class="mt-3 text-center text-base sm:text-lg text-gray-700">
            <p class="">ราคา</p>
            <div class="flex justify-center items-center mt-2">
              <p class="text-xl font-semibold text-red-500">199.-</p>
              <p class="ml-2 text-sm sm:text-base">เดือน</p>
              <div class="ml-4">
                <button
                  class="w-10 h-10 flex justify-center items-center border-2 border-red-700 rounded-full transition-all duration-300 transform hover:scale-110"
                  :class="{
                    'bg-red-700': isCheckedRight,
                    'bg-white': !isCheckedRight,
                  }"
                  @click="toggleCheckRight"
                >
                  <span
                    v-if="isCheckedRight"
                    class="text-white font-bold text-xl"
                    >✔</span
                  >
                  <span v-else class="text-red-700 font-bold text-xl">✔</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isCheckedRight" class="mt-6 items-center space-y-4">
        <div class="justify-center flex">
          <button
            class="bg-red-700 text-white px-8 py-3 rounded-lg shadow-xl hover:bg-red-800 transition-all duration-300 text-lg sm:text-xl"
          >
            ซื้อเลย
          </button>
        </div>
      </div>

      <div class="mt-8 border border-gray-300 rounded-lg shadow-md bg-white">
        <div class="flex">
          <button
            @click="activeTab = 'details'"
            :class="
              activeTab === 'details'
                ? 'bg-white text-red-700'
                : 'bg-gray-200 text-gray-700'
            "
            class="flex-1 px-6 py-3 text-center font-bold transition-all duration-300 border-b-2 border-gray-300 text-sm sm:text-base"
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
            class="flex-1 px-6 py-3 text-center font-bold transition-all duration-300 border-b-2 border-gray-300 text-sm sm:text-base"
          >
            script
          </button>
        </div>

        <div class="bg-white flex justify-between items-center"></div>

        <div
          v-if="activeTab === 'details'"
          class="p-4 rounded-lg shadow-md space-y-4"
        >
          <div class="text-sm text-gray-700 leading-relaxed space-y-4">
            <p>
              TrueLivingTECH ได้เปิดตัว
              <span class="font-semibold"
                >"TrueLivingTECH Zigbee Mini Hub"</span
              >
              ซึ่งเป็นอุปกรณ์ที่ใช้เทคโนโลยี Zigbee 3.0 ใหม่ล่าสุด
              รองรับการเชื่อมต่อกับอุปกรณ์สมาร์ทโฮมได้สูงสุดถึง
              <span class="font-semibold">32 อุปกรณ์</span>
              มาพร้อมการเชื่อมต่อไร้สายผ่าน Wi-Fi 2.4GHz และ Zigbee 3.0
              เพื่อความเสถียรในการเชื่อมต่อและการควบคุมที่รวดเร็ว
            </p>
            <p>
              ลูกค้าที่สนใจสามารถซื้อ TrueLivingTECH Zigbee Mini Hub ได้ในราคา
              <span class="font-semibold">1,490 บาท</span>
              พร้อมรับประกันสินค้า 1 ปี
            </p>
            <p>
              นอกจากนี้ ตัวอุปกรณ์ยังรองรับการใช้งานร่วมกับอุปกรณ์สมาร์ทโฮม
              จากหลายแบรนด์ เพื่อให้คุณสามารถควบคุมและตรวจสอบสถานะอุปกรณ์ต่าง ๆ
              ผ่านแอปพลิเคชันบนสมาร์ทโฟนได้อย่างสะดวกสบาย
            </p>
            <p>
              สำหรับข้อมูลเพิ่มเติมและการซื้อสินค้าสามารถติดต่อ TrueLivingTECH
              หรือเยี่ยมชมเว็บไซต์ของเรา
            </p>
          </div>
        </div>

        <div
          v-if="activeTab === 'script'"
          class="p-4 rounded-lg shadow-md space-y-4"
        >
          <p class="text-gray-700 text-center">
            GATEWAY ZIGBEE MINI HUB - Black ศูนย์กลางการเชื่อมต่อของ อุปกรณ์
            Smart Home ผ่านสัญญาณระบบ Zigbee ใช้งานร่วมกับอุปกรณ์ sensor
            ระบบสัญญาณ Zigbee เช่น Door/Window Sensor, Motion Sensor เป็นต้น
            ช่วยให้คุณควบคุมอุปกรณ์ไฟฟ้า
            และระบบรักษาความปลอดภัยภายในบ้านได้อย่างง่ายดาย
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../Header.vue";
import { ref } from "vue";

const promotions = [
  {
    name: "โปรโมชั่น",
    price: "900",
    speed: "100/500 Mbps",
    images: [
      { src: "/pic1.png", text: "1เครื่อง", w: 70, h: 70 },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/2.jpg", text: "กล่องทรูไอดี ทีวี ", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      { src: "/pic2.png", text: "10 GB", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      {
        src: "/3.jpg",
        text: "กล้อง cctv 1ตัว cloud ดูย้อนหลัง 7วัน",
        w: 40,
        h: 40,
      },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/10.png", text: "", w: 50, h: 50 },
      { src: "/8.jpg", text: "", w: 70, h: 50 },
      { src: "/9.jpg", text: "", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/pic3.png", text: "", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 30, h: 50 },
      { src: "/pic4.png", text: "", w: 50, h: 50 },
    ],
  },
  {
    name: "โปรโมชั่น",
    price: "900",
    speed: "1000/500 Mbps",

    images: [
      { src: "/pic1.png", text: "2เครื่อง", w: 70, h: 70 },
      { src: "/blank.png", text: "", w: 70, h: 50 },

      { src: "/pic2.png", text: "10 GB", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      {
        src: "/3.jpg",
        text: "กล้อง cctv 1ตัว cloud ดูย้อนหลัง 7วัน",
        w: 40,
        h: 40,
      },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/10.png", text: "", w: 50, h: 50 },
      { src: "/8.jpg", text: "", w: 70, h: 50 },
      { src: "/9.jpg", text: "", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/pic3.png", text: "", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 30, h: 50 },
      { src: "/pic4.png", text: "", w: 50, h: 50 },
    ],
  },
  {
    name: "โปรโมชั่น",
    price: "1000",
    speed: "1000/500 Mbps",

    images: [
      { src: "/pic1.png", text: "2เครื่อง", w: 70, h: 70 },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/2.jpg", text: "กล่องทรูไอดี ทีวี ", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      { src: "/pic2.png", text: "10 GB", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      {
        src: "/3.jpg",
        text: "กล้อง cctv 1ตัว cloud ดูย้อนหลัง 7วัน",
        w: 40,
        h: 40,
      },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/10.png", text: "", w: 50, h: 50 },
      { src: "/8.jpg", text: "", w: 70, h: 50 },
      { src: "/9.jpg", text: "", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/pic3.png", text: "", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 30, h: 50 },
      { src: "/pic4.png", text: "", w: 50, h: 50 },
    ],
  },
];

const isCheckedLeft = ref(false);
const isCheckedRight = ref(false);
const activeOptionRight = ref(null);
const activeTab = ref("details");

const toggleCheckLeft = () => {
  isCheckedLeft.value = !isCheckedLeft.value;
  if (isCheckedLeft.value) {
    isCheckedRight.value = false;
    activeOptionRight.value = null;
  }
};

const toggleCheckRight = () => {
  isCheckedRight.value = !isCheckedRight.value;
  if (isCheckedRight.value) {
    isCheckedLeft.value = false;
    activeOptionRight.value = null;
  }
};

const setActiveRight = (index) => {
  activeOptionRight.value = activeOptionRight.value === index ? null : index;
};
</script>

<style scoped></style>
