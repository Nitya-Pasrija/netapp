import React from 'react';

function ProfilePage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow-lg">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YSUyMGd1eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Workflow"
                                />
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Dashboard</a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"> Gig Listings </a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"> Contact Us</a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"> Payment Track</a>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <img
                            className="h-60 w-full object-cover"
                            src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
                            alt="Profile banner"
                        />
                    </div>
                    <div className="mt-8 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">John Doe</h2>
                                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 1.5a6 6 0 100 12 6 6 0 000-12zM7.5 10a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>26 years old</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 1.5a6 6 0 100 12 6 6 0 000-12zM7.5 10a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Male</span>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v3h2a2 2 0 012 2v5a2 2 0 01-2 2h-2v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3H0a2 2 0 01-2-2V7a2 2 0 012-2zm2 2v3h12V7H4zm2 4a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Govt ID: 123456789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                About
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    mauris ex, tristique ut libero vel, molestie interdum tellus.
                                    Aenean consequat metus quis orci auctor, nec porttitor sapien
                                    blandit. Suspendisse potenti.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Qualification
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                                <p>Bachelor's Degree in Computer Science</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Fields of Interest
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                                <p>Web Development, Artificial Intelligence, Cybersecurity</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Experience
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    mauris ex, tristique ut libero vel, molestie interdum tellus.
                                    Aenean consequat metus quis orci auctor, nec porttitor sapien
                                    blandit. Suspendisse potenti.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Recent Work Samples
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex">
                                            <a
                                                href="#"
                                                className="truncate hover:text-gray-900"
                                            >
                                                Project 1
                                            </a>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                View
                                            </a>
                                        </div>
                                    </li>
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex">
                                            <a
                                                href="#"
                                                className="truncate hover:text-gray-900"
                                            >
                                                Project 2
                                            </a>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                View
                                            </a>
                                        </div>
                                    </li>
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex">
                                            <a
                                                href="#"
                                                className="truncate hover:text-gray-900"
                                            >
                                                Project 3
                                            </a>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                View
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProfilePage;




