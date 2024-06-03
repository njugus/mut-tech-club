import './Tracks.css'
import track from '../../assets/cybersecurity.jpg'
import design from '../../assets/ui design.jpg'
import web from '../../assets/WEBDEV.jpg'
import app from '../../assets/mobile app dev.jpg'
import cloud from '../../assets/cloud engineering.jpg'
import power from '../../assets/power platform.jpg'

function Tracks() {
    return(
        <>
         <section className="Tracks-section">
            
                <h1 className='Track-main-heading'>MUT tech Club Offers A Variety Of Tracks </h1>
            
                <h2 className='track-heading'>1.<span></span> Cybersecurity</h2>
          
            <div className="track-wrapper">
                <div className="track-image">
                    <img src = {track} alt='The image of a track' className='track-img'/>

                </div>
                <div className="topics">
                    <h2 className='topics-heading'>What You Will Learn</h2>
                    <ul className='tracks-list'>
                    <li>Security protocols</li>
                    <li>Ethical hacking</li>
                    <li>Encryption techniques</li>
                    <li> Threat analysis </li>
                     <li> Identifying and mitigating security vulnerabilities</li>
                     <li>Conducting security audits</li>                     
                      <li> Implementing robust security measures</li>
                    </ul>

                    <div className = "catchy-statement">
                        <p>
                        "Design the future with us! Join the UI/UX Design track and turn your creativity into impactful user experiences."
                            </p>
                    </div>
                    <div className="learn-more-link">
                        <a href='#' className='link'>Learn More</a>

                    </div>


                </div>
                <div className="learning-outcomes"> 
                <h2 className='topics-heading'>Learning Outcomes</h2>
                <ul className='Outcomes-list'>
                    <li> Ability to protect systems, networks, and data from cyber threats</li>
                    <li> Practical experience through hands-on projects and real-world scenarios</li>
                    <li> Skills to safeguard digital environments</li>
                    <li> Competence in conducting thorough security audits</li>
                    <li> Expertise in implementing and managing security measures against cyber attacks</li>
                </ul>

                <div className="learn-more-link">
                        <a href='#' className='link'>Learn More</a>

                    </div>


                </div>
            </div>



            <h2 className='track-heading'>2.<span></span> UI/UX Design</h2>
          
          <div className="track-wrapper">
              <div className="track-image">
                  <img src = {design} alt='The image of a design logo' className='track-img'/>

              </div>
              <div className="topics">
                  <h2 className='topics-heading'>What You Will Learn</h2>
                  <ul className='tracks-list'>
                    <li>User research</li>
                    <li> Wireframing</li>
                    <li>Prototyping</li>
                    <li> Usability testing</li>
                    <li> Designing intuitive user interfaces</li>
                    <li>Enhancing user experiences</li>
                    <li> Using industry-standard design tools and techniques</li>
                    

                  </ul>
                  <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
              <div className="learning-outcomes"> 
              <h2 className='topics-heading'>Learning Outcomes</h2>
              <ul className='Outcomes-list'>
                  <li> Proficiency in creating effective, user-centric designs for websites and mobile applications</li>
                  <li> Practical experience through hands-on projects</li>
                  <li> Ability to conduct user research and usability testing</li>
                  <li> Skills in wireframing and prototyping</li>
                  <li> Mastery of industry-standard design tools and techniques</li>
              </ul>

              <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
          </div>

          <h2 className='track-heading'>3.<span></span> Web Development</h2>
          
          <div className="track-wrapper">
              <div className="track-image">
                  <img src = {web} alt='The image of a design logo' className='track-img'/>

              </div>
              <div className="topics">
                  <h2 className='topics-heading'>What You Will Learn</h2>
                  <ul className='tracks-list'>
                    <li> <b>Front End Development</b>
                        <ul className = "in-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </li>

                    <li>
                        <b>Backend Development</b>
                        <ul className = " in-list"> 
                            <li>Node.js</li>
                            <li>Express.JS</li>
                            <li>Databases</li>
                        </ul>
                    </li>
                    

                  </ul>
                  <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
              <div className="learning-outcomes"> 
              <h2 className='topics-heading'>Learning Outcomes</h2>
              <ul className='Outcomes-list'>
                 <li>Ability to design, develop, and deploy full-stack web applications</li>
                    <li>Expertise in creating dynamic and responsive websites</li>
                    <li>Proficiency in both client-side and server-side development</li>
                      <li> Skills to build robust and scalable websites</li>

              </ul>

              <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
          </div>

          <h2 className='track-heading'>4.<span></span> Mobile App Development</h2>
          
          <div className="track-wrapper">
              <div className="track-image">
                  <img src = {app} alt='The image of an app logo' className='track-img'/>

              </div>
              <div className="topics">
                  <h2 className='topics-heading'>What You Will Learn</h2>
                  <ul className='tracks-list'>
                    <li><b>Platform</b>
                        <ul className = "in-list">
                            <li>Android</li>
                            <li> IOS </li>


                            </ul>
                         </li>       

                    <li> <b>Programing Languages</b>
                        <ul className = "in-list">
                        <li>Java</li>
                            <li> Kotlin </li>
                            <li> Swift </li>
                             <li> Dart </li>
                        </ul>
                    </li>


                  </ul>
                  <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
              <div className="learning-outcomes"> 
              <h2 className='topics-heading'>Learning Outcomes</h2>
              <ul className='Outcomes-list'>
              <li>Proficiency in developing mobile apps for Android and iOS platforms</li>
              <li>Ability to use Java, Kotlin, Swift, and Dart for mobile app development</li>
              <li>Expertise in creating user-friendly and efficient mobile applications</li>
              <li>Skills in building, testing, and deploying high-performance mobile apps</li>


              </ul>

              <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
          </div>

          <h2 className='track-heading'>5.<span></span> Cloud Engineering</h2>
          
          <div className="track-wrapper">
              <div className="track-image">
                  <img src = {cloud} alt='The image of a cloud' className='track-img'/>

              </div>
              <div className="topics">
                  <h2 className='topics-heading'>What You Will Learn</h2>
                  <ul className='tracks-list'>
                       <li> Cloud Service Providers:
                        <ul>
                            <li>Amazon Web Services (AWS)</li>
                            <li>Google Cloud Platform (GCP)</li>
                            <li>Microsoft Azure</li>
                        </ul>
                            </li>
                            <li>
                              Core Concepts:
                            <ul>
                              <li>Cloud architecture</li>
                              <li>Virtualization</li>
                              <li>Containerization</li>
                              <li>DevOps practices</li>
                              </ul>

                            </li>

                  </ul>
                  <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
              <div className="learning-outcomes"> 
              <h2 className='topics-heading'>Learning Outcomes</h2>
              <ul className='Outcomes-list'>
               <li>Proficiency in using AWS, GCP, and Azure for cloud solutions</li>
                <li> Ability to design, deploy, and manage scalable and secure cloud infrastructures</li>
                <li>  Experience with virtualization and containerization technologies</li>
                   <li> Skills to implement DevOps practices for continuous integration and delivery</li>
                    <li>Expertise in ensuring high availability and performance for cloud-based applications and services</li>

              </ul>

              <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
          </div>

          <h2 className='track-heading'>6.<span></span> Power Platform</h2>
          
          <div className="track-wrapper">
              <div className="track-image">
                  <img src = {power} alt='The image of a cloud' className='track-img'/>

              </div>
              <div className="topics">
                  <h2 className='topics-heading'>What You Will Learn</h2>
                  <ul className='tracks-list'>
                    <li>Power BI: Analyze data and create insightful dashboards.</li>
                    <li> Power Apps: Develop custom business applications with minimal coding.</li>
                    <li> Power Automate: Automate workflows to improve business efficiency.</li>
                    <li> Power Virtual Agents: Build chatbots to interact with users and streamline tasks.</li>


                  </ul>
                  <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
              <div className="learning-outcomes"> 
              <h2 className='topics-heading'>Learning Outcomes</h2>
              <ul className='Outcomes-list'>

              <li>Proficiency in using Power BI for data analysis and visualization.</li> 
            <li>Ability to create custom business applications using Power Apps.</li>
            <li>Skills to automate business processes using Power Automate.</li>
            <li>Experience in building and deploying chatbots with Power Virtual Agents.</li>
            <li>Competence in developing integrated solutions that transform organizational operations and improve efficiency.</li>
              </ul>

              <div className="learn-more-link">
                      <a href='#' className='link'>Learn More</a>

                  </div>


              </div>
          </div>
         </section>
        </>
    )

}

export default Tracks;