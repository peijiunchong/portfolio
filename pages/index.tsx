import Head from "next/head";
import Header from "../components/Header"; 
import Hero from "../components/Hero";
import About from "../components/About"
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Education from "../components/Education";
import Link from 'next/link';
import { GetStaticProps } from "next";
import { Experience, Education as EducationType, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchEducation } from "../utils/fetchEducation";
import { FiArrowUp } from "react-icons/fi";
import { sanityClient } from "../sanity";
import groq from "groq";

type Props = {
  pageInfo: PageInfo;
  educations: EducationType[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, educations, experiences, skills, projects, socials}:Props) => {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>CPJ's Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="education" className="snap-center">
        <Education educations={educations}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/> 
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe></ContactMe>
      </section>

      <Link href="#hero" className="snap-center">
        <footer className="sticky top-0 bottom-5 w-full cursor-pointer z-20">
          <div className="flex items-center justify-center">
          <FiArrowUp className="h-10 w-10 rounded-full filter text-gray-600 hover:text-white cursor-pointer"/>
          </div>
        </footer>
      </Link>

      {/* <main className=" bg-ivory-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-gray-600 dark:text-white">
            <div className="text-4xl flex justify-center gap-10 py-3 text-red-200 dark:text-gray-400">
              <a href="https://github.com/peijiunchong"><AiFillGithub className="cursor-pointer hover:text-dusty-rose dark:hover:text-white"/></a>
              <a href="https://www.linkedin.com/in/peijiun/"><AiFillLinkedin className="cursor-pointer hover:text-dusty-rose dark:hover:text-white" /></a>
              <a href= "mailto:peijiunchong@gmail.com"><AiFillMail className="cursor-pointer hover:text-dusty-rose dark:hover:text-white" /></a>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-red-200 to-red-300 dark:bg-gradient-to-l font-bold px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-around py-10">
            <div className="mx-10 bg-gradient-to-b from-azure rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
              <Image src={profilePic} layout="fill" objectFit="cover" />
            </div>
            <div>
              <h2 className="text-5xl py-4 text-azure font-medium dark:text-teal-400 md:text-6xl">
                Chong Pei Jiun
              </h2>
              <h3 className="text-2xl py-10 dark:text-white md:text-3xl">
                Quality Engineer and Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 text-xl dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Freelancer providing services for programming and design content
                needs. Join me down below and let's get cracking!
              </p>
            </div>
          </div>
        </section>
        <section className="min-h-screen">
          <div>
            <h3 className="text-center text-5xl py-1 dark:text-white ">Education</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="py-5">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">     
                  <li class="mb-10 ml-6">            
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Computer Science in Advanced Computer Science</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 italic">Monash University Malaysia (2019 - 2021)</time>
                    <p class="mb-2  text-base font-normal text-gray-500 dark:text-gray-400">CGPA: 3.67</p>
                    <p class="mb-2  text-base font-normal text-gray-500 dark:text-gray-400">WAM (Weighted Average Marks): 82.70</p>
                    <p class="mb-2  text-base font-normal text-gray-500 dark:text-gray-400">Participated in Monash Hackathon 2019</p>
                    <p class="mb-2  text-base font-normal text-gray-500 dark:text-gray-400">Participated in Shopee Code League 2020</p>
                  </li>
                  <li class="mb-10 ml-6">            
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Cambridge A-Levels</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 italic">Methodist College Kuala Lumpur (2017 - 2018)</time>
                    <p class="mb-2  text-base font-normal text-gray-500 dark:text-gray-400">CGPA: 3.83</p>
                    <p class="mb-2  text-base font-normal text-gray-500 dark:text-gray-400">Mathematics(A), Biology(A), Chemistry(A)</p>
                  </li>
                  <li class="mb-10 ml-6">            
                    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Sijil Pelajaran Malaysia (SPM)</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 italic">Sri KDU Secondary School (2012-2016)</time>
                    <p class="mb-2  text-base font-normal text-gray-500 dark:text-gray-400">7A</p>
                  </li>
              </ol>
            </div>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-5xl py-1 dark:text-white ">Skills</h3>
          </div>
          <div className="gap-4 pt-5 pb-5">
            <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Programming Languages</h1>
            <h3>Python, Java, JavaScript</h3>
 
            <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Web Front-End</h1>
            <h3>HTML, CSS, BootstrapCSS, TailwindCSS, JavaScript, React.js, Next.js</h3>

            <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Database</h1>
            <h3>MySQL, MongoDB</h3>

            <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Mobile Programming</h1>
            <h3>Android Studio</h3>

            <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Automation Tools</h1>
            <h3>Continuos Integration, Continuos Deployment</h3>
          </div>
        </section>
      </main> */}
    </div>
  );
}

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {

  const pageInfo: PageInfo = await sanityClient.fetch(groq`*[_type == 'pageInfo'] [0]`);
  const skills: Skill[] = await sanityClient.fetch(groq`*[_type == 'skill']`);
  const experiences: Experience[] = await sanityClient.fetch(groq`*[_type == 'experience']`);
  const educations: EducationType[] = await sanityClient.fetch(groq`*[_type == 'education']`);
  const projects: Project[] = await sanityClient.fetch(groq`*[_type == 'project'] {
      ...,
      technologies[] ->
  }
`);
  const socials: Social[] = await sanityClient.fetch(groq`*[_type == 'social']`);

  return {
    props: {
      pageInfo,
      skills,
      experiences,
      educations,
      projects,
      socials
    },
    // next.js will attempt to re-generate the page: 
    // - when a request comes in
    // - at most once every 10 seconds
    revalidate: 10
  }
}