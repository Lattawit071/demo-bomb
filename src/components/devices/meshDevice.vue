<template>
  <div class="mb-16">
    <Header />
    <div class="max-w-4xl p-6">
      <div class="mt-6 text-center">
        <p class="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
          Mesh WiFi
        </p>
      </div>
      <div class="flex justify-center items-center mt-5">
        <img src="/1.jpg" alt="Product" class="w-1/5" />
      </div>

      <p class="mt-6 text-lg sm:text-xl font-bold">โปรโมชั่นทั่วไป</p>

      <div class="flex gap-4 mt-6 justify-center">
        <div
          class="border-2 border-red-700 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-white w-full sm:w-1/2 lg:w-1/3"
        >
          <div class="text-center">
            <p class="font-bold text-base sm:text-lg text-gray-700">
              ลูกค้าทรูออนไลน์
            </p>
          </div>
          <div class="mt-3 text-center text-base sm:text-lg text-gray-700">
            <p class="">ราคา</p>
            <div class="flex justify-center items-center mt-2">
              <p class="text-xl font-semibold text-red-500">599.-</p>
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
              ทรูออนไลน์ได้เปิดตัว
              <span class="font-semibold">"TrueMesh WiFi"</span>
              ซึ่งเป็นระบบ Mesh WiFi ที่ใช้เทคโนโลยีล่าสุด
              มอบการเชื่อมต่อที่เสถียรและครอบคลุมพื้นที่ในบ้านได้อย่างทั่วถึง
              รองรับการใช้งานพร้อมกันหลายอุปกรณ์
              และสามารถปรับขยายได้ตามความต้องการของผู้ใช้
            </p>
            <p>
              ลูกค้าใหม่สามารถสมัครแพ็กเกจเน็ตบ้านไฟเบอร์ความเร็ว
              <span class="font-semibold">1 Gbps</span>
              เริ่มต้นที่
              <span class="font-semibold">899 บาทต่อเดือน</span>
              พร้อมรับฟรีชุด TrueMesh WiFi โดยโปรโมชั่นนี้มีถึงวันที่
              <span class="font-semibold">31 ธันวาคม 2568</span>
            </p>
            <p>
              นอกจากนี้ TrueMesh WiFi ยังรองรับการใช้งานภายในบ้านขนาดใหญ่
              ด้วยการติดตั้งตัวเสริม WiFi Mesh เพื่อขยายสัญญาณในทุกมุมของบ้าน
              ทำให้คุณสามารถเชื่อมต่ออินเทอร์เน็ตได้อย่างราบรื่น
            </p>
            <p>
              สำหรับข้อมูลเพิ่มเติมและการสมัครแพ็กเกจ
              สามารถติดต่อทรูช็อปหรือเยี่ยมชมเว็บไซต์ของทรูออนไลน์
            </p>
          </div>
        </div>

        <div
          v-if="activeTab === 'script'"
          class="p-4 rounded-lg shadow-md space-y-4"
        >
          <p class="text-gray-700 text-center">
            อุปกรณ์เสริมกระจายสัญญาณ WiFi ครอบคลุมทุกตารางเมตร
            ให้คุณเล่นเน็ตได้ทุกมุม แรงทุกจุด หมดปัญหาจุดอับสัญญาณภายในบ้าน
            ติดตั้งง่าย ไม่ต้องเดินสาย LAN Mesh WiFi ทำงานเชื่อมโยงแบบใยแมงมุม
            เสมือนเครือข่ายเน็ตเวิร์คขนาดใหญ่
            ที่ค้นหาอุปกรณ์ในเน็ตเวิร์คเดียวกันแบบอัตโนมัติ
            เพื่อการเชื่อมต่อที่สมบูรณ์แบบ
            ให้คุณใช้เน็ตบ้านได้อย่างเต็มประสิทธิภาพยิ่งกว่าเดิม
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
    price: "599",
    speed: "500/500 Mbps",
    speed2: "UP 700/700Mbps 24เดือน",
    images: [
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
      {
        src: "/1.jpg",
        text: "Mesh WiFi",
        w: 40,
        h: 40,
      },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/11.png", text: "นาน24ชั่วโมง", w: 50, h: 50 },
      { src: "/blank.png", text: "", w: 10, h: 10 },
      { src: "/12.png", text: "นาน24ชั่วโมง", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 10, h: 10 },
      { src: "/13.png", text: "ประกันที่อยู่อาศัย24เดือน", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 10, h: 10 },
      { src: "/14.png", text: "ประกันชีวิต24เดือน", w: 70, h: 50 },
    ],
  },
  {
    name: "โปรโมชั่น",
    price: "699",
    speed: "500/500 Mbps",
    speed2: "UP 700/700Mbps 24เดือน",
    images: [
      { src: "/2.jpg", text: "กล่องทรูไอดี ทีวี ", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      { src: "/pic2.png", text: "20 GB", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      {
        src: "/3.jpg",
        text: "กล้อง cctv 1ตัว cloud ดูย้อนหลัง 7วัน",
        w: 40,
        h: 40,
      },
      {
        src: "/1.jpg",
        text: "Mesh WiFi",
        w: 40,
        h: 40,
      },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/11.png", text: "นาน24ชั่วโมง", w: 50, h: 50 },
      { src: "/blank.png", text: "", w: 10, h: 10 },
      { src: "/12.png", text: "นาน24ชั่วโมง", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 10, h: 10 },
      { src: "/15.png", text: "ประกันที่อยู่อาศัย24เดือน", w: 70, h: 50 },
    ],
  },
  {
    name: "โปรโมชั่น",
    price: "799",
    speed: "1000/500 Mbps",
    speed2: "UP 1000/1000Mbps 24เดือน",
    images: [
      { src: "/2.jpg", text: "กล่องทรูไอดี ทีวี ", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      { src: "/pic2.png", text: "20 GB", w: 70, h: 50 },
      { src: "/blank.png", text: "+", w: 30, h: 40 },
      {
        src: "/3.jpg",
        text: "กล้อง cctv 1ตัว cloud ดูย้อนหลัง 7วัน",
        w: 40,
        h: 40,
      },
      {
        src: "/1.jpg",
        text: "Mesh WiFi",
        w: 40,
        h: 40,
      },
      { src: "/blank.png", text: "", w: 70, h: 50 },
      { src: "/11.png", text: "นาน24ชั่วโมง", w: 50, h: 50 },
      { src: "/blank.png", text: "", w: 10, h: 10 },
      { src: "/12.png", text: "นาน24ชั่วโมง", w: 70, h: 50 },
      { src: "/blank.png", text: "", w: 10, h: 10 },
      { src: "/15.png", text: "ประกันที่อยู่อาศัย24เดือน", w: 70, h: 50 },
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
