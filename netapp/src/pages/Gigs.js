import React from 'react'
import Naavbaar from '../components/Navbaar'
import CarouselGigs from '../components/CarouselGigs'
function Gigs () {
  return (
    <div class=""> 
        <Naavbaar/>
        <CarouselGigs/>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 my-5">
        <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery" 
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdyYXBoaWMlMjBkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1532800783378-1bed60adaf58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHZvaWNlJTIwYWN0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1616499370260-485b3e5ed653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZWxhbmNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1535432715554-75d3f522ab18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            </div>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
        </div>
        </div>
    </div>
  )
}

export default Gigs