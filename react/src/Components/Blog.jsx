import blog1 from "../Img/blog1.png"
import blog2 from "../Img/blog2.png"
import blog3 from "../Img/blog3.png"
import mic from "../Img/mic.png"
import play from "../Img/play.png"
import file from "../Img/file.png"
import calendar from "../Img/calendar.png"
import clock from "../Img/clock.png"
import arrowRed from "../Img/arrow-red.png"

function Blog() {
  return (
    <section className="bg-white pt-[166px] pb-[158px]">
      <div className="max-w-[1230px] mx-auto">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-[#1E212C]">
              Our blog
            </p>
            <h2 className="mt-[8px] text-[46px] leading-[60px] font-black text-[#1E212C]">
              Latest posts
            </h2>
          </div>
          <button className="w-[159px] h-[52px] bg-[#FF3F3A] text-white text-[16px] font-bold">
            Go to blog
          </button>
        </div>

        <div className="mt-[60px] grid grid-cols-3 gap-[30px]">
          <div>
            <div className="relative">
              <img src={blog1} alt="" className="w-[390px] h-[300px]" />
              <span className="absolute top-[12px] left-[12px] flex items-center h-[24px] px-[8px] bg-white rounded-[4px] text-[14px] text-[#424551]">
                <img src={mic} alt="" className="w-[18px] h-[18px] mr-[4px]" />
                Podcast
              </span>
            </div>
            <div className="mt-[16px] flex items-center text-[14px] leading-[20px] text-[#787A80]">
              <span className="font-bold">Marketing</span>
              <span className="mx-[12px] w-px h-[12px] bg-[#787A80]"></span>
              <img src={calendar} alt="" className="w-[18px] h-[18px] mr-[6px]" />
              <span>September 4, 2020</span>
              <span className="mx-[12px] w-px h-[12px] bg-[#787A80]"></span>
              <img src={clock} alt="" className="w-[18px] h-[18px] mr-[6px]" />
              <span>36 min</span>
            </div>
            <h3 className="mt-[8px] pr-[10px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
              What is traffic arbitrage and does it really make money?
            </h3>
            <p className="mt-[8px] text-[16px] leading-[26px] text-[#424551]">
              Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...
            </p>
            <a href="#" className="mt-[16px] inline-flex items-center text-[16px] leading-[24px] font-bold text-[#1E212C]">
              Listen
              <img src={arrowRed} alt="" className="w-[24px] h-[20px] ml-[8px]" />
            </a>
          </div>

          <div>
            <div className="relative">
              <img src={blog2} alt="" className="w-[390px] h-[300px]" />
              <span className="absolute top-[12px] left-[12px] flex items-center h-[24px] px-[8px] bg-white rounded-[4px] text-[14px] text-[#424551]">
                <img src={play} alt="" className="w-[18px] h-[18px] mr-[4px]" />
                Video
              </span>
            </div>
            <div className="mt-[16px] flex items-center text-[14px] leading-[20px] text-[#787A80]">
              <span className="font-bold">Management</span>
              <span className="mx-[12px] w-px h-[12px] bg-[#787A80]"></span>
              <img src={calendar} alt="" className="w-[18px] h-[18px] mr-[6px]" />
              <span>August 25, 2020</span>
              <span className="mx-[12px] w-px h-[12px] bg-[#787A80]"></span>
              <img src={clock} alt="" className="w-[18px] h-[18px] mr-[6px]" />
              <span>45 min</span>
            </div>
            <h3 className="mt-[8px] pr-[10px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
              What to do and who to talk to if you want to get feedback on the product
            </h3>
            <p className="mt-[8px] text-[16px] leading-[26px] text-[#424551]">
              Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...
            </p>
            <a href="#" className="mt-[16px] inline-flex items-center text-[16px] leading-[24px] font-bold text-[#1E212C]">
              Watch
              <img src={arrowRed} alt="" className="w-[24px] h-[20px] ml-[8px]" />
            </a>
          </div>

          <div>
            <div className="relative">
              <img src={blog3} alt="" className="w-[390px] h-[300px]" />
              <span className="absolute top-[12px] left-[12px] flex items-center h-[24px] px-[8px] bg-white rounded-[4px] text-[14px] text-[#424551]">
                <img src={file} alt="" className="w-[18px] h-[18px] mr-[4px]" />
                Article
              </span>
            </div>
            <div className="mt-[16px] flex items-center text-[14px] leading-[20px] text-[#787A80]">
              <span className="font-bold">Design</span>
              <span className="mx-[12px] w-px h-[12px] bg-[#787A80]"></span>
              <img src={calendar} alt="" className="w-[18px] h-[18px] mr-[6px]" />
              <span>August 8, 2020</span>
            </div>
            <h3 className="mt-[8px] pr-[10px] text-[20px] leading-[30px] font-bold text-[#1E212C]">
              Should you choose a creative profession if you are attracted to creativity?
            </h3>
            <p className="mt-[8px] text-[16px] leading-[26px] text-[#424551]">
              Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...
            </p>
            <a href="#" className="mt-[16px] inline-flex items-center text-[16px] leading-[24px] font-bold text-[#1E212C]">
              Read
              <img src={arrowRed} alt="" className="w-[24px] h-[20px] ml-[8px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
