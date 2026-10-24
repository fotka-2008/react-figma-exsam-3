import about from "../Img/about.png"
import check from "../Img/check.png"

function About() {
  return (
    <section className="bg-white pt-[180px] pb-[180px]">
      <div className="max-w-[1230px] mx-auto flex">
        <img src={about} alt="" className="w-[705px] h-[560px]" />

        <div className="w-[380px] ml-[135px]">
          <p className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-[#1E212C]">
            Who we are
          </p>
          <h2 className="mt-[12px] text-[46px] leading-[60px] font-black text-[#1E212C]">
            Why Createx?
          </h2>

          <ul className="mt-[40px] flex flex-col gap-[12px]">
            <li className="flex items-start">
              <img src={check} alt="" className="w-[20px] h-[20px] mt-[3px] mr-[12px]" />
              <p className="text-[16px] leading-[26px] text-[#424551]">
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="" className="w-[20px] h-[20px] mt-[3px] mr-[12px]" />
              <p className="text-[16px] leading-[26px] text-[#424551]">
                Vulputate placerat amet pulvinar lorem nisl.
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="" className="w-[20px] h-[20px] mt-[3px] mr-[12px]" />
              <p className="text-[16px] leading-[26px] text-[#424551]">
                Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
              </p>
            </li>
            <li className="flex items-center">
              <img src={check} alt="" className="w-[20px] h-[20px] mr-[12px]" />
              <p className="text-[16px] leading-[26px] text-[#424551]">
                Etiam duis lobortis in fames ultrices commodo nibh.
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="" className="w-[20px] h-[20px] mt-[3px] mr-[12px]" />
              <p className="text-[16px] leading-[26px] text-[#424551]">
                Tincidunt sagittis neque sem ac eget.
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="" className="w-[20px] h-[20px] mt-[3px] mr-[12px]" />
              <p className="text-[16px] leading-[26px] text-[#424551]">
                Ultricies amet justo et eget quisque purus vulputate dapibus tortor.
              </p>
            </li>
          </ul>

          <button className="mt-[22px] w-[161px] h-[44px] bg-[#FF3F3A] text-white text-[14px] font-bold">
            More about us
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
