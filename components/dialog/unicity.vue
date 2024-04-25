<template>
  <div>
    <!-- Dialog -->
    <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Dialog overlay -->
        <div class="fixed inset-0 transition-opacity" @click="closeDialog">
          <div class="absolute inset-0 bg-gray-500 opacity-50"></div>
        </div>

        <!-- Dialog content -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
          class="inline-block align-middle bg-[#323030] rounded-lg text-left overflow-y-scroll shadow-xl transform transition-all w-4/5 h-[600px] p-3">
          <div class="text-start py-2 px-3">
            <p class="text-lg leading-6 font-medium mb-3">
              Unicity Notify Management
            </p>
            <img src="/unicity/list.JPG" alt="" class="w-full h-full object-cover rounded-2xl">
            <p class="text-lg leading-6 font-medium mt-3">
              Notify List
            </p>
            <p class="text-sm text-white my-2">
              This page is for managing notifications from the backyard side. You can add, delete, and edit
              notifications to be displayed on the home page. Additionally, you can search by both the name and date of
              the item. The status of the notification will change automatically when it reaches the scheduled time or
              when the time has passed.
            </p>

            <img src="/unicity/Unicity Notify Manament.JPG" alt="" class="w-full h-full object-cover rounded-2xl">
            <p class="text-lg leading-6 font-medium mt-3">
              Notify Detail
            </p>
            <p class="text-sm text-white my-2">
              This page can be accessed after selecting "ADD NEW" or clicking the edit icon. You can add a name,
              description, start date of notification, end date of notification, and an image for the notification.
            </p>

            <img src="/unicity/preview.JPG" alt="" class="w-full h-full object-cover rounded-2xl">
            <p class="text-lg leading-6 font-medium mt-3">
              Preview Notify Detail
            </p>
            <p class="text-sm my-2 text-white">
              After entering the information and clicking the "Preview" button, a pop-up will appear as shown in the
              image above. When you click "Save," the entered information will be displayed on the front page in the web
              page's frontend section, as shown in the bottom image.
            </p>
            <img src="/unicity/homepage.JPG" alt="" class="w-full h-full object-cover rounded-2xl">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  isOpen?: boolean
}
withDefaults(defineProps<Props>(), {
  isOpen: false,
});

const emit = defineEmits(['close'])
// const isOpen = ref<boolean>(false);
// // const open = ref<boolean>(false)

// function openDialog() {
//   isOpen.value = true;
// }

function closeDialog() {
  // isOpen.value = false
  emit('close')
}

</script>
