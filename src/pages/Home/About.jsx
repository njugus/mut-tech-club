import './About.css'
function About(){
    return (
        <>
        <section className="About">

        <div className="about-heading">
                <h1>About Us</h1>
            </div>

            <div className="about-wrapper">
                
            <div className="mission-wrapper">
                <h2 className="mission-heading">
                    Our Mission
                </h2>

                <p className="mission-para">
                The Mission of the MUTC is to foster technological learning 
                and innovation among its members, providing a supportive
                 environment for skill development, collaboration,
                 and the pursuit of cutting-edge technology solutions.
                </p>

            </div>

            <div className="values-wrapper">
                <h2 className="values-heading">
                    Our Values
                </h2>

                <ol className='values-list'>
                    <li>
                    <b>Innovation:</b> Encouraging creative thinking and the development of new technologies.
                    </li>

                    <li>
                    <b>Collaboration:</b> Fostering a community where members work together and share knowledge.
                    </li>

                    <li>
                    <b>Excellence:</b> Striving for the highest standards in all projects and activities.
                    </li>
                    <li><b>Inclusivity:</b> Creating an environment where all individuals feel welcome and valued.</li>
                    <li>
                    <b>Continuous Learning:</b> Promoting lifelong learning and staying current with technological advancements.
                    </li>

                </ol>



            </div>

            <div className="objectives-wrapper">
                <h2 className="objectives-heading">
                    Our Objectives
                </h2>

                <div className="objectives-list">
                    <ol className="values-list">
                        <li>
                        <b>Skill Development:</b> Offer workshops, seminars, and hands-on projects to enhance technical skills.
                        </li>

                        <li>
                        <b>Networking:</b> Create opportunities for members to connect with industry professionals and like-minded peers.
                        </li>

                        <li>
                        <b>Project Implementation:</b> Encourage and support members in developing and implementing their tech projects.
                        </li>

                        <li>
                        <b>Competitions and Challenges:</b> Organize and participate in tech competitions to test and showcase member skills.

                        </li>

                        <li>
                        <b>Community Outreach:</b> Engage with the broader community to promote technology education and literacy.
                        </li>
                    </ol>
                </div>


            </div>


            </div>
        </section>
        
        </>
    )
}

export default About;