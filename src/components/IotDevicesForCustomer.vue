<template>
  <div class="mx-2">
    <div class="text-center mt-3">
      <p class="text-md font-bold">IOT Devices</p>
    </div>

    <div class="flex mt-5">
      <div
        class="border border-gray-300 flex-1 text-center p-2"
        :class="{ 'bg-red-300': selectedCategory === 'convenience' }"
        @click="selectedCategory = 'convenience'"
      >
        Convenience
      </div>
      <div
        class="border border-gray-300 flex-1 text-center p-2"
        :class="{ 'bg-red-300': selectedCategory === 'security' }"
        @click="selectedCategory = 'security'"
      >
        Security
      </div>
    </div>

    <div>
      <div
        v-if="selectedUser"
        class="flex flex-wrap gap-3 p-5 justify-start border border-gray-300"
      >
        <div
          v-for="(hasDevice, device) in filteredDevices"
          :key="device"
          class="flex flex-col items-center border border-gray-200 bg-white rounded-lg w-20 max-w-[130px] min-w-[100px] shrink-0 cursor-pointer"
        >
          <router-link
            :to="{
              path: `/phone-detail/${selectedPhone}/iot-devices/${device
                .toLowerCase()
                .replace(/ /g, '-')}`,
            }"
            class="flex flex-col items-center w-full"
          >
            <div class="w-12 h-12 flex justify-center pt-3 items-center mb-2">
              <img
                :src="getDeviceIcon(device)"
                class="w-full h-full object-contain"
              />
            </div>
            <div class="text-center pb-2">
              <p class="text-xs font-medium">{{ device }}</p>
              <div
                class="w-2 h-2 rounded-full mt-1 mx-auto"
                :class="hasDevice ? 'bg-green-500' : 'bg-gray-300'"
              ></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <CustomerFooter />
</template>

<script setup>
import CustomerFooter from "./CustomerFooter.vue";
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { phoneUsers, getUserDevicesByCategory } from "@/js/phonedb";

// ใช้ route.params.phoneId เพื่อดึงข้อมูลจาก URL
const route = useRoute();
const router = useRouter();
const selectedPhone = ref(route.params.phoneId); // ใช้ route.params.phoneId
const selectedUser = ref(null);
const selectedCategory = ref("convenience");

// ฟังก์ชันในการกรอง devices ตาม category ที่เลือก
const filteredDevices = computed(() =>
  selectedUser.value && selectedCategory.value
    ? getUserDevicesByCategory(selectedUser.value.phone, selectedCategory.value)
    : {}
);

// ฟังก์ชันในการจับคู่ device กับ icon
const getDeviceIcon = (device) => {
  const iconMap = {
    "Router WiFi": "4.jpg",
    "กล้อง CCTV": "3.jpg",
    "Mesh WiFi": "1.jpg",
    "IR Remote Control": "5.jpg",
  };
  return `/${iconMap[device] || "2.jpg"}`;
};

// เมื่อ mounted, ค้นหาผู้ใช้จาก phoneId
onMounted(() => {
  selectedUser.value =
    phoneUsers.find((user) => user.phone === selectedPhone.value) || null;
});
</script>

<style scoped></style>
