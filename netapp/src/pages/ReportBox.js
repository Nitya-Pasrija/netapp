import React from 'react'
import Formwarn from '../components/Formwarn';

const ReportBox = () => {
  return (
    <>
        <div class='bg-gradient-to-r from-pink-500 hover:to-yellow-500'>
            <div class="bg-orange-100 border-t border-b border-orange text-red px-4 py-3 justify-text-center" role="alert">
                <p class="font-bold">Caution. Please note!</p>
                <p class="text-sm">We will send your message across to admins. We will reach back to you in 5 working days.</p>
            </div>
        </div>
        <div className="w-90 m-5 p-12 border-solid border-2 border-black ">
            <Formwarn/>
        </div>
    </>
  )
}

export default ReportBox