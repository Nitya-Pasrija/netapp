


import React from 'react'
import Navbaar from '../components/Navbaar'
import Button from 'react-bootstrap/Button';

const ContactUs = () => {
  return (
    <>
        <Navbaar/>
        <div className="w-90 m-5 p-12 border-solid border-2 border-black ">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <span
                    class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:bg-zinc-800 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="basic-addon1"
                    >@</span
                >
                <input
                    type="text"
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Short Subject"
                    aria-label="Username"
                    aria-describedby="basic-addon1" />
                </div>

                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="text"
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Sender's email"
                    aria-label="Sender's email"
                    aria-describedby="basic-addon2" />
                <span
                    class="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="basic-addon2"
                    >@example.com</span
                >
                </div>

                <label
                for="basic-url"
                class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >Your vanity URL</label
                >
                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <span
                    class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="basic-addon3"
                    >https://example.com/users/</span
                >
                <input
                    type="text"
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="basic-url"
                    aria-describedby="basic-addon3" />
                </div>

                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                
                </div>

                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="text"
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Phone Number"
                    aria-label="Username" />
                <span
                    class="flex items-center whitespace-nowrap border border-x-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    >@</span
                >
                <input
                    type="text"
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Country"
                    aria-label="Server" />
                </div>

                <div class="relative flex w-full flex-wrap items-stretch">
                <span
                    class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:bg-zinc-800 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    >Enter Message Here</span
                >
                <textarea
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    aria-label="With textarea"></textarea>
            </div>
            <div class="py-5 justify-center">
            <Button variant="primary" type="submit">
            Submit
            </Button>
            </div>
        </div>
    </>
  )
}

export default ContactUs