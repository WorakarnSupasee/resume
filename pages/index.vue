<template>
  <div>
    <header class="px-10 pt-10 md:fixed top-0 bg-[#17161C] w-full z-10">
      <nav class="hidden md:flex">
        <div class="md:w-2/4">
          <p class="text-2xl">Worakarn Supasee</p>
        </div>
        <div class="md:w-3/4 flex justify-between">
          <a class="cursor-pointer hover:text-[#FE805D]" @click="goto(about)"
            >About</a
          >
          <a
            class="cursor-pointer hover:text-[#FE805D]"
            @click="goto(education)"
            >Education</a
          >
          <a
            class="cursor-pointer hover:text-[#FE805D]"
            @click="goto(experience)"
            >Experience</a
          >
          <a
            class="cursor-pointer hover:text-[#FE805D]"
            @click="goto(skill)"
            >Skill</a
          >
          <a class="cursor-pointer hover:text-[#FE805D]" @click="goto(work)"
            >Work</a
          >
          <a class="cursor-pointer hover:text-[#FE805D]" @click="goto(contact)"
            >Contact</a
          >
        </div>
      </nav>
      <hr class="hidden md:flex mt-8" />
    </header>
    <div class="px-0">
      <div class="md:flex mt-0 pt-0 md:mt-12 md:pt-24 px-5 md:px-15 lg:px-40" >
        <div class="md:w-2/4 flex justify-center" data-aos="fade-right">
          <img
            src="/Pea.JPG"
            alt=""
            class="max-w-xs max-h-full object-cover rounded-lg"
          />
        </div>
        <div class="md:w-2/4">
          <p data-aos="fade-left"
            class="mb-1 md:mb-5 text-[#FE805D] text-4xl md:text-6xl mt-2 md:mt-0"
          >
            Worakarn Supasee
          </p>
          <p data-aos="fade-left" class="text-2xl">Software Engineer</p>
          <p data-aos="fade-left" class="mt-2 md:mt-10 text-xl text-[#FE805D] font-bold" ref="about">
            "Hi! I'm Pea"
          </p>
          <p data-aos="fade-left">
            I have just graduated from Mae Fah Luang University with a degree in
            Software Engineering. My main interest lies in frontend development,
            and I have gained practical experience through a cooperative
            internship. I am eager to further develop my skills and ready to be
            part of your company.
          </p>
          <p data-aos="fade-left" class="text-3xl mt-6 text-[#FE805D] font-bold">About Me!</p>
          <p data-aos="fade-left" class="mt-2 text-xl">Workarn Supasee</p>
          <p data-aos="fade-left" class="text-xl">(Pea)</p>
          <p data-aos="fade-left" class="mt-2">Phone: 081-595-6079</p>
          <p data-aos="fade-left" class="mt-2" ref="education">Email: worakarn.supa@gmail.com</p>
        </div>
      </div>
      <div 
        class="mt-12 md:mt-32 pt-5 pb-5 px-5 md:px-15 lg:px-40 text-start bg-fixed"
        style="
          background-image: linear-gradient(
              rgba(23, 22, 28, 0.5),
              rgba(23, 22, 28, 0.5)
            ),
            url('./test.jpg');
          background-size: cover;
        "
      >
        <h2 class="text-3xl text-[#FE805D] mb-3 md:mb-12 text-center font-bold" data-aos="fade-up">
          EDUCATION
        </h2>
        <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div class="flex md:contents flex-row-reverse">
            <div 
              
              class="relative p-4 mb-6 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
            >
              <h3 class="text-lg font-semibold lg:text-xl text-[#FE805D]" data-aos="fade-right">
                2014 - 2020
              </h3>
              <h3 class="text-lg font-semibold lg:text-xl" data-aos="fade-right">HIGH SCHOOL</h3>
              <p class="mt-2 leading-6 font-bold" data-aos="fade-right">
                ChiangRai Municipality School 5 Denha
              </p>
              <p class="mt-2 leading-6 text-gray-300" data-aos="fade-right">
                In middle school, I studied in the science and mathematics
                stream, while in high school, I pursued the computer science
                stream.
              </p>
            </div>
            <div class="relative col-start-5 col-end-6 mt-6 mr-7 md:mx-auto" data-aos="fade-up">
              <div class="flex items-center justify-center w-6 h-full" >
                <div class="w-1 h-full bg-[#FE805D] rounded-t-full"></div>
              </div>
              <div
                class="absolute w-6 h-6 -mt-3 bg-[#FE805D] rounded-full top-1"
              ></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto" data-aos="fade-up">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-[#FE805D]"></div>
              </div>
              <div
                class="absolute w-4 h-4 -mt-3 bg-[#FE805D] rounded-full left-1 top-1/3"
              ></div>
            </div>
            <div class="relative p-4 my-6 col-start-6 col-end-10 mr-auto">
              <h3 class="text-lg font-semibold lg:text-xl text-[#FE805D]" data-aos="fade-left">
                2020 - 2024
              </h3>
              <h3 class="text-lg font-semibold lg:text-xl" data-aos="fade-left">University</h3>
              <p class="mt-2 leading-6 font-bold" data-aos="fade-left">Mae Fah Luang University.</p>
              <p class="mt-2 leading-6 text-gray-300" ref="experience" data-aos="fade-left">
                I chose to study Software Engineering because of my interest in
                programming and the opportunity to collaborate on projects with
                friends. Through this, I discovered my interest in front-end
                development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-5 pb-5 text-start px-5 md:px-15 lg:px-40"
        style="background-color: #1f222f"
      >
        <h2 class="text-3xl text-[#FE805D] mb-3 md:mb-12 text-center font-bold" data-aos="fade-up">
          EXPERIENCE
        </h2>
        <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div class="flex md:contents flex-row-reverse">
            <div
              class="relative p-4 mb-6 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto"
            >
              <h3 class="text-lg font-semibold lg:text-xl text-[#FE805D]" data-aos="fade-right">
                6 June - 31 July (2023)
              </h3>
              <h3 class="text-lg font-semibold lg:text-xl" data-aos="fade-right">Hornbill Group</h3>
              <p class="mt-2 leading-6 font-bold" data-aos="fade-right">
                Frontend Developer (Intern)
              </p>
              <p class="mt-2 leading-6 text-gray-300" data-aos="fade-right">
                I worked on a senior project with Hornbill Group or ISUZU Chiang
                Rai, which was the final project of my university. The project
                involved vehicle inspection, allowing me to learn about Vue.js
                and real-world work, and teamwork.
              </p>
            </div>
            <div class="relative col-start-5 col-end-6 mt-6 mr-7 md:mx-auto" data-aos="fade-up">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-[#FE805D] rounded-t-full"></div>
              </div>
              <div
                class="absolute w-6 h-6 -mt-3 bg-[#FE805D] rounded-full top-1"
              ></div>
            </div>
          </div>

          <div class="flex md:contents" >
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto" data-aos="fade-up">
              <div class="flex items-center justify-center w-6 h-full">
                <div class="w-1 h-full bg-[#FE805D]"></div>
              </div>
              <div
                class="absolute w-4 h-4 -mt-3 bg-[#FE805D] rounded-full left-1 top-1/3"
              ></div>
            </div>
            <div class="relative p-4 my-6 col-start-6 col-end-10 mr-auto">
              <h3 class="text-lg font-semibold lg:text-xl text-[#FE805D]" data-aos="fade-left">
                15 Jan - 3 May (2024)
              </h3>
              <h3 class="text-lg font-semibold lg:text-xl" data-aos="fade-left">
                Dudee-Indeed Co.,Ltd
              </h3>
              <p class="mt-2 leading-6 font-bold" data-aos="fade-left">
                Frontend Developer (Intern)
              </p>
              <p class="mt-2 leading-6 text-gray-300" data-aos="fade-left">
                During my internship, I learned about frontend development where
                I acquired knowledge in using Vue.js, Tailwind CSS, and
                integrating with APIs. I applied these skills in a mini-project
                during my internship. Afterward, I provided support in various
                company projects and became a key contributor in developing new
                features for company's clients to use.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-5 md:pt-32 pb-20 text-start px-5 md:px-15 lg:px-40"
        style="background-color: #1f222f"
      >
        <h2
          class="text-3xl text-[#FE805D] mb-12 text-center font-bold"
          ref="skill"
          data-aos="fade-up"
        >
          SKILL
        </h2>
        <div
          class="grid grid-cols-2 md:grid-cols-5 gap-5 justify-items-center content-center"
        >
          <!-- eslint-disable -->
          <div
            data-aos="fade-up"
            class="w-full h-full rounded bg-[#323030] py-4 my-4 px-2 content-center"
            v-for="item in skillList"
          >
            <nuxt-img
              :src="item.image"
              alt=""
              class="w-[80px] h-[80px] mx-auto"
            />
            <p class="truncate text-center mt-2 font-medium">{{ item.name }}</p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-start px-5 md:px-15 lg:px-40">
        <h2
          class="text-3xl text-[#FE805D] mb-12 text-center font-bold"
          ref="work"
          data-aos="fade-up"
        >
          RECENT WORKS
        </h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center"
          data-aos="fade-up"
        >
          <div class="w-[326px] h-[326px] rounded bg-[#323030] my-4 group">
            <div class="relative overflow-hidden">
              <img
                src="/unicity/homepage.JPG"
                alt=""
                class="w-[326px] h-[226px] object-cover"
              />
              <!-- Overlay for hover effect -->
              <div
                class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <!-- Add to cart button -->
                <button
                  class="bg-black text-white py-2 px-5 rounded-3xl"
                  @click="openDialog()"
                >
                  View more
                </button>
              </div>
            </div>
            <!-- Product details -->
            <p class="text-start mt-2 font-bold ml-5 text-xl">
              Unicity Notify Management
            </p>
            <p class="text-start text-sm ml-5 mt-2">
              Create new function in back office
            </p>
          </div>
        </div>
      </div>

      <div class="mt-32 text-start mb-20 px-5 md:px-15 lg:px-40">
        <h2
          class="text-3xl text-[#FE805D] mb-12 text-center font-bold"
          ref="contact"
          data-aos="fade-up"
        >
          CONTACT
        </h2>
        <div class="grid grid-cols-2 gap-4 justify-items-center"  data-aos="fade-up">
          <div
            class="w-full h-full rounded-xl bg-[#323030] py-4 my-4 content-center border border-white border-2 hover:border-[#FE805D] hover:text-[#FE805D]"
            v-for="item in contactList"
            :href="item.link"
            @click="openLink(item.link)"
          >
            <p class="text-center mt-2 font-medium">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <footer>
        <p class="text-center text-gray-500 mb-10">© 2024 Worakarn Supasee</p>
      </footer>
    </div>
  </div>
  <dialog-unicity :is-open="showDialog" @close="closeDialog" />
</template>

<script setup lang="ts">
const skillList = ref([
  { name: "HTML", image: "/icon/HTML.svg" },
  { name: "Css", image: "/icon/Css.svg" },
  { name: "Javascript", image: "/icon/javascript.svg" },
  { name: "Typescript", image: "/icon/typescript.svg" },
  { name: "Tailwin Css", image: "/icon/tailwind-css.svg" },
  { name: "VueJs", image: "/icon/vue.svg" },
  { name: "NuxtJs", image: "/icon/Nuxt.svg" },
  { name: "Figma", image: "/icon/Figma.svg" },
  { name: "Gitlab", image: "/icon/GitLab.svg" },
  { name: "Postman", image: "/icon/Postman.svg" },
]);

const contactList = ref([
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/ZgwaWvaoMHXDqmhZ/?mibextid=qi2Omg",
  },
  { name: "Instagram", link: "https://www.instagram.com/_.worakarn._/" },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/worakarn-supasee-9a1728305/",
  },
  { name: "Gitlab", link: "https://gitlab.com/worakarn.supa" },
]);

const about = ref(null);
const education = ref(null);
const experience = ref(null);
const skill = ref(null);
const work = ref(null);
const contact = ref(null);

const showDialog = ref(false);

function goto(refName: any) {
  refName.scrollIntoView({ behavior: "smooth" });
}

function openLink(link: any) {
  window.open(link, "_blank");
}

function openDialog() {
  showDialog.value = true;
}
function closeDialog() {
  showDialog.value = false;
}
</script>

<style>
body {
  background-color: #17161c;
  color: white;
}
</style>
