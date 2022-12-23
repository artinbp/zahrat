<script setup>
import { ref, defineProps } from 'vue';

defineProps({
    title: String,
    stops: String
})

const isDown = ref(false)
function toggleDrop()
{
    isDown.value = !isDown.value
}

</script>

<template>

    <div class="bg-[#FAFAFA] px-10 pt-6 pb-12 rounded-2xl transition-all overflow-hidden duration-500"
        :class="(isDown) ? 'max-h-[125rem]' : 'max-h-[5.625rem]'">
        <div class="flex items-center justify-between flex-row-reverse  cursor-pointer" @click="toggleDrop">
            <div class="flex flex-row-reverse items-center gap-20">
                <div class="w-10 h-10 bg-[#FFFFFF] rounded-full flex justify-center items-center transition-all duration-500"
                    :class="(isDown) ? '' : ' rotate-180'">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.5604 12L17.8671 20.6934C16.8404 21.72 15.1604 21.72 14.1338 20.6934L5.44043 12"
                            stroke="#3D3D3D" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="text-base font-normal leading-6 text-[#3D3D3D] rtl">{{ stops }}</div>
            </div>
            <div class="text-[1.75rem] font-bold text-[#3D3D3D] leading-[2.625rem]">{{ title }}</div>
        </div>

        <slot></slot>

    </div>

</template>
