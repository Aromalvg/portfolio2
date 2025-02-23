import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { TextHoverEffectBlack } from "@/components/ui/texthovereffect";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";


 


const imageUrls = [
  "visualelectric-1739943802452.png",
  "visualelectric-1739944486784.png",
  "visualelectric-1739944620921.png",
  "visualelectric-1739944947525.png",
  "visualelectric-1739945020105.png",
  "visualelectric-1739945294068.png",
  "visualelectric-1739945128301.png",
  "visualelectric-1739945382331.png",

];

const words = `I’m Aromal, a web designer & developer who loves blending creativity with technology. With expertise in React.js, Python, and API development, I specialize in crafting bold, engaging, and user-friendly digital experiences.

My approach is all about pushing boundaries—whether it’s designing sleek interfaces, optimizing performance, or bringing innovative ideas to life.`;


const content = [
  {
    title: "OTT STREAMING PLATFORM",
    description:
      "This OTT streaming platform is developed using a modern stack, combining React.js for a dynamic and responsive client-side experience with Python Django as the backend, powered by Django REST Framework (DRF) for efficient API communication. The platform is designed to provide seamless content streaming while enabling administrative control over movies and users..",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="ott.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "  CONSTRUCTION APP",
    description:
      "This construction app is built using HTML, CSS, and Bootstrap, providing a responsive and user-friendly interface for managing construction projects efficiently. Designed for both contractors and project managers, the app ensures smooth workflow management.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="buildwellz.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "DOG TRAINING APP",
    description:
      "This Dog Training App is designed to help dog owners and trainers with structured training programs, interactive guides, and progress tracking. Built using HTML, CSS, and Bootstrap, it offers a responsive and user-friendly interface, ensuring accessibility across all devices.",
    content: (
      <div className="h-full w-full  flex items-center justify-center  text-white">
        <img
          src="dogtraining.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "URL SHORTNER",
    description:
      "This URL Shortener is a lightweight and efficient web application designed to shorten long URLs into concise, shareable links. Built using HTML, CSS, Bootstrap, and Python Django, the platform offers a seamless and user-friendly experience for generating and managing short links.",
    content: (
      <div className="h-[500px] w-[300px]  flex items-center justify-center  text-white">
      <img
        src="urlshort.png"
        width={200}
        height={200}
        className="h-full w-full object-contain"
        alt="linear board demo"
      />
    </div>
    ),
  },
];



export function Home() {



  return (

<div className="bg-black">

<div className="min-h-screen flex flex-col items-center justify-start relative">
  {/* Top Navigation Bar */}
  <nav className="w-full max-w-5xl py-5 flex justify-between text-white font-extrabold font-serif text-sm md:text-2xl">
    <a href="/#about" className="nav-link flex-1 text-center ">ABOUT</a>
    <a href="#contact"  className="flex-1 text-center">CONTACT</a>
    <a href="#services"  className="flex-1 text-center">SERVICES</a>
    <a href="#projects"className="flex-1 text-center">PROJECTS</a>
  </nav>

  {/* Main Content */}
  <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-start w-full pt-10">
    <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-center z-10 whitespace-nowrap leading-none font-serif">
      Hi, I'm AROMAL
    </h1>

    <div className="relative w-full">
      <div className="flex justify-between flex-col md:flex-row">
        <TypingAnimation
          className="text-white md:mt-20 mt-52 ml-1 md:ml-20 text-[15px] lg:text-[20px] md:text-[15px] text-center md:text-left font-[monospace]"
          duration={100}
          delay={500}
          repeat
        >
          {"A WEB DESIGNER PASSIONATE\n ABOUT CRAFTING BOLD AND\n MEMORABLE PROJECTS"}
        </TypingAnimation>

        <div className="relative mt-10 md:mt-20 md:mr-40 mx-auto">
          <button id="contact" className="text-white font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-indigo-500 border text-[10px] lg:text-[20px] md:text-[15px] text-center px-8 py-2 md:px-8 md:py-4 rounded-3xl">
            CONTACT
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="absolute top-[-6.5rem] sm:top-[-6.7rem] md:top-[-7rem] lg:top-[-7.5rem] left-1/2 -translate-x-1/2 z-20">
        <CardContainer className="inter-var">
          <CardBody className="relative w-full max-w-[100%] sm:max-w-[20rem] md:max-w-[25rem] lg:max-w-[50rem] h-auto">
            <CardItem translateX="20" translateZ="150" className="w-full">
              <img
                src="3d-removebg-preview.png"
                height="800"
                width="800"
                className="w-full h-auto object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  </div>
</div>


{/* .................................................................. */}


<div className="relative flex w-full top-[-10rem] md:top-[-2rem] text-white flex-col items-center justify-center overflow-hidden font-montserrat">
      <VelocityScroll>Web Developer | Reactjs | Python | API |</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
</div>

{/* ............................................................................ */}

<div className="h-[45rem] md:h-[50rem] top-[-25rem] md:top-[-12rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        images={imageUrls}
        direction="right"
        speed="slow"
      />
</div>
<div className="h-[45rem] md:h-[50rem] top-[-56rem] md:top-[-39rem]   rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        images={imageUrls}
        direction="left"
        speed="slow"
      />
</div>

{/* ............................................................................................. */}


<div id="about" className="h-[4rem] md:h-[9rem] mt-[-68rem] md:mt-[-45rem]   flex items-center justify-center">
      <TextHoverEffect  text="ABOUT" />
</div>

<div className="container font-[monospace] mx-auto px-4 sm:px-6 lg:px-8">
  <TextGenerateEffect words={words} />
</div>

<div  className="mt-20 flex justify-center">
    <button id="contact"  className="text-white font-semibold bg-gradient-to-r from-red-500 via-yellow-500 to-indigo-500 border text-[10px] lg:text-[20px] md:text-[15px] text-center px-8 py-2 md:px-7 md:py-3 rounded-3xl " >
                CONTACT
    </button>
</div>

{/* ........................................................................................................ */}

<div id="services" className=" mt-[6rem] md:mt-[12rem] flex flex-col items-center justify-center bg-[#ebeaea] rounded-3xl p-10">
  <TextHoverEffectBlack className="mb-10" text="SERVICES" />

  <div className="grid grid-cols-3 gap-4 w-full">
    <div className="flex items-center justify-center text-6xl md:text-9xl font-bold text-gray-800">
      01
    </div>

    <div className="col-span-2 flex flex-col gap-1">
      <div className="p-4  rounded-lg">
        <p className="text-black font-[space] text-[1rem] md:text-[1.5rem] font-semibold">WEB DESIGNER</p>
      </div>
      <div className="p-4  rounded-lg">
        <p className="text-gray-500 font-[monospace] text-[0.8rem] md:text-[1.2rem]">Passionate about design trends, typography, and enhancing user experience, I turn ideas into compelling digital solutions. </p>
      </div>
    </div>
  </div>

  <hr className="bg-black mt-8 mb-8 h-[2px] w-full  " />

  <div className="grid grid-cols-3 gap-4 w-full">
    <div className="flex items-center justify-center text-6xl md:text-9xl font-bold text-gray-800">
      02
    </div>

    <div className="col-span-2 flex flex-col gap-1">
      <div className="p-4  rounded-lg">
        <p className="text-black font-[space] text-[1rem] md:text-[1.5rem] font-semibold">FRONT-END DEVELOPMENT</p>
      </div>
      <div className="p-4  rounded-lg">
        <p className="text-gray-500 font-[monospace] text-[0.8rem] md:text-[1.2rem]">Turning creative designs into fully responsive, high-performance web experiences. With expertise in HTML, CSS, JavaScript, React, and Tailwind CSS, I focus on building interactive, visually engaging, and user-friendly interfaces. </p>
      </div>
    </div>
  </div>

  <hr className="bg-black mt-8 mb-8 h-[2px] w-full  " />

  <div className="grid grid-cols-3 gap-4 w-full">
    <div className="flex items-center justify-center text-6xl md:text-9xl font-bold text-gray-800">
      03
    </div>

    <div className="col-span-2 flex flex-col gap-1">
      <div className="p-4  rounded-lg">
        <p className="text-black font-[space] text-[1rem] md:text-[1.5rem] font-semibold">BACK-END DEVELOPMENT</p>
      </div>
      <div className="p-4  rounded-lg">
        <p className="text-gray-500 font-[monospace] text-[0.8rem] md:text-[1.2rem]">Creating robust, efficient, and scalable server-side solutions. With expertise Python, Django and MySQL. I focus on building high-performance APIs, databases, and server architectures that power seamless user experiences. </p>
      </div>
    </div>
  </div>

  <hr className="bg-black mt-8 mb-8 h-[2px] w-full  " />

  <div className="grid grid-cols-3 gap-4 w-full">
    <div className="flex items-center justify-center text-6xl md:text-9xl font-bold text-gray-800">
      04
    </div>

    <div className="col-span-2 flex flex-col gap-1">
      <div className="p-4  rounded-lg">
        <p className="text-black font-[space] text-[1rem] md:text-[1.5rem] font-semibold">ANIMATED DESIGNS</p>
      </div>
      <div className="p-4  rounded-lg">
        <p className="text-gray-500 font-[monospace] text-[0.8rem] md:text-[1.2rem]">Creating dynamic, engaging, and immersive experiences through motion, animation, and seamless interactions. </p>
      </div>
    </div>
  </div>

  <hr className="bg-black mt-8 mb-8 h-[2px] w-full  " />


</div>

{/* ................................................................................. */}


<div className="p-10 ">
<div id="projects" className="h-[4rem] md:h-[9rem] mt-[2rem] md:mt-[1rem]   flex items-center justify-center">
      <TextHoverEffect text="PROJECTS" />
</div>      <StickyScroll content={content} />
</div>

{/* ......................................................................................... */}

<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 rounded-3xl p-6">
      {/* Left Column - Text Section */}
      <div className="md:w-1/2 text-center md:text-left p-8">
        <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
        <i className="ri-bluesky-fill text-6xl bg-gradient-to-r from-red-500 via-yellow-500 to-indigo-500 bg-clip-text text-transparent"></i> LET'S <br /> GET IN <br /> TOUCH   <i className="ri-bluesky-fill text-6xl bg-gradient-to-r from-red-500 via-yellow-500 to-indigo-500 bg-clip-text text-transparent"></i>


        </h1>
      </div>

      {/* Right Column - Form Section with Hover Gradient Border */}
      <div className="relative group">
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r from-red-500 via-yellow-500 to-indigo-500  blur-[5px]"></div>
        
        {/* Form Container */}
        <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-100"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-red-500 via-yellow-500 to-indigo-500 text-black py-3 rounded-3xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

{/* ............................................................................ */}

<footer className="footer bg-black   p-10">
  <aside>
  <div className="h-[150px] w-[150px]  flex items-center  justify-center ">
        <img
          src="3d-removebg-preview.png"
          width={200}
          height={200}
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    <h1
  style={{
    fontFamily: '"Rubik One", sans-serif',
    WebkitTextStroke: "1px white",
    color: "transparent",
  }}
  className="text-5xl md:text-8xl font-bold"
>
  AROMAL
</h1>

  </aside>
  <div className="grid-cols-2">
  <nav className="grid">
    <h6 className="footer-title text-white">SOCIAL</h6>
    <a className="link no-underline text-blue-600 text-2xl hover:text-blue-800"><i className="ri-linkedin-box-fill"></i></a>
    <a className="link no-underline text-white text-2xl "><i className="ri-github-fill"></i></a>
    <a className="no-underline link  text-blue-600 text-2xl "><i className="ri-facebook-fill"></i></a>
    <a className="link link-hover bg-gradient-to-r from-red-500 via-yellow-500 to-indigo-500 bg-clip-text text-transparent text-2xl"><i className="ri-instagram-fill"></i></a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">CONTACT</h6>
    <p className="link link-hover">TRIVANDRUM,KERALA</p>
    <p className="link link-hover">695020</p>
    <p className="link link-hover">Ph:+918281783052</p>
  </nav>
  </div>
</footer>

<footer className="footer footer-center bg-black text-base-content p-4">
  <aside>
    <p>Copyright © 2025 - By AROMAL</p>
  </aside>
</footer>

</div>
  );
}
