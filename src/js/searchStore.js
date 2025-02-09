// stores/searchStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const inputValue = ref("");
  const foundPhones = ref([]);
  const filteredPhones = ref([]);
  const selected = ref("ALL");
  const errorMessage = ref("");
  const searchPerformed = ref(false);

  const setInputValue = (value) => {
    inputValue.value = value;
  };

  const setFoundPhones = (phones) => {
    foundPhones.value = phones;
  };

  const setFilteredPhones = (phones) => {
    filteredPhones.value = phones;
  };

  const setErrorMessage = (message) => {
    errorMessage.value = message;
  };

  const setSearchPerformed = (status) => {
    searchPerformed.value = status;
  };

  const setSelected = (status) => {
    selected.value = status;
  };

  return {
    inputValue,
    foundPhones,
    filteredPhones,
    selected,
    errorMessage,
    searchPerformed,
    setInputValue,
    setFoundPhones,
    setFilteredPhones,
    setErrorMessage,
    setSearchPerformed,
    setSelected,
  };
});
