import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaOutdent, FaArrowLeft, FaEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
const EstateNavbar = () => {

    const navigate = useNavigate();

    const[dropDownOpen, setDropDownOpen] = useState(false);

    const isOpen = (value)=>{
        if(value){
          return ('dropdown h-screen text-white bg-green-800 w-40 shadow-md flex  fixed top-0 p-2 justify-start items-center flex-col right-0');
        }else{
          return('hidden')
        }
    }

  return (
    <div className='font-semibold'>
      <div className='flex justify-between items-center p-5 pb-1 font-sans flex-col sm:flex-row'>
          <div className="header-1 flex p-2">
              <div className="btn">
                <button onClick={()=>navigate('/home')} className='flex justify-between mr-2 pt-1 pb-1 pr-2 pl-2 rounded-md text-green-700 b-g font-semibold hover:text-white hover:bg-green-700 hidden sm:flex'><h1 className='mr-3 font-semi-bold flex items-center flex-wrap justify-between'> <FaArrowLeft className='text-sm mr-2' /></h1>Back</button>
              </div>
              <div className="header p-1 flex items-center justify-between width">  
                <h2 className='font-serif font-extrabold sm:text-xl mr-4'>Crescent Garden Court</h2><FaOutdent onClick={()=>setDropDownOpen(true)}  className='sm:hidden'/>
              </div>
          <div className={`${isOpen(dropDownOpen)}`}>
                <FaX className='mb-10 mt-5' onClick={()=>setDropDownOpen(false)} />
                <h2 className='flex items-center flex-wrap justify-between' onClick={()=>navigate('/home')}> <FaArrowLeft className='text-sm mr-2' /> Back</h2>
                <h2 className='flex items-center flex-wrap justify-between'> <FaEdit className='text-sm mr-2' />Edit Jobs</h2>
              </div>
          </div>
          <div className="header-2 flex items-left width justify-center sm:justify-between sm:w-auto sm:items-center">
              <button className=' flex justify-between p-2 bg-green-800 text-white rounded-full text-sm font-semibold hidden sm:flex'> <FaEdit className='text-sm mr-2' /> Edit Estate</button>
          </div>
      </div>
      <div className="curr flex items-center justify-start pb- border-b-2 p-2 ml-5 mr-5">
        <div className="est mr-3">
          <Link to="/home" className='text-gray-400 hover:text-black cursor-pointer'>Estate</Link>
        </div>
        <div className="for mr-3">
          <span> {">"}</span>
        </div>
        <div className="next text-sm sm:text-md">
          <span>Crescent Garden Court</span>
        </div>
      </div>
    </div>
  )
}

export default EstateNavbar