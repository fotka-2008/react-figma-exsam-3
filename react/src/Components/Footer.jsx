import logoWhite from "../Img/logo-white.png"
import facebook from "../Img/facebook.png"
import twitter from "../Img/twitter.png"
import youtube from "../Img/youtube.png"
import telegram from "../Img/telegram.png"
import instagram from "../Img/instagram.png"
import linkedin from "../Img/linkedin.png"
import phone from "../Img/phone.png"
import mail from "../Img/mail.png"
import arrowWhite from "../Img/arrow-white.png"
import heart from "../Img/heart.png"

function Footer() {
  return (
    <footer>
      <div className="bg-[#FEDBD3] pt-[120px] pb-[160px]">
        <div className="max-w-[1230px] mx-auto text-center">
          <p className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-[#1E212C]">
            Don’t miss anything
          </p>
          <h2 className="mt-[10px] text-[46px] leading-[61px] font-black text-[#1E212C]">
            Subscribe to the Createx School
            <br />
            announcements
          </h2>
          <div className="mt-[56px] flex justify-center">
            <input
              type="email"
              placeholder="Your working email"
              className="w-[422px] h-[52px] px-[16px] bg-white border border-[#D7DADD] text-[16px] text-[#1E212C]"
            />
            <button className="w-[154px] h-[52px] ml-[24px] bg-[#FF3F3A] text-white text-[16px] font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#1E212C] pt-[80px] pb-[60px]">
        <div className="max-w-[1230px] mx-auto flex">
          <div className="w-[359px]">
            <img src={logoWhite} alt="Createx" className="w-[133px] h-[26px]" />
            <p className="mt-[22px] text-[12px] leading-[18px] text-[#A5A6AB]">
              Createx Online School is a leader in online studying.
              <br />
              We have lots of courses and programs from the main
              <br />
              market experts. We provide relevant approaches
              <br />
              to online learning, internships and employment
              <br />
              in the largest companies in the country.
            </p>
            <div className="mt-[38px] flex gap-[20px]">
              <img src={facebook} alt="Facebook" className="w-[24px] h-[24px]" />
              <img src={twitter} alt="Twitter" className="w-[24px] h-[24px]" />
              <img src={youtube} alt="YouTube" className="w-[24px] h-[24px]" />
              <img src={telegram} alt="Telegram" className="w-[24px] h-[24px]" />
              <img src={instagram} alt="Instagram" className="w-[24px] h-[24px]" />
              <img src={linkedin} alt="LinkedIn" className="w-[24px] h-[24px]" />
            </div>
          </div>

          <div className="w-[159px]">
            <h4 className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-white">Site map</h4>
            <div className="mt-[12px] flex flex-col gap-[10px] text-[16px] leading-[24px] text-[#A5A6AB]">
              <a href="#">About Us</a>
              <a href="#">Courses</a>
              <a href="#">Events</a>
              <a href="#">Blog</a>
              <a href="#">Contacts</a>
            </div>
          </div>

          <div className="w-[189px]">
            <h4 className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-white">Courses</h4>
            <div className="mt-[12px] flex flex-col gap-[10px] text-[16px] leading-[24px] text-[#A5A6AB]">
              <a href="#">Marketing</a>
              <a href="#">Management</a>
              <a href="#">HR & Recruting</a>
              <a href="#">Design</a>
              <a href="#">Development</a>
            </div>
          </div>

          <div className="w-[237px]">
            <h4 className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-white">Contact us</h4>
            <div className="mt-[12px] flex flex-col gap-[10px] text-[16px] leading-[24px] text-[#A5A6AB]">
              <a href="#" className="flex items-center">
                <img src={phone} alt="" className="w-[16px] h-[16px] mr-[8px]" />
                (405) 555-0128
              </a>
              <a href="#" className="flex items-center">
                <img src={mail} alt="" className="w-[16px] h-[16px] mr-[8px]" />
                hello@createx.com
              </a>
            </div>
          </div>

          <div className="w-[286px]">
            <h4 className="text-[16px] leading-[24px] font-bold uppercase tracking-[1px] text-white">Sign up to our newsletter</h4>
            <div className="mt-[24px] flex items-center h-[36px] px-[12px] bg-[#393C46] border border-[#61636B] rounded-[4px]">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent text-[12px] text-white"
              />
              <img src={arrowWhite} alt="" className="w-[18px] h-[18px]" />
            </div>
            <p className="mt-[12px] w-[270px] text-[10px] leading-[15px] text-white">
              *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#292C37]">
        <div className="max-w-[1230px] mx-auto h-[58px] flex items-center justify-between">
          <p className="flex items-center text-[12px] text-[#A5A6AB]">
            © All rights reserved. Made with
            <img src={heart} alt="" className="w-[18px] h-[16px] mx-[4px]" />
            by Createx Studio
          </p>
          <a href="#" className="text-[14px] font-bold uppercase text-[#A5A6AB]">
            Go to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
