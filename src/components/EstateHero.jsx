import React from 'react'
import {NavLink} from 'react-router-dom'
import img1 from '../Images/img.jfif'
import {  } from 'react-icons'

const EstateHero = () => {

    return (
        <div>
            <div className='links m-5 border-b-2 p-2 pt-0 mt-3 hidden sm:block'>
                <NavLink to='./' id='1' className='p-2 sm:4 text-green-800 border-b-2 pb-0 sm:pb-2 border-green-800 font-semibold'> Details </NavLink>
                <NavLink to='./' id='2' className='p-2 sm:4 text-gray-600 font-semibold'> Property </NavLink>
                <NavLink to='./' id='3' className='p-2 sm:4 text-gray-600 font-semibold'> Allocation </NavLink>
                <NavLink to='./' id='4' className='p-2 sm:4 text-gray-600 font-semibold'> Analysis </NavLink>
                <NavLink to='./' id='5' className='p-2 sm:4 text-gray-600 font-semibold'> Activity </NavLink>
            </div>
            <div className='images flex wrap p-5 m-5 flex-col items-center justify-center sm:flex-row relative sm:justify-between'>
                <div className='sideView1'>
                    <div className='relative'>
                        <div className='absolute z-50 bottom-0'>
                            <p className='text-green-800'>Side View</p>
                        </div>
                        <div className='front'>
                            <p className='text-green-800'>Side View</p>
                        </div>
                    </div>
                    <img src={img1} className="" />
                </div>
                <div className='frontView'>
                    <img src={img1} className="" />
                </div>
                <div className='sideView'>
                    <img src={img1} className="" />
                </div>
            </div>
            <div className='estDetails'>

            </div>
        </div>
    )
}

export default EstateHero