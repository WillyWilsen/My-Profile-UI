import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import custom from '../styles/custom.module.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_PROFILE_API_KEY}/project`).then(response => {
      setProjects(response.data);
    });
  }

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
                  <li className={`${custom.socialicons}`}><a className={`${custom.sociallink}`} href="https://github.com/TubesForLyfe" target="_blank"><Image src="/icon/WhiteGithub.png" width={30} height={30} /></a></li>
                  <li className={`${custom.socialicons}`}><a className={`${custom.sociallink}`} href="mailto: willywilsen.ww@gmail.com" target="_blank"><Image src="/icon/WhiteEmail.png" width={30} height={30} /></a></li>
                  <li className={`${custom.socialicons}`}><a className={`${custom.sociallink}`} href="https://www.linkedin.com/in/willywilsen/" target="_blank"><Image src="/icon/WhiteLinkedIn.png" width={30} height={30} /></a></li>
                  <li className={`${custom.socialicons}`}><a className={`${custom.sociallink}`} href="https://wa.me/6281949467344" target="_blank"><Image src="/icon/WhiteWhatsapp.png" width={30} height={30} /></a></li>
              </ul>  
              <div className={custom.headercontent}>
                  <h4 className={custom.headersubtitle}>Hello, I am</h4>
                  <h1 className={custom.headertitle}>Willy Wilsen</h1>
                  <h6 className={custom.headermono} >Full Stack Engineer | Project Manager</h6>
                  <a href="https://drive.google.com/file/d/1kpX7cT71eWRhwAW1v4x3-QaVQcaj64hC/view?usp=sharing" target="_blank"><button className={`${custom.btn} ${custom.btnprimary} btn-rounded`}><i className="pr-2"></i>Download CV</button></a>
              </div>
            </div>
        </header>
        
        <div className="container-fluid">
            <div id="about" className={`row ${custom.aboutsection}`}>
                <div className={`col-lg-4 ${custom.aboutcard}`}>
                    <h3 className={`${custom.fontweightlight}`}>Who am I ?</h3>
                    <span className={`${custom.line} mb-5`}></span>
                    <p className="mt-20">I am a <b>Full Stack Engineer</b> who is experienced in website development and able to learn and adjust to new environments and technologies. I am also a <b>Project Manager</b> who has a lot of experience being a team leader in completing projects. In addition, I have the ability to communicate and teach others about technology.</p>
                    <a href="https://drive.google.com/file/d/1kpX7cT71eWRhwAW1v4x3-QaVQcaj64hC/view?usp=sharing" target="_blank"><button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button></a>
                </div>
                <div className={`col-lg-4 ${custom.aboutcard}`}>
                    <h3 className={`${custom.fontweightlight}`}>Personal Info</h3>
                    <span className={`${custom.line} mb-5`}></span>
                    <ul className={`mt40 ${custom.info} list-unstyled`}>
                        <li><span>Github</span> : TubesForLyfe</li>
                        <li><span>Email</span> : willywilsen@gmail.com</li>
                        <li><span>LinkedIn</span> : Willy Wilsen </li>
                        <li><span>Phone</span> : +62 819-4946-7344</li>
                        <li><span>Country</span> :  Indonesia</li>
                    </ul>
                    <ul className={`${custom.socialicons} pt-3`}>
                        <li className={`${custom.socialicons}`}><a className={`${custom.sociallink}`} href="https://github.com/TubesForLyfe" target="_blank"><Image src="/icon/RedGithub.png" width={30} height={30} /></a></li>
                        <li className={`${custom.socialicons}`}><a className={`${custom.sociallink}`} href="mailto: willywilsen.ww@gmail.com" target="_blank"><Image src="/icon/RedEmail.png" width={30} height={30} /></a></li>
                        <li className={`${custom.socialicons}`}><a className={`${custom.sociallink}`} href="https://www.linkedin.com/in/willywilsen/" target="_blank"><Image src="/icon/RedLinkedIn.png" width={30} height={30} /></a></li>
                        <li className={`${custom.socialicons}`}><a className={`${custom.sociallink}`} href="https://wa.me/6281949467344" target="_blank"><Image src="/icon/RedWhatsapp.png" width={30} height={30} /></a></li>
                    </ul>  
                </div>
                <div className={`col-lg-4 ${custom.aboutcard}`}>
                    <h3 className={`${custom.fontweightlight}`}>My Expertise</h3>
                    <span className={`${custom.line} mb-5`}></span>
                    <div className={custom.row}>
                        <div className="col-1 text-danger pt-1"><Image src="/icon/ProblemSolving.png" width={30} height={30} /></div>
                        <div className={`col-10 ${custom.mlauto} me-3`}>
                            <h6>Problem Solving</h6>
                            <p>A problem must have a solution.</p>
                            <hr></hr>
                        </div>
                    </div>
                    <div className={custom.row}>
                        <div className="col-1 text-danger pt-1"><Image src="/icon/Code.png" width={30} height={30} /></div>
                        <div className={`col-10 ${custom.mlauto} me-3`}>
                            <h6>Programming</h6>
                            <p>An application needs efficient source code.</p>
                            <hr></hr>
                        </div>
                    </div>
                    <div className={custom.row}>
                        <div className="col-1 text-danger pt-1"><Image src="/icon/ProjectManager.png" width={30} height={30} /></div>
                        <div className={`col-10 ${custom.mlauto} me-3`}>
                            <h6>Project Manager</h6>
                            <p>A project must run according to timeline.</p>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className={custom.section} id="resume">
          <div className="container">
              <h2 className="mb-5"><span className="text-danger">My</span> Resume</h2>
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
                              <h6 className={`${custom.title} text-danger`}>Jun 2022 - Sep 2022</h6>
                              <p><b>Full Stack Team Leader at Zinergo</b></p>
                              <p className="subtitle">
                                Due to my full stack and good management skills, I was promoted to be a leader for Full Stack Engineer Team. I became a project 
                                manager and coordinated with all developers to monitor progress of their projects. I also made Entity Relational Diagram and Critical Path 
                                Method for Zinergo's entire project.
                              </p>
                              <hr></hr>
                              <h6 className="title text-danger">May 2022 - Sep 2022</h6>
                              <p><b>Full Stack Engineer at Zinergo</b></p>
                              <p className="subtitle">
                                Zinergo is a company that provides android application or website development services. As Full Stack Engineer in Zinergo, I worked on 
                                the given project such as IMPT Report Website according to the timeline.
                              </p>
                              <hr></hr>
                              <h6 className="title text-danger">Sep 2021 - Dec 2021</h6>
                              <p><b>Lab Assistant at Introduction to Computing</b></p>
                              <p className="subtitle">
                                Introduction to computing is a course that teaches computational thinking to solve problems. I supervised and checked students answer 
                                in this course lab work using Python language.
                              </p>
                              <hr></hr>
                              <h6 className="title text-danger">Sep 2021 - Dec 2021</h6>
                              <p><b>Python & Mathematics Teacher at Study Board Education</b></p>
                              <p className="subtitle">
                                Study Board Education is a company that provides tutoring to first-year students of the Bandung Institute of Technology. 
                                I create learning materials in powerpoints and create exercises and quizzes as exam simulations for students.
                              </p>
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
                              <h6 className="title text-danger">2020</h6>
                              <p><b>Bandung Instite of Technology</b></p>
                              <p className="subtitle">Bachelor of Engineering, Computer Science</p>
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
                            <h6><b>Frontend</b></h6>
                            <ul>
                              <li><h6>React.js</h6></li>
                              <li><h6>Vue.js</h6></li>
                              <li><h6>Angular.js</h6></li>
                              <li><h6>Next.js</h6></li>
                            </ul>
                            <hr></hr>
                            <h6><b>Backend</b></h6>
                            <ul>
                              <li><h6>Node.js</h6></li>
                              <li><h6>Flask</h6></li>
                              <li><h6>Django</h6></li>
                              <li><h6>Go Http</h6></li>
                              <li><h6>Java Spring Boot</h6></li>
                              <li><h6>Laravel</h6></li>
                            </ul>
                            <hr></hr>
                            <h6><b>Database</b></h6>
                            <ul>
                              <li><h6>MySQL</h6></li>
                              <li><h6>PostgreSQL</h6></li>
                              <li><h6>MongoDB</h6></li>
                            </ul>
                            <hr></hr>
                            <h6><b>Others</b></h6>
                            <ul>
                              <li><h6>Bootstrap</h6></li>
                              <li><h6>Docker</h6></li>
                              <li><h6>CI/CD</h6></li>
                              <li><h6>Typescript</h6></li>
                            </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <section className={custom.section} id="service">
          <div className="container">
              <h2 className="mb-5 pb-4"><span className="text-danger">My</span> Latest Projects</h2>
              <div className="row">
                  {projects.map(project => {
                    return (
                      <div key={project._id} className="col-md-4 col-sm-6">
                          <a href={project.link} target="_blank" className={custom.notunderline}>
                              <div className={`${custom.card} mb-5`}>
                                <div className={`${custom.cardheader} ${custom.hasicon}`}>
                                      <Image src="/icon/Project.png" width={30} height={30} />
                                  </div>
                                  <div className={`${custom.cardbody} px-4 py-3`}>
                                      <Image src={project.image_path} width="100%" height="100%" layout="responsive" objectFit="contain" />
                                      <h5 className={`mb-3 ${custom.cardtitle} text-dark mt-1`}>{project.title}</h5>
                                      <p className="subtitle">
                                        {project.description}
                                      </p>
                                  </div>
                              </div>
                          </a>
                      </div>
                    )
                  })}
              </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          ©2022 Willy Wilsen
        </p>
      </footer>
    </div>
  )
}
