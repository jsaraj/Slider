

import React, { useEffect, useState } from 'react'
import data from './Data'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";


function Slider() {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        if (index < 0) {
            setIndex(people.length - 1)
        }
        if (index > (people.length - 1)) {
            setIndex(0);
        }
    }, [index, people])


    useEffect(()=>{
        let sliderTime=setInterval(() => {
            setIndex(index+1)
        }, 1000);
        return()=> clearInterval(sliderTime)
    },[index])


    return (
        <>
            <div className='justify-center flex text-2xl font-semibold pt-8 pb-12 '>
                <h2 className='w-2/12 border-b border-orange-400 flex justify-center pb-2'>Customer Comments</h2>
            </div>

            <div className='relative'>

                {
                    people.map((person, personIndex) => {
                        const { id, name, title, image, desc } = person
                        let position = "translate-x-[100%]";
                        if (personIndex === index) {
                            position = "translate-x-[0%]"
                        }
                        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                            position = "-translate-x-[100%]"
                        }
                        return (
                            <div key={id} className={` ${position} 'transition-transform duration-[400ms] ease-in-out flex justify-center relative '`}>
                                <div className='absolute'>
                                    <img src={image} alt={name} className='h-64 w-64 rounded-full'></img>
                                </div>
                                <div className=' text-2xl absolute top-[280px]'>
                                    <h3 className='border-b border-orange-400' >{name}</h3>
                                </div>
                                <div className=' text-lg absolute top-[330px]'>
                                    <h4>{title}</h4>
                                </div>
                                <div className=' absolute top-[390px]'>
                                    <p className='text-justify px-96 leading-7'>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='absolute top-[300px] right-20 text-2xl'>
                    <BsArrowRightCircle onClick={() => setIndex(index + 1)} />
                </div>
                <div className='absolute top-[300px] left-20 text-2xl'>
                    <BsArrowLeftCircle onClick={() => setIndex(index - 1)} />
                </div>
            </div >
        </>
    )
}

export default Slider