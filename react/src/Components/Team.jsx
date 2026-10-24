import team1 from "../Img/team1.png"
import team2 from "../Img/team2.png"
import team3 from "../Img/team3.png"
import team4 from "../Img/team4.png"
import arrowLeft from "../Img/arrow-left.png"
import arrowRight from "../Img/arrow-right.png"

function Team() {
  return (
    <section className="bg-[#F4F5F6] pt-[166px] pb-[96px]">
      <div className="max-w-[1230px] mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-[#1E212C]">
              Best tutors are all here
            </p>
            <h2 className="mt-[8px] text-[46px] leading-[60px] font-black text-[#1E212C]">
              Meet our team
            </h2>
          </div>
          <div className="flex mt-[56px]">
            <button className="w-[48px] h-[48px] flex items-center justify-center">
              <img src={arrowLeft} alt="" className="w-[20px] h-[20px]" />
            </button>
            <button className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[#FF3F3A]">
              <img src={arrowRight} alt="" className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>

        <div className="mt-[48px] grid grid-cols-4 gap-[30px]">
          <div className="text-center">
            <img src={team1} alt="" className="w-[285px] h-[340px]" />
            <h3 className="mt-[16px] text-[20px] leading-[30px] font-bold text-[#424551]">Dianne Russell</h3>
            <p className="mt-[4px] text-[16px] leading-[24px] text-[#787A80]">Founder and CEO</p>
          </div>
          <div className="text-center">
            <img src={team2} alt="" className="w-[285px] h-[340px]" />
            <h3 className="mt-[16px] text-[20px] leading-[30px] font-bold text-[#424551]">Jerome Bell</h3>
            <p className="mt-[4px] text-[16px] leading-[24px] text-[#787A80]">Founder and Program Director</p>
          </div>
          <div className="text-center">
            <img src={team3} alt="" className="w-[285px] h-[340px]" />
            <h3 className="mt-[16px] text-[20px] leading-[30px] font-bold text-[#424551]">Kristin Watson</h3>
            <p className="mt-[4px] text-[16px] leading-[24px] text-[#787A80]">Marketer, Curator of Marketing Course</p>
          </div>
          <div className="text-center">
            <img src={team4} alt="" className="w-[285px] h-[340px]" />
            <h3 className="mt-[16px] text-[20px] leading-[30px] font-bold text-[#424551]">Marvin McKinney</h3>
            <p className="mt-[4px] text-[16px] leading-[24px] text-[#787A80]">PM, Curator of Management Course</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
