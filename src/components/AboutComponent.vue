<template>
  <div class="text-white flex flex-col justify-center items-center py-6 md:py-14 lg:py-16">
    <div class="inline-block">
      <h1 class="text-sm-title md:text-md-title lg:text-lg-title font-bold">About Me</h1>
      <div class="space-y-1 md:space-y-1 lg:space-y-1.5">
        <div class="h-[2px] md:h-[3px] lg:h-[4px] rounded-md bg-orange w-full" />
        <div class="h-[2px] md:h-[3px] lg:h-[4px] mx-2 rounded-md bg-orange" />
      </div>
    </div>
    <div
      class="mt-4 md:mt-8 lg:mt-14 w-full flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-8 lg:space-x-10"
    >
      <div
        class="float-start w-full md:w-2/5 lg:w-2/5 flex items-start justify-center px-0 md:px-6 lg:px-10"
      >
        <img src="../../public/aboutme.JPG" alt="About Me" class="w-full h-auto object-contain" />
      </div>

      <div class="text-white w-full md:w-3/5 lg:w-3/5 mt-10 md:mt-0 lg:mt-0">
        <h3 class="text-sm-h3 md:text-md-h3 lg:text-lg-h3 font-semibold">Coding is My Passion</h3>
        <p
          class="text-balance py-2 md:py-4 lg:py-6 text-sm-p md:text-md-p lg:text-lg-p leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
          dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <button
          class="text-sm md:text-sm lg:text-lg px-6 md:px-8 lg:px-10 py-2 md:py-2 lg:py-2 bg-orange rounded-sm font-normal"
        >
          Download CV
        </button>
      </div>
    </div>
  </div>
</template>