import DefaultButton from "../Modules/DefaultButton"
import OptionLanguage from "../Modules/OptionLanguage"

const Navbar = () => {
  return (
    <header>
      <nav className="container flex justify-between items-center mx-auto p-4 text-white">
        <div>
          <img src="/src/assets/logo-white.svg" alt="logo-image" />
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex text-sm gap-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Movie Release</a>
            </li>
          </ul>
          <OptionLanguage />
          <div className="flex gap-2">
            <DefaultButton text={'Login'} onClick={() => ""} />
            <DefaultButton text={'Register'} styles="rounded-full bg-white/40 px-6 py-2" onClick={() => ""} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar