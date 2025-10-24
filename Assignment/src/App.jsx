import logo from "./assets/logo/logo.avif"
import hero from "./assets/hero/hero.avif"
import founderone from "./assets/founder/founderone.avif"
import foundertwo from "./assets/founder/foundertwo.avif"
import founderthree from "./assets/founder/founderthree.avif"
import unione from "./assets/university/unione.avif"
import unitwo from "./assets/university/unitwo.avif"
import unithree from "./assets/university/unithree.avif"
import unifour from "./assets/university/unifour.avif"
import unifive from "./assets/university/unifive.avif"
import unisix from "./assets/university/unisix.avif"
import { FaUniversity, FaMap, FaCertificate, FaDownload} from "react-icons/fa";

function App() {

  return (
    <>
    {/* header */}
      <header className="h-10 w-full bg-white flex justify-center items-center gap-5">
      <p className="font-medium">NAT Applications for 2025 are closed. Apply For 2026 Admission-counselling.
      </p><span className="text-red-800 font-medium"><a href="https://apply.niatindia.com/login">Apply Now!</a></span></header>
      {/* navigation */}
      <div className="h-[120px] w-full flex justify-center items-center bg-white sticky top-0 z-50">
           <nav className="h-20 w-[1450px] rounded-2xl bg-amber-50 flex justify-between">
            {/* image */}
            <div className="flex justify-between items-center pl-5"><a href="https://www.niatindia.com/"><img src={logo} alt="logo" className="h-12 w-12"/></a></div>
            {/* menu items */}
            <div className="flex justify-center items-center gap-10 pr-5 text-[15px] font-medium">
              <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="https://www.niatindia.com/">NIAT Advantage</a>
              <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="https://www.niatindia.com/">University Collabs</a>
              <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="https://www.niatindia.com/">Skill Map</a>
              <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="https://www.niatindia.com/">Admission Counselling</a>
              <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="https://www.niatindia.com/">Student Clubs</a>
            </div>
           </nav>
      </div>
      {/* hero */}
      <div className="h-screen w-full flex justify-center items-center bg-white">
           <div className="h-full w-[1450px] bg-pink-50 rounded-2xl flex justify-between items-center">
            {/* first column */}
            <div className="pl-10">
              <div className="h-[50px] w-[510px] rounded-full bg-white flex justify-center items-center"><p className="text-sm"><span className="text-red-800">★</span> Collaborating With UGC-recognized/AICTE-approved Universities <span className="text-red-800">★</span></p></div>
              <div className="mt-5 h-[150px] w-[900px] grid ">
                <p className="text-5xl text-red-800">Build Your Future in Emerging Tech</p>
                <p className="text-5xl">With NIAT’s Industry-ready Upskilling</p>
              </div>
              <div className="mt-5 h-[100px] grid text-gray-700 text-sm">
                   <div className="inline-flex items-center gap-2">
                   <p className="inline-flex items-center gap-2">
                   <FaUniversity color="gray" /> Offered At 10+ Universities Across India
                   </p>
                   </div>
                   <div className="inline-flex items-center gap-2">
                   <p className="inline-flex items-center gap-2">
                   <FaMap color="gray" /> Industry-aligned Skill Map
                   </p>
                   </div>
                   <div className="inline-flex items-center gap-2">
                   <p className="inline-flex items-center gap-2">
                   <FaCertificate color="gray"/> Get IRC Certification From NIAT
                   </p>
                   </div>
              </div>
              {/* button */}
              <div className="mt-5 h-[50px] w-[600px] flex gap-5">
                <button className="h-full w-[250px] bg-red-800 text-sm text-white font-medium rounded-sm hover:bg-red-900 cursor-pointer">Apply for Counselling</button>
                <button className="inline-flex gap-2 justify-center items-center h-full w-[250px] bg-white font-medium text-sm text-red-800 rounded-sm border-2 border-red-800 cursor-pointer">Download Brochure <span className="font-normal text-md"><FaDownload color="black"/></span></button>
              </div>
            </div>
            {/* second column */}
           <div className="w-[500px] h-[500px]">
               <img src={hero} alt="heroimg" className="h-full w-full"/>
           </div>
           </div>
      </div>
      {/* achievement */}
      <div className="h-[900px] w-full grid place-content-center gap-[100px]">
        {/* title */}
           <div className="h-[100px] w-full flex justify-center items-center"><h1 className="text-5xl">Students <span className="text-5xl text-red-800">Achievement</span></h1></div>
        {/* tag */}
           <div className="h-[150px] w-full flex justify-center items-center">
            {/* first column */}
                <div className="h-[120px] w-full bg-red-800 flex justify-center items-center text-white text-lg font-medium">
                  <marquee behavior="scroll" direction="left" scrollamount="10">
                           <div className="inline-flex gap-2">
                           <p>Empowering Careers with World-Class Training • Join thousands of learners across India and upgrade your skills with NIAT-certified programs • Certified Digital Marketing Professional • Advanced Web Development Bootcamp • AI & Machine Learning Certification • Contact us: info@niatindia.in | +91 98765 43210
                            Empowering Careers with World-Class Training • Join thousands of learners across India and upgrade your skills with NIAT-certified programs • Certified Digital Marketing Professional • Advanced Web Development Bootcamp • AI & Machine Learning Certification • Contact us: info@niatindia.in | +91 98765 43210
                           </p>
                           </div>
                  </marquee>
                </div>
           </div>
           {/* second column */}
                <div className="h-[650px] w-full grid place-content-center gap-5">
                     {/* title */}
                      <div className="h-[150px] w-full grid place-content-center gap-5">
                      <p className="text-5xl">An Upskilling Initiative By</p>
                      <p className="text-5xl text-red-800 flex justify-center">IIT & IIIT Alumni</p>
                      </div>
                      {/* founder */}
                      <div className="h-[500px] w-full flex justify-center items-center gap-20">
                          {/* first image */}
                          <div className="h-full w-full">
                            <div className="h-[300px] w-[400px] flex justify-center items-center">
                              <div className="h-[100px] w-[300px] bg-red-800 flex justify-center items-center rounded-full">
                                <img src={founderone} alt="image" className="h-[300px] w-[300px]"/>
                              </div>
                            </div>
                            {/* name,profession */}
                            <div className="h-[200px] w-[400px]">
                            <h3 className="text-lg font-medium mt-2">Co-Founder at NxtWave</h3>
                            <p className="text-sm text-gray-600 font-semibold">IIT Bombay, AIR 119 in JEE 2013</p>
                            <p className="text-sm text-gray-600 font-semibold">Honoured in Forbes India 30 Under 30</p>
                            <div className="h-px w-[150px] bg-red-800"></div>
                            <p className="text-sm text-gray-600 font-medium"><span className="text-red-800">★</span> Sashank Gujjula</p>
                            </div>
                          </div>
                          {/* second image */}
                          <div className="h-full w-full">
                            <div className="h-[300px] w-[400px] flex justify-center items-center">
                              <div className="h-[100px] w-[300px] bg-red-800 flex justify-center items-center rounded-full">
                                <img src={foundertwo} alt="image" className="h-[300px] w-[300px]"/>
                              </div>
                            </div>
                            {/* name,profession */}
                            <div className="h-[200px] w-[400px] ">
                            <h3 className="text-lg font-medium mt-2">Co-Founder & CEO at NxtWave</h3>
                            <p className="text-sm text-gray-600 font-semibold">IIIT Hyderabad, Ex-Amazon</p>
                            <p className="text-sm text-gray-600 font-semibold">Hurun India's Top 150 Next-Gen Entrepreneurs</p>
                            <div className="h-px w-[150px] bg-red-800"></div>
                            <p className="ext-center text-sm text-gray-600 font-medium"><span className="text-red-800">★</span> Rahul Attuluri</p>
                            </div>
                          </div>
                          {/* third image */}
                          <div className="h-full w-full">
                            <div className="h-[300px] w-[400px] flex justify-center items-center">
                              <div className="h-[100px] w-[300px] bg-red-800 flex justify-center items-center rounded-full">
                                <img src={founderthree} alt="image" className="h-[300px] w-[300px]"/>
                              </div>
                            </div>
                            {/* name,profession */}
                            <div className="h-[200px] w-[400px] ">
                            <h3 className="text-lg font-medium mt-2">Co-Founder & COO at NxtWave</h3>
                            <p className="text-sm text-gray-600 font-semibold">IIT Kharagpur, Awarded Young Alumni Achiever</p>
                            <p className="text-sm text-gray-600 font-semibold">Honoured in Forbes India 30 Under 30</p>
                            <div className="h-px w-[150px] bg-red-800"></div>
                            <p className="text-sm text-gray-600 font-medium"><span className="text-red-800">★</span> Anupam Pedarla</p>
                            </div>
                          </div>
                      </div>
                </div>
      </div>
      {/* university details */}
      <div className="mt-[150px] h-[900px] w-full bg-white gap-10">
            {/* title */}
            <div className="h-[150px] w-full grid place-content-center gap-5">
              <p className="text-5xl">Our Upskilling Program</p>
              <p className="text-5xl">Offered At <span className="text-red-800">10+ Universities</span></p>
            </div>
            {/* gallery */}
            <div className="h-[800px] w-full grid">
                 {/* first gallery */}
                 <div className="h-[350px] w-full flex justify-center items-center gap-5">
                      <div>
                        <div className="h-[300px] w-[400px] rounded-2xl overflow-hidden">
                          <img src={unione} alt="image" className="w-[400px] h-[300px] rounded-2xl hover:scale-110 transition-hover ease-in-out duration-200"/>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                        <a href="https://www.niatindia.com/campus/niat-pune-ajeenkya-dy-patil-university" className="text-red-800 text-lg">
                        Ajeenkya DY Patil University
                        </a>
                        <p className="inline-flex items-center gap-2">
                        <FaMap color="gray" /> Pune
                        </p>
                        </div>
                      </div>

                      <div>
                        <div className="h-[300px] w-[400px] rounded-2xl overflow-hidden">
                          <img src={unisix} alt="image" className="w-[400px] h-[300px] rounded-2xl hover:scale-110 transition-hover ease-in-out duration-200"/>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                        <a href="https://www.niatindia.com/campus/niat-pune-ajeenkya-dy-patil-university" className="text-red-800 text-lg">
                        Malla Reddy Vishwavidyapeeth
                        </a>
                        <p className="inline-flex items-center gap-2">
                        <FaMap color="gray" /> Hyderabad
                        </p>
                        </div>
                      </div>

                      <div>
                        <div className="h-[300px] w-[400px] rounded-2xl overflow-hidden">
                          <img src={unifive} alt="image" className="w-[400px] h-[300px] rounded-2xl hover:scale-110 transition-hover ease-in-out duration-200"/>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                        <a href="https://www.niatindia.com/campus/niat-pune-ajeenkya-dy-patil-university" className="text-red-800 text-lg">
                        Sanjay Ghodawat University
                        </a>
                        <p className="inline-flex items-center gap-2">
                        <FaMap color="gray" /> Maharashtra
                        </p>
                        </div>
                      </div>
                 </div>

                 {/* second gallery */}
                 <div className="h-[350px] w-full flex justify-center items-center gap-5">
                      <div>
                        <div className="h-[300px] w-[400px] rounded-2xl overflow-hidden">
                          <img src={unifour} alt="image" className="w-[400px] h-[300px] rounded-2xl hover:scale-110 transition-hover ease-in-out duration-200"/>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                        <a href="https://www.niatindia.com/campus/niat-pune-ajeenkya-dy-patil-university" className="text-red-800 text-lg">
                        Yenepoya University
                        </a>
                        <p className="inline-flex items-center gap-2">
                        <FaMap color="gray" /> Mangalore
                        </p>
                        </div>
                      </div>

                      <div>
                        <div className="h-[300px] w-[400px] rounded-2xl overflow-hidden">
                          <img src={unithree} alt="image" className="w-[400px] h-[300px] rounded-2xl hover:scale-110 transition-hover ease-in-out duration-200"/>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                        <a href="https://www.niatindia.com/campus/niat-pune-ajeenkya-dy-patil-university" className="text-red-800 text-lg">
                        NRI
                        </a>
                        <p className="inline-flex items-center gap-2">
                        <FaMap color="gray" /> Vijayawada
                        </p>
                        </div>
                      </div>

                      <div>
                        <div className="h-[300px] w-[400px] rounded-2xl overflow-hidden">
                          <img src={unitwo} alt="image" className="w-[400px] h-[300px] rounded-2xl hover:scale-110 transition-hover ease-in-out duration-200"/>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                        <a href="https://www.niatindia.com/campus/niat-pune-ajeenkya-dy-patil-university" className="text-red-800 text-lg">
                        Takshashila University
                        </a>
                        <p className="inline-flex items-center gap-2">
                        <FaMap color="gray" /> Chennai-Pondicherry
                        </p>
                        </div>
                      </div>
                 </div>
            </div>
      </div>
    </>
  )
}

export default App
