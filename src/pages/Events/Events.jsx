import './Events.css'
import Footer from '../../Footer/Footer';


function Events() {
    return (
        <>
            <div className="event-heading">
                <h1 className='Main-event-heading'>
                    Events
                </h1>

                <p>The Events Are Scheduled As Follows:</p>
            </div>
        <section className="Events">


            <div className="Events-Wrapper">
                
                    <h1 className="event-heading">Monday</h1>
                    <div className='event-para'>
                    <p> <b>Event:</b>  CyberSecurity</p>
                    <p> <b>Time:</b>  4pm to 7pm</p>
                    <p><b>Venue:</b>  lab F04</p>
                    <p><b>Lead:</b>  Webster Ifedha</p>
                    </div>
                
            </div>


            <div className="Events-Wrapper">
                
                <h1 className="event-heading">Tuesday</h1>
                <div className='event-para'>
                <p ><b>Event:</b> UI-UX Design</p>
                <p ><b>Time:</b> 5pm to 8pm</p>
                <p ><b>Venue:</b>  lab F04</p>
                <p ><b>Lead:</b> Manase Gunga</p>
                </div>
            
           </div>



        <div className="Events-Wrapper">
                
                <h1 className="event-heading">Wednesday</h1>
                <div className='event-para'>
                <p ><b>Event:</b> Web Development</p>
                <p ><b>Time:</b> 6pm to 9pm</p>
                <p><b>Venue:</b>  lab F04</p>
                <p><b>Lead:</b> Carolyne Githenduka</p>
                </div>
            
        </div>

        <div className="Events-Wrapper">
                
                <h1 className="event-heading">Thursday</h1>
                <div className='event-para'>
                <p><b>Event:</b> Mobile App Development</p>
                <p><b>Time:</b> 4pm to 7pm</p>
                <p><b>Venue:</b>  lab F04</p>
                <p><b>Lead:</b> Stanley Amunze</p>
                </div>
            
        </div>

        <div className="Events-Wrapper">
                
                <h1 className="event-heading">Friday</h1>
                <div className='event-para'>
                <p><b>Event:</b> Cloud Engineering</p>
                <p><b>Time:</b> 3pm to 6pm</p>
                <p><b>Venue:</b>  lab F04</p>
                <p><b>Lead:</b> Paul Karanja</p>
                </div>
            
        </div>

        <div className="Events-Wrapper">
                
                <h1 className="event-heading">Saturday</h1>
                <div className='event-para'>
                <p><b>Event:</b> Power Platform</p>
                <p><b>Time:</b> 1pm to 4pm</p>
                <p><b>Venue:</b>  lab F04</p>
                <p><b>Lead:</b> Evyonn Mbithe.</p>
                </div>
            
        </div>



        </section>
        

        </>
    )
}

export default Events;