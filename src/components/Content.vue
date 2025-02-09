<script setup>
import { ref } from "vue";
import { phoneUsers, findPhone, filterPhones } from "@/js/phonedb";

// Define state variables
const selected = ref("ALL");
const inputValue = ref("");
const errorMessage = ref("");
const foundPhones = ref([]); // This keeps the data fetched by the search
const filteredPhones = ref([]); // This keeps the filtered data based on status
const searchPerformed = ref(false);

const searchPhone = () => {
  if (!inputValue.value) {
    errorMessage.value = "กรุณากรอกข้อมูล";
    return;
  }

  const phone = findPhone(inputValue.value);

  if (!phone) {
    errorMessage.value = "ไม่พบเบอร์นี้";
  } else {
    if (!foundPhones.value.some((p) => p.phone === phone.phone)) {
      foundPhones.value.push(phone);
    }
    filteredPhones.value = foundPhones.value;
    errorMessage.value = "";
  }

  applyFilter(selected.value);

  searchPerformed.value = true;
};

const clearInput = () => {
  inputValue.value = "";
  errorMessage.value = "";
};

const toggleSelection = (status) => {
  selected.value = status;
  applyFilter(status);
};

// Apply filter based on the status
const applyFilter = (status) => {
  if (status === "ALL") {
    filteredPhones.value = foundPhones.value;
  } else {
    filteredPhones.value = foundPhones.value.filter(
      (phone) => phone.status === status.toLowerCase()
    );
  }
};

import { useRouter } from "vue-router";

const router = useRouter();

const goToPhoneDetail = (phone) => {
  // ส่ง phoneId ไปใน URL ของ PhoneDetail
  router.push({ name: "phoneDetail", params: { phoneId: phone.phone } });
};
</script>

<template>
  <div>
    <div class="border border-gray-300 mx-4">
      <p class="bg-rose-400 text-center py-4 text-white text-xl">ค้นหา</p>
      <div class="text-sm mt-5 p-4">
        <p class="text-center">กรุณาระบุชื่อ, หมายเลขบัตรประชาชน,</p>
        <p class="text-center">หมายเลขพาสปอร์ต หรือ หมายเลขบริการ</p>
        <div class="max-w-xs mx-auto mt-4 flex items-center">
          <!-- Input field -->
          <input
            v-model="inputValue"
            type="text"
            placeholder="กรุณากรอกข้อมูล"
            class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <!-- Display the clear button 'x' if there is input value -->
          <button
            v-if="inputValue"
            @click="clearInput"
            class="text-gray-500 text-xl ml-2"
          >
            x
          </button>
        </div>
        <!-- Display error message (if any) in red -->
        <p class="text-center text-red-600 mt-2">{{ errorMessage }}</p>
      </div>

      <!-- Button container for search and read actions -->
      <div class="bg-gray-100 flex justify-center gap-3 mt-4 p-5">
        <button
          @click="searchPhone"
          class="py-2 px-4 w-24 bg-red-600 text-white rounded-md shadow-lg hover:bg-red-700 focus:outline-none transition duration-300"
        >
          ค้นหา
        </button>
        <button
          class="py-2 px-4 w-24 bg-gray-300 rounded-md shadow-lg hover:bg-gray-600 focus:outline-none transition duration-300"
        >
          อ่านบัตร
        </button>
      </div>

      <div v-if="foundPhones.length" class="border border-gray-200 sas">
        <div class="flex p-2">
          <img src="/search.png" class="w-5 h-5" alt="Task" />
          <p class="ml-3 text-sm font-semibold">
            ผลการค้นหา({{ filteredPhones.length }})
          </p>
        </div>
        <div class="p-2 flex justify-center">
          <button
            @click="toggleSelection('ALL')"
            :class="
              selected === 'ALL'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700'
            "
            class="px-2 py-1 text-xs transition duration-300 rounded-l-md border border-gray-300"
          >
            ALL
          </button>
          <button
            @click="toggleSelection('ACTIVE')"
            :class="
              selected === 'ACTIVE'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700'
            "
            class="px-2 py-1 text-xs transition duration-300 border-t border-b border-gray-300"
          >
            ACTIVE
          </button>
          <button
            @click="toggleSelection('INACTIVE')"
            :class="
              selected === 'INACTIVE'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700'
            "
            class="px-3 py-2 text-xs transition duration-300 rounded-r-md border border-gray-300"
          >
            INACTIVE
          </button>
        </div>
      </div>

      <!-- Show phone content if phones are found -->
      <div
        v-if="filteredPhones.length"
        class="show-content bg-[#f7f7f7] p-3 mt-4"
      >
        <div
          v-for="(phone, index) in filteredPhones"
          :key="index"
          @click="goToPhoneDetail(phone)"
          :class="{
            'mt-4 border p-3 rounded-md border-gray-300 shadow-md': true,
          }"
        >
          <img src="/phone.png" class="w-8 h-8" alt="Phone Icon" />
          <p>{{ phone.phone }}</p>
          <div class="flex justify-between">
            <p class="text-yellow-400">{{ phone.type }}</p>
            <div
              class="flex border border-gray-400 rounded-lg p-1 gap-2 text-sm"
            >
              <img src="/user.png" class="w-5 h-5" alt="User Icon" />
              <p>{{ phone.name }}</p>
            </div>
          </div>
          <p>(Prepay)</p>
          <p
            class="bg-gray-300 text-gray-800 rounded px-1 py-0.5 inline-block mt-2"
          >
            {{ phone.status === "active" ? "Active" : "Inactive" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
