import React from 'react'

const Cta7 = () => {
  return (
    <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />
      <div class="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
        <h2 class="text-white md:text-5xl text-3xl font-bold mb-8">Startup Website <span class="text-yellow-500">Template</span></h2>
        <p class="text-lg text-center text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        <a href="javascript:void(0)"
          class="mt-12 text-base font-semibold py-2.5 px-5 border-2 border-yellow-600 hover:border-yellow-400 bg-transparent text-yellow-500 rounded">
          Get started
        </a>
      </div>
    </div>
  )
}

export default Cta7
