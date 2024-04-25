<template>
  <div>
    <header class="px-10 pt-10 fixed top-0 bg-[#17161C] w-full z-10">
      <nav class="flex">
        <div class="w-2/4">
          <p class="text-2xl">Worakarn Supasee</p>
        </div>
        <div class="w-2/4 flex justify-between">
          <a class="cursor-pointer hover:text-[#FE805D]" @click="goto(about)">About</a>
          <a class="cursor-pointer hover:text-[#FE805D]" @click="goto(education)">Education</a>
          <a class="cursor-pointer hover:text-[#FE805D]" @click="goto(experience)">Experience</a>
          <a class="cursor-pointer hover:text-[#FE805D]" @click="goto(work)">Work</a>
          <a class="cursor-pointer hover:text-[#FE805D]" @click="goto(contact)">Contact</a>
        </div>
      </nav>
      <hr class="mt-8" />
    </header>
    <div class="px-40">
      <div class="flex mt-12 pt-24">
        <div class="w-2/4 flex justify-center">
          <img src="/Pea.JPG" alt="" class="max-w-xs max-h-xs object-cover">
        </div>
        <div class="w-2/4 ">
          <p class="mb-5 text-[#FE805D] text-6xl">Worakarn Supasee</p>
          <p class="text-2xl">Software Engineer</p>
          <p class="mt-10 text-xl text-[#FE805D]" ref="about">"Hi! I'm Pea"</p>
          <p>I recently graduated from Mae Fah Luang University with a degree in Software Engineering.
            My primary interest lies in frontend development, and I have gained practical experience through a
            three-month
            internship. I am eager to further enhance my skills and contribute to innovative projects within your
            company.
          </p>
          <p class="text-3xl mt-6 text-[#FE805D]">About Me!</p>
          <p class="mt-2 text-xl">Workarn Supasee</p>
          <p class="text-xl">(Pea)</p>
          <p class="mt-2">Phone: 081-595-6079</p>
          <p class="mt-2" ref="education">Email: worakarn.supa@gmail.com</p>
        </div>
      </div>
      <div class="mt-32 text-start">
        <h2 class="text-3xl text-[#FE805D] mb-12 text-center">EDUCATION</h2>
        <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 mb-6 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 class="text-lg font-semibold lg:text-xl text-[#FE805D]">2014 - 2019</h3>
              <h3 class="text-lg font-semibold lg:text-xl ">HIGH SCHOOL</h3>
              <p class="mt-2 leading-6 font-bold">ChiangRai Municipality School 5 Denha</p>
              <p class="mt-2 leading-6 text-gray-300">
                In middle school, I studied in the science and mathematics stream, while in high school, I pursued the
                computer science stream.</p>
            </div>
            <div class="relative col-start-5 col-end-6 mt-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-[#FE805D] rounded-t-full">
                </div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-[#FE805D] rounded-full top-1"></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-[#FE805D]"></div>
              </div>
              <div class="absolute w-4 h-4 -mt-3 bg-[#FE805D] rounded-full left-1 top-1/3"></div>
            </div>
            <div class="relative p-4 my-6 col-start-6 col-end-10 mr-auto">
              <h3 class="text-lg font-semibold lg:text-xl text-[#FE805D]">2020 - 2024</h3>
              <h3 class="text-lg font-semibold lg:text-xl ">University</h3>
              <p class="mt-2 leading-6 font-bold" ref="experience">Mae Fah Luang University.</p>
              <p class="mt-2 leading-6 text-gray-300">I chose to study Software Engineering because of my interest in
                programming and the opportunity to collaborate on projects with friends. Through this, I discovered my
                interest in front-end development.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-32 text-start">
        <h2 class="text-3xl text-[#FE805D]  mb-12 text-center">EXPERIENCE</h2>
        <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div class="flex md:contents flex-row-reverse">
            <div class="relative p-4 mb-6 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 class="text-lg font-semibold lg:text-xl text-[#FE805D]">15 Jan - 3 May 2024</h3>
              <h3 class="text-lg font-semibold lg:text-xl ">Dudee-Indeed Co.,Ltd</h3>
              <p class="mt-2 leading-6 font-bold">Frontend Developer (Intern)</p>
              <p class="mt-2 leading-6 text-gray-300">During my internship, I learned about frontend development where I
                acquired knowledge in using Vue.js, Tailwind CSS, and integrating with APIs. I applied these skills in a
                mini-project during my internship. Afterward, I provided support in various company projects and became
                a key contributor in developing new features for company's clients to use.</p>
            </div>
            <div class="relative col-start-5 col-end-6 mt-6 mr-7 md:mx-auto">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-[#FE805D] rounded-t-full">
                </div>
              </div>
              <div class="absolute w-6 h-6 -mt-3 bg-[#FE805D] rounded-full top-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-32 text-start">
        <h2 class="text-3xl text-[#FE805D]  mb-12 text-center" ref="skill">SKILL</h2>
        <div class="grid grid-cols-5 gap-5 justify-items-center content-center">
          <!-- eslint-disable -->
          <div class="w-full h-full rounded bg-[#323030] py-4 my-4 content-center" v-for="item in skillList">
            <img :src="item.image" :alt="item.image" class="w-[80px] h-[80px] mx-auto">
            <p class="text-center mt-2 font-medium">{{ item.name }}</p>
          </div>
        </div>
      </div>

      <div class="mt-32 text-start">
        <h2 class="text-3xl text-[#FE805D]  mb-12 text-center" ref="work">RECENT WORKS</h2>
        <div class="grid grid-cols-3 justify-items-center">

          <!-- <div class="w-[326px] h-[326px] rounded bg-[#323030] my-4">
          <img src="https://kousikaganesan.github.io/_nuxt/img/840cef6.jpeg" alt=""
            class="w-[326px] h-[226px] object-cover">
          <p class="text-start mt-2 font-bold ml-5 text-xl">Title</p>
          <p class="text-start font-base ml-5">Sub Title</p>
        </div> -->

          <div class="w-[326px] h-[326px] rounded bg-[#323030] my-4 group">
            <div class="relative overflow-hidden">
              <img src="/unicity/homepage.JPG" alt="" class="w-[326px] h-[226px] object-cover">
              <!-- Overlay for hover effect -->
              <div
                class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <!-- Add to cart button -->
                <button class="bg-black text-white py-2 px-5 rounded-3xl" @click="openDialog()">View more</button>
              </div>
            </div>
            <!-- Product details -->
            <p class="text-start mt-2 font-bold ml-5 text-xl">Unicity Notify Management</p>
            <p class="text-start text-sm ml-5 mt-2">Create new function in back office</p>
          </div>

        </div>
      </div>

      <div class="mt-32 text-start mb-20">
        <h2 class="text-3xl text-[#FE805D]  mb-12 text-center" ref="contact">CONTACT</h2>
        <div class="grid grid-cols-2 gap-4 justify-items-center">
          <div
            class="w-full h-full rounded-xl bg-[#323030] py-4 my-4 content-center border border-white border-2 hover:border-[#FE805D] hover:text-[#FE805D]"
            v-for="item in contactList" :href="item.link" @click="openLink(item.link)">
            <p class="text-center mt-2 font-medium">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <footer>
        <p class="text-center text-gray-500 mb-10">
          © 2024 Worakarn Supasee
        </p>
      </footer>
    </div>
  </div>
  <dialog-unicity :is-open="showDialog" @close="closeDialog" />
</template>

<script setup lang="ts">

const skillList = ref([{ name: 'HTML', image: '/icon/HTML.svg' },
{ name: 'Javascript', image: '/icon/javascript.svg' },
{ name: 'Css', image: '/icon/Css.svg' },
{ name: 'Tailwin Css', image: '/icon/tailwind-css.svg' },
{ name: 'VueJs', image: '/icon/vue.svg' },
{ name: 'NuxtJs', image: '/icon/Nuxt.svg' },
{ name: 'Figma', image: '/icon/Figma.svg' },
{ name: 'Gitlab', image: '/icon/GitLab.svg' },
{ name: 'Postman', image: '/icon/Postman.svg' },
{ name: 'Visual Studio Code', image: '/icon/vs-code.svg' }])

const contactList = ref([{ name: 'Facebook', link: "https://www.facebook.com/pee.golden" },
{ name: 'Instagram', link: "https://www.instagram.com/_.worakarn._/" },
{ name: 'Linkedin', link: "https://www.linkedin.com/in/worakarn-supasee-9a1728305/" },
{ name: 'Gitlab', link: "https://gitlab.com/worakarn.supa" }])

const about = ref(null)
const education = ref(null)
const experience = ref(null)
const work = ref(null)
const contact = ref(null)

const showDialog = ref(false);

function goto(refName: any) {
  refName.scrollIntoView({ behavior: "smooth" });
}

function openLink(link: any) {
  window.open(link, '_blank');
}

function openDialog() {
  console.log('hi1:', showDialog)
  showDialog.value = true;
}
function closeDialog() {
  console.log('hi2:', showDialog)
  showDialog.value = false;
}

</script>

<style>
body {
  background-color: #17161C;
  color: white;
}
</style>
