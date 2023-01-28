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
import { fetchResume } from "../utils/fetchResume";

type Props = {
  pageInfo: PageInfo;
  educations: EducationType[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  resumeURL: String;
}

const Home = ({pageInfo, educations, experiences, skills, projects, socials, resumeURL}:Props) => {

  return (
      <div className="bg-[#F5EBE0] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#DBA39A]/80 dark:bg-[#3F3B6C]">
        <Head>
          <title>CPJ's Portfolio</title>
        </Head>

        <Header socials={socials} resumeURL={resumeURL}/>

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
            <FiArrowUp className="h-10 w-10 rounded-full filter text-[#665A48] dark:text-[#C7BCA1] hover:text-gray-400 dark:hover:text-[#665A48] cursor-pointer"/>
            </div>
          </footer>
        </Link>
    </div>
  );
}

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {

  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const experiences: Experience[] = await fetchExperience();
  const educations: EducationType[] = await fetchEducation();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const resumeURL: String = await fetchResume();


  return {
    props: {
      pageInfo,
      skills,
      experiences,
      educations,
      projects,
      socials,
      resumeURL
    },
    // next.js will attempt to re-generate the page: 
    // - when a request comes in
    // - at most once every 10 seconds
    revalidate: 10
  }
}