import hero1 from "/assets/hero1.png"
import hero2 from "/assets/hero2.png"
import hero3 from "/assets/hero3.png"
const Home = () => {
    let heroImage = {
        backgroundImage: `url(${hero1})`,
        width: "50%",
        height: "800px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: " right",
        backgroundSize: "contain"
    };
    return (
        <>
            <div className="w-full flex flex-col lg:flex-row justify-end items-center relative  z-10">
                <div className="flex-1 w-full lg:w-1/2 flex flex-col text-center py-36 mb-8">
                    <h1 className="text-5xl font-semibold leading-snug uppercase p-5 lg:p-8">Suits a man Should Wear</h1>
                    <p className="text-textColor text-sm lg:text-lg leading-8 p-5 lg:p-8">Suit Shop is a brand for youth to get their daily outfits that helps them to look decent & elegant.</p>
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
                        <a href="stores" className="text-xl text-mainWhite bg-mainBlue leading-10 border-2 border-mainBlue px-5 md:px-8 lg:px-16 lg:py-2 rounded hover:text-mainBlue hover:bg-mainWhite transition-all duration-500">
                            Our Stores
                        </a>
                        <a href="shop" className="text-xl text-mainBlue bg-mainWhite leading-10 border-2 border-mainBlue px-5 md:px-8 lg:px-16 lg:py-2 rounded hover:text-mainWhite hover:bg-mainBlue transition-all duration-500">
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-full relative hidden md:flex rounded-2xl " style={heroImage} >
                    <img src={hero2} alt="hero2" className=" absolute md:top-10 md:-left-1/3 xl:left-10 2xl:top-10  mx-auto z-10 rounded-2xl" />
                    <img src={hero3} alt="hero3" className="absolute md:-bottom-32 md:left-1/2 xl:-bottom-56 rounded-2xl z-10 mb" />
                </div>
                <div className="squreDiv hidden lg:block absolute top-32 left-1/2 w-28 h-28 rotate-45"></div>
                <div className="squreDiv hidden lg:block absolute bottom-14 left-[58rem] w-28 h-28 rotate-45 -z-10">
                </div>
            </div >

            <div className="squreDiv hidden lg:block absolute -bottom-52 -left-8 w-28 h-28 rotate-0">

            </div>
        </>


    )
}

export default Home