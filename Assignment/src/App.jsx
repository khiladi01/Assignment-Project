import logo from "./assets/logo/logo.avif";
import hero from "./assets/hero/hero.avif";
import founderone from "./assets/founder/founderone.avif";
import foundertwo from "./assets/founder/foundertwo.avif";
import founderthree from "./assets/founder/founderthree.avif";
import unione from "./assets/university/unione.avif";
import unitwo from "./assets/university/unitwo.avif";
import unithree from "./assets/university/unithree.avif";
import unifour from "./assets/university/unifour.avif";
import unifive from "./assets/university/unifive.avif";
import unisix from "./assets/university/unisix.avif";
import { FaUniversity, FaMap, FaCertificate, FaDownload } from "react-icons/fa";

function App() {
  return (
    <>
      {/* header */}
      <header className="h-10 w-full bg-white flex justify-center items-center gap-5 text-sm px-2 md:px-0">
        <p className="font-medium">
          NAT Applications for 2025 are closed. Apply For 2026 Admission-counselling.
        </p>
        <span className="text-red-800 font-medium">
          <a href="https://apply.niatindia.com/login">Apply Now!</a>
        </span>
      </header>

      {/* navigation */}
      <div className="w-full flex justify-center items-center bg-white sticky top-0 z-50 px-2 md:px-0">
        <nav className="h-20 w-full max-w-[1450px] rounded-2xl bg-amber-50 flex flex-col md:flex-row justify-between items-center md:items-center p-2 md:p-0">
          <div className="flex justify-between items-center w-full md:w-auto">
            <a href="https://www.niatindia.com/">
              <img src={logo} alt="logo" className="h-12 w-12" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-10 text-[15px] font-medium mt-2 md:mt-0">
            <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="#">NIAT Advantage</a>
            <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="#">University Collabs</a>
            <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="#">Skill Map</a>
            <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="#">Admission Counselling</a>
            <a className="hover:underline hover:underline-offset-4 hover:decoration-1" href="#">Student Clubs</a>
          </div>
        </nav>
      </div>

      {/* hero */}
      <div className="w-full flex justify-center items-center bg-white px-2 md:px-0">
        <div className="w-full max-w-[1450px] bg-pink-50 rounded-2xl flex flex-col-reverse md:flex-row justify-between items-center p-4 md:p-0">
          {/* first column */}
          <div className="flex-1 md:pl-10">
            <div className="h-[50px] w-full md:w-[510px] rounded-full bg-white flex justify-center items-center text-sm">
              <span className="text-red-800">★</span> Collaborating With UGC-recognized/AICTE-approved Universities <span className="text-red-800">★</span>
            </div>
            <div className="mt-5 grid gap-2">
              <p className="text-3xl md:text-5xl text-red-800">Build Your Future in Emerging Tech</p>
              <p className="text-3xl md:text-5xl">With NIAT’s Industry-ready Upskilling</p>
            </div>
            <div className="mt-5 grid gap-2 text-gray-700 text-sm">
              <p className="inline-flex items-center gap-2"><FaUniversity color="gray" /> Offered At 10+ Universities Across India</p>
              <p className="inline-flex items-center gap-2"><FaMap color="gray" /> Industry-aligned Skill Map</p>
              <p className="inline-flex items-center gap-2"><FaCertificate color="gray"/> Get IRC Certification From NIAT</p>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-5">
              <button className="h-12 sm:w-[250px] bg-red-800 text-sm text-white font-medium rounded-sm hover:bg-red-900 cursor-pointer">Apply for Counselling</button>
              <button className="h-12 sm:w-[250px] inline-flex gap-2 justify-center items-center bg-white font-medium text-sm text-red-800 rounded-sm border-2 border-red-800 cursor-pointer">
                Download Brochure <FaDownload color="black" />
              </button>
            </div>
          </div>

          {/* second column */}
          <div className="w-full md:w-[500px] h-[300px] md:h-[500px] mb-4 md:mb-0">
            <img src={hero} alt="heroimg" className="h-full w-full object-cover rounded-2xl"/>
          </div>
        </div>
      </div>

      {/* achievement */}
      <div className="w-full grid place-content-center gap-10 px-2 md:px-0 mt-10">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl md:text-5xl">Students <span className="text-red-800">Achievement</span></h1>
        </div>
        <div className="overflow-hidden">
          <div className="h-[120px] w-full bg-red-800 flex items-center text-white text-lg font-medium">
            <marquee behavior="scroll" direction="left" scrollamount="10">
              Empowering Careers with World-Class Training • Join thousands of learners across India and upgrade your skills with NIAT-certified programs • Certified Digital Marketing Professional • Advanced Web Development Bootcamp • AI & Machine Learning Certification • Contact us: info@niatindia.in | +91 98765 43210
            </marquee>
          </div>
        </div>

        {/* founders */}
        <div className="grid place-content-center gap-5">
          <div className="grid place-content-center gap-5 text-center">
            <p className="text-3xl md:text-5xl">An Upskilling Initiative By</p>
            <p className="text-3xl md:text-5xl text-red-800">IIT & IIIT Alumni</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {[founderone, foundertwo, founderthree].map((img, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 w-full md:w-[400px]">
                <div className="h-[300px] w-[300px] md:h-[300px] md:w-[300px] rounded-full overflow-hidden flex justify-center items-center bg-red-800">
                  <img src={img} alt={`founder-${idx}`} className="h-full w-full object-cover"/>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium mt-2">
                    {idx === 0 ? "Co-Founder at NxtWave" : idx === 1 ? "Co-Founder & CEO at NxtWave" : "Co-Founder & COO at NxtWave"}
                  </h3>
                  <p className="text-sm text-gray-600 font-semibold">
                    {idx === 0 ? "IIT Bombay, AIR 119 in JEE 2013" : idx === 1 ? "IIIT Hyderabad, Ex-Amazon" : "IIT Kharagpur, Awarded Young Alumni Achiever"}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    {idx === 0 ? "Honoured in Forbes India 30 Under 30" : idx === 1 ? "Hurun India's Top 150 Next-Gen Entrepreneurs" : "Honoured in Forbes India 30 Under 30"}
                  </p>
                  <div className="h-px w-[150px] bg-red-800 mx-auto"></div>
                  <p className="text-sm text-gray-600 font-medium"><span className="text-red-800">★</span> {idx === 0 ? "Sashank Gujjula" : idx === 1 ? "Rahul Attuluri" : "Anupam Pedarla"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* universities */}
      {/* universities */}
<div className="mt-20 w-full gap-10 px-2 md:px-0">
  <div className="grid place-content-center gap-5 text-center">
    <p className="text-3xl md:text-5xl">Our Upskilling Program</p>
    <p className="text-3xl md:text-5xl">Offered At <span className="text-red-800">10+ Universities</span></p>
  </div>

  <div className="grid gap-5 md:gap-10 mt-10">
    {/* first row */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
      <div className="flex flex-col items-start w-full sm:w-[400px]">
        <div className="h-[300px] w-full rounded-2xl overflow-hidden">
          <img src={unione} alt="Ajeenkya DY Patil University" className="w-full h-full rounded-2xl hover:scale-110 transition-transform ease-in-out duration-200 object-cover"/>
        </div>
        <a href="https://www.niatindia.com/campus/niat-pune-ajeenkya-dy-patil-university" className="text-red-800 text-lg mt-2">
          Ajeenkya DY Patil University
        </a>
        <p className="inline-flex items-center gap-2"><FaMap color="gray" /> Pune</p>
      </div>

      <div className="flex flex-col items-start w-full sm:w-[400px]">
        <div className="h-[300px] w-full rounded-2xl overflow-hidden">
          <img src={unisix} alt="Malla Reddy Vishwavidyapeeth" className="w-full h-full rounded-2xl hover:scale-110 transition-transform ease-in-out duration-200 object-cover"/>
        </div>
        <a href="#" className="text-red-800 text-lg mt-2">
          Malla Reddy Vishwavidyapeeth
        </a>
        <p className="inline-flex items-center gap-2"><FaMap color="gray" /> Hyderabad</p>
      </div>

      <div className="flex flex-col items-start w-full sm:w-[400px]">
        <div className="h-[300px] w-full rounded-2xl overflow-hidden">
          <img src={unifive} alt="Sanjay Ghodawat University" className="w-full h-full rounded-2xl hover:scale-110 transition-transform ease-in-out duration-200 object-cover"/>
        </div>
        <a href="#" className="text-red-800 text-lg mt-2">
          Sanjay Ghodawat University
        </a>
        <p className="inline-flex items-center gap-2"><FaMap color="gray" /> Maharashtra</p>
      </div>
    </div>

    {/* second row */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
      <div className="flex flex-col items-start w-full sm:w-[400px]">
        <div className="h-[300px] w-full rounded-2xl overflow-hidden">
          <img src={unifour} alt="Yenepoya University" className="w-full h-full rounded-2xl hover:scale-110 transition-transform ease-in-out duration-200 object-cover"/>
        </div>
        <a href="#" className="text-red-800 text-lg mt-2">
          Yenepoya University
        </a>
        <p className="inline-flex items-center gap-2"><FaMap color="gray" /> Mangalore</p>
      </div>

      <div className="flex flex-col items-start w-full sm:w-[400px]">
        <div className="h-[300px] w-full rounded-2xl overflow-hidden">
          <img src={unithree} alt="NRI University" className="w-full h-full rounded-2xl hover:scale-110 transition-transform ease-in-out duration-200 object-cover"/>
        </div>
        <a href="#" className="text-red-800 text-lg mt-2">
          NRI
        </a>
        <p className="inline-flex items-center gap-2"><FaMap color="gray" /> Vijayawada</p>
      </div>

      <div className="flex flex-col items-start w-full sm:w-[400px]">
        <div className="h-[300px] w-full rounded-2xl overflow-hidden">
          <img src={unitwo} alt="Takshashila University" className="w-full h-full rounded-2xl hover:scale-110 transition-transform ease-in-out duration-200 object-cover"/>
        </div>
        <a href="#" className="text-red-800 text-lg mt-2">
          Takshashila University
        </a>
        <p className="inline-flex items-center gap-2"><FaMap color="gray" /> Chennai-Pondicherry</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
