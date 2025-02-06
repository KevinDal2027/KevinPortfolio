import { FaGithub, FaJava, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Nav } from "react-bootstrap";
import React from 'react'

const Contact = () => {
    return (
        <>
        <Nav className="ms-auto">
            <Nav.Link href="https://github.com/KevinDal2027" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/kevin-nguyen-dal" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaJava size={20} />
            </Nav.Link>
        </Nav></>
    )
}

export default Contact;