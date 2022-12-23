<script setup>
import { defineProps } from 'vue';
defineProps({
  step:{
    type: String,
    default: 'passenger'
  }
})
</script>
<template>
  <div v-if="step === 'passenger'" class="flex flex-row justify-center items-center mt-[8.75rem]">
    <div class="w-[3.5rem] h-[3.5rem]">
      <div class="w-[3.5rem] h-[3.5rem] rounded-full bg-[#28A745] flex justify-center items-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">انتخاب پرواز</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[#28A745]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[#28A745] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M9.16055 10.87C9.06055 10.86 8.94055 10.86 8.83055 10.87C6.45055 10.79 4.56055 8.84 4.56055 6.44C4.56055 3.99 6.54055 2 9.00055 2C11.4505 2 13.4405 3.99 13.4405 6.44C13.4305 8.84 11.5405 10.79 9.16055 10.87Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M16.4093 4C18.3493 4 19.9093 5.57 19.9093 7.5C19.9093 9.39 18.4093 10.93 16.5393 11C16.4593 10.99 16.3693 10.99 16.2793 11"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M4.1607 14.56C1.7407 16.18 1.7407 18.82 4.1607 20.43C6.9107 22.27 11.4207 22.27 14.1707 20.43C16.5907 18.81 16.5907 16.17 14.1707 14.56C11.4307 12.73 6.9207 12.73 4.1607 14.56Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#3D3D3D] mt-4 whitespace-nowrap">مشخصات مسافران</span>
    </div>
    <div class="w-[11.625rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)] mr-4"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[rgba(61,61,61,0.2)] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"></path>
          <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#3D3D3D" stroke-width="1.5"
                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8 13H12" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"></path>
          <path d="M8 17H16" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#3D3D3D] mt-4 whitespace-nowrap">تایید اطلاعات</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[rgba(61,61,61,0.2)] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.92969 15.8792L15.8797 3.9292" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M11.1016 18.2791L12.3016 17.0791" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.793 15.5887L16.183 13.1987" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M2 21.9985H22" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
        </svg>
      </div>
      <span
          class="font-normal flex justify-center text-center text-sm text-[#3D3D3D] mt-4 whitespace-nowrap">پرداخت</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[rgba(61,61,61,0.2)] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M18.91 14.6924C18.91 15.9824 19.97 17.0324 21.26 17.0324C21.26 20.7824 20.32 21.7224 16.57 21.7224H7.19C3.44 21.7224 2.5 20.7824 2.5 17.0324V16.5724C3.79 16.5724 4.85 15.5124 4.85 14.2224C4.85 12.9324 3.79 11.8724 2.5 11.8724V11.4124C2.51 7.66241 3.44 6.72241 7.19 6.72241H16.56C20.31 6.72241 21.25 7.66241 21.25 11.4124V12.3524C19.96 12.3524 18.91 13.3924 18.91 14.6924Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M16.2111 6.7225H7.12109L10.0511 3.7925C12.4411 1.4025 13.6411 1.4025 16.0311 3.7925L16.6311 4.3925C16.0011 5.0225 15.8511 5.9525 16.2111 6.7225Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M9.87891 6.72266L9.87891 21.7227" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" stroke-dasharray="5 5"></path>
        </svg>
      </div>
      <span
          class="font-normal flex justify-center text-center text-sm text-[#3D3D3D] mt-4 whitespace-nowrap">صدور بلیط</span>
    </div>
  </div>
  <div v-if="step === 'confirm'" class="flex flex-row justify-center items-center mt-[8.75rem]">
    <div class="w-[3.5rem] h-[3.5rem]">
      <div class="w-[3.5rem] h-[3.5rem] rounded-full bg-[#28A745] flex justify-center items-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">انتخاب پرواز</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[#28A745]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full bg-[#28A745] border-[0.156rem] border-[#28A745] flex justify-center items-center box-border">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">مشخصات مسافران</span>
    </div>
    <div class="w-[11.625rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[#28A745] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"></path>
          <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#3D3D3D" stroke-width="1.5"
                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8 13H12" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"></path>
          <path d="M8 17H16" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">تایید اطلاعات</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)] mr-4"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[rgba(61,61,61,0.2)] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.92969 15.8792L15.8797 3.9292" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M11.1016 18.2791L12.3016 17.0791" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.793 15.5887L16.183 13.1987" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M2 21.9985H22" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
        </svg>
      </div>
      <span
          class="font-normal flex justify-center text-center text-sm text-[#3D3D3D] mt-4 whitespace-nowrap">پرداخت</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[rgba(61,61,61,0.2)] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M18.91 14.6924C18.91 15.9824 19.97 17.0324 21.26 17.0324C21.26 20.7824 20.32 21.7224 16.57 21.7224H7.19C3.44 21.7224 2.5 20.7824 2.5 17.0324V16.5724C3.79 16.5724 4.85 15.5124 4.85 14.2224C4.85 12.9324 3.79 11.8724 2.5 11.8724V11.4124C2.51 7.66241 3.44 6.72241 7.19 6.72241H16.56C20.31 6.72241 21.25 7.66241 21.25 11.4124V12.3524C19.96 12.3524 18.91 13.3924 18.91 14.6924Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M16.2111 6.7225H7.12109L10.0511 3.7925C12.4411 1.4025 13.6411 1.4025 16.0311 3.7925L16.6311 4.3925C16.0011 5.0225 15.8511 5.9525 16.2111 6.7225Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M9.87891 6.72266L9.87891 21.7227" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" stroke-dasharray="5 5"></path>
        </svg>
      </div>
      <span
          class="font-normal flex justify-center text-center text-sm text-[#3D3D3D] mt-4 whitespace-nowrap">صدور بلیط</span>
    </div>
  </div>
  <div v-if="step === 'payment'" class="flex flex-row justify-center items-center mb-[60px] mt-[2.75rem]">
    <div class="w-[3.5rem] h-[3.5rem]">
      <div class="w-[3.5rem] h-[3.5rem] rounded-full bg-[#28A745] flex justify-center items-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">انتخاب پرواز</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[#28A745]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div class="w-[3.5rem] h-[3.5rem] rounded-full bg-[#28A745] flex justify-center items-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">انتخاب پرواز</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[#28A745]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full bg-[#28A745] border-[0.156rem] border-[#28A745] flex justify-center items-center box-border">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">مشخصات مسافران</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)]" ></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[#28A745] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.92969 15.8792L15.8797 3.9292" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M11.1016 18.2791L12.3016 17.0791" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.793 15.5887L16.183 13.1987" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M2 21.9985H22" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
        </svg>
      </div>
      <span
          class="font-normal flex justify-center text-center text-sm text-[#3d3d3d] mt-4 whitespace-nowrap">پرداخت</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)] mr-4"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[rgba(61,61,61,0.2)] flex justify-center items-center box-border">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M18.91 14.6924C18.91 15.9824 19.97 17.0324 21.26 17.0324C21.26 20.7824 20.32 21.7224 16.57 21.7224H7.19C3.44 21.7224 2.5 20.7824 2.5 17.0324V16.5724C3.79 16.5724 4.85 15.5124 4.85 14.2224C4.85 12.9324 3.79 11.8724 2.5 11.8724V11.4124C2.51 7.66241 3.44 6.72241 7.19 6.72241H16.56C20.31 6.72241 21.25 7.66241 21.25 11.4124V12.3524C19.96 12.3524 18.91 13.3924 18.91 14.6924Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M16.2111 6.7225H7.12109L10.0511 3.7925C12.4411 1.4025 13.6411 1.4025 16.0311 3.7925L16.6311 4.3925C16.0011 5.0225 15.8511 5.9525 16.2111 6.7225Z"
              stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M9.87891 6.72266L9.87891 21.7227" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" stroke-dasharray="5 5"></path>
        </svg>
      </div>
      <span
          class="font-normal flex justify-center text-center text-sm text-[#3D3D3D] mt-4 whitespace-nowrap">صدور بلیط</span>
    </div>
  </div>
  <div v-if="step === 'success'" class="flex flex-row justify-center items-center mt-[60px]">
    <div class="w-[3.5rem] h-[3.5rem]">
      <div class="w-[3.5rem] h-[3.5rem] rounded-full bg-[#28A745] flex justify-center items-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">انتخاب پرواز</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[#28A745]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full bg-[#28A745] border-[0.156rem] border-[#28A745] flex justify-center items-center box-border">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">مشخصات مسافران</span>
    </div>
    <div class="w-[11.625rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)] mr-4"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem]  bg-[#28A745] border-[#28A745] flex justify-center items-center box-border">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span class="font-normal flex justify-center text-center text-sm text-[#28A745] mt-4 whitespace-nowrap">تایید اطلاعات</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[#28A745] bg-[#28A745] flex justify-center items-center box-border">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span
          class="font-normal flex justify-center text-center text-sm text-[#3d3d3d] mt-4 whitespace-nowrap">پرداخت</span>
    </div>
    <div class="w-[12.5rem] h-[0.156rem] bg-[rgba(61,61,61,0.2)]"></div>
    <div class="w-[3.5rem] h-[3.5rem]">
      <div
          class="w-[3.5rem] h-[3.5rem] rounded-full border-[0.156rem] border-[#28A745] bg-[#28A745] flex justify-center items-center box-border">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.916 20.0001L17.6327 24.7168L27.0827 15.2834" stroke="white" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <span
          class="font-normal flex justify-center text-center text-sm text-[#3D3D3D] mt-4 whitespace-nowrap">صدور بلیط</span>
    </div>
  </div>
</template>
<style scoped>

</style>
