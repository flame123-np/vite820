import Header from "../Header"
import Navber from "../Navbar"
import Contact from "../Contact"

const LeftSection = () => {
    return (
    <div classname = "px-5">
        <div className='sticky top-0 grid gap-y-4 ig:grid-rows-[35%_40%_25%] lg:h-[87vh]'>
           <Header />
           <Navber />
           <Contact />
        </div>
    </div>
    )
}

export default LeftSection;