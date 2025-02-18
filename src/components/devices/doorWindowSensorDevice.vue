<template>
  <div class="mb-16">
    <Header />
    <div class="max-w-4xl p-6">
      <div class="mt-6 text-center">
        <p class="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
          Smart Door & Window Sensor
        </p>
        <p class="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
          เซ็นเซอร์ตรวจจับผู้บุกรุก
        </p>
      </div>
      <div class="flex justify-center items-center mt-5">
        <img src="/10.png" alt="Product" class="w-1/5" />
      </div>

      <p class="mt-6 text-lg sm:text-xl font-bold">โปรชั่นทั่วไป</p>

      <div class="flex gap-4 mt-6 justify-center">
        <!-- กล่องแรก -->
        <div
          class="border-2 border-red-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-white w-full sm:w-1/2 lg:w-1/3"
        >
          <div class="text-center">
            <p class="font-bold text-base sm:text-lg text-gray-700">
              ลูกค้าทรูออนไลน์
            </p>
          </div>
          <!-- ข้อความโปรโมชั่น -->
          <div class="mt-3 text-center text-base sm:text-lg text-gray-700">
            <p class="">ราคา</p>
            <div class="flex justify-center items-center mt-2">
              <p class="text-xl font-semibold text-red-500">900.-</p>
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

        <!-- กล่องใหม่ -->
        <div
          class="border-2 border-red-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-white w-full sm:w-1/2 lg:w-1/3"
        >
          <div class="text-center">
            <p class="font-bold text-base sm:text-lg text-gray-700">
              เครื่องเปล่า
            </p>
          </div>
          <!-- ข้อความโปรโมชั่น -->
          <div class="mt-3 text-center text-base sm:text-lg text-gray-700">
            <p class="">ราคา</p>
            <div class="flex justify-center items-center mt-2">
              <p class="text-xl font-semibold text-red-500">249.-</p>
              <p class="ml-2 text-sm sm:text-base">บาท</p>
              <div class="ml-4">
                <button
                  class="w-10 h-10 flex justify-center items-center border-2 border-red-700 rounded-full transition-all duration-300 transform hover:scale-110"
                  :class="{
                    'bg-red-700': isCheckedLeft,
                    'bg-white': !isCheckedLeft,
                  }"
                  @click="toggleCheckLeft"
                >
                  <span
                    v-if="isCheckedLeft"
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

      <div v-if="isCheckedRight" class="flex mt-5 ml-2 p-2">
        <div>
          <div class="space-y-4">
            <div v-for="(promotion, index) in promotions" :key="index">
              <div
                class="flex items-center space-x-5 border-b border-gray-200 py-4"
              >
                <button
                  class="w-10 h-10 flex justify-center items-center border-2 border-red-700 rounded-md rounded-full"
                  :class="{
                    'bg-red-700 text-white': activeOptionRight === index,
                    'bg-white text-red-700': activeOptionRight !== index,
                  }"
                  @click="setActiveRight(index)"
                >
                  ✔
                </button>
                <div class="sm:text-base font-semibold text-gray-800">
                  {{ promotion.name }}
                </div>
                <div class="text-red-500 font-semibold">
                  {{ promotion.price }}
                </div>
                <div class="text-gray-700 font-medium">
                  {{ promotion.speed }}
                </div>
                <div class="text-red-500 font-medium">
                  {{ promotion.speed2 }}
                </div>
              </div>

              <div
                v-if="activeOptionRight === index"
                class="mt-2 border-2 border-red-700 rounded-lg p-3"
              >
                <div class="flex mt-4 overflow-x-auto">
                  <div
                    v-for="(img, imgIndex) in promotion.images"
                    :key="imgIndex"
                    class="flex flex-col items-center justify-center shrink-0"
                  >
                    <img
                      :src="img.src"
                      :alt="img.text"
                      :width="img.w"
                      :height="img.h"
                      class=""
                    />
                    <p
                      class="text-xs font-semibold mt-2 break-words max-w-16 text-center"
                    >
                      {{ img.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="isCheckedLeft || (isCheckedRight && activeOptionRight !== null)"
        class="mt-6 items-center space-y-4"
      >
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
              <span class="font-semibold">"Smart Door/Window Sensor"</span>
              ซึ่งเป็นเซ็นเซอร์อัจฉริยะที่ใช้เทคโนโลยี Zigbee
              ช่วยในการตรวจจับการเปิด-ปิดของประตูหรือหน้าต่าง
              เพื่อเพิ่มความปลอดภัยในบ้าน
              พร้อมทั้งรองรับการเชื่อมต่อกับอุปกรณ์สมาร์ทโฮมอื่น ๆ ผ่านแพลตฟอร์ม
              TrueLivingTECH
            </p>
            <p>
              ลูกค้าสามารถซื้อ Smart Door/Window Sensor ได้ในราคา
              <span class="font-semibold">990 บาท</span>
              พร้อมรับประกันสินค้า 1 ปี
            </p>
            <p>
              เซ็นเซอร์นี้ยังมาพร้อมกับฟีเจอร์แจ้งเตือนทันทีผ่านแอปพลิเคชัน
              หากมีการเปิดหรือปิดประตูหรือหน้าต่าง
              สามารถควบคุมและตรวจสอบสถานะได้ ผ่านสมาร์ทโฟนทุกที่ทุกเวลา
            </p>
            <p>
              สำหรับข้อมูลเพิ่มเติมและการซื้อสินค้า สามารถติดต่อ TrueLivingTECH
              หรือเยี่ยมชมเว็บไซต์ของเรา
            </p>
          </div>
        </div>

        <div
          v-if="activeTab === 'script'"
          class="p-4 rounded-lg shadow-md space-y-4"
        >
          <p class="text-gray-700 text-center">
            ตรวจจับการ เปิด/ปิด ประตูหรือหน้าต่าง หลังจากตรวจจับได้แล้ว อุปกรณ์
            จะทำแจ้งเตือนไปผ่านไปยังสมาร์ทโฟนของคุณโดยทันทีผ่านแอปพลิเคชัน TrueX
            ช่วยแจ้งเตือนคุณหากผู้บุกรุกเปิดประตูหรือหน้าต่างภายในบ้านของ คุณ
            นอกจากนี้หากคุณเพิ่งออกจากบ้านและเผลอลืมไปว่าคุณปิดประ ตูและ
            หน้าต่างแล้วหรือยัง คุณสามารถตรวจสอบจากแอปพลิเคชันได้โดยตรง
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
    name: "โปรโมรชั่น",
    price: "900",
    speed: "1000/500 Mbps",
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
