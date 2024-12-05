import React from 'react'

const Cta5 = () => {
  return (
    <section class="py-16 bg-indigo-600">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="font-manrope text-5xl text-white text-center font-bold mb-14">Subscribe Newsletter </h2>
            <div class="flex items-center justify-center flex-col gap-4 sm:flex-row">
                <input type="text" name="email" class="py-2.5 px-5 h-14 w-full md:max-w-md border border-gray-300 bg-indigo-500 shadow-sm rounded-full text-lg text-white focus:outline-none placeholder:text-indigo-200" placeholder="Your mail id.." />
                <button class="h-14 py-3.5 px-7 bg-white shadow-sm rounded-full text-indigo-600 font-semibold">Subscribe</button>
            </div>
           
      </div>
    </section>
  )
}

export default Cta5
