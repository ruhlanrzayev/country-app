import { useState} from 'react'

function Title( { setValue, status, setStatus } ) {

  return (
    <>
      <section className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-5xl font-bold leading-none sm:text-[50px]">Explore every  
            <span className="text-violet-600"> Country</span> in the World
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">Explore detailed facts, vibrant images, and key information about every country on Earth. Begin your journey of learning and adventure today.</p>
          <div className="flex flex-wrap justify-center flex-col">
            <input onChange={(e) => setValue(e.target.value)} type="text" placeholder='Search Any Country' className={`border p-2 rounded-full outline-0 dark:border-gray-300 ${status ? 'block' : 'hidden'}`} />
            <button onClick={() => setStatus(!status)} className="px-8 py-3 m-2 text-lg border rounded-full cursor-pointer transition-all duration-200 hover:bg-[#ffffffcd] dark:hover:bg-[#fffefe31] dark:text-gray-100 dark:border-gray-300">Search by name</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Title