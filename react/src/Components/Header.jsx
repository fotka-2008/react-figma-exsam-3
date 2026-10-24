import logo from "../Img/logo.png"
import user from "../Img/user.png"

function Header() {
  return (
    <header className="bg-[#FEDAD5]">
      <div className="max-w-[1230px] mx-auto h-[92px] flex items-center">
        <img src={logo} alt="Createx" className="w-[133px] h-[24px]" />

        <nav className="flex gap-[40px] ml-[58px]">
          <a href="#" className="text-[16px] font-bold text-[#424551]">About Us</a>
          <a href="#" className="text-[16px] font-bold text-[#424551]">Courses</a>
          <a href="#" className="text-[16px] font-bold text-[#424551]">Events</a>
          <a href="#" className="text-[16px] font-bold text-[#424551]">Blog</a>
          <a href="#" className="text-[16px] font-bold text-[#424551]">Contacts</a>
        </nav>

        <button className="ml-auto w-[206px] h-[52px] bg-[#FF3F3A] text-white text-[16px] font-bold">
          Get consultation
        </button>

        <a href="#" className="flex items-center ml-[36px] text-[16px] font-bold text-[#424551]">
          <img src={user} alt="" className="w-[20px] h-[20px] mr-[8px]" />
          Log in / Register
        </a>
      </div>
    </header>
  )
}

export default Header
