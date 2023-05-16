import React from 'react'
import Naavbaar from '../components/Navbaar'
import CarouselGigs from '../components/CarouselGigs'
function GigsCard() {
    return (
        <div class="">
            <Naavbaar />
            <CarouselGigs />
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 my-5">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    {/* <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery" 
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdyYXBoaWMlMjBkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            </div> */}
                    {/* <div class="flex w-1/3 flex-wrap">
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
            </div> */}
                    {/* <div class="flex w-1/3 flex-wrap">
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
            </div> */}
                    {/* <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1535432715554-75d3f522ab18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            </div> */}

                    {/* joblisting */}

                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <img class="h-56 w-full object-cover" src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?b=1&s=170667a&w=0&k=20&c=GnW36mPEYr3TRpPZNLtT75u8v2HOczvRxGckWUN3hVg=" alt="Gig image" />
                        <div class="p-6">
                            <h2 class="font-bold text-xl mb-2">Gig Name : Design Backend of a Website</h2>
                            <p class="text-gray-500 text-base mb-2">Category: Web Development</p>
                            <p class="text-gray-700 text-base mb-4">Work Description : Need someone to build entire backend of a food delivery page of my MERN website"</p>
                            <p class="text-gray-700 text-base mb-4">Remuneration:  Rs 5000</p>
                            <p class="text-gray-700 text-base mb-4">Deadline: 29/09/2023</p>
                            <p class="text-gray-700 text-base mb-4">Fresher specific: Yes</p>
                            <div class="flex justify-end">
                                <button type="button" id="button" onclick='document.getElementById("button").innerHTML = "Applied"' class="bg-blue-600 text-blue-100 rounded-lg py-2 px-4 m-2 shadow hover:shadow-xl hover:bg-blue-700 duration-300">Apply</button>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <img class="h-56 w-full object-cover" src="https://media.istockphoto.com/id/1331138803/photo/business-technology-internet-and-network-concept-digital-marketing-content-planning.jpg?b=1&s=170667a&w=0&k=20&c=hJWnOpYRfYCdclYlrk8sR1JsNd5Otea7VTtUNUnT1Y4=" alt="Gig image" />
                        <div class="p-6">
                            <h2 class="font-bold text-xl mb-2">Gig Name: Digital Marketing for a Small Business</h2>
                            <p class="text-gray-500 text-base mb-2">Category: Marketing</p>
                            <p class="text-gray-700 text-base mb-4">Work Description: Looking for someone to create and manage digital marketing campaigns for my small business, including social media and email marketing.</p>
                            <p class="text-gray-700 text-base mb-4">Remuneration:  Rs 8000</p>
                            <p class="text-gray-700 text-base mb-4">Deadline: 15/10/2023</p>
                            <p class="text-gray-700 text-base mb-4">Fresher specific: Yes</p>
                            <div class="flex justify-end">
                                <button type="button" id="button" onclick='document.getElementById("button").innerHTML = "Applied"' class="bg-blue-600 text-blue-100 rounded-lg py-2 px-4 m-2 shadow hover:shadow-xl hover:bg-blue-700 duration-300">Apply</button>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <img class="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Gig image" />
                        <div class="p-6">
                            <h2 class="font-bold text-xl mb-2">Gig Name: Photography for a Wedding</h2>
                            <p class="text-gray-500 text-base mb-2">Category: Photography</p>
                            <p class="text-gray-700 text-base mb-4">Work Description: Need a photographer to capture candid and posed shots at my wedding ceremony and reception.</p>
                            <p class="text-gray-700 text-base mb-4">Remuneration:  Rs 15000</p>
                            <p class="text-gray-700 text-base mb-4">Deadline: 15/10/2023</p>
                            <p class="text-gray-700 text-base mb-4">Fresher specific: Yes</p>
                            <div class="flex justify-end">
                                <button type="button" id="apply" onclick='document.getElementById("apply").innerHTML = "Applied"' class="bg-blue-600 text-blue-100 rounded-lg py-2 px-4 m-2 shadow hover:shadow-xl hover:bg-blue-700 duration-300">Apply</button>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <img class="h-56 w-full object-cover" src="https://i0.wp.com/www.helpmegeek.com/wp-content/uploads/2020/05/free-flutter-courses-native-app-development-scaled.jpg?fit=2560%2C1649&ssl=1" alt="Gig image" />
                        <div class="p-6">
                            <h2 class="font-bold text-xl mb-2">Gig Name: Develop an App with Flutter</h2>
                            <p class="text-gray-500 text-base mb-2">Category: Mobile Development</p>
                            <p class="text-gray-700 text-base mb-4">Work Description: Seeking a Flutter developer to create an app for a healthcare startup. Must have experience with Firebase and integrating APIs.</p>
                            <p class="text-gray-700 text-base mb-4">Remuneration:  Rs 20000</p>
                            <p class="text-gray-700 text-base mb-4">Deadline: 01/11/2023</p>
                            <p class="text-gray-700 text-base mb-4">Fresher specific: Yes</p>
                            <div class="flex justify-end">
                                <button type="button" id="button" onclick='document.getElementById("button").innerHTML = "Applied"' class="bg-blue-600 text-blue-100 rounded-lg py-2 px-4 m-2 shadow hover:shadow-xl hover:bg-blue-700 duration-300">Apply</button>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <img class="h-56 w-full object-cover" src="https://media.istockphoto.com/id/547137498/photo/wrting-great-content-concept.jpg?b=1&s=170667a&w=0&k=20&c=PtYDPGHGsCCijJK8dyczfXfDep_M5bKTX-e95cyWG7s=" alt="Gig image" />
                        <div class="p-6">
                            <h2 class="font-bold text-xl mb-2">Gig Name: Content Writing for a Blog</h2>
                            <p class="text-gray-500 text-base mb-2">Category: Writing</p>
                            <p class="text-gray-700 text-base mb-4">Work Description: Looking for a skilled content writer to create blog posts on topics related to personal finance and investing. Must have a strong understanding of SEO and be able to write in a clear and engaging manner.</p>
                            <p class="text-gray-700 text-base mb-4">Remuneration:  Rs 20000</p>
                            <p class="text-gray-700 text-base mb-4">Deadline: 01/11/2023</p>
                            <p class="text-gray-700 text-base mb-4">Fresher specific: Yes</p>
                            <div class="flex justify-end">
                                <button type="button" id="button" onclick='document.getElementById("button").innerHTML = "Applied"' class="bg-blue-600 text-blue-100 rounded-lg py-2 px-4 m-2 shadow hover:shadow-xl hover:bg-blue-700 duration-300">Apply</button>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <img class="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdyYXBoaWMlMjBkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Gig image" />
                        <div class="p-6">
                            <h2 class="font-bold text-xl mb-2">Gig Name: Design a Website Landing Page</h2>
                            <p class="text-gray-500 text-base mb-2">Category : U/X Designing</p>
                            <p class="text-gray-700 text-base mb-4">Work Description : A website landing page design for a E Commerce platform needs to built and submitted on Figma"</p>
                            <p class="text-gray-700 text-base mb-4">Remuneration:  Rs 6000</p>
                            <p class="text-gray-700 text-base mb-4">Deadline: 25/10/2023</p>
                            <p class="text-gray-700 text-base mb-4">Fresher specific: Yes</p>
                            <div class="flex justify-end">
                                <button type="button" id="button" onclick='document.getElementById("button").innerHTML = "Applied"' class="bg-blue-600 text-blue-100 rounded-lg py-2 px-4 m-2 shadow hover:shadow-xl hover:bg-blue-700 duration-300">Apply</button>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default GigsCard