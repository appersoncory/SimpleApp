import { React } from 'react';
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function HomePage() {
    return (
       <>
            <h2>Web Dev Portfolio</h2>
            <article>
                <p>
                    With a background in IT in the healthcare industry and an associate's degree in computer science, I am aiming to transition into software development. My experience includes building a website using React, Node.js, and MongoDB, and working with ServiceNow. I seek to apply my skills towards creating innovative software solutions, ideally merging my healthcare IT knowledge with software development to impact health tech meaningfully.</p>
                <p>The major technologies used in building this website include:</p>
                <ul>
                    <li><IoLogoHtml5 /> - HTML - The backbone of the website's structure.</li>
                    <li><IoLogoCss3 /> - CSS - For styling and creating a visually appealing layout.</li>
                    <li><SiMongodb /> - MongoDB - Utilized for database management, showcasing CRUD (Create, Read, Update, Delete) operations.</li>
                    <li><SiExpress /> - Express.js - A web application framework for Node.js, enabling robust features and CRUD functionalities.</li>
                    <li><FaReact /> - React - A JavaScript library for building user interfaces, making the site dynamic and responsive.</li>
                    <li><FaNodeJs /> - Node.js - The runtime environment that powers the server-side of the website, supporting its back-end structure.</li>
                    <li><SiJavascript /> - Javascript - The programming language that brings interactivity to the website, used across React and Node.js to enhance user experience.</li>
                </ul>
            </article>
        </>
    );
}
export default HomePage;