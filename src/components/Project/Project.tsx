import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.hugsi.green/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Hugsi - Product by Husqvarna</h3>
              <p>
              By applying computer vision and deep learning techniques on satellite images, HUGSI measures and
analyses urban green space in select cities across the globe. In Hugsi I worked as a lead developer
managing a team,to make sure of code quality and on time deliveries. CI/CD pipelines were created using
Microsoft Azure. I used Gatsby and contentful for blog posting on this site. Mapbox was mainly used in this
site for Global analysed data presentation. I used MaterialUI for designing this site. AWS S3 is used in
this project for storing JSON files of city wise data and retrieving them on the site.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React (Gatsby)</li>
                <li>Material UI</li>
                <li>AWS Lambda</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://didge.io/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Didge.io</h3>
              <p>
              Didgo.IO stands as a specialised task management tool tailored for the hotel industry. As the Tech Lead
for this project, I oversaw its management and development. The platform boasts impressive
functionalities, incorporating tools such as Form.IO, AGGrid, and various other third-party integrations. To
enhance the user interface, Tailwind CSS was employed for designing the site, ensuring a sleek and
intuitive experience. Additionally, for graphical representations of data, Plotly was utilised, adding a
dynamic and visually engaging dimension to the tool's capabilities.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React (NextJS)</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
                <li>Node.js (NestJS)</li>
                <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>TCSP - Product By Husqvarna</h3>
              <p>
              TCSP, a product of the Husqvarna Group, is designed to automatically detect suitable auto mowers based
on specific criteria such as grass field characteristics and area size. In my role as a frontend developer, I
leveraged ReactJS technology to contribute to the development of this innovative solution. Additionally, I
employed Tailwind CSS for the design aspects of the site, ensuring a seamless and visually appealing
user experience              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Frementa</h3>
              <p>
              Frementa, a comprehensive real estate portal, facilitates property transactions such as buying, selling, or
renting. In my role as the project leader, I successfully led the development lifecycle from inception to
completion. The backend, built on NestJS Frameworks, utilised microservices and GraphQL APIs to
enhance efficiency. PostgreSQL served as the reliable RDBMS for data management.
Ensuring timely delivery and bug-free feature development was a priority throughout the project. To create
an aesthetically pleasing and user-friendly interface, I implemented Ant Design for the site's design
elements. The combination of innovative technologies and a meticulous approach to project management
resulted in a robust and functional real estate portal.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React (NextJS)</li>
                <li>Typescript</li>
                <li>Ant Design</li>
                <li>Node.js (NestJS)</li>
                <li>AWS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.thenewstream.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Newstream</h3>
              <p>
              Newstream is a product for News channels where journalists/publishers can connect virtually with
reporters all over the world and buy news digitally. In the Newstream project worked as a full stack
developer. Technologies. Used PostgreSQL for RDBMS. I used And Design for designing this site. I used
Zoho sign for digital signature and sentry for error handling and Mapbox for showing data in the map in
this site. I also used stripe payment gateway and google analytics services as well.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React (NextJS)</li>
                <li>Typescript</li>
                <li>Ant Design</li>
                <li>Node.js (NestJS)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://breathonix.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Breathonix</h3>
              <p>
              Breathonix is at the forefront of expediting medical diagnostics, surpassing the speed of traditional blood
draws. Leveraging breath testing, the platform revolutionises the diagnostic process by offering a
non-invasive means to gather essential health data. The backend infrastructure, a pivotal component of
the system, was meticulously developed using Python, contributing to the efficiency and robustness of the
overall solution              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React (NextJS)</li>
                <li>Python</li>              
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
       

      </div>
    </Container>
  );
}