<script setup>
import SearchForm  from '@/components/ui/layout/cards/flight/searchForm';
</script>
<template>
  <div class="block w-[340px]">
    <search-form></search-form>
    <div class="bg-[#FAFAFA] rounded-2xl mt-6 pt-6 pb-5 px-6">
      <div class="text-lg font-bold text-[#000000] text-right">توقف</div>
      <div class="mt-[1.875rem] flex flex-row justify-between flex-wrap gap-y-6 gap-x-3 items-center">
        <div
            class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer">
          البلد
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px] accent-[2px]" style="">
          </div>
        </div>
        <div
            class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer">
          دون توقف
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
          </div>
        </div>
        <div
            class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer">
          توقف في محطة واحدة
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
          </div>
        </div>
        <div class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer">
          توقفين في محطتين
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#FAFAFA] rounded-2xl mt-4 pt-6 pb-5 px-6">
      <div class="text-lg font-bold text-[#000000] text-right">نوع الرحلة</div>
      <div class="mt-[1.875rem] flex  flex-wrap gap-y-6 items-center">
        <div
            class="text-sm font-normal flex-row-reverse leading-[1.313rem] text-[#000000] flex items-center gap-2 cursor-pointer ml-[4.375rem]">
          حكومي
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
          </div>
        </div>
        <div class="text-sm font-normal flex-row-reverse leading-[1.313rem] text-[#000000] flex items-center gap-2 cursor-pointer">
          تجاري
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#FAFAFA] rounded-2xl mt-4 pt-6 pb-5 px-6">
      <div class="text-lg font-bold text-[#000000] text-right">فئة الرحلة</div>
      <div class="mt-[1.875rem]  flex flex-wrap gap-y-6 items-center">
        <div
            class="text-sm flex-row-reverse font-normal leading-[1.313rem] text-[#000000] flex items-center gap-2 cursor-pointer ml-[4.438rem]">
          اقتصاد
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
          </div>
        </div>
        <div class="text-sm flex-row-reverse font-normal leading-[1.313rem] text-[#000000] flex items-center gap-2 cursor-pointer">
          رجال اعمال
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#FAFAFA] rounded-2xl mt-4 pt-6 pb-5 px-6">
      <div class="text-lg font-bold text-[#000000] text-right">طيران</div>
      <div class="w-6 h-6 rounded flex justify-center items-center">
        <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
      </div>
    </div>
    <div class="bg-[#FAFAFA]  rounded-2xl mt-4 pt-6 pb-[2.188rem] px-6 overflow-auto">
      <div class="text-lg font-bold text-[#000000] text-right">وقت الحركة</div>
      <div class="mt-[1.875rem] flex-row-reverse float-right max-w-[14.563rem] w-full space-y-6">
        <div
            class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer justify-end">
          کل
          <div class="w-6 h-6 rounded flex justify-center items-center">
            <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
          </div>
        </div>
        <div class="flex flex-row-reverse justify-between"><span
            class="text-sm font-medium text-[#3D3D3D] leading-[1.063rem]">0-8</span>
          <div class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer">
            صباحا
            <div class="w-6 h-6 rounded flex justify-center items-center">
              <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
            </div>
          </div>
        </div>
        <div class="flex flex-row-reverse justify-between"><span
            class="text-sm font-medium text-[#3D3D3D] leading-[1.063rem]">8-12</span>
          <div class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer">
            صباح
            <div class="w-6 h-6 rounded flex justify-center items-center">
              <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
            </div>
          </div>
        </div>
        <div class="flex flex-row-reverse justify-between"><span
            class="text-sm font-medium text-[#3D3D3D] leading-[1.063rem]">12-18</span>
          <div class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer">
            مساء
            <div class="w-6 h-6 rounded flex justify-center items-center">
              <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
            </div>
          </div>
        </div>
        <div class="flex flex-row-reverse justify-between"><span
            class="text-sm font-medium text-[#3D3D3D] leading-[1.063rem]">18-24</span>
          <div class="text-sm font-normal leading-[1.313rem] text-[#000000] flex flex-row-reverse items-center gap-2 cursor-pointer">
            ليالي
            <div class="w-6 h-6 rounded flex justify-center items-center">
              <input type="checkbox" name="" class="checked:accent-zahrat w-[20px] h-[20px]" style="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
