import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import custom from "../styles/custom.module.css";
import "bootstrap/dist/css/bootstrap.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { WorkExperience } from "../attributes/WorkExperience";
import { Project } from "../attributes/Project";

export default function Home() {
  const [allWorkExperiences, setAllWorkExperiences] = useState(WorkExperience);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [allProjects, setAllProjects] = useState(Project);
  const [projects, setProjects] = useState([]);
  const [workExperiencePage, setWorkExperiencePage] = useState(1);
  const [lastWorkExperiencePage, setLastWorkExperiencePage] = useState(1);
  const [projectPage, setProjectPage] = useState(1);
  const [lastProjectPage, setLastProjectPage] = useState(1);
  const workExperiencePerPage = 2;
  const projectPerPage = 6;

  useEffect(() => {
    const getWorkExperiences = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_PROFILE_API}/work-experience`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
          },
        })
        .then((response) => {
          setAllWorkExperiences(response.data);
          setLastWorkExperiencePage(
            parseInt((response.data.length - 1) / workExperiencePerPage) + 1,
          );
          let workExperience = [];
          for (
            let i = 0;
            i < min(workExperiencePerPage, response.data.length);
            i++
          ) {
            workExperience.push(response.data[i]);
          }
          setWorkExperiences(workExperience);
        })
        .catch((e) => {
          setLastWorkExperiencePage(
            parseInt((allWorkExperiences.length - 1) / workExperiencePerPage) +
              1,
          );
          let workExperience = [];
          for (
            let i = 0;
            i < min(workExperiencePerPage, allWorkExperiences.length);
            i++
          ) {
            workExperience.push(allWorkExperiences[i]);
          }
          setWorkExperiences(workExperience);
        });
    };

    const getProjects = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_PROFILE_API}/project`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
          },
        })
        .then((response) => {
          setAllProjects(response.data);
          setLastProjectPage(
            parseInt((response.data.length - 1) / projectPerPage) + 1,
          );
          let project = [];
          for (let i = 0; i < min(projectPerPage, response.data.length); i++) {
            project.push(response.data[i]);
          }
          setProjects(project);
        })
        .catch((e) => {
          setLastProjectPage(
            parseInt((allProjects.length - 1) / projectPerPage) + 1,
          );
          let project = [];
          for (let i = 0; i < min(projectPerPage, allProjects.length); i++) {
            project.push(allProjects[i]);
          }
          setProjects(project);
        });
    };

    getWorkExperiences();
    getProjects();
  }, [allProjects, allWorkExperiences]);

  useEffect(() => {
    for (let i = 0; i < workExperiences.length; i++) {
      document.getElementById(`work-experience_${i}`).innerHTML =
        workExperiences[i].description;
    }
  }, [workExperiences]);

  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      document.getElementById(`project_${i}`).innerHTML =
        projects[i].description;
    }
  }, [projects]);

  const firstWorkExperienceClick = () => {
    if (workExperiencePage > 1) {
      setWorkExperiencePage(1);
      const last = 1;
      let workExperience = [];
      for (
        let i = (last - 1) * workExperiencePerPage;
        i < min(allWorkExperiences.length, last * workExperiencePerPage);
        i++
      ) {
        workExperience[workExperience.length] = allWorkExperiences[i];
      }
      setWorkExperiences(workExperience);
    }
  };

  const prevWorkExperienceClick = () => {
    if (workExperiencePage > 1) {
      setWorkExperiencePage(workExperiencePage - 1);
      const next = workExperiencePage - 1;
      let workExperience = [];
      for (
        let i = (next - 1) * workExperiencePerPage;
        i < min(allWorkExperiences.length, next * workExperiencePerPage);
        i++
      ) {
        workExperience[workExperience.length] = allWorkExperiences[i];
      }
      setWorkExperiences(workExperience);
    }
  };

  const nextWorkExperienceClick = () => {
    if (workExperiencePage < lastWorkExperiencePage) {
      setWorkExperiencePage(workExperiencePage + 1);
      const next = workExperiencePage + 1;
      let workExperience = [];
      for (
        let i = (next - 1) * workExperiencePerPage;
        i < min(allWorkExperiences.length, next * workExperiencePerPage);
        i++
      ) {
        workExperience[workExperience.length] = allWorkExperiences[i];
      }
      setWorkExperiences(workExperience);
    }
  };

  const lastWorkExperienceClick = () => {
    if (workExperiencePage < lastWorkExperiencePage) {
      setWorkExperiencePage(lastWorkExperiencePage);
      const last = lastWorkExperiencePage;
      let workExperience = [];
      for (
        let i = (last - 1) * workExperiencePerPage;
        i < min(allWorkExperiences.length, last * workExperiencePerPage);
        i++
      ) {
        workExperience[workExperience.length] = allWorkExperiences[i];
      }
      setWorkExperiences(workExperience);
    }
  };

  const firstProjectClick = () => {
    if (projectPage > 1) {
      setProjectPage(1);
      const last = 1;
      let project = [];
      for (
        let i = (last - 1) * projectPerPage;
        i < min(allProjects.length, last * projectPerPage);
        i++
      ) {
        project[project.length] = allProjects[i];
      }
      setProjects(project);
    }
  };

  const prevProjectClick = () => {
    if (projectPage > 1) {
      setProjectPage(projectPage - 1);
      const next = projectPage - 1;
      let project = [];
      for (
        let i = (next - 1) * projectPerPage;
        i < min(allProjects.length, next * projectPerPage);
        i++
      ) {
        project[project.length] = allProjects[i];
      }
      setProjects(project);
    }
  };

  const nextProjectClick = () => {
    if (projectPage < lastProjectPage) {
      setProjectPage(projectPage + 1);
      const next = projectPage + 1;
      let project = [];
      for (
        let i = (next - 1) * projectPerPage;
        i < min(allProjects.length, next * projectPerPage);
        i++
      ) {
        project[project.length] = allProjects[i];
      }
      setProjects(project);
    }
  };

  const lastProjectClick = () => {
    if (projectPage < lastProjectPage) {
      setProjectPage(lastProjectPage);
      const last = lastProjectPage;
      let project = [];
      for (
        let i = (last - 1) * projectPerPage;
        i < min(allProjects.length, last * projectPerPage);
        i++
      ) {
        project[project.length] = allProjects[i];
      }
      setProjects(project);
    }
  };

  const min = (a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  };

  const filterOptions = [
    { value: "React.js", label: "React.js" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "Next.js", label: "Next.js" },
    { value: "React Native", label: "React Native" },
    { value: "Android Studio", label: "Android Studio" },
    { value: "Unity", label: "Unity" },
    { value: "Express.js", label: "Express.js" },
    { value: "Nest.js", label: "Nest.js" },
    { value: "Flask", label: "Flask" },
    { value: "Go", label: "Go" },
    { value: "Laravel", label: "Laravel" },
    { value: "CodeIgniter", label: "CodeIgniter" },
    { value: ".NET", label: ".NET" },
    { value: "Spring Boot", label: "Spring Boot" },
    { value: "JAX-WS", label: "JAX-WS" },
    { value: "JavaFX", label: "JavaFX" },
    { value: "Swing", label: "Swing" },
  ];

  return (
    <div>
      <Head>
        <title>Willy Wilsen</title>
        <meta name="description" content="Willy Wilsen" />
        <link rel="icon" href="/WW.ico" />
      </Head>

      <main>
        <header className={custom.header}>
          <div className={`${custom.container} container`}>
            <ul className={`${custom.socialicons} pt-3`}>
              <li className={`${custom.socialicons}`}>
                <a
                  rel="noreferrer"
                  className={`${custom.sociallink}`}
                  href="https://github.com/WillyWilsen"
                  target="_blank"
                >
                  <Image
                    alt="Github"
                    title="Github"
                    src="/icon/WhiteGithub.png"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className={`${custom.socialicons}`}>
                <a
                  rel="noreferrer"
                  className={`${custom.sociallink}`}
                  href="mailto: willywilsen.ww@gmail.com"
                  target="_blank"
                >
                  <Image
                    alt="Email"
                    title="Email"
                    src="/icon/WhiteEmail.png"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className={`${custom.socialicons}`}>
                <a
                  rel="noreferrer"
                  className={`${custom.sociallink}`}
                  href="https://www.linkedin.com/in/willywilsen/"
                  target="_blank"
                >
                  <Image
                    alt="LinkedIn"
                    title="LinkedIn"
                    src="/icon/WhiteLinkedIn.png"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className={`${custom.socialicons}`}>
                <a
                  rel="noreferrer"
                  className={`${custom.sociallink}`}
                  href="https://wa.me/6281949467344"
                  target="_blank"
                >
                  <Image
                    alt="Whatsapp"
                    title="Whatsapp"
                    src="/icon/WhiteWhatsapp.png"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
            </ul>
            <div className={custom.headercontent}>
              <h4 className={custom.headersubtitle}>Hello, I am</h4>
              <h1 className={custom.headertitle}>Willy Wilsen</h1>
              <h6 className={custom.headermono}>
                Software Engineer | Data Engineer |<br></br>
                System Analyst | Associate Cloud Engineer (ACE) | <br></br>
                AI Engineer
              </h6>
            </div>
          </div>
        </header>

        <div className="container-fluid">
          <div id="about" className={`row ${custom.aboutsection}`}>
            <div className={`col-lg-4 ${custom.aboutcard}`}>
              <h3 className={`${custom.fontweightlight}`}>
                Professional Summary
              </h3>
              <span className={`${custom.line} mb-5`}></span>
              <p className="mt-20">
                <b>
                  Master’s student in Computer Science at Universitas Indonesia
                  and Bachelor of Computer Science graduate from Bandung
                  Institute of Technology
                </b>
                , with <b>4+ years of experience</b> in Software Engineering,
                Data Engineering, System Analysis, Cloud Engineering, and AI
                Engineering. Specialized in building scalable systems,
                data-driven architectures, and AI-powered solutions to solve
                complex technical and business problems. Proven ability to lead
                and collaborate across cross-functional teams, delivering
                secure, efficient, and production-ready systems. Analytical,
                adaptable, and continuously exploring emerging technologies to
                drive innovation and organizational impact.
              </p>
            </div>
            <div className={`col-lg-4 ${custom.aboutcard}`}>
              <h3 className={`${custom.fontweightlight}`}>Personal Info</h3>
              <span className={`${custom.line} mb-5`}></span>
              <ul className={`mt40 ${custom.info} list-unstyled`}>
                <li>
                  <span>Github</span> : WillyWilsen
                </li>
                <li>
                  <span>Email</span> : willywilsen@gmail.com
                </li>
                <li>
                  <span>LinkedIn</span> : Willy Wilsen{" "}
                </li>
                <li>
                  <span>Phone</span> : +62 819-4946-7344
                </li>
                <li>
                  <span>Country</span> : Indonesia
                </li>
              </ul>
              <ul className={`${custom.socialicons} pt-3`}>
                <li className={`${custom.socialicons}`}>
                  <a
                    rel="noreferrer"
                    className={`${custom.sociallink}`}
                    href="https://github.com/WillyWilsen"
                    target="_blank"
                  >
                    <Image
                      alt="Github"
                      title="Github"
                      src="/icon/RedGithub.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li className={`${custom.socialicons}`}>
                  <a
                    rel="noreferrer"
                    className={`${custom.sociallink}`}
                    href="mailto: willywilsen.ww@gmail.com"
                    target="_blank"
                  >
                    <Image
                      alt="Email"
                      title="Email"
                      src="/icon/RedEmail.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li className={`${custom.socialicons}`}>
                  <a
                    rel="noreferrer"
                    className={`${custom.sociallink}`}
                    href="https://www.linkedin.com/in/willywilsen/"
                    target="_blank"
                  >
                    <Image
                      alt="LinkedIn"
                      title="LinkedIn"
                      src="/icon/RedLinkedIn.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li className={`${custom.socialicons}`}>
                  <a
                    rel="noreferrer"
                    className={`${custom.sociallink}`}
                    href="https://wa.me/6281949467344"
                    target="_blank"
                  >
                    <Image
                      alt="Whatsapp"
                      title="Whatsapp"
                      src="/icon/RedWhatsapp.png"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-lg-4 ${custom.aboutcard}`}>
              <h3 className={`${custom.fontweightlight}`}>My Expertise</h3>
              <span className={`${custom.line} mb-5`}></span>
              <div className={custom.row}>
                <div className="col-1 text-danger pt-1">
                  <Image
                    alt="Code"
                    src="/icon/Code.png"
                    width={30}
                    height={30}
                  />
                </div>
                <div className={`col-10 ${custom.mlauto} me-3`}>
                  <h6>Software Development</h6>
                  <p>Advanced</p>
                  <hr></hr>
                </div>
              </div>
              <div className={custom.row}>
                <div className="col-1 text-danger pt-1">
                  <Image
                    alt="ProblemSolving"
                    src="/icon/ProblemSolving.png"
                    width={30}
                    height={30}
                  />
                </div>
                <div className={`col-10 ${custom.mlauto} me-3`}>
                  <h6>Data Engineering</h6>
                  <p>Advanced</p>
                  <hr></hr>
                </div>
              </div>
              <div className={custom.row}>
                <div className="col-1 text-danger pt-1">
                  <Image
                    alt="ProjectManager"
                    src="/icon/ProjectManager.png"
                    width={30}
                    height={30}
                  />
                </div>
                <div className={`col-10 ${custom.mlauto} me-3`}>
                  <h6>System Analyst</h6>
                  <p>Intermediate</p>
                  <hr></hr>
                </div>
              </div>
              <div className={custom.row}>
                <div className="col-1 text-danger pt-1">
                  <Image alt="AI" src="/icon/AI.png" width={30} height={30} />
                </div>
                <div className={`col-10 ${custom.mlauto} me-3`}>
                  <h6>AI Engineering</h6>
                  <p>Intermediate</p>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className={custom.section} id="resume">
          <div className="container">
            <h2 className="mb-5">
              <span className="text-danger">My</span> Resume
            </h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className={custom.card}>
                  <div className={custom.cardheader}>
                    <div className="mt-2">
                      <h4>Work Experience</h4>
                      <span className={custom.line}></span>
                    </div>
                  </div>
                  <div className={custom.cardbody}>
                    <div className={`text-center ${custom.seemore}`}>
                      <span
                        className="mx-2"
                        onClick={() => prevWorkExperienceClick()}
                      >
                        {" < "}
                      </span>
                      {workExperiencePage > 1 && (
                        <span
                          className="mx-2"
                          onClick={() => firstWorkExperienceClick()}
                        >
                          {" 1 "}
                        </span>
                      )}
                      {workExperiencePage - 2 > 1 && (
                        <span className="mx-2">{" .. "}</span>
                      )}
                      {workExperiencePage - 1 > 1 && (
                        <span
                          className="mx-2"
                          onClick={() => prevWorkExperienceClick()}
                        >{` ${workExperiencePage - 1} `}</span>
                      )}

                      <span className="mx-2">
                        <strong>{` ${workExperiencePage} `}</strong>
                      </span>

                      {workExperiencePage + 1 < lastWorkExperiencePage && (
                        <span
                          className="mx-2"
                          onClick={() => nextWorkExperienceClick()}
                        >{` ${workExperiencePage + 1} `}</span>
                      )}
                      {workExperiencePage + 2 < lastWorkExperiencePage && (
                        <span className="mx-2">{" .. "}</span>
                      )}
                      {workExperiencePage < lastWorkExperiencePage && (
                        <span
                          className="mx-2"
                          onClick={() => lastWorkExperienceClick()}
                        >{` ${lastWorkExperiencePage} `}</span>
                      )}
                      <span
                        className="mx-2"
                        onClick={() => nextWorkExperienceClick()}
                      >
                        {" > "}
                      </span>
                    </div>
                    {workExperiences.map((workExperience, key) => {
                      return (
                        <div key={key}>
                          <h6 className={`${custom.title} text-danger`}>
                            {workExperience.from} - {workExperience.to}
                          </h6>
                          <p>
                            <b>
                              {workExperience.job_position} at{" "}
                              {workExperience.company} ·{" "}
                              {workExperience.job_type}
                            </b>
                          </p>
                          <div id={`work-experience_${key}`}>
                            {workExperience.description}
                          </div>
                          {key !== workExperiences.length - 1 && <hr></hr>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className={custom.card}>
                  <div className={custom.cardheader}>
                    <div className="mt-2">
                      <h4>Education</h4>
                      <span className={custom.line}></span>
                    </div>
                  </div>
                  <div className={custom.cardbody}>
                    <h6 className="title text-danger">Aug 2025 - Present</h6>
                    <p>
                      <b>University of Indonesia</b>
                    </p>
                    <p className="subtitle">
                      Master of Computer Science, Computer Science
                      <br />
                      3.75/4.00 (On Going)
                      <br />
                      <br />
                      <b>Specialization:</b> Artificial Intelligence & Data
                      Science
                    </p>
                    <hr></hr>
                    <h6 className="title text-danger">Aug 2020 - Sep 2024</h6>
                    <p>
                      <b>Bandung Institute of Technology</b>
                    </p>
                    <p className="subtitle">
                      Bachelor of Engineering, Computer Science
                      <br />
                      3.63/4.00 (Cum Laude)
                      <br />
                      <br />
                      <b>Thesis:</b> Generation and Visualization of BPMN from
                      Legal Documents
                      <br />
                      <b>Published in:</b> Generation and Visualization of BPMN
                      from Legal Documents
                      <br />
                      <b>Link:</b>{" "}
                      <a
                        href="https://ieeexplore.ieee.org/document/11351687"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://ieeexplore.ieee.org/document/11351687
                      </a>
                    </p>
                  </div>
                </div>
                <div className={custom.card}>
                  <div className={custom.cardheader}>
                    <div className="mt-2">
                      <h4>Certificates</h4>
                      <span className={custom.line}></span>
                    </div>
                  </div>
                  <div className={custom.cardbody}>
                    <h6>
                      <b>Google Cloud</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Associate Cloud Engineer (Feb 2024 - Feb 2027)</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Google</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Google IT Support (Dec 2023)</h6>
                      </li>
                      <li>
                        <h6>Google Cybersecurity (Aug 2023)</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Cisco</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>CyberOps Associate (May 2024)</h6>
                      </li>
                      <li>
                        <h6>Cyber Threat Management (Apr 2024)</h6>
                      </li>
                      <li>
                        <h6>Endpoint Security (Apr 2024)</h6>
                      </li>
                      <li>
                        <h6>Network Defense (Apr 2024)</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Dicoding</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Basic AI (Nov 2024)</h6>
                      </li>
                      <li>
                        <h6>Data Analysis with Python (Nov 2024)</h6>
                      </li>
                      <li>
                        <h6>Basic Data Science (Sep 2024)</h6>
                      </li>
                      <li>
                        <h6>Basic SQL (Sep 2024)</h6>
                      </li>
                      <li>
                        <h6>Becoming a Google Cloud Architect (Dec 2023)</h6>
                      </li>
                      <li>
                        <h6>Basic Machine Learning (Dec 2023)</h6>
                      </li>
                      <li>
                        <h6>Basic Data Visualization (Dec 2023)</h6>
                      </li>
                      <li>
                        <h6>Becoming a Google Cloud Engineer (Oct 2023)</h6>
                      </li>
                      <li>
                        <h6>(Google Cloud) Back-End Basic (Aug 2023)</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={custom.card}>
                  <div className={custom.cardheader}>
                    <div className="pull-left">
                      <h4 className="mt-2">Tech Stack</h4>
                      <span className={custom.line}></span>
                    </div>
                  </div>
                  <div className={`${custom.cardbody} pb-2`}>
                    <h6>
                      <b>Frontend</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>React.js</h6>
                      </li>
                      <li>
                        <h6>Vue.js</h6>
                      </li>
                      <li>
                        <h6>Angular</h6>
                      </li>
                      <li>
                        <h6>Next.js</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Mobile & Cross-Platform</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Flutter</h6>
                      </li>
                      <li>
                        <h6>Android Studio</h6>
                      </li>
                      <li>
                        <h6>React Native</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Game Development</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Unity (C#)</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Backend</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Node.js (ExpressJS, NestJS)</h6>
                      </li>
                      <li>
                        <h6>Python (Flask, Django)</h6>
                      </li>
                      <li>
                        <h6>Go (Gin, Echo)</h6>
                      </li>
                      <li>
                        <h6>Ruby (Rails)</h6>
                      </li>
                      <li>
                        <h6>Java (Spring Boot)</h6>
                      </li>
                      <li>
                        <h6>PHP (Laravel, CodeIgniter)</h6>
                      </li>
                      <li>
                        <h6>C# (.NET)</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Additional Languages</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Rust</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Database</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>MySQL</h6>
                      </li>
                      <li>
                        <h6>PostgreSQL</h6>
                      </li>
                      <li>
                        <h6>SQL Server</h6>
                      </li>
                      <li>
                        <h6>MongoDB</h6>
                      </li>
                      <li>
                        <h6>Redis</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Operating Systems & Environment</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Linux</h6>
                      </li>
                      <li>
                        <h6>Windows</h6>
                      </li>
                      <li>
                        <h6>MacOS</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Message Brokers & Streaming</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Kafka</h6>
                      </li>
                      <li>
                        <h6>ActiveMQ</h6>
                      </li>
                      <li>
                        <h6>Artemis</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Distributed & Data Processing</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Apache Spark</h6>
                      </li>
                      <li>
                        <h6>Apache Hadoop</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Workflow Automation</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Apache Airflow</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Cloud Platforms</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>GCP</h6>
                      </li>
                      <li>
                        <h6>AWS</h6>
                      </li>
                      <li>
                        <h6>Azure</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>DevOps & Containerization</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Docker</h6>
                      </li>
                      <li>
                        <h6>CI/CD</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>Testing & QA</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Selenium</h6>
                      </li>
                    </ul>
                    <hr></hr>
                    <h6>
                      <b>ERP & E-commerce Platforms</b>
                    </h6>
                    <ul>
                      <li>
                        <h6>Odoo</h6>
                      </li>
                      <li>
                        <h6>Shopify</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={custom.section} id="service">
          <div className="container">
            <h2 className="mb-5 pb-4">
              <span className="text-danger">My</span> Latest Projects
            </h2>
            <div className="row">
              {projects.map((project, key) => {
                return (
                  <div key={key} className="col-md-4 col-sm-6">
                    <div className={`${custom.card} mb-5`}>
                      <div className={`${custom.cardheader} ${custom.hasicon}`}>
                        <Image
                          alt="Project"
                          src="/icon/Project.png"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className={`${custom.cardbody} px-4 py-3`}>
                        <a
                          rel="noreferrer"
                          href={project.link}
                          target="_blank"
                          className={custom.notunderline}
                        >
                          <Image
                            alt="ProjectImage"
                            src={project.image_path}
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                          />
                        </a>
                        <h5
                          className={`mb-3 ${custom.cardtitle} text-dark mt-1`}
                        >
                          {project.title}
                        </h5>
                        <div id={`project_${key}`}>{project.description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`text-center ${custom.seemore}`}>
              <span className="mx-2" onClick={() => prevProjectClick()}>
                {" < "}
              </span>
              {projectPage > 1 && (
                <span className="mx-2" onClick={() => firstProjectClick()}>
                  {" 1 "}
                </span>
              )}
              {projectPage - 2 > 1 && <span className="mx-2">{" .. "}</span>}
              {projectPage - 1 > 1 && (
                <span className="mx-2" onClick={() => prevProjectClick()}>{` ${
                  projectPage - 1
                } `}</span>
              )}

              <span className="mx-2">
                <strong>{` ${projectPage} `}</strong>
              </span>

              {projectPage + 1 < lastProjectPage && (
                <span className="mx-2" onClick={() => nextProjectClick()}>{` ${
                  projectPage + 1
                } `}</span>
              )}
              {projectPage + 2 < lastProjectPage && (
                <span className="mx-2">{" .. "}</span>
              )}
              {projectPage < lastProjectPage && (
                <span
                  className="mx-2"
                  onClick={() => lastProjectClick()}
                >{` ${lastProjectPage} `}</span>
              )}
              <span className="mx-2" onClick={() => nextProjectClick()}>
                {" > "}
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>©2022 Willy Wilsen</p>
      </footer>
    </div>
  );
}
