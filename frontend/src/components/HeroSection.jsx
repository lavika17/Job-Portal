import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const JobHuntSection = () => {
    const [query, setQuery]= useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler=()=>{
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
    return (
        <div className='bg-purple-100 pb-2'> {/* Apply background color here */}
            {/* Hero Section */}
            
            <div className='text-center'>
                <div className='flex flex-col gap-5 my-10 '>
                    <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Portal </span>
                    <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                    <p>"Stay focused, keep learning, network smartly, and seize opportunities to land your dream job."</p>
                    <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                        <input
                            type="text"
                            placeholder='Find your dream jobs'
                            onChange ={(e) => setQuery(e.target.value)}
                            className='outline-none border-none w-full'
                        />
                        <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                            <Search className='h-5 w-5' />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Category Carousel */}
            <div>
                <Carousel className="w-full max-w-xl mx-auto my-20">
                    <CarouselContent>
                        {
                            category.map((cat, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default JobHuntSection
