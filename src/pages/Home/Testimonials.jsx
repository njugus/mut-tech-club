import emily from '../../assets/Emily Hart.jpg'
import jacob from '../../assets/Jacob Murphy.jpg'
import olivia from '../../assets/Olivia Rodriguez.jpg'
import james from '../../assets/james.jpg'
import './Testimonials.css'
function Testimonials() {
    return (
        <>
        <section className="testimonials">
            <h1 className="testimonials-heading">Testimonials</h1>
            <div className="testimonials-wrapper">
                <div className="testimony">
                    <div className="testimony-img">
                        <img src={emily} alt='Emily Hart' className='test-img'/>
                    </div>

                    <div className="testimony-para-div">
                        <p className="testimony-para">
                        "MUTC has been a game-changer for me. The supportive community and
                         hands-on projects have accelerated my learning journey in technology.
                         I've gained invaluable skills and friendships that will last a lifetime."<b> - 
                         Sarah, Current Member</b>
                        </p>
                    </div>

                </div>

                <div className="testimony">
                    <div className="testimony-img">
                        <img src={jacob} alt='Jacob Murphy' className='test-img'/>
                    </div>

                    <div className="testimony-para-div">
                        <p className="testimony-para">"Joining MUTC was one of the best decisions I've made. 
                        The club's emphasis on innovation and collaboration has empowered me to explore my passion for tech.
                         Through mentorship and projects, I've grown both personally and professionally."<b> - John, Alumni</b>
                        </p>
                    </div>

                </div>

                <div className="testimony">
                    <div className="testimony-img">
                        <img src={olivia} alt='Olivia Rodriguez' className='test-img'/>
                    </div>

                    <div className="testimony-para-div">
                        <p className="testimony-para">
                        "Being part of MUTC has been an incredible experience. 
                        The club's commitment to fostering a culture of continuous learning and inclusivity is truly 
                        inspiring. I've had the opportunity to work on impactful projects and connect with like-minded
                         individuals who share my enthusiasm for technology."<b> - Emily, Current Member</b>
                        </p>
                    </div>

                </div>

                <div className="testimony">
                    <div className="testimony-img">
                        <img src={james} alt='James' className='test-img'/>
                    </div>

                    <div className="testimony-para-div">
                        <p className="testimony-para">
                        "MUTC has been a game-changer for me. The supportive community and
                         hands-on projects have accelerated my learning journey in technology.
                         I've gained invaluable skills and friendships that will last a lifetime."<b> - 
                         James, Current Member</b>
                        </p>
                    </div>

                </div>

            </div>

        </section>
        
        </>
    )
}

export default Testimonials;