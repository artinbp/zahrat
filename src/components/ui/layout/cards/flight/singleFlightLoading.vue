<script setup>

</script>
<template>
  <div class="rounded-3xl overflow-hidden h-[11.438rem] flex gap-[2px] flex-row-reverse">
    <div
        class="flex bg-[#FFFFFF] flex-col justify-center items-center relative w-[13.313rem] h-full float-left ">
      <div
          class="w-[5.875rem] h-[1.813rem] bg-[#FAFAFA] text-sm font-normal text-center shimmerBG text-[rgba(61,61,61,0.7)] rounded-[1.156rem] pt-[0.270rem]">

      </div>
      <div class="text-xl font-bold w-[7.75rem] text-[#3D3D3D] h-4 shimmerBG mt-4"></div>
      <button class="h-10 w-[7.75rem] bg-[#C02320aa] rounded-lg text-[#FFFFFF] font-medium text-sm mt-[1.125rem]">please
        wait
      </button>
    </div>
    <div class=" bg-[#FFFFFF] w-[44rem]">
      <div class="float-right mt-[2.625rem] mr-4">
        <div class="mx-auto w-20 relative">
          <div class="w-16 h-16 rounded-full bg-[#D9D9D9] box-border border-[0.125rem] border-[#FFFFFF]"></div>
          <div
              class="w-16 h-16 rounded-full bg-[#D9D9D9] box-border border-[0.125rem] border-[#FFFFFF] absolute left-4 top-0"></div>
        </div>
        <div class="w-[7.188rem] text-center text-sm h-4 shimmerBG font-normal text-[#3D3D3D] mt-4"></div>
      </div>
      <div class="float-right mt-[2.5rem] ml-5 mr-14 w-[3.75rem]">
        <div class="font-bold text-2xl leading-9 w-24 h-8 shimmerBG text-[#3D3D3D] text-right truncate rtl"></div>
        <div
            class="text-base font-normal leading-6 w-24 h-4 shimmerBG text-[rgba(61,61,61,0.8)] text-right mt-2 shimmerBG truncate rtl"></div>
        <div
            class="text-sm font-normal leading-[1.313rem] w-24 h-4 shimmerBG text-[rgba(61,61,61,0.8)] text-right shimmerBG mt-3 truncate">
        </div>
      </div>
      <div class="float-right mt-[0.688rem] mr-8">
        <div class="mt-10 relative w-[11rem] flex flex-row-reverse items-center justify-between">
          <div class="h-0.5 w-[9.5rem] dashedLine border-zahrat-gray absolute top-[0.688rem] right-[1.2rem]"></div>
          <div class="max-w-[0.75rem] max-h-[0.75rem] relative z-20">
            <div class="w-3 h-3 rounded-full bg-[#9E9E9E]"></div>
          </div>
          <svg class=" z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.6296 20.0501L8.61957 15.3801L8.17957 14.3401C8.09957 14.1801 7.88957 14.0401 7.70957 14.0401H4.64957C3.68957 14.0401 2.54957 13.3301 2.10957 12.4701C1.95957 12.1701 1.95957 11.8101 2.10957 11.5101C2.54957 10.6601 3.69957 9.95006 4.65957 9.95006H7.71957C7.89957 9.95006 8.10957 9.81006 8.18957 9.65006L10.6396 3.95006C10.8996 3.32006 11.6896 2.81006 12.3696 2.81006L13.6896 2.81006C14.5396 2.81006 14.9596 3.45006 14.6196 4.24006L12.4596 9.25006C12.2896 9.64006 12.4996 9.96006 12.9296 9.96006H14.0396H15.8396C16.0696 9.96006 16.3996 9.83006 16.5596 9.67006L18.8896 7.35006C19.1296 7.11006 19.5996 7.00006 19.9396 7.11006L21.2996 7.56006C21.8896 7.74006 22.1696 8.41006 21.8896 8.96006L19.8896 11.3401C19.5796 11.7001 19.5796 12.2901 19.8896 12.6501L21.8896 15.0301C22.1596 15.5801 21.8896 16.2501 21.2996 16.4501L19.9396 16.9001C19.6096 17.0101 19.1296 16.9001 18.8896 16.6601L16.5596 14.3401C16.3996 14.1701 16.0696 14.0401 15.8396 14.0401H12.9296C12.4996 14.0401 12.2996 14.3501 12.4596 14.7501L14.6196 19.7601C14.9596 20.5501 14.5396 21.1901 13.6896 21.1901H12.3696C11.6896 21.1901 10.8996 20.6801 10.6296 20.0501Z"
                fill="#3D3D3D" fill-opacity="0.8"></path>
          </svg>
        </div>
        <div
            class="clear-both text-center text-base font-normal w-24 h-4 shimmerBG m-auto leading-6 text-[rgba(61,61,61,0.6)] pt-8"></div>
      </div>
      <div class="float-right mt-[2.5rem] mr-8 w-[3.75rem]">
        <div class="font-bold text-2xl leading-9 w-24 h-8 shimmerBG text-[#3D3D3D] text-right truncate rtl"></div>
        <div
            class="text-base font-normal leading-6 w-24 h-4 shimmerBG text-[rgba(61,61,61,0.8)] text-right mt-2 shimmerBG truncate rtl"></div>
        <div
            class="text-sm font-normal leading-[1.313rem] w-24 h-4 shimmerBG text-[rgba(61,61,61,0.8)] text-right shimmerBG mt-3 truncate">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shimmerBG {
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: #ddd;
  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
  background-size: 1200px 100%;
}


@-webkit-keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@keyframes shimmer {
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
}

.dashedLine {
  border-bottom: 3px dashed #ddd;
}
</style>
