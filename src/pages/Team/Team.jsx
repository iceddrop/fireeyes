import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import portrait from "../../assets/androgynous-6588615_640.jpg"
import Footer from "../../component/Footer/Footer";
import tomiwa from "../../assets/tomiwa.jpg";
import suqroh from "../../assets/suqroh.jpg"; 
import olawalejpg from "../../assets/olawalejpg.jpg"; 

const Team = () => {
  return (
    <div>
      <Breadcrumb aria-label="Default breadcrumb example" className="py-2 pl-2">
        <Breadcrumb.Item href="/" className="text-white" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/team" className="text-white">
          Team
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="lg:flex px-10 pt-16">
        <img className="size-96 object-cover rounded-md" src={olawalejpg} alt="" />
        <div className="flex flex-col lg:pl-6 lg:w-96">
          <h3 className="text-2xl font-semi-bold pt-4 lg:pt-0">Olawale Toheeb</h3>
          <h6 className="text-lg text-gray-600 font-bold pt-2">Full stack Engineer</h6>
          <p className="text-slate-600 pt-2 lg:pr-20 text-justify">
          A Full stack Engineer with expertise in Java development for backend systems and proficiency in React.js for frontend applications, complemented by a strong foundation in Embedded Systems. This combination enables the creation of integrated applications that effectively bridge hardware and software, ensuring seamless user experiences and robust functionality.
          </p>
        </div>
      </div>

      <div className="lg:flex px-10 pt-16">
        <img className="size-96 object-cover rounded-md" src={suqroh} alt="" />
        <div className="flex flex-col lg:pl-6 lg:w-96">
          <h3 className="text-2xl font-semi-bold pt-4 lg:pt-0">Shukurat Olajire</h3>
          <h6 className="text-lg text-gray-600 font-bold pt-2">Brand Strategist and Social Media Manager</h6>
          <p className="text-slate-600 pt-2 lg:pr-20 text-justify">
          Shukurat Olajire is a creative brand strategist with two years of experience, plus six months in social media management. She crafts marketing strategies that connect brands with their ideal audience, ensuring strong engagement and growth.        
          </p>
        </div>
      </div>

      <div className="lg:flex px-10 pt-16">
        <img className="size-96 object-cover rounded-md" src={tomiwa} alt="portrait-img" />
        <div className="flex flex-col lg:pl-6 lg:w-96">
          <h3 className="text-2xl font-semi-bold pt-4 lg:pt-0">Ibikunle Tomiwa</h3>
          <h6 className="text-lg text-gray-600 font-bold pt-2">Front end web developer</h6>
          <p className="text-slate-600 pt-2 lg:pr-20 text-justify">
          As a self taught front-end developer, I have worked on web applications using HTML, CSS, Javascript, and React, developing user interfaces and optimizing them for a smooth user experience.
          </p>
        </div>
      </div>

      <div className="lg:flex px-10 pt-16">
        <img className="size-96 object-cover rounded-md" src={portrait} alt="" />
        <div className="flex flex-col lg:pl-6 lg:w-96">
          <h3 className="text-2xl font-semi-bold pt-4 lg:pt-0">Ibikunle Tomiwa</h3>
          <h6 className="text-lg text-gray-600 font-bold pt-2">Front end web developer</h6>
          <p className="text-slate-600 pt-2 lg:pr-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente
            nesciunt laboriosam. Repudiandae necessitatibus hic eveniet quos
            blanditiis eum recusandae!
          </p>
        </div>
      </div>
      
      <div className="pt-6">
      <Footer/>
      </div>
    </div>
  );
};

export default Team;
