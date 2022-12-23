<script setup>
import { computed } from 'vue'
import { checkRTL } from '@/utils/func/storeSearch'
import PluxPopup from '@/components/ui/layout/PluxPopup'
const props = defineProps(['later', 'title', 'percent', 'desc', 'type', 'action', 'buttons', 'innerHTML'])
const pop = computed(() => props?.later)
const html = computed(() => props?.innerHTML)
const status = computed(() => props?.type ? props?.type : 'loading')
const btnClass = (e) => {
  switch (e) {
    case 'success':
      return 'text-[14px] bg-zahrat border-zahrat border-2 py-[10px]  rounded-[8px] px-[16px] text-white active:scale-95 hover:bg-zahrat-hover'
    case 'await':
      return  'text-[14px] bg-zahrat-rose border-zahrat-rose stroke-zahrat hover:stroke-zahrat-bone border-2 py-[10px]  rounded-[8px] px-[16px] text-zahrat active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white'
    case 'default':
      return 'p-1 px-3 cursor-pointer active:scale-95 rounded-md text-white text-lg bg-blue-500'
    case 'error':
      return 'text-[14px] border-zahrat border-2 py-[10px] rounded-[8px] px-[16px] text-zahrat active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white'
    case 'empty':
      return ' active:scale-95'
    case 'failed':
      return  'text-[14px] bg-zahrat-rose border-zahrat-rose border-2 py-[10px]  rounded-[8px] px-[16px] text-white active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white'
    case 'disabled':
      return 'text-[14px] bg-zahrat-gray border-zahrat-gray border-2 py-[10px]  rounded-[8px] px-[16px] text-zahrat-lightgray cursor-default'
    default:
      return 'text-[14px] bg-zahrat border-zahrat border-2 py-[10px] px-[16px] text-white active:scale-95 hover:bg-zahrat-hover'
  }
}
</script>
<template>
  <plux-popup :popup="pop" @action="action">
    <div class="relative flex flex-row items-center justify-center w-full z-50 h-full md:h-auto"
         :class="checkRTL()?'rtl text-right':'ltr text-left'"
    >
      <!-- Modal content -->
      <div class="relative flex flex-col items-center justify-center bg-white rounded-[12px] shadow w-[600px]">
        <!-- Modal header -->
        <div class="flex justify-center flex-col-reverse items-center gap-[12px] p-4 rounded-t ">
          <h3 class="text-[32px] text-zahrat font-semibold">
            {{ title }}
          </h3>
          <span class="flex flex-row items-center gap-1 justify-center">
            <h1 v-if="percent">
              {{Math.floor(parseInt(percent))}} %
            </h1>
            <svg v-if="status === 'await'" class="bg-zahrat-rose rounded-full" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.0006 7.33325C23.7973 7.33325 7.33398 23.7966 7.33398 43.9999C7.33398 64.2033 23.7973 80.6666 44.0006 80.6666C64.204 80.6666 80.6673 64.2033 80.6673 43.9999C80.6673 23.7966 64.204 7.33325 44.0006 7.33325ZM59.9506 57.0899C59.4373 57.9699 58.5206 58.4466 57.5673 58.4466C57.0906 58.4466 56.614 58.3366 56.174 58.0433L44.8073 51.2599C41.984 49.5732 39.894 45.8699 39.894 42.6066V27.5733C39.894 26.0699 41.1407 24.8233 42.644 24.8233C44.1473 24.8233 45.394 26.0699 45.394 27.5733V42.6066C45.394 43.9266 46.494 45.8699 47.6306 46.5299L58.9973 53.3133C60.3173 54.0832 60.7573 55.7699 59.9506 57.0899Z" fill="#C02320"/>
            </svg>
            <svg v-if="status === 'loading'" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"/>
              <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"/>
            </svg>
            <svg v-if="status === 'success'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve">
<g>
	<path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"/>
	<path d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406   l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411   C39.251,14.885,38.62,14.922,38.252,15.336z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
            <svg v-if="status === 'error'" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M11 7h2v7h-2zm0 8h2v2h-2z"/><path d="m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"/></svg>
            <svg v-if="status === 'warning'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M506.597,423.218L290.506,48.937C283.304,36.462,270.404,29.014,256,29.014c-14.404,0-27.304,7.448-34.506,19.922     L5.402,423.218c-7.202,12.475-7.202,27.37,0,39.845c7.202,12.475,20.103,19.922,34.507,19.922h432.183     c14.405,0,27.305-7.448,34.507-19.922C513.799,450.588,513.799,435.692,506.597,423.218z M484.917,450.545     c-1.286,2.227-5.108,7.405-12.826,7.405H39.908c-7.718,0-11.541-5.178-12.826-7.405c-1.286-2.227-3.859-8.126,0-14.81     L243.172,61.454c3.859-6.683,10.255-7.405,12.826-7.405c2.571,0,8.967,0.722,12.826,7.405l216.091,374.281     C488.775,442.419,486.201,448.318,484.917,450.545z"/>
			<path d="M255.999,134.692c-21.051,0-38.177,17.126-38.177,38.177v123.92c0,21.051,17.126,38.177,38.177,38.177     s38.177-17.126,38.177-38.177V172.87C294.176,151.818,277.05,134.692,255.999,134.692z M269.142,296.79     c0,7.247-5.896,13.143-13.143,13.143c-7.247,0-13.143-5.896-13.143-13.143V172.87c0-7.247,5.896-13.143,13.143-13.143     c7.247,0,13.143,5.896,13.143,13.143V296.79z"/>
			<path d="M255.999,360.002c-20.706,0-37.552,16.846-37.552,37.552c0,20.706,16.846,37.552,37.552,37.552     s37.552-16.846,37.552-37.552C293.55,376.848,276.705,360.002,255.999,360.002z M255.999,410.071     c-6.902,0-12.517-5.615-12.517-12.517c0-6.902,5.615-12.517,12.517-12.517c6.902,0,12.517,5.615,12.517,12.517     C268.516,404.455,262.901,410.071,255.999,410.071z"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
          </span>
        </div>
        <!-- Modal body -->
        <div class="pb-6 text-center" :class="checkRTL()?'rtl text-right':'ltr text-left'">
          <p class="text-base text-center leading-relaxed text-gray-500">
            {{ desc }}
          </p>
          <div v-if="html" v-html="html"></div>
        </div>
        <div v-if="buttons?.length !== undefined" class="p-6 pt-5 flex flex-row gap-2 h-fit" :class="checkRTL()?'rtl text-right':'ltr text-left'">
          <button v-for="(button, i) in buttons" :key="i" @click="button?.action()" :style="button?.style" :class="`${button?.class}  ${btnClass(button?.type)}`">{{ button?.title }}</button>
        </div>
      </div>
    </div>
  </plux-popup>
</template>
<style scoped>

</style>
