import { Container } from "./styles";
import NikitaThaker from "../../assets/NikitaThaker.jpg";
import nestjs from "../../assets/nestjs.svg";
import nextjs from "../../assets/nextjs.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi, I am Nikita. I possess a diverse skill set that encompasses adaptability and a keen ability to learn quickly. My communication skills are strong, allowing me to effectively convey ideas and collaborate within a team. I excel in analytical thinking and problem-solving, driven by self-motivation to tackle challenges.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          With a proactive approach, I can identify issues and collaborate closely with teams to resolve them. My development practices align with Agile methodologies, and I am well-versed in SCRUM methodology. In terms of programming languages, I am proficient in Javascript and Typescript, and I have hands-on experience with frameworks such as ReactJS, NextJS, Gatsby, and NodeJS, including NestJS. I am adept at managing state using libraries like REDUX, ContextAPI, and MobX.
</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <p>
          My expertise extends to frontend technologies such as HTML, CSS, CSS-in-JS, MaterialUI, ANT Design, and Tailwind CSS. On the backend, I am familiar with databases like MySQL, PostgresQL, and MongoDB. Additionally, I have worked with cloud platforms like AWS and AZURE, leveraging services such as S3, Lambda, EC2, API Gateway, CloudFront, CloudFormation, IAM, CloudWatch, Cognito, Amplify, DynamoDB, and CI/CD Pipeline.
        </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <p>
        I am well-versed in containerization using Docker and have experience with Bitbucket Pipelines for continuous integration. My familiarity with RxJS Observables enhances my ability to manage asynchronous data streams effectively.
        </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <p>
        I have utilized a range of third-party tools, including GIT, Mapbox, Google Map, Plotly, D3.js, Rechart, Aggrid, FormIO, Sentry, Zoho Sign, Google Analytics, Stripe payment, Firebase Push Notification, and Elasticsearch.
        </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
        <p>
        Operating across multiple platforms like Linux, Windows, and MAC is second nature to me. Moreover, I am proficient in using project management tools such as Github, Bitbucket, JIRA, and Jenkins to facilitate efficient project workflows.
        </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={nextjs} alt="NextJS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={nestjs} alt="NestSJ" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={NikitaThaker} alt="Nikita Thaker" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
