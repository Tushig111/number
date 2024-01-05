<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="ulf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial -scale=1.0">
        <title>My own Website</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/a1c731d90c.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    </head>
        <body> 
            <div id="header">
                <div class="container">
                    <nav> 
                        <img src="image/logo.png" class="logo">
                        <ul>
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#Services">Lessons</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="header-text">
                        <p>Teen Coder</p>
                        <h1> Hi, I,m <span>Munkhtushig</span><br>I,m from Mongolia</h1>
                    </div>
                </div>
            </div>
<!-- ------- About ------- -->
            <div id="about">
                <div class="container">
                    <div class="row">
                        <div class="about-col-1">
                            <img src="image/pic1.png" alt="">
                        </div>
                        <div class="about-col-2">
                            <h1 class="sub-title">About me</h1>
                            <p>Aliquam mauris sapien, malesuada sit amet maximus semper, lobortis eu erat. Etiam faucibus sed tellus id eleifend. Aliquam tincidunt vitae eros id blandit. Aliquam porttitor metus faucibus felis fringilla, at iaculis justo viverra. Proin convallis, erat id consectetur ornare, sem est ullamcorper est, sit amet euismod mi eros eu tellus. Cras vulputate magna magna, quis suscipit orci accumsan nec. Mauris enim sapien, lobortis nec porta vel, placerat quis odio. Sed scelerisque, arcu eu gravida facilisis, quam magna gravida urna, vel finibus ipsum ex quis lacus. Fusce elit mi, molestie fringilla viverra ut, facilisis rhoncus lorem. Pellentesque porta tellus et lorem aliquam commodo.</p>


                            <div class="tab-titles ">
                                <p class="tab-links active-link"  onclick="opentab('HTML')">Code</p>
                                <p class="tab-links" onclick="opentab('CSS')">Education</p>
                                <p class="tab-links" onclick="opentab('Javascript')">Projects</p>
                            </div>
                            <div class="tab-contents active-tab" id="HTML"> 
                                <ul>
                                    <li><span>HTML</span><br>85%</li>
                                    <li><span>CSS</span><br>90%</li>
                                    <li><span>Javascript</span><br>65%</li>
                                </ul>
                            </div>
                            <div class="tab-contents" id="CSS">
                                <ul>
                                    <li><span>ENGLISH</span><br>90%</li>
                                    <li><span>MATH</span><br>100%</li>
                                    <li><span>SCIENCE</span><br>95%</li>
                                    <li><span>SCHOOL</span><br>Ulaanbatar Emapathy School</li>
                                </ul>
                            </div>
                            <div class="tab-contents" id="Javascript"> 
                                <ul>
                                    <li><span>Snake</span><br>Mobile game</li>
                                    <li><span>Weather</span><br>Found the weather</1i> 
                                    <li><span>Creative</span><br>Any company Website</li>
                                    <li><span>Counter</span><br>Count the number</li>
                                    <li><span>List</span><br>find thing</li>
                                    <li><span>Clock</span><br>Clock</li>
                                    <li><span>BGcolor</span><br>Chnge the color</li>
                                    <li><span>Farmcellils</span><br>Found Farmcellils</li>
                                    <li><span>ROCK ,paper,scissors</span><br>2 people hand game</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!-- --------- Lessons --------- -->
            <div id="Services">
                <div class="container">
                    <h1 class="sub-title">My Lessons</h1>
                    <div class="Services-list">
                        <div>
                            <i class="Lesson1"></i>
                            <h2>Lesson1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                            <a href="app.html">learn more</a>
                        </div>
                        <div>
                            <i class="Lesson2"></i>
                            <h2>Lesson2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                            <a href="app.html">learn more</a>
                        </div>
                        <div>
                            <i class="Lesson3"></i>
                            <h2>Lesson3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut.</p>
                            <a href="app.html">learn more</a>
                        </div>
                    </div>
                </div>
            </div>
<!-- ----------- <Projects---------- -->

<div id="Projects">
    <div class="container">
        <h1 class="sub-title">My projects</h1>
        <div class="project-list">
            <div class="project">
                <img src="image/p3.png">
                <div class="layer">
                    <h3>Creative Store</h3>
                    <p>This is the any company website.</p>
                    
                </div>
            </div>
            <div class="project">
                <img src="image/p2.png">
                <div class="layer">
                    <h3>Snake</h3>
                    <p>Two player version of the Snake game.
                       Don't crash into the edges or into the snakes themselves.</p>   
                </div>
            </div>
            <div class="project">
                <img src="image/p1.png">
                <div class="layer">
                    <h3>Rok,paper,scissors</h3>
                    <p>Many people tend to choose rock as their first move, so if you choose paper as your first move,
                     you have a higher chance of winning. </p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ----------Contact----------- -->
<div id="contact">
    <div class="container">
        <div class="row">
            <div class="contact-left">
                <h1 class="sub-title">Contact Me</h1>
                <p> <i class="bi bi-send"></i> sergelenmunkhtushig@gmail.com</p>
                <p> <i class="bi bi-telephone"></i>86244286</p>
                <div class="social-icons">
                    <a href="https://facebook.com/"><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
                <a href="excel.pdf" download class="btn btn2">Download CV</a>
                <img src="image/qrc.png" class="imgqr">
            </div>
            <div class="contact-right">
                <form>
                    <input type="text" name="Name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div class="made">
        <p>made by Munkhtushig @2024</p>
    </div>
</div>
            <script src="app.js"></script>
        </body> 
</html>
