'use client'
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";


export default function Testimonials() {
    const testimonials = [
      {
        name: "Sarah M.",
        review:
          "I'm blown away by the quality and style of the fashion I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        rating: 5,
      },
      {
        name: "Alex K.",
        review:
          "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        rating: 5,
      },
      {
        name: "James L.",
        review:
          "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleSlideChange = (index: number) => {
      setCurrentIndex(index);
    };
    return(
        <div className="  flex flex-col justify-start items-center m-auto gap-0">
          <div className="w-[1239px] py-10 flex justify-between items-center mx-auto">
            <h1 className="sm:h-[58px] sm:w-[654px] w-[286px] h-[72px] left-4 text-[#000000] lg:left-[100px] top-[150px] text-[32px] sm:text-[48px] sm:mt-[50px] leading-[57.px] font-bold ">OUR HAPPY CUSTOMERS</h1>
            <div className="flex justify-between items-center gap-2 my-auto ">
            <FaArrowLeft className="w-[24px] h-[24px] text-2xl text-gray-700"/>
            <FaArrowRight className="w-[24px] h-[24px] text-2xl text-gray-700"/>
            </div>
            
           </div>
            {/* <div className="lg:ml-[90px] mt-[200px] flex lg:gap-6 sm:gap-1">
            <Card text={"Sarah M."} p={"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"}/>
            <Card text={"Alex K."} p={"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"}/>
            <Card text={"James L."} p={"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"}/>
            </div> */}
            {/* Carousel */}
          <Carousel
            className="gap-6 flex justify-center items-center"
            
            onChange={(index:any) => handleSlideChange(index)}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={` shadow-lg p-4 ${
                  currentIndex === index ? "opacity-100" : "opacity-60"
                }`}
              >
                <CardHeader>
                  {/* Stars */}
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.074c.969 0 1.371 1.24.588 1.81l-3.295 2.396a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.295 2.396c-.784.57-1.838-.197-1.539-1.118l1.286-3.951a1 1 0 00-.364-1.118L2.793 9.378c-.783-.57-.38-1.81.588-1.81h4.074a1 1 0 00.95-.69l1.286-3.951z" />
                      </svg>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{testimonial.review}</p>
                </CardContent>
                <CardFooter>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                </CardFooter>
              </Card>
            ))}
          </Carousel>
          {/* Custom Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-5 h-5 rounded-full ${
                  currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
    )
}

