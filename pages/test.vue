<template>
  <div>
    <!-- Dialog -->
    <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Dialog overlay -->
        <div class="fixed inset-0 transition-opacity" @click="closeDialog">
          <div class="absolute inset-0 bg-gray-500 opacity-5"></div>
        </div>

        <!-- Dialog content -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
          class="inline-block align-middle bg-[#323030] rounded-lg text-left overflow-y-scroll shadow-xl transform transition-all w-4/5 h-[600px] p-3">
          <div class="text-start">
            <p class="text-lg leading-6 font-medium mb-3">
              Unicity Notify Management
            </p>
            <img src="/unicity/list.JPG" alt="" class="w-full h-full object-cover">
            <p class="text-lg leading-6 font-medium ">
              Notify List
            </p>
            <p class="text-sm text-gray-500 my-2">
              หน้านี้เป็นการจัดการการแจ้งเตือนของฝั่งหลังบ้าน สามารถเพิ่ม ลบ และ แก้ไข
              การแจ้งเตือนที่จะนำไปแสดงผลในหน้าโฮมเพจได้ นอกจากนี้ยังค้นหาได้ทั้งชื่อและวันที่ ของรายการนั้นๆ
              ส่วนสถานะของการแจ้งเตือนจะเปลี่ยนไปเองเมื่อถึงเวลาหรือเวลาผ่านไปแล้ว
            </p>

            <img src="/unicity/Unicity Notify Manament.JPG" alt="" class="w-full h-full object-cover">
            <p class="text-lg leading-6 font-medium ">
              Notify Detail
            </p>
            <p class="text-sm text-gray-500 my-2">
              หน้านี้สามารถเข้ามาได้หลังจากกดเลือก ADD NEW หรือกดไอค่อนแก้ไข สามารถเพิ่มชื่อ รายละเอียด
              วันเริ่มต้นการแจ้งเตือน วันจบการแจ้งเตือน และรูปของการแจ้งเตือนได้
            </p>

            <img src="/unicity/preview.JPG" alt="" class="w-full h-full object-cover">
            <p class="text-lg leading-6 font-medium ">
              Preview Notify Detail
            </p>
            <p class="text-sm text-gray-500 my-2">
              หลังจากใส่ข้อมูลเรียบแล้วกดปุ่มพรีวิวจะแสดงป๊อปอัพขึ้นดังภาพด้านบน
              เมื่อกดบันทึกแล้วข้อมูลที่ใส่จะไปแสดงยังหน้าแรกในส่วนของฟ้อนเว็บเพจดั่งภาพล่าง
            </p>
            <img src="/unicity/homepage.JPG" alt="" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

function openDialog() {
  isOpen.value = true;
}

</script>

