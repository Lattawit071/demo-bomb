<template>
  <div class="mb-50">
    <div class="mx-2 mt-3">
      <div
        class="p-3 bg-gray-50 flex justify-between items-center shadow-sm rounded-lg"
      >
        <div
          class="search-this flex items-center justify-between w-full bg-white rounded-2xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-300"
        >
          <div class="flex items-center space-x-2">
            <img src="/search1.png" class="w-4 h-4" />
            <p class="text-gray-600 font-medium cursor-pointer">โปรเน็ต</p>
          </div>
          <div class="flex items-center space-x-2">
            <div><img src="/audio.png" class="w-4 h-4 cursor-pointer" /></div>
            <div><img src="/camera.png" class="w-4 h-4 cursor-pointer" /></div>
          </div>
        </div>
        <div class="flex items-center space-x-4 ml-3">
          <div class=""><p>ไทย</p></div>
          <img src="/more.png" class="w-4 h-4 cursor-pointer" />
        </div>
      </div>

      <div
        v-if="!isLoading && !isLoggedIn"
        class="p-4 flex justify-between items-center text-sm bg-gray-50 rounded-lg shadow-sm mt-4"
      >
        <div>
          <p class="text-gray-700">มองหาสิทธิพิเศษอยู่ใช่ไหม?</p>
          <p class="font-bold text-gray-900">เข้าสู่ระบบเลย!</p>
        </div>
        <div>
          <button
            @click="handleLogin"
            class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center p-4">
        <p class="text-gray-600">
          กำลังตรวจสอบความถูกต้อง.. ของเบอร์ 0912345678
        </p>
      </div>

      <div
        v-if="isLoggedIn"
        class="mt-4 bg-gray-50 rounded-lg shadow-sm p-4 space-y-4"
      >
        <div class="flex justify-between items-center">
          <div>
            <p class="text-red-500 font-bold">ทรู5G รายเดือน</p>
            <p>0912345678</p>
          </div>
          <p class="text-sky-600 cursor-pointer">เปลี่ยนหมายเลข</p>
        </div>

        <div class="flex justify-between items-center p-3">
          <div>
            <p>ยอดใช้บริการ</p>
            <div>
              <p class="text-lg font-bold">0.00</p>
              <p>บาท</p>
            </div>
          </div>

          <button
            class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            จ่ายบิล
          </button>
        </div>

        <div class="flex justify-between items-center p-3">
          <div class="flex items-center space-x-2">
            <img src="/heart.png" class="w-7 h-7" />
            <p class="font-bold text-gray-900">1111</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="/card.jpg" class="w-10 h-7 rounded" />
            <p>&gt;</p>
          </div>
        </div>

        <div class="bg-white rounded-lg p-3 shadow-sm">
          <div class="flex justify-between items-center mb-3">
            <p>ข้อมูลการใข้งาน</p>
            <p class="text-sky-600 cursor-pointer">รายละเอียด</p>
          </div>
          <div class="flex justify-between items-center">
            <p>เน็ตคงเหลือ</p>
            <div class="flex gap-2">
              <p class="text-lg font-bold">2311.29</p>
              <p class="text-sm text-gray-500 mt-1">จาก 60 GB</p>
            </div>
          </div>
          <div class="mt-2 h-2 bg-blue-300 rounded-full w-full">
            <div class="h-2 bg-blue-500 rounded-full" style="width: 50%"></div>
          </div>
        </div>

        <div
          class="border-t-2 pt-4 mt-4 border-gray-300 border kuy"
          @click="goToIoTDevices"
        >
          <div class="flex justify-between items-center px-3">
            <div class="flex items-center gap-2">
              <img src="/setting.jpg" class="w-6 h-6" />
              <p class="font-medium text-gray-700">IOT Device</p>
            </div>
            <img src="/skip.png" class="w-6 h-6 cursor-pointer" />
          </div>
          <div class="p-4 overflow-x-auto">
            <div class="flex gap-4 md:flex-nowrap">
              <div
                v-for="(img, name, index) in {
                  'Router WiFi': '/4.jpg',
                  'กล้อง CCTV': '/3.jpg',
                  'Mesh WiFi': '/1.jpg',
                  'True ID Box': '/2.jpg',
                  'IR Remote ': '/5.jpg',
                  'Smart Motion Sensor': '/6.jpg',
                  'Door Windows Sensor': '/7.jpg',
                  'Smart Siren': '/8.jpg',
                  'Smart SoS Button': '/9.jpg',
                }"
                :key="name"
                class="flex flex-col items-center p-2 min-w-[100px]"
              >
                <img :src="img" class="w-12 h-12" />
                <div class="flex items-center gap-2 mt-2">
                  <p
                    class="text-xs text-gray-600 truncate max-w-[80px] text-center"
                  >
                    {{ name }}
                  </p>
                  <div
                    class="w-2 h-2 rounded-full"
                    :class="{
                      'bg-green-500':
                        index === 0 ||
                        index === 2 ||
                        index === 4 ||
                        index === 5,
                      'bg-gray-400': !(
                        index === 1 ||
                        index === 3 ||
                        index === 6
                      ),
                    }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white p-3 mt-4">
        <p class="font-bold text-gray-900">บริการแนะนำ</p>
        <div class="grid grid-cols-4 gap-4 mt-4">
          <div class="text-center">
            <img src="/simtrue.jpg" class="w-8 h-8 mx-auto" />
            <p class="text-xs mt-2">ย้ายมาทรู</p>
          </div>
          <div class="text-center">
            <img src="/sim1.png" class="w-8 h-8 mx-auto" />
            <p class="text-xs mt-2">ลงทะเบียนซิม</p>
          </div>
          <div class="text-center">
            <img src="/roam.png" class="w-8 h-8 mx-auto" />
            <p class="text-xs mt-2">โรมมิ่ง&โทรไปต่างประเทศ</p>
          </div>
          <div class="text-center">
            <img src="/all.png" class="w-8 h-8 mx-auto" />
            <p class="text-xs mt-2">ทั้งหมด</p>
          </div>
        </div>
      </div>
      <div class="bg-white p-3 mt-4 flex justify-center">
        <div class="overflow-x-auto mt-4">
          <div class="flex gap-6">
            <div class="text-center">
              <img src="/true1.jpg" class="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md mt-6 mx-4 md:mx-12">
        <p class="text-2xl font-bold text-gray-900 mb-4">True แนะนำ</p>
        <p class="text-base text-gray-700 leading-relaxed">
          True มีบริการหลากหลายที่ออกแบบมาเพื่อตอบสนองความต้องการของผู้ใช้
          ตั้งแต่การเชื่อมต่ออินเทอร์เน็ตความเร็วสูงไปจนถึงเนื้อหาพรีเมียม ซึ่ง
          True มุ่งมั่นที่จะให้บริการทั้งในด้านการใช้งานส่วนบุคคลและธุรกิจ
          ไม่ว่าคุณจะมองหาการเชื่อมต่อที่รวดเร็วหรือความบันเทิงที่พิเศษ
          บริการของ True จะช่วยให้คุณเชื่อมต่อกับโลกดิจิทัลได้อย่างเต็มที่
        </p>
        <p class="text-base text-gray-700 mt-4 leading-relaxed">
          ด้วยความมุ่งมั่นในการให้บริการลูกค้าและโครงข่ายที่กว้างขวาง True
          จึงไม่หยุดที่จะพัฒนาบริการและมอบคุณค่าสูงสุดให้กับลูกค้า
          สัมผัสประสบการณ์ที่ดีกับบริการของ True และก้าวไปข้างหน้าในยุคดิจิทัล
        </p>
      </div>
    </div>
    <CustomerFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { phoneUsers, findPhone, getUserDevicesByCategory } from "@/js/phonedb";
import CustomerFooter from "./CustomerFooter.vue";
const route = useRoute();
const router = useRouter();
const phoneId = route.params.phoneId; // ดึงค่า phoneId จาก URL

// ตัวแปรเก็บข้อมูลเบอร์โทร
const phoneDetails = ref({});
const deviceStatus = ref({});
const isLoading = ref(false);
const isLoggedIn = ref(false);

// ตัวแปรเก็บข้อมูลอุปกรณ์ของผู้ใช้
const userDevices = ref({});

const goToIoTDevices = () => {
  router.push("/phone-detail/0912345678/iot-devices");
};
// ฟังก์ชันดึงข้อมูลอุปกรณ์ของผู้ใช้
const fetchUserDevices = () => {
  const user = findPhone(phoneId);
  if (user) {
    // กำหนดให้แสดงอุปกรณ์จาก category ที่ต้องการ เช่น "convenience" หรือ "security"
    userDevices.value = getUserDevicesByCategory(phoneId, "convenience");
  }
};

// ฟังก์ชันเช็คว่ามีอุปกรณ์ในฐานข้อมูลหรือไม่

// ฟังก์ชันเข้าสู่ระบบ
const handleLogin = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    isLoggedIn.value = true;

    // ดึง phoneId จาก URL หลังจากล็อกอินเสร็จ
    const phoneId = route.params.phoneId;

    // ทำการ fetch ข้อมูลที่เกี่ยวข้องกับ phoneId
    fetchDeviceStatus(phoneId);
  }, 2000);
};

// รีเซ็ตสถานะ
const resetState = () => {
  isLoading.value = false;
  isLoggedIn.value = false;
};

const fetchDeviceStatus = () => {
  const user = phoneUsers.find((user) => user.phone === phoneId);
  deviceStatus.value = user?.devices || {};
};

const fetchPhoneDetails = () => {
  const phoneData = findPhone(phoneId); // ใช้ฟังก์ชั่น findPhone
  if (phoneData) {
    phoneDetails.value = phoneData;
  } else {
    phoneDetails.value = { message: "ข้อมูลเบอร์โทรไม่พบ" }; // กรณีไม่พบข้อมูล
  }
};

// ดึงข้อมูลเมื่อคอมโพเนนต์ถูก mount
onMounted(() => {
  console.log("Phone ID:", phoneId); // ตรวจสอบว่าได้ค่าที่คาดหวังหรือไม่
  fetchPhoneDetails();
  fetchDeviceStatus();
  fetchUserDevices();
});

const goToTestPage = () => {
  router.push("/demo");
};
</script>

<style scoped></style>
