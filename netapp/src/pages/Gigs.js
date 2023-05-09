import React, { useEffect, useState } from 'react'
import Naavbaar from '../components/Navbaar'
import CarouselGigs from '../components/CarouselGigs'

function GigCard({ gig }) {
  const [applied, setApplied] = useState(false);

  const handleClick = () => {
    setApplied(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img
        className="h-56 w-full object-cover"
        src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?b=1&s=170667a&w=0&k=20&c=GnW36mPEYr3TRpPZNLtT75u8v2HOczvRxGckWUN3hVg="
        alt="Gig image"
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">Gig Name: {gig.gigName}</h2>
        <p className="text-gray-500 text-base mb-2">Category: {gig.category}</p>
        <p className="text-gray-700 text-base mb-4">Work description: {gig.workDesc}</p>
        <p className="text-gray-700 text-base mb-4">Remuneration: {gig.remuneration}</p>
        <p className="text-gray-700 text-base mb-4">Deadline: {gig.deadline}</p>
        <p className="text-gray-700 text-base mb-4">Fresherspecific: {gig.fresherSpecific}</p>
        <div className="flex justify-end">
          {!applied ? (
            <button
              type="button"
              onClick={handleClick}
              className="bg-blue-600 text-blue-100 rounded-lg py-2 px-4 m-2 shadow hover:shadow-xl hover:bg-blue-700 duration-300"
            >
              Apply
            </button>
          ) : (
            <button
              type="button"
              className="bg-green-600 text-green-100 rounded-lg py-2 px-4 m-2 shadow hover:shadow-xl hover:bg-green-700 duration-300"
            >
              Applied
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Gigs() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/gigs');
      const data = await response.json();
      setGigs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <Naavbaar />
      <CarouselGigs />
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 my-5">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {gigs.map((gig) => (
            <GigCard key={gig.id} gig={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
