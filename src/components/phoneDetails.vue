<template>
  <div class="mb-20">
    <demoTop />
    <div class="mx-2">
      <div
        class="flex justify-between px-4 py-3 text-sm border border-gray-300"
      >
        <div class="flex gap-2">
          <img src="/user2.png" class="w-7 h-7" alt="Profile" />
          <p class="pt-2 font-semibold text-gray-800">Customer Profile</p>
        </div>

        <div class="flex gap-4 items-center mt-1">
          <p
            class="bg-gray-300 text-black px-3 py-1 rounded-full font-semibold"
          >
            active
          </p>
          <p
            class="bg-gray-700 text-white px-3 py-1 rounded-full font-semibold"
          >
            bill
          </p>
        </div>
      </div>

      <div class="border border-gray-300 p-3 text-center">
        <div class="flex justify-center">
          <img src="/user1.png" class="w-13 h-13" alt="" />
        </div>

        <div class="flex items-center mt-3 flex-wrap justify-center">
          <div class="flex font-medium items-center mt-2 sm:mt-0 gap-3">
            <div
              class="text-xs border text-white bg-green-300 rounded-md py-1 px-2 flex-shrink-0"
            >
              <p class="font-bold">True</p>
              <p>GREEN CARD</p>
            </div>
            <p class="mr-2 mt-2">{{ phoneDetails.name }}</p>
          </div>
          <img src="/user2.png" class="w-7 h-7 mt-2" />
        </div>
      </div>

      <div class="border border-gray-300 p-3">
        <div class="flex justify-center gap-4">
          <div class="flex gap-2 items-center">
            <img src="/emoji.png" class="w-6 h-6 mt-2" />
            <p class="font-medium mt-2">Account Info</p>
          </div>
          <div
            class="flex gap-1 border border-white bg-red-400 text-white rounded-md px-2 py-1 items-center"
          >
            <img src="/pen.png" class="w-5 h-5" />
            <p>Edit</p>
          </div>
        </div>

        <div
          class="flex flex-wrap text-xs mt-2 gap-2 ml-6 justify-start md:justify-center"
        >
          <p
            class="border border-white bg-red-400 text-white rounded-md px-2 py-1"
          >
            Campaign Bundle Privilege
          </p>
          <p
            class="border border-white bg-red-400 text-white rounded-md px-2 py-1"
          >
            Data Privacy
          </p>
        </div>

        <div class="mt-2 flex justify-end ml-auto">
          <p
            class="m-0 inline-block text-xs border border-white bg-red-400 text-white rounded-md px-2 py-1"
          >
            Customer Balance
          </p>
        </div>

        <div class="mt-5 border-b-2 border-gray-300 pb-4">
          <div class="mx-5 text-sm">
            <div class="flex flex-col gap-4 md:flex-col md:gap-2">
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">Account Type:</p>
                <p class="font-semibold flex-1 text-right">
                  {{ phoneDetails.type }}
                </p>
              </div>
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">Customer Grading:</p>
                <p class="font-semibold flex-1 text-right">
                  {{ phoneDetails.grading }}
                </p>
              </div>
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">ID Number:</p>
                <p class="font-semibold flex-1 text-right">
                  {{ phoneDetails.idno }}
                </p>
              </div>
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">True Card No:</p>
                <p class="font-semibold flex-1 text-right">
                  {{ phoneDetails.trueno }}
                </p>
              </div>
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">Account Subtype:</p>
                <p class="font-semibold flex-1 text-right">
                  {{ phoneDetails.subtype }}
                </p>
              </div>
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">4D Scoring:</p>
                <p class="font-semibold flex-1 text-right text-yellow-400">
                  {{ phoneDetails.scoring }}
                </p>
              </div>
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">ARPA:</p>
                <p class="font-semibold flex-1 text-right">
                  {{ phoneDetails.arpa }}
                </p>
              </div>
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">Empowerment ฉุกเฉิน:</p>
                <p class="font-semibold flex-1 text-right">
                  {{ phoneDetails.empowerment }}
                </p>
              </div>
              <div class="flex justify-between w-full mb-4">
                <p class="flex-1">Spacial Note:</p>
                <div>
                  <input
                    type="text"
                    class="border border-gray-300 h-20 w-full md:w-64 p-2 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border border-gray-300 p-3 mt-4">
          <div class="flex items-center gap-2">
            <img src="/pen.png" class="w-5 h-5" />
            <p class="font-semibold">AFS Order</p>
          </div>
          <div class="mt-4">
            <div
              class="text-white text-center bg-red-400 p-2 rounded cursor-pointer hover:bg-red-500 transition duration-200 ease-in-out"
              @click="toggleDropdown('cancel')"
            >
              CANCEL BEFORE INSTALL
              <div
                v-if="openDropdown === 'cancel'"
                class="bg-white text-black mt-2 rounded-md shadow-xl p-4 w-64 absolute z-10 transition-all duration-200 ease-in-out"
              >
                <p class="font-medium">เผื่อได้ใช้</p>
                <!-- Content for Cancel -->
              </div>
            </div>

            <div
              class="text-white text-center bg-red-400 p-2 rounded cursor-pointer hover:bg-red-500 transition duration-200 ease-in-out mt-2"
              @click="toggleDropdown('change')"
            >
              CHANGE INSTALLATION DATE
              <div
                v-if="openDropdown === 'change'"
                class="bg-white text-black mt-2 rounded-md shadow-xl p-4 w-64 absolute z-10 transition-all duration-200 ease-in-out"
              >
                <p class="font-medium">อะไรว้า</p>
                <!-- Content for Change Installation -->
              </div>
            </div>
          </div>
        </div>
        <div class="border">
          <button
            @click="goToTestPage"
            class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Go to Test Page
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import demoTop from "./Header.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { findPhone } from "@/js/phonedb"; // นำเข้า findPhone จาก phonedb.js

const router = useRouter();
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
const goToTestPage = () => {
  router.push("/test");
};
// ใช้ onMounted เพื่อดึงข้อมูลเมื่อคอมโพเนนต์ถูก mount
onMounted(() => {
  fetchPhoneDetails();
});

// สำหรับการเปิด/ปิด dropdown
const openDropdown = ref(null);

const toggleDropdown = (dropdown) => {
  openDropdown.value = openDropdown.value === dropdown ? null : dropdown;
};
</script>

<style scoped>
/* ใส่สไตล์ที่ต้องการ */
</style>
