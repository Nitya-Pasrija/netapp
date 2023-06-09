
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GigListing() {


  const [user, setUser] = useState({
    gigName: "",
    category: "",
    workDesc: "",
    deadline: "",
    remuneration: "",
    fresherSpecific: "",
    imageURL: "",
  });

  // Handle Inputs
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  }

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object Destructuring
    // Store Object Data into Variables
    const { gigName, category, workDesc, deadline, remuneration, fresherSpecific, imageURL } = user;
    try {
      const res = await fetch('/gigPost', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          gigName, category, workDesc, deadline, remuneration, fresherSpecific, imageURL
        })
      });

      if (res.ok) {
        window.alert("Gig Posted Successfully!");
      } else {
        window.alert("Fill in required details");
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="w-90 m-5 p-12 border-solid border-2 border-black ">
        <form onSubmit={handleSubmit} method='POST'>
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">


              <div class="mt-15 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-4">
                  <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Gig Name*</label>
                  <div class="mt-2">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input type="text" name="gigName" id="gigName" autocomplete="gigName" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Frontend bug fixing at Spotify" value={user.gigName} onChange={handleInput} />
                    </div>
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="workDesc" class="block text-sm font-medium leading-6 text-gray-900">Work description*</label>
                  <div class="mt-2">
                    <textarea id="workDesc" name="workDesc" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.workDesc} onChange={handleInput}></textarea >
                  </div>
                  <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the gig. Mention the last day to apply as well.</p>
                </div>


                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">URL</label>
                  <div class="mt-2">
                    <input type="text" name="imageURL" id="imageURL" autocomplete="imageURL" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.imageURL} onChange={handleInput} />
                  </div>
                </div>

              </div>
            </div>

            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">Additional Information</h2>


              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Category*</label>
                  <div class="mt-2">
                    <input type="text" name="category" id="category" autocomplete="category" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.category} onChange={handleInput} />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Remuneration (in INR)*</label>
                  <div class="mt-2">
                    <input type="number" name="remuneration" id="remuneration" autocomplete="remuneration" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.remuneration} onChange={handleInput} />
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Deadline (in DD-MM-YYYY format)</label>
                  <div class="mt-2">
                    <input id="deadline" name="deadline" type="date" autocomplete="deadline" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.deadline} onChange={handleInput} min={new Date().toISOString().split('T')[0]} />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Fresher Specific?(Yes/No)</label>
                  <div class="mt-2">
                    <input type="text" name="fresherSpecific" id="fresherSpecific" autocomplete="fresherSpecific" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.fresherSpecific} onChange={handleInput} />
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel and Go back</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post it! </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GigListing;