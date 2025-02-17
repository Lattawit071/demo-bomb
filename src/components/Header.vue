<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { findPhone } from "@/js/phonedb"; // นำเข้า findPhone จาก phonedb.js

const route = useRoute();
const phoneId = route.params.phoneId; // ดึงค่า phoneId จาก URL

// ตัวแปรเก็บข้อมูลเบอร์โทร
const phoneDetails = ref({});

const fetchPhoneDetails = () => {
  const phoneData = findPhone(phoneId); // ใช้ฟังก์ชั่น findPhone
  if (phoneData) {
    phoneDetails.value = phoneData;
  } else {
    phoneDetails.value = { message: "ข้อมูลเบอร์โทรไม่พบ" }; // กรณีไม่พบข้อมูล
  }
};

const router = useRouter();

const menuOpen = ref(false);
const subMenuOpen = ref({ Opportunity: false, Feedback: false });
const toggleSubMenu = (menu) => {
  subMenuOpen.value[menu] = !subMenuOpen.value[menu];
};
const language = ref("ENG");
const toggleLanguage = () => {
  language.value = language.value === "ENG" ? "ไทย" : "ENG";
};

const goHome = () => {
  router.push("/"); // แก้ไขให้ไปที่หน้า login
};
</script>

<template>
  <div class="border-b-2 border-gray-300 shadow-md">
    <div class="flex items-center p-3 relative">
      <div @click="menuOpen = !menuOpen" class="cursor-pointer text-xl px-3">
        ☰
      </div>
      <div class="flex items-center space-x-2 flex-grow">
        <router-link to="/demo" class="flex gap-2">
          <p class="text-red-600 text-2xl font-bold uppercase">CRM</p>
          <p class="text-2xl font-semibold text-pink-400 ml-auto">Lite</p>
        </router-link>
      </div>
      <div class="flex ml-auto gap-3 pt-6">
        <div
          class="pt-1 px-2 border rounded-full flex items-center gap-2 bg-gray-200 ml-3 md:ml-0"
        >
          <img src="/emoji.png" class="h-4 w-4" />
          <p class="text-xs text-gray-700">พีระนาคิน ไวตระกูล</p>
        </div>
        <button @click="goHome" class="text-xs text-gray-700">
          <img src="/home.png" class="h-5 w-5" alt="Home" />
        </button>
      </div>
      <div
        v-if="menuOpen"
        class="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg border-r border-gray-200 transition-all transform duration-300 ease-in-out"
      >
        <div class="mt-7 px-6">
          <p class="text-base font-semibold">พีระนาคิน ไวตระกูล</p>
          <p class="text-gray-700 text-sm">12345678</p>
          <p class="text-gray-700 text-sm">TEAM_USER TS80000199</p>
          <div class="mt-2">
            <span
              class="px-4 py-1 bg-gray-200 rounded-full text-gray-700 text-sm"
              >PDS</span
            >
          </div>
        </div>
        <div class="border-t border-gray-300 my-4"></div>
        <div class="px-6 space-y-3">
          <div class="flex items-center space-x-3 cursor-pointer">
            <img src="/task.png" class="w-5 h-5" alt="Task" />
            <p class="text-gray-800 text-sm">My Task</p>
          </div>
          <div class="cursor-pointer" @click="toggleSubMenu('Opportunity')">
            <div class="flex items-center space-x-3">
              <img src="/bag.png" class="w-5 h-5" alt="Opportunity" />
              <p class="text-gray-800 text-sm">Opportunity</p>
              <span class="ml-auto">▼</span>
            </div>
            <div
              v-if="subMenuOpen.Opportunity"
              class="pl-8 mt-2 space-y-2 transition-all duration-300 ease-in-out"
            >
              <p class="text-gray-700 text-xs">Sub Menu 1</p>
              <p class="text-gray-700 text-xs">Sub Menu 2</p>
            </div>
          </div>
          <div class="cursor-pointer" @click="toggleSubMenu('Feedback')">
            <div class="flex items-center space-x-3">
              <img src="/feedback.png" class="w-5 h-5" alt="Feedback" />
              <p class="text-gray-800 text-sm">Feedback</p>
              <span class="ml-auto">▼</span>
            </div>
            <div
              v-if="subMenuOpen.Feedback"
              class="pl-8 mt-2 space-y-2 transition-all duration-300 ease-in-out"
            >
              <p class="text-gray-700 text-xs">Sub Menu 1</p>
              <p class="text-gray-700 text-xs">Sub Menu 2</p>
            </div>
          </div>
          <div class="flex items-center space-x-3 cursor-pointer">
            <img src="/people.png" class="w-5 h-5" alt="Prepaid Register" />
            <p class="text-gray-800 text-sm">Prepaid Register</p>
          </div>
          <div class="flex items-center space-x-3 cursor-pointer">
            <img src="/people.png" class="w-5 h-5" alt="Campaign" />
            <p class="text-gray-800 text-sm">Campaign</p>
          </div>
          <div class="flex items-center space-x-3 cursor-pointer">
            <img src="/people.png" class="w-5 h-5" alt="Check Owner Eligible" />
            <p class="text-gray-800 text-sm">Check Owner& Eligible</p>
          </div>
          <div class="flex items-center space-x-3 cursor-pointer">
            <img src="/logout.png" class="w-5 h-5" alt="Sign out" />
            <p class="text-gray-800 text-sm">Sign out</p>
          </div>
          <div class="flex items-center space-x-3 cursor-pointer">
            <img src="/language.png" class="w-5 h-5" alt="Language" />
            <label for="language-switch" class="text-gray-800 text-sm"
              >Language</label
            >
            <div class="ml-2">
              <button
                @click="toggleLanguage"
                class="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer transition-colors duration-300 ease-in-out"
              >
                <span
                  :class="{
                    'bg-green-500': language === 'ไทย',
                    'bg-gray-300': language === 'ENG',
                  }"
                  class="absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ease-in-out"
                  :style="{
                    transform:
                      language === 'ไทย' ? 'translateX(15px)' : 'translateX(0)',
                  }"
                ></span>
              </button>
            </div>
            <span class="ml-2">{{ language }}</span>
          </div>
        </div>
        <div class="px-6 py-4 mt-auto">
          <button @click="menuOpen = false" class="text-sm text-gray-700">
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  filter: grayscale(100%);
}
</style>
