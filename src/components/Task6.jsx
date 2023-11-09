import React from "react";
import "../Task6.module.css";
import "../Task6.js";
const Task6 = () =>{

    return(
        <>
            <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
            <div class="container">
                <a class="navbar-brand" href="#top">Niket Suchak</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>

            <section class="bgimage" id="home">
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                        <h2 class="hero_title">Hi, it's me Niket</h2>
                        <p class="hero_desc">I am a Frontend Web-Developer.</p>
                    </div>
                    </div>
                </div>
            </section>

        <section id="about">
            <div class="container mt-4 pt-4">
                <h1 class="text-center">About Me</h1>
                <div class="row mt-4">
                    <div class="col-lg-4">
                        <img src="1.png" class= "imageAboutPage" alt="" />
                    </div>
                    <div class="col-lg-8">
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <ul>
                                    <li>Name: Niket Suchak</li>
                                    <li>Age: 18</li>
                                    <li>Domain of Interest: Web </li>

                                </ul>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <p> I am a student at <b>Vellore Institute of Technology</b>, Vellore. I am pursuing <b>Computer Science and Engineering</b><br></br>
                                I am a very hardworking and talented student. I am very interested in Web and App Development Domain.<br></br>
                                I love to play Badminton and watch movies.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
        </section>

        <section id="skills">
            <div class="container">
                <h1 class="text-center">Skills</h1>
                <div class="row">
                    <div class="col-lg-4 mt-4">
                        <div class="card skillsText">
                            <div class="card-body">
                                <i class="fas skillsIcon fa-clock"></i>
                                <h4 class="card-title mt-3">HTML</h4>
                                <p class="card-text mt-3">
                                    Learnt HTML Basics and Made some small projects.
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div class="col-lg-4 mt-4">
                        <div class="card skillsText">
                            <div class="card-body">
                                <i class='fas skillsIcon fa-layer-group'></i>
                                <h4 class="card-title mt-3">CSS</h4>
                                <p class="card-text mt-3">
                                    Learnt CSS Basics and Made small projects.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div class="col-lg-4 mt-4">
                        <div class="card skillsText">
                            <div class="card-body">
                                <i class='far skillsIcon fa-check-circle'></i>
                                <h4 class="card-title mt-3">JavaScript</h4>
                                <p class="card-text mt-3">
                                    Learnt JS and Learning React now.
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 mt-4">
                        <div class="card skillsText">
                            <div class="card-body">
                                <i class='fas skillsIcon fa-search'></i>
                                <h4 class="card-title mt-3">C</h4>
                                <p class="card-text mt-3">
                                    Four Star Rating on Hackerank.<br></br>
                                    One-Star Coder on Codechef<br /> 
                                    Doing Leetcode now.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div class="col-lg-4 mt-4">
                        <div class="card skillsText">
                            <div class="card-body">
                                <i class='fas skillsIcon fa-shield-alt'></i>
                                <h4 class="card-title mt-3">C++</h4>
                                <p class="card-text mt-3">
                                    Five Star Rating on Hackerrank.<br />
                                    One-Star Coder on Codechef<br />
                                    Doing Leetcode now.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div class="col-lg-4 mt-4">
                        <div class="card skillsText">
                            <div class="card-body">
                                <i class='fas skillsIcon fa-wrench'></i>
                                <h4 class="card-title mt-3">Python</h4>
                                <p class="card-text mt-3">
                                    Learnt Python Basics.
                                    <br /> Interested in Machine Learning.
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>

        <section id="portfolio">
            <div class="container mt-3">
                <h1 class="text-center">Portfolio</h1>
                <div class="row">
                    <div class="col-lg-4 mt-4">
                        <div class="card">
                            <img class="card-img-top" src="QR CODE.png" alt=""  />
                            <div class="card-body">
                                <h4 class="card-title">QR Code Generator</h4>
                                <p class="card-text">
                                    This site generates QR Code for the URL you have entered.<br />
                                    This is my First Project.
                                </p>
                                <div class="text-center">
                                    <a href="" class="btn btn-success" target="_blank" rel="noreferrer">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>

        <section id="contact">
                    <div class="col-lg-6">
                        <form>
                            <h2><b>Contact me for Project Collaboration</b></h2>
                            <input type="text" class="form-control form-control-lg" placeholder="Name" />
                            <input type="email" class="form-control mt-3" placeholder="Email" />
                            <input type="text" class="form-control mt-3" placeholder="Subject" />
                            <div class="mb-3 mt-3">
                                <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                            </div>
                        </form>
                        <button type="button" class="btn btn-success mt-3">Contact Me</button>
                        
                    </div>
        </section>

        
    </>
    );
};
export default Task6;