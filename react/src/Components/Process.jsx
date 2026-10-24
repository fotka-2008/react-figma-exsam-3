import star from "../Img/star.png"
import like from "../Img/like.png"
import layers from "../Img/layers.png"
import chat from "../Img/chat.png"
import processImg from "../Img/process.png"

function Process() {
  return (
    <section className="bg-white pt-[128px] pb-[272px]">
      <div className="max-w-[1230px] mx-auto">
        <p className="text-center text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-[#1E212C]">
          Our benefits
        </p>
        <h2 className="mt-[8px] text-center text-[46px] leading-[60px] font-black text-[#1E212C]">
          That’s how we do it
        </h2>

        <div className="mt-[59px] grid grid-cols-4">
          <div className="h-[46px] flex items-center justify-center border border-[#FF3F3A] text-[16px] font-bold text-[#FF3F3A]">
            <img src={star} alt="" className="w-[20px] h-[20px] mr-[6px]" />
            Experienced Tutors
          </div>
          <div className="h-[46px] flex items-center justify-center text-[16px] font-bold text-[#9A9CA5]">
            <img src={like} alt="" className="w-[20px] h-[20px] mr-[6px]" />
            Feedback & Support
          </div>
          <div className="h-[46px] flex items-center justify-center text-[16px] font-bold text-[#9A9CA5]">
            <img src={layers} alt="" className="w-[20px] h-[20px] mr-[6px]" />
            24/7 Online Library
          </div>
          <div className="h-[46px] flex items-center justify-center text-[16px] font-bold text-[#9A9CA5]">
            <img src={chat} alt="" className="w-[20px] h-[20px] mr-[6px]" />
            Community
          </div>
        </div>

        <div className="mt-[72px] flex items-center justify-between">
          <div className="w-[488px]">
            <h3 className="text-[32px] leading-[40px] font-bold text-[#1E212C]">
              Only practicing tutors
            </h3>
            <p className="mt-[24px] text-[16px] leading-[26px] text-[#424551]">
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <img src={processImg} alt="" className="w-[600px] h-[415px]" />
        </div>
      </div>
    </section>
  )
}

export default Process
