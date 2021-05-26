import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DarkModeToggle from "react-dark-mode-toggle";
import Head from "../components/Head";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <Head title="Resume - Rama Seftiansyah" />
      <div className="container position-relative">
        <div className="toogle-mode position-absolute end-0 mt-3">
          <DarkModeToggle
            onChange={handleChangeTheme}
            checked={theme === "dark" ? true : false}
            size={50}
          />
        </div>
        <div className="wrapper-img position-relative" data-aos="fade-down">
          <div className="position-absolute top-50 start-50 translate-middle">
            <img src="/assets/images/me.png" alt="" width="300" />
          </div>
        </div>
        <div className="content">
          <div className="name font-default bold fs-1">RAMA SEFTIANSYAH</div>
          <div className="profession font-light fs-5">FULL STACK WEB DEVELOPER</div>
          <div className="row">
            <div className="col-xs-12 d-sm-block d-lg-none">
              <div className="about border-neon mt-5">
                <span className="font-default bold fs-3">About</span>
                <p>
                  A Full Stack Web Developer who is easy to adapt to new environments, very
                  interested in programming, especially Javascript. Experienced in creating several
                  websites, including realtime chat, movie ticket booking, online shopping, and
                  digital wallet, using ReactJS, NextJS, ExpressJS, Sequelize, Redux, and Socket.io.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-lg-3">
              <div className="pro-skills border-neon mt-5">
                <span className="font-default bold fs-4">Professional Skills</span>
                <p className="d-flex justify-content-between">
                  <ul>
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                    <li>ExpressJS</li>
                    <li>Redux</li>
                    <li>Sequelize</li>
                    <li>NextJS</li>
                  </ul>
                  <ul>
                    <li>JavaScript</li>
                    <li>HTML & CSS</li>
                    <li>MySQL</li>
                    <li>Socket.io</li>
                    <li>Microsoft Office</li>
                  </ul>
                </p>
              </div>
              <div className="per-skills border-neon mt-5">
                <span className="font-default bold fs-4">Personal Skills</span>
                <p className="d-flex">
                  <ul>
                    <li>Creative spirit</li>
                    <li>Reliable and professional</li>
                    <li>Organized</li>
                    <li>Time management</li>
                    <li>Stress management</li>
                    <li>Team player</li>
                    <li>Fast learner</li>
                    <li>Motivated</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-lg-9">
              <div className="about-lg border-neon mt-5">
                <span className="font-default bold fs-3">About</span>
                <p>
                  A Full Stack Web Developer who is easy to adapt to new environments, very
                  interested in programming, especially Javascript. Experienced in creating several
                  websites, including realtime chat, movie ticket booking, online shopping, and
                  digital wallet, using ReactJS, NextJS, ExpressJS, Sequelize, Redux, and Socket.io.
                </p>
              </div>
              <div className="work-exp mt-5">
                <span className="font-default bold fs-3">Work Experience</span>
                <p>
                  <VerticalTimeline animate={false}>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work post-left"
                      contentStyle={{ background: "#FF8507", color: "#fff" }}
                      contentArrowStyle={{ borderRight: "7px solid  #CB6B09" }}
                      iconStyle={{ background: "#FF8507", color: "#fff" }}
                      date="August 2018 - Sept 2019"
                    >
                      <div data-aos="zoom-in-up">
                        <h3 className="vertical-timeline-element-title">
                          PT. Visionet Data Internasional
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">DKI Jakarta</h4>
                        <p>IT Support</p>
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work post-right"
                      contentStyle={{ background: "#21A0D4", color: "#fff" }}
                      contentArrowStyle={{ borderRight: "7px solid #1F9BCD" }}
                      iconStyle={{ background: "#1F9BCD", color: "#fff" }}
                      date="Nov 2015 - Sept 2015"
                    >
                      <div data-aos="zoom-in">
                        <h3 className="vertical-timeline-element-title">
                          PT. PLN (Persero) Area Cikokol
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">Tangerang, Banten</h4>
                        <p>IT Support</p>
                      </div>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                </p>
              </div>
              <div className="porto mt-5">
                <span className="font-default bold fs-3">Portofolio</span>
                <div className="row">
                  <div className="preview-porto col-xs-12 col-lg-6">
                    <div>
                      <span className="title">SayHello</span>
                      <img
                        src="https://camo.githubusercontent.com/eef49493c138e759b2f628f26d84b9294c37c9de82a43f261b5346b2eacd6047/68747470733a2f2f692e6962622e636f2f645172346663442f5361792d48656c6c6f2d436861742d526f6f6d2d342e706e67"
                        alt=""
                        data-aos="flip-left"
                      />
                    </div>
                  </div>
                  <div className="preview-porto col-xs-12 col-lg-6">
                    <div>
                      <span className="title">Tickitz</span>
                      <img
                        src="https://camo.githubusercontent.com/5afb2da0e18fc93f04e154efee754768424d89dc2ac876077dcf50cc192c706d/68747470733a2f2f692e6962622e636f2f304378336b71582f44657461696c732d4d6f7669652d5469636b69747a2d5765622e706e67"
                        alt=""
                        data-aos="flip-right"
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-primary my-3"
                    onClick={() => router.push("/portofolio")}
                  >
                    See All Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
