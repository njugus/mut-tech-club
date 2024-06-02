import React from "react";
import leaders from "../../data/leaders";
import Leader from "./leader";
import './leaders.css';

function Leadership() {
    return (
        <React.Fragment>
            <section>
                
            <div className="leader-description">
                    <h1>Mut Tech Club is Led by A team of Professionals</h1>

                </div>
            </section>
           
            <section className="Leaders-section">

                {leaders.map((currentLeader, i) => (
                    <Leader 
                        key={i}
                        image={currentLeader.image}
                        fullName={currentLeader.fullName}
                        role={currentLeader.role}
                        X={currentLeader.X}
                        linkedlnUrl={currentLeader.linkedlnUrl}
                        fbUrl={currentLeader.fbUrl}
                        instUrl={currentLeader.instUrl}
                        bio={currentLeader.bio}
                    />
                ))}
            </section>
        </React.Fragment>
    );
}

export default Leadership;
