import course1 from "../Img/course1.png"
import course2 from "../Img/course2.png"
import course3 from "../Img/course3.png"
import course4 from "../Img/course4.png"
import course5 from "../Img/course5.png"
import course6 from "../Img/course6.png"

function Courses() {
  return (
    <section className="bg-white pt-[82px] pb-[128px]">
      <div className="max-w-[1230px] mx-auto">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-[#1E212C]">
              Ready to learn?
            </p>
            <h2 className="mt-[8px] text-[46px] leading-[60px] font-black text-[#1E212C]">
              Featured Courses
            </h2>
          </div>
          <button className="w-[202px] h-[52px] border border-[#FF3F3A] text-[#FF3F3A] text-[16px] font-bold">
            View all courses
          </button>
        </div>

        <div className="mt-[60px] grid grid-cols-2 gap-[30px]">
          <div className="flex bg-white shadow">
            <img src={course1} alt="" className="w-[214px] h-[214px]" />
            <div className="pt-[32px] px-[32px]">
              <span className="inline-block px-[8px] text-[14px] leading-[22px] text-white bg-[#03CEA4] rounded-[4px]">
                Marketing
              </span>
              <h3 className="mt-[18px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
                The Ultimate Google Ads Training Course
              </h3>
              <div className="mt-[18px] flex items-center">
                <span className="text-[18px] font-bold text-[#FF3F3A]">$100</span>
                <span className="mx-[8px] w-px h-[16px] bg-[#D7DADD]"></span>
                <span className="text-[18px] text-[#787A80]">by Jerome Bell</span>
              </div>
            </div>
          </div>

          <div className="flex bg-white shadow-lg">
            <img src={course2} alt="" className="w-[214px] h-[214px]" />
            <div className="pt-[32px] px-[32px]">
              <span className="inline-block px-[8px] text-[14px] leading-[22px] text-white bg-[#5A87FC] rounded-[4px]">
                Management
              </span>
              <h3 className="mt-[18px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
                Prduct Management Fundamentals
              </h3>
              <div className="mt-[18px] flex items-center">
                <span className="text-[18px] font-bold text-[#FF3F3A]">$480</span>
                <span className="mx-[8px] w-px h-[16px] bg-[#D7DADD]"></span>
                <span className="text-[18px] text-[#787A80]">by Marvin McKinney</span>
              </div>
            </div>
          </div>

          <div className="flex bg-white shadow">
            <img src={course3} alt="" className="w-[214px] h-[214px]" />
            <div className="pt-[32px] px-[32px]">
              <span className="inline-block px-[8px] text-[14px] leading-[22px] text-white bg-[#F3982F] rounded-[4px]">
                HR & Recruting
              </span>
              <h3 className="mt-[18px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
                HR Management and Analytics
              </h3>
              <div className="mt-[18px] flex items-center">
                <span className="text-[18px] font-bold text-[#FF3F3A]">$200</span>
                <span className="mx-[8px] w-px h-[16px] bg-[#D7DADD]"></span>
                <span className="text-[18px] text-[#787A80]">by Leslie Alexander Li</span>
              </div>
            </div>
          </div>

          <div className="flex bg-white shadow">
            <img src={course4} alt="" className="w-[214px] h-[214px]" />
            <div className="pt-[32px] px-[32px]">
              <span className="inline-block px-[8px] text-[14px] leading-[22px] text-white bg-[#03CEA4] rounded-[4px]">
                Marketing
              </span>
              <h3 className="mt-[18px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
                Brand Management & PR Communications
              </h3>
              <div className="mt-[18px] flex items-center">
                <span className="text-[18px] font-bold text-[#FF3F3A]">$530</span>
                <span className="mx-[8px] w-px h-[16px] bg-[#D7DADD]"></span>
                <span className="text-[18px] text-[#787A80]">by Kristin Watson</span>
              </div>
            </div>
          </div>

          <div className="flex bg-white shadow">
            <img src={course5} alt="" className="w-[214px] h-[214px]" />
            <div className="pt-[32px] px-[32px]">
              <span className="inline-block px-[8px] text-[14px] leading-[22px] text-white bg-[#5A87FC] rounded-[4px]">
                Management
              </span>
              <h3 className="mt-[18px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
                Business Development Management
              </h3>
              <div className="mt-[18px] flex items-center">
                <span className="text-[18px] font-bold text-[#FF3F3A]">$400</span>
                <span className="mx-[8px] w-px h-[16px] bg-[#D7DADD]"></span>
                <span className="text-[18px] text-[#787A80]">by Dianne Russell</span>
              </div>
            </div>
          </div>

          <div className="flex bg-white shadow">
            <img src={course6} alt="" className="w-[214px] h-[214px]" />
            <div className="pt-[32px] px-[32px]">
              <span className="inline-block px-[8px] text-[14px] leading-[22px] text-white bg-[#F13571] rounded-[4px]">
                Design
              </span>
              <h3 className="mt-[18px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
                Graphic Design Basic
              </h3>
              <div className="mt-[18px] flex items-center">
                <span className="text-[18px] font-bold text-[#FF3F3A]">$500</span>
                <span className="mx-[8px] w-px h-[16px] bg-[#D7DADD]"></span>
                <span className="text-[18px] text-[#787A80]">by Guy Hawkins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
