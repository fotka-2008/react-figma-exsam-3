import hero from "../Img/hero.png"

function Hero() {
  return (
    <section className="bg-[#FEDAD5] pt-[103px] pb-[168px]">
      <div className="max-w-[1230px] mx-auto flex items-center">
        <div className="w-[620px] pt-[16px]">
          <h1 className="text-[64px] leading-[83px] font-black text-[#1E212C]">
            Enjoy studying
            <br />
            with Createx
            <br />
            Online Courses
          </h1>

          <div className="flex mt-[60px]">
            <button className="w-[148px] h-[52px] border border-[#FF3F3A] text-[#FF3F3A] text-[16px] font-bold">
              About us
            </button>
            <button className="w-[200px] h-[52px] ml-[24px] bg-[#FF3F3A] text-white text-[16px] font-bold">
              Explore courses
            </button>
          </div>
        </div>

        <img src={hero} alt="" className="w-[610px] h-[560px]" />
      </div>
    </section>
  )
}

export default Hero
