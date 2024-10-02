import Image from "next/image";
import KamranKhan from '../../public/asset 1.png';

export default function Home() {
  return (
    <>
    <main className="h-[1000px] sm:h-[1000px] md:h-[975px] lg:h-[692px] xl:h-[692px]">
      <div id="hero" className="flex flex-col w-[90%] m-auto h-[700px] items-center z-10 pt-9 lg:flex-row">
        
        <div id="one" className="flex-1">
          <h1 id="heading" className="text-3xl font-bold text-[#044e83] text-center xl:text-6xl md:mb-4 xl:text-start lg:text-5xl lg:text-start md:text-center md:text-[3.25rem] ">Governor Sindh</h1>
          <h3 className="text-2xl font-semibold text-[#044e83] text-center lg:text-4xl mb-6 lg:text-start md:text-center md:text-[2.25rem] md:tracking-wider">Kamran Khan Tessori</h3>
          <h3 className="text-[#2eb6e8] font-bold text-[25px] text-center lg:text-4xl lg:text-start md:text-center md:font-extrabold">Certified Cloud</h3>
          <h3 className="text-[#2eb6e8] font-bold text-[25px] text-center lg:text-4xl lg:text-start md:text-center md:font-extrabold">Applied Generative AI</h3>
          <h3 className="text-[#2eb6e8] font-bold text-[25px] text-center lg:text-4xl md:mb-5 lg:text-start md:text-center md:font-extrabold">Engineer ( GenEng )</h3>
          <p className="text-[#044e83] font-bold text-center lg:text-start lg:text-2xl md:text-center md:text-[20px]">Earn up to $5,000/ month</p>

          <div id="for-btn" className="flex flex-col sm:flex-row gap-5 sm:text-center sm:mt-6 sm:mb-7 sm:justify-center lg:justify-start px-3 md:px-0 lg:px-0 xl:px-0">
            <button className="text-white bg-[#044e83] rounded-md font-bold mt-4 sm:px-12 sm:py-5 md:px-8 hover:bg-[#20313d] hover:text-[orange]">Apply Now</button>
            <div>
              <h2 className="text-[#044e83] font-bold text-center mt-4">562,143</h2>
              <p className="text-[#044e83] text-center mb-4">Accepted Applications</p>
            </div>
          </div> {/* For Button */}

        </div> {/* Left Div */}

        <div id="two" className="flex-1 relative w-full h-[650px] mt-8 lg:mt-0"> 
  <Image 
    src={KamranKhan} 
    alt="kamran" 
    layout="fixed" 
    width={500} 
    height={600} 
    objectFit="cover"
    className="h-[500px] w-[650px] lg:h-[650px] lg:w-[750px]"
  />
</div>


      </div> {/* Hero Div left + Right */}
    </main>

<div>
    <div className="w-[90%] m-auto">
      <h2 className="text-xl text-[#044e83] font-semibold text-center md:text-4xl mt-8 ">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h2>
      <p className="mt-6 text-justify md:text-[20px]">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
    </div>
</div>    

    </>
  

  );
}
