import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

function Experience() {
  return (
    <>
      <div class="resume-row">
        {/* WORK EXPERIENCE */}
        <div class="experience-column">
          <VerticalTimeline layout={"1-column-left"} line-color={"#0c74ad"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#0c74ad", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #0c74ad" }}
              date="2022 - present"
              iconStyle={{ background: "#0c74ad", color: "#fff" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Campus Information Services Worker</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                CUNY Lehman College
              </h4>
              <p>
                Creative Direction, Visual Design, Project Management, Team
                Leading, Student Experience
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 - 2021"
              iconStyle={{ background: "#0c74ad", color: "#fff" }}
              contentStyle={{ background: "#0c74ad", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #0c74ad" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Software Web Developer III</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">NASA</h4>
              <p>
                Contributing to enterprise software application interfaces and
                managing end-user accounts across mobile, laptop, and other
                telecommunications for 50,000+ users via the ServiceNow
                platform.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2020"
              iconStyle={{ background: "#0c74ad", color: "#fff" }}
              contentStyle={{ background: "#0c74ad", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #0c74ad" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>CEO / Lead Product Engineer</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bold Motive Group
              </h4>
              <p>
                Co-designer for various software projects in Agile team
                environments for open source software (OSS).
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019"
              iconStyle={{ background: "#0c74ad", color: "#fff" }}
              contentStyle={{ background: "#0c74ad", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #0c74ad" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Data Automation & Systems Operations (Analyst)</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Catalyst Center for Business & Entrepreneurship
              </h4>
              <p>
                Leading all systems liaison operations of information
                management, client relations, and data automation objectives for
                ecosystem development and government contracting.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2019"
              iconStyle={{ background: "#0c74ad", color: "#fff" }}
              contentStyle={{ background: "#0c74ad", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #0c74ad" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Director of Operations</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Urban Engine
              </h4>
              <p>
                Ambassadorship of non-profit content and advertisements to
                enhance reach, brand awareness, and startup acquisition
                opportunities with a mission to support innovative ideas.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 - 2018"
              iconStyle={{ background: "#0c74ad", color: "#fff" }}
              contentStyle={{ background: "#0c74ad", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #0c74ad" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Marketing & Software Architect</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Arkham Storage, Inc.
              </h4>
              <p>
                Ambassadorship of non-profit content and advertisements to
                enhance reach, brand awareness, and startup acquisition
                opportunities with a mission to support innovative ideas.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017"
              iconStyle={{ background: "#0c74ad", color: "#fff" }}
              contentStyle={{ background: "#0c74ad", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #0c74ad" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>IT Systems Analyst</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Hexagon Safety & Infrastructure
              </h4>
              <p>
                Completion of Service-Now platform developer training to apply
                within enterprise-level client platform for IT Services.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2013 - 2015"
              iconStyle={{ background: "#0c74ad", color: "#fff" }}
              contentStyle={{ background: "#0c74ad", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #0c74ad" }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Startup CMO / CIO</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                5 Star Signals International Holdings, Ltd.
              </h4>
              <p>
                Performed international portfolio communications on executive
                trading accounts with positioned 200+% ROI in first year of
                software sales. Managed investor relations on executive account
                sales, marketing, & operation systems within cross-regional
                divisions.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        {/* END OF WORK EXPERIENCE */}

        {/* EDUCATION */}
        <div class="education-column">
          <VerticalTimeline layout={"1-column-left"} line-color={"#AE944F"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2021 - 2023"
              iconStyle={{ background: "#AE944F", color: "#fff" }}
              contentStyle={{ background: "#AE944F", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #AE944F" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Bachelor of Science</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                CUNY Lehman College
              </h4>
              <p>
                Computer Science with a minor concentration in Finance.
                President of CUNY Digital Currency Initiative. Earned
                Presidential Scholar.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="January 2022"
              iconStyle={{ background: "#AE944F", color: "#fff" }}
              contentStyle={{ background: "#AE944F", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #AE944F" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Grand Prize Winner</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Blackstone IDEAS Competition
              </h4>
              <p>
                A pitching contest for the most innovative idea. Campus round
                only.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="January 2022"
              iconStyle={{ background: "#AE944F", color: "#fff" }}
              contentStyle={{ background: "#AE944F", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #AE944F" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Codecademy Certification</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                API Development with Swagger & Open API
              </h4>
              <p>
                Learn about the lifecycle of APIs and how to go about
                incorporating best practices for designing and documenting an
                API.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="October 2020"
              iconStyle={{ background: "#AE944F", color: "#fff" }}
              contentStyle={{ background: "#AE944F", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #AE944F" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>FreeCodeCamp Certification</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Javascript Data Structures & Algorithms
              </h4>
              <p>Representing approximately 300 hours of coursework.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="February 2019"
              iconStyle={{ background: "#AE944F", color: "#fff" }}
              contentStyle={{ background: "#AE944F", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #AE944F" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>MIT Press & Media Labs</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Essay Publication
              </h4>
              <p>
                Independent research on Artificial Intelligence. A
                transdisciplinary discussion of artificial intelligence,
                biomimicry, data science, and software engineering research. Can
                we frame the development of evolutionary intelligence in these
                terms?{" "}
                <a
                  href="https://jods.mitpress.mit.edu/pub/d8an1bja/release/2"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Read the essay here.
                </a>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="September 2018"
              iconStyle={{ background: "#AE944F", color: "#fff" }}
              contentStyle={{ background: "#AE944F", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #AE944F" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Google Developer Certification</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Mobile Web Developer Specialist
              </h4>
              <p>
                Demonstrating proficiency and skill in mobile web applications.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2018"
              iconStyle={{ background: "#AE944F", color: "#fff" }}
              contentStyle={{ background: "#AE944F", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #AE944F" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>UW Flex Certification</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Responsible Conduct of Research
              </h4>
              <p>Granted by the University of Wisconsin-Milwaukee.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="September 2017"
              iconStyle={{ background: "#AE944F", color: "#fff" }}
              contentStyle={{ background: "#AE944F", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #AE944F" }}
              icon={<MdOutlineSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                <strong>Grand Prize Winner</strong>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                HudsonAlpha Tech Challenge
              </h4>
              <p>
                Hackathon for genomics and biotechnology. Winning “Best in
                Show,” my team tackled blockchain technology to make medical
                record and genome data accessible to clinicians.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      {/* STAR (END OF TIMELINE) */}
      <VerticalTimeline layout={"2-columns"} line-color={"#066bb4"}>
        <VerticalTimelineElement
          iconStyle={{ background: "red", color: "#fff" }}
          icon={<FaRegStar />}
        />
      </VerticalTimeline>
    </>
  );
}

export default Experience;
