import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Leader = ({
    image, 
    fullName, 
    role, 
    X, 
    linkedlnUrl, 
    fbUrl, 
    instUrl, 
    bio
}) => {
    return (
        <div className="leader-details">
            <div className="leader-img">
                <img src={image} alt={`Image of ${fullName}`} className="div-img" />
            </div>
            <div className="leader-body">
                <p className="leader-full-name">{fullName}</p>
                <p className="leader-role">{role}</p>
                <p className="leader-bio">{bio}</p>
            </div>
            <div className="Social-Media-Links">
                {X && (
                    <Link to={X}>
                        <FaTwitter />
                    </Link>
                )}
                {linkedlnUrl && (
                    <Link to={linkedlnUrl}>
                        <FaLinkedin />
                    </Link>
                )}
                {fbUrl && (
                    <Link to={fbUrl}>
                        <FaFacebookF />
                    </Link>
                )}
                {instUrl && (
                    <Link to={instUrl}>
                        <FaInstagram />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Leader;

