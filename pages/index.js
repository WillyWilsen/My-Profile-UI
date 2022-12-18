import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import custom from '../styles/custom.module.css'
import 'bootstrap/dist/css/bootstrap.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

export default function Home() {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    getWorkExperiences();
    getProjects();
  }, []);

  const getWorkExperiences = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_PROFILE_API}/work-experience`, {
      headers: { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}` }
    }).then(response => {
      setWorkExperiences(response.data);
    });
  }

  const getProjects = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_PROFILE_API}/project`, {
      headers: { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}` }
    }).then(response => {
      setAllProjects(response.data);
      setFilterProjects(response.data);
      setLastPage(parseInt((response.data.length - 1) / 6) + 1)
      let project = [];
      for (let i = 0; i < min(6, response.data.length); i++) {
        project.push(response.data[i]);
      }
      setProjects(project);
    });
  }

  const filter = async (value) => {
    setPage(1);
    let filterProject = [];
    for (let i = 0; i < allProjects.length; i++) {
      if (allProjects[i].description.indexOf(value) > -1) {
        filterProject.push(allProjects[i]);
      }
    }
    setFilterProjects(filterProject);
    setLastPage(parseInt((filterProject.length - 1) / 6) + 1)
    let project = [];
    for (let i = 0; i < min(6, filterProject.length); i++) {
      project.push(filterProject[i]);
    }
    setProjects(project);
  }

  const clear = async (e) => {
    setPage(1);
    setFilterProjects([...allProjects]);
    setLastPage(parseInt((allProjects.length - 1) / 6) + 1)
    let project = [];
    for (let i = 0; i < min(6, allProjects.length); i++) {
      project.push(allProjects[i]);
    }
    setProjects(project);
  }

  const firstClick = () => {
    if (page > 1) {
        setPage(1);
        const last = 1;
        let project = [];
        for (let i = (last - 1) * 6; i < min(filterProjects.length, last * 6); i++) {
            project[project.length] = filterProjects[i];
        }
        setProjects(project);
    }
  }

  const prevClick = () => {
    if (page > 1) {
        setPage(page - 1);
        const next = page - 1;
        let project = [];
        for (let i = (next - 1) * 6; i < min(filterProjects.length, next * 6); i++) {
            project[project.length] = filterProjects[i];
        }
        setProjects(project);
    }
  }

  const nextClick = () => {
    if (page < lastPage) {
        setPage(page + 1);
        const next = page + 1;
        let project = [];
        for (let i = (next - 1) * 6; i < min(filterProjects.length, next * 6); i++) {
            project[project.length] = filterProjects[i];
        }
        setProjects(project);
    }
  }

  const lastClick = () => {
    if (page < lastPage) {
        setPage(lastPage);
        const last = lastPage;
        let project = [];
        for (let i = (last - 1) * 6; i < min(filterProjects.length, last * 6); i++) {
            project[project.length] = filterProjects[i];
        }
        setProjects(project);
    }
  }

  const min = (a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  const filterOptions = [
    { value: 'ReactJS', label: 'ReactJS' },
    { value: 'VueJS', label: 'VueJS' },
    { value: 'NextJS', label: 'NextJS' },
    { value: 'ExpressJS', label: 'ExpressJS' },
    { value: 'NestJS', label: 'NestJS' },
    { value: 'Flask', label: 'Flask' },
    { value: 'Go', label: 'Go' },
    { value: 'Spring Boot', label: 'Spring Boot' },
    { value: 'JAX-WS', label: 'JAX-WS' },
    { value: 'Laravel', label: 'Laravel' },
    { value: 'CodeIgniter', label: 'CodeIgniter' }
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
                  <li className={`${custom.socialicons}`}><a rel="noreferrer" className={`${custom.sociallink}`} href="https://github.com/TubesForLyfe" target="_blank"><Image alt="Github" title="Github" src="/icon/WhiteGithub.png" width={30} height={30} /></a></li>
                  <li className={`${custom.socialicons}`}><a rel="noreferrer" className={`${custom.sociallink}`} href="mailto: willywilsen.ww@gmail.com" target="_blank"><Image alt="Email" title="Email" src="/icon/WhiteEmail.png" width={30} height={30} /></a></li>
                  <li className={`${custom.socialicons}`}><a rel="noreferrer" className={`${custom.sociallink}`} href="https://www.linkedin.com/in/willywilsen/" target="_blank"><Image alt="LinkedIn" title="LinkedIn" src="/icon/WhiteLinkedIn.png" width={30} height={30} /></a></li>
                  <li className={`${custom.socialicons}`}><a rel="noreferrer" className={`${custom.sociallink}`} href="https://wa.me/6281949467344" target="_blank"><Image alt="Whatsapp" title="Whatsapp" src="/icon/WhiteWhatsapp.png" width={30} height={30} /></a></li>
              </ul>  
              <div className={custom.headercontent}>
                  <h4 className={custom.headersubtitle}>Hello, I am</h4>
                  <h1 className={custom.headertitle}>Willy Wilsen</h1>
                  <h6 className={custom.headermono} >Software Engineer | Project Manager</h6>
                  <a rel="noreferrer" href="https://drive.google.com/uc?id=1v2Nmei3eijcLD1pgmGzAhYJul2I02sPs&export=download" target="_blank"><button className={`${custom.btn} ${custom.btnprimary} btn-rounded`}><i className="pr-2"></i>Download CV</button></a>
              </div>
            </div>
        </header>
        
        <div className="container-fluid">
            <div id="about" className={`row ${custom.aboutsection}`}>
                <div className={`col-lg-4 ${custom.aboutcard}`}>
                    <h3 className={`${custom.fontweightlight}`}>Who am I ?</h3>
                    <span className={`${custom.line} mb-5`}></span>
                    <p className="mt-20">
                        I am a <b>Software Engineer</b> who is experienced in website development and data warehouse. I able to learn and adjust to new environments and technologies. 
                        I am also a <b>Project Manager</b> who has experiences being a team leader in completing projects. In addition, I have the ability to communicate and teach others about technology.
                    </p>
                    <a rel="noreferrer" href="https://drive.google.com/uc?id=1v2Nmei3eijcLD1pgmGzAhYJul2I02sPs&export=download" target="_blank"><button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button></a>
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
                        <li className={`${custom.socialicons}`}><a rel="noreferrer" className={`${custom.sociallink}`} href="https://github.com/TubesForLyfe" target="_blank"><Image alt="Github" title="Github" src="/icon/RedGithub.png" width={30} height={30} /></a></li>
                        <li className={`${custom.socialicons}`}><a rel="noreferrer" className={`${custom.sociallink}`} href="mailto: willywilsen.ww@gmail.com" target="_blank"><Image alt="Email" title="Email" src="/icon/RedEmail.png" width={30} height={30} /></a></li>
                        <li className={`${custom.socialicons}`}><a rel="noreferrer" className={`${custom.sociallink}`} href="https://www.linkedin.com/in/willywilsen/" target="_blank"><Image alt="LinkedIn" title="LinkedIn" src="/icon/RedLinkedIn.png" width={30} height={30} /></a></li>
                        <li className={`${custom.socialicons}`}><a rel="noreferrer" className={`${custom.sociallink}`} href="https://wa.me/6281949467344" target="_blank"><Image alt="Whatsapp" title="Whatsapp" src="/icon/RedWhatsapp.png" width={30} height={30} /></a></li>
                    </ul>  
                </div>
                <div className={`col-lg-4 ${custom.aboutcard}`}>
                    <h3 className={`${custom.fontweightlight}`}>My Expertise</h3>
                    <span className={`${custom.line} mb-5`}></span>
                    <div className={custom.row}>
                        <div className="col-1 text-danger pt-1"><Image alt="ProblemSolving" src="/icon/ProblemSolving.png" width={30} height={30} /></div>
                        <div className={`col-10 ${custom.mlauto} me-3`}>
                            <h6>Problem Solving</h6>
                            <p>A problem must have a solution.</p>
                            <hr></hr>
                        </div>
                    </div>
                    <div className={custom.row}>
                        <div className="col-1 text-danger pt-1"><Image alt="Code" src="/icon/Code.png" width={30} height={30} /></div>
                        <div className={`col-10 ${custom.mlauto} me-3`}>
                            <h6>Programming</h6>
                            <p>An application needs efficient source code.</p>
                            <hr></hr>
                        </div>
                    </div>
                    <div className={custom.row}>
                        <div className="col-1 text-danger pt-1"><Image alt="ProjectManager" src="/icon/ProjectManager.png" width={30} height={30} /></div>
                        <div className={`col-10 ${custom.mlauto} me-3`}>
                            <h6>Project Manager</h6>
                            <p>A project should run according to timeline.</p>
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
                              {workExperiences.map(workExperience => {
                                return (
                                  <div key={workExperience._id}>
                                    <h6 className={`${custom.title} text-danger`}>{workExperience.from} - {workExperience.to}</h6>
                                    <p><b>{workExperience.job_position} at {workExperience.company}</b></p>
                                    <p className="subtitle">
                                      {workExperience.description}
                                    </p>
                                    {workExperience._id !== workExperiences[workExperiences.length - 1]._id && <hr></hr>}
                                  </div>
                                )
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
                              <h6 className="title text-danger">2020</h6>
                              <p><b>Bandung Institute of Technology</b></p>
                              <p className="subtitle">Bachelor of Engineering, Computer Science</p>
                          </div>
                      </div>
                      <div className={custom.card}>
                        <div className={custom.cardheader}>
                              <div className="mt-2">
                                  <h4>Other Skills</h4>
                                  <span className={custom.line}></span>  
                              </div>
                          </div>
                          <div className={custom.cardbody}>
                            <ul>
                              <li><h6>Algorithm Strategy</h6></li>
                              <li><h6>Test Case & Scenario</h6></li>
                              <li><h6>Manual Testing</h6></li>
                              <li><h6>Web & Database Security</h6></li>
                              <li><h6>Query Optimization</h6></li>
                              <li><h6>Cloud Computing (Azure)</h6></li>
                              <li><h6>Artificial Intelligence</h6></li>
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
                            <h6><b>Frontend</b></h6>
                            <ul>
                              <li><h6>ReactJS</h6></li>
                              <li><h6>VueJS</h6></li>
                              <li><h6>AngularJS</h6></li>
                              <li><h6>NextJS</h6></li>
                            </ul>
                            <hr></hr>
                            <h6><b>Backend</b></h6>
                            <ul>
                              <li><h6>NodeJS (ExpressJS, NestJS)</h6></li>
                              <li><h6>Python (Flask, Django)</h6></li>
                              <li><h6>Go</h6></li>
                              <li><h6>Java (Spring Boot, JAX-WS)</h6></li>
                              <li><h6>PHP (Laravel, CodeIgniter)</h6></li>
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
              <div className="d-flex flex-row mb-4">
                  <Select options={filterOptions} className="col-md-3" placeholder="Filter by" onChange={e => filter(e.value)} />
                  <button className='btn btn-danger ms-3' onClick={e => clear(e)}>Clear</button>
              </div>
              <div className="row">
                  {projects.map(project => {
                    return (
                      <div key={project._id} className="col-md-4 col-sm-6">
                          <a rel="noreferrer" href={project.link} target="_blank" className={custom.notunderline}>
                              <div className={`${custom.card} mb-5`}>
                                  <div className={`${custom.cardheader} ${custom.hasicon}`}>
                                      <Image alt="Project" src="/icon/Project.png" width={30} height={30} />
                                  </div>
                                  <div className={`${custom.cardbody} px-4 py-3`}>
                                      <Image alt="ProjectImage" src={project.image_path} width="100%" height="100%" layout="responsive" objectFit="contain" />
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
              <div className={`text-center ${custom.seemore}`}>
                  <span className="mx-2" onClick={() => prevClick()}>{' < '}</span>
                  {page > 1 && <span className="mx-2" onClick={() => firstClick()}>{' 1 '}</span>}
                  {page - 2 > 1 && <span className="mx-2">{' .. '}</span>}
                  {page - 1 > 1 && <span className="mx-2" onClick={() => prevClick()}>{` ${page - 1} `}</span>}

                  <span className="mx-2"><strong>{` ${page} `}</strong></span>

                  {page + 1 < lastPage && <span className="mx-2" onClick={() => nextClick()}>{` ${page + 1} `}</span>}
                  {page + 2 < lastPage && <span className="mx-2">{' .. '}</span>}
                  {page < lastPage && <span className="mx-2" onClick={() => lastClick()}>{` ${lastPage} `}</span>}
                  <span className="mx-2" onClick={() => nextClick()}>{' > '}</span>
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
