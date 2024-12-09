import { TfiEmail } from "react-icons/tfi";

export default function NewsLetter(){
    return(
        <div className="md:w-[1240px] md:h-[180px] w-[358px] h-[293px]  sm:w-[708px] sm:h-[153px] rounded-3xl bg-black relative md:left-[80px] left-3 md:top-[90px] sm:top-[40px]">
            <div className="md:flex">
            <h5 className="lg:w-[551px] lg:h-[92px] w-[297px] h-[105] font-bold lg:text-[40px] text-[32px] lg:leading-[45px] leading-[35px] text-white lg:pt-[40px] pt-[20px] lg:pl-[40px] pl-[24px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h5>
            <div className="lg:mt-[40px] mt-[30px] lg:ml-[160px] ml-[24px]">
            <div className="lg:w-[349px] lg:h-[48px] w-[311px] h-[42px] rounded-[62px] bg-white flex  text-black">
            <TfiEmail className="ml-5 mt-4" />
            <p className="py-[12px] px-[16px] leading-[21.6px] text-[16px]">Enter your email address</p>
            </div>
            <div className="lg:w-[349px] lg:h-[48px] w-[311px] h-[42px] rounded-[62px] bg-white  text-black mt-[15px]">
            <p className="py-[12px] px-[16px] leading-[21.6px] text-[16px] text-center">Subscribe to Newsletter</p>
            </div>
            </div>
            </div>
            </div>
    )
}