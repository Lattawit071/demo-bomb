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
      <!-- Toggle buttons for search results -->
      <div class="border border-gray-200">
        <div class="flex p-2">
          <img src="/search.png" class="w-5 h-5" alt="Task" />
          <p class="ml-3 text-sm font-semibold">
            ผลการค้นหา({{ filteredPhones.length }})
          </p>
        </div>
        <div class="border p-2 flex justify-center">
          <!-- ALL button (rounded left) -->
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
          <!-- ACTIVE button (no rounding) -->
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
          <!-- INACTIVE button (rounded right) -->
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
        class="show-content border border-red-400 p-3 mt-4"
      >
        <!-- Loop through filteredPhones to display each phone result in separate div -->
        <div
          v-for="(phone, index) in filteredPhones"
          :key="index"
          @click="selectPhone(phone)"
          :class="{
            'bg-gray-100': clickedPhone === phone,
            'mt-4 border p-3 rounded-md border-gray-300 shadow-md': true,
          }"
        >
          <img src="/phone.png" class="w-8 h-8" alt="Phone Icon" />
          <p>เบอร์: {{ phone.phone }}</p>
          <div class="flex justify-between">
            <p class="text-yellow-400">{{ phone.info1 }}</p>
            <div
              class="flex border border-gray-400 rounded-lg p-1 gap-2 text-sm"
            >
              <img src="/user.png" class="w-5 h-5" alt="User Icon" />
              <p>{{ phone.info2 }}</p>
            </div>
          </div>
          <p>({{ phone.info3 }})</p>
          <p>{{ phone.status === "active" ? "Active" : "Inactive" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

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
const clickedPhone = ref(null);

// Search phone
const searchPhone = () => {
  if (!inputValue.value) {
    errorMessage.value = "กรุณากรอกข้อมูล";
    return;
  }

  // Use the findPhone function from your mock database
  const phone = findPhone(inputValue.value);

  if (!phone) {
    errorMessage.value = "ไม่พบเบอร์นี้";
  } else {
    if (!foundPhones.value.some((p) => p.phone === phone.phone)) {
      foundPhones.value.push(phone); // Add phone to foundPhones if not already added
    }
    filteredPhones.value = foundPhones.value; // Initial display all phones
    errorMessage.value = "";
  }

  // Reapply the filter based on the selected status after search
  applyFilter(selected.value);

  searchPerformed.value = true;
};

// Clear input field
const clearInput = () => {
  inputValue.value = ""; // Clear the input
  errorMessage.value = ""; // Clear any error message
  // Don't clear foundPhones or filteredPhones, so previous search results remain
};

// Toggle selection (ALL, ACTIVE, INACTIVE)
const toggleSelection = (status) => {
  selected.value = status;
  applyFilter(status); // Reapply the filter based on the selected status
};

// Apply filter based on the status
const applyFilter = (status) => {
  if (status === "ALL") {
    filteredPhones.value = foundPhones.value; // Show all when 'ALL' is selected
  } else {
    filteredPhones.value = foundPhones.value.filter(
      (phone) => phone.status === status.toLowerCase()
    );
  }
};

// Select phone (for display or selection logic)
const selectPhone = (phone) => {
  clickedPhone.value = phone;
};
</script>

<style scoped>
.show-content {
  background-color: #f7f7f7;
}
</style>
