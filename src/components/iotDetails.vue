<template>
  <div class="mb-20">
    <Header v-if="!isIoTDevicesPage" />
    <div class="mx-4">
      <div class="text-center mt-6">
        <p class="text-2xl font-extrabold text-gray-800">IoT Devices</p>
      </div>

      <div class="flex mt-6 space-x-4 justify-center">
        <div
          class="border border-gray-300 flex-1 text-center py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-100"
          :class="{
            'bg-red-500 text-white font-bold':
              selectedCategory === 'convenience',
            'hover:bg-red-100': selectedCategory !== 'convenience',
          }"
          @click="selectedCategory = 'convenience'"
        >
          Convenience
        </div>
        <div
          class="border border-gray-300 flex-1 text-center py-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-100"
          :class="{
            'bg-red-500 text-white font-bold': selectedCategory === 'security',
            'hover:bg-red-100': selectedCategory !== 'security',
          }"
          @click="selectedCategory = 'security'"
        >
          Security
        </div>
      </div>

      <div>
        <div
          v-if="selectedUser"
          class="border border-gray-300 bg-gray-50 min-h-screen p-6 rounded-lg mt-6 shadow-md"
        >
          <div class="flex flex-wrap gap-4 justify-center">
            <div
              v-for="(hasDevice, device) in filteredDevices"
              :key="device"
              class="flex flex-col items-center border border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-all w-32 max-w-[150px] min-w-[120px] p-4 cursor-pointer transform hover:scale-105"
            >
              <router-link
                :to="{
                  path: `/phone-detail/${selectedPhone}/iot-devices/${device
                    .toLowerCase()
                    .replace(/ /g, '-')}`,
                }"
                class="flex flex-col items-center w-full"
              >
                <div class="w-20 h-20 flex justify-center items-center mb-4">
                  <img
                    :src="getDeviceIcon(device)"
                    class="w-full h-full object-contain"
                    alt="device icon"
                  />
                </div>
                <div class="text-center">
                  <p class="text-sm font-semibold text-gray-800">
                    {{ device }}
                  </p>
                  <div
                    class="w-3 h-3 rounded-full mt-2 mx-auto"
                    :class="hasDevice ? 'bg-green-500' : 'bg-gray-300'"
                  ></div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CustomerFooter v-if="isIoTDevicesPage" />
  </div>
</template>

<script setup>
defineProps(["phoneId"]);
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "./Header.vue";
import { phoneUsers, getUserDevicesByCategory } from "@/js/phonedb";
import CustomerFooter from "./CustomerFooter.vue";

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
    "Smart SoS Button": "9.jpg",
    "Mesh WiFi": "1.jpg",
    "IR Remote Control": "5.jpg",
    "Smart Motion Sensor": "6.jpg",
    "Door Windows Sensor": "7.jpg",
    "Smart Siren": "8.jpg",
  };
  return `/${iconMap[device] || "2.jpg"}`;
};

// เมื่อ mounted, ค้นหาผู้ใช้จาก phoneId
onMounted(() => {
  selectedUser.value =
    phoneUsers.find((user) => user.phone === selectedPhone.value) || null;
});

const isIoTDevicesPage = computed(() => {
  return route.path === `/phone-detail/0912345678/iot-devices`;
});
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติม */
.text-center {
  text-align: center;
}
</style>
