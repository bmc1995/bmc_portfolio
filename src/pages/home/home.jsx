import React from "react";
import './home.css'
import { ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";

const itemData = [
    { title: "Angular", src: "./techImgs/angular.svg" },
    { title: "CSS3", src: "./techImgs/css3.webp" },
    { title: "Docker", src: "./techImgs/docker.webp" },
    { title: "ExpressJs", src: "./techImgs/expressjs.svg" },
    { title: "HTML5", src: "./techImgs/html5.svg" },
    { title: "JavaScript", src: "./techImgs/javascript.svg" },
    { title: "MongoDB", src: "./techImgs/mongodb.png" },
    { title: "Microsoft SQL Server", src: "./techImgs/mssql.png" },
    { title: "MySQL", src: "./techImgs/mysql.png" },
    { title: "NestJs", src: "./techImgs/nestjs-icon.svg" },
    { title: "NodeJs", src: "./techImgs/node.png" },
    { title: "PostgreSQL", src: "./techImgs/postgresql.svg" },
    { title: "Python", src: "./techImgs/Python_logo_01.svg.png" },
    { title: "React", src: "./techImgs/react.svg" },
    { title: "Ruby", src: "./techImgs/ruby.svg" },
    { title: "Vue", src: "./techImgs/vue-transparent.png" }]
const Home = () => {
    return (

            <Box textAlign={'center'}>

            <img className="billyPic" src="1630177862314.jpeg" alt="Billy" />
            <h1>Hi, I'm Billy.</h1>
            {/* <table>
                <tbody>
                    <tr className="imgRow">
                        <td><a target="_blank" rel="noopener noreferrer" href="https://html.spec.whatwg.org/multipage/"><img src="./techImgs/html5.svg" alt="HTML5" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/Style/CSS/"><img src="./techImgs/css3.webp" alt="CSS3" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://262.ecma-international.org/13.0/"><img src="./techImgs/javascript.svg" alt="JavaScript" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://nodejs.org"><img src="./techImgs/node.png" alt="Node" /></a></td>
                    </tr>
                    <tr className="imgRow">
                        <td><a target="_blank" rel="noopener noreferrer" href="https://angular.io/"><img src="./techImgs/angular.svg" alt="Angular" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org"><img src="./techImgs/react.svg" alt="React" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://vuejs.org"><img src="./techImgs/vue-transparent.png" alt="Vue" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://nestjs.com"><img src="./techImgs/nestjs-icon.svg" alt="Nestjs" /></a></td>
                    </tr>
                    <tr className="imgRow">
                        <td><a target="_blank" rel="noopener noreferrer" href="https://expressjs.com/"><img src="./techImgs/expressjs.svg" alt="Expressjs" /> </a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://python.org"><img src="./techImgs/Python_logo_01.svg.png" alt="Python" /></a></td>
                        <td> <a target="_blank" rel="noopener noreferrer" href="https://www.ruby-lang.org"><img src="./techImgs/ruby.svg" alt="Ruby" /> </a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://docker.com"><img src="./techImgs/docker.webp" alt="Docker" /> </a></td>
                    </tr>
                    <tr className="imgRow">
                        <td><a target="_blank" rel="noopener noreferrer" href="https://postgresql.org"><img src="./techImgs/postgresql.svg" alt="PostgreSQL" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://www.microsoft.com/en-us/sql-server/sql-server-2022"><img src="./techImgs/mssql.png" alt="Microsoft SQL Server" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://www.mysql.com/"><img src="./techImgs/mysql.png" alt="MySQL" /></a></td>
                        <td><a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/home"><img src="./techImgs/mongodb.png" alt="MongoDB" /></a></td>
                    </tr>
                </tbody>
            </table> */}
            <ImageList sx={{justifyItems:'center', alignItems: 'center' }} cols={3}>
                {itemData.map((item) => (
                    <ImageListItem sx={{ width: "100px", padding:'50px'}} key={item.src}>
                        <img
                            src={`${item.src}`}
                            alt={item.title}
                            loading="lazy"
                            style={{ objectFit: "contain" }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            </Box>


    )
}

export default Home