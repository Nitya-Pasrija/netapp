import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'

function SignIn() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    name: '',
    age: '',
    gender: '',
    govtId: '',
    qualification: '',
    about: '',
    interest: '',
    // expertise: '',
    experience: '',
    // preferredLanguageOfCmmunication: '',
    workSamples: '',
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    if (formNo === 1 && state.name && state.age && state.gender) {
      if (state.age < 18) {
        toast.error('Only Valid for users greater than or equal to 18 years of age')
      }
      else {
        setFormNo(formNo + 1)
      }
    }
    else if (formNo === 2 && state.govtId && state.qualification && state.about && state.interest && state.experience) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fillup all input field')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    if (state.workSamples) {
      toast.success('form submit success')
    } else {
      toast.error('Please fillup all input field')
    }
  }
  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-[370px] rounded-md shadow-md bg-white p-5">
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white  ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && <div>
            <div className='flex flex-col mb-2 '>
              <label htmlFor="name">Name</label>
              <input value={state.name} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='name' placeholder='name' id='name' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="age">Age</label>
              <input value={state.age} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='age' placeholder='age' id='age' min='18' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="gender">Gender</label>
              <select value={state.gender} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' name='gender' >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="female">LGBTQ+</option>
                <option value="female">Others</option>
              </select>
            </div>
            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
            <div class="mt-4 text-center">
                <p class="text-sm">
                  Already have account 
                  <NavLink to="/profile" class="text-blue-600 hover:underline">
                    _Sign in.</NavLink
                  >
                </p>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="govtid">Goverment ID</label>
              <input value={state.govtId} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="file" name='govtId' placeholder='govt id' id='govt id' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="qualification">Highest Qualification</label>
              <input value={state.qualification} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='qualification' placeholder='qualification' id='qualification' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="address">About</label>
              <textarea value={state.about} onChange={inputHandle} row='10' className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='about' placeholder='Give your profile an amazing bio...' ></textarea>
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="interest">Fields Of Interest</label>
              <input value={state.interest} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='interest' placeholder='interest' id='interest' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="qualification">Experience</label>
              <input value={state.experience} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='experience' placeholder='experience' id='experience' />
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="workSamples">Add Recent Work Samples (Max:3)</label>
              <input value={state.workSamples} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="file" name='workSamples' id='workSamples' accept='.pdf' multiple />
            </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default SignIn;