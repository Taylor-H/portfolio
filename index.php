  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Reset -->
      <link rel="stylesheet" href="css/reset.css">
      <!-- Normalize -->
      <link rel="stylesheet" href="css/normalize.css">
      <!-- Your Stylesheet -->
      <link rel="stylesheet" href="css/index.css">
      <!-- slick and form tools -->
      <script language="php"><?php
        require_once("/formtools/global/api/API.class.php");
        $api = new FormTools\API();
        $fields = $api->initFormPage(1, "initialize");
        $params = array(
            "submit_button" => "send-it",
            "next_page" => "thanks.php",
            "form_data" => $_POST,
            "finalize" => true
        );
        $api->processFormSubmission($params);?></script>
      <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
      <link rel="icon" type="image/png" href="images/th.png"/>
      <link href="https://fonts.googleapis.com/css?family=Lekton:400,400i,700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400,700&display=swap" rel="stylesheet">
      <title>Taylor Pell - Front End Web Developer</title>
    </head>
  <body>
    <header>
      <div class="header">
      <div class="name-container logo">

        <a href="index.html">Taylor Pell</a>
      </div>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
        <ul class="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="about.html#contact">Contact</a></li>
      </ul>
    </div>
    </header>
<!--- _______________ end header and nav__________________ -->
  <main>
  <div class="code-bg rellax" data-rellax-speed="-10"></div>


  <div class="grid-container rellax" data-rellax-speed="5">
    <div class="portriat"></div>
      <div class="hi">
        <div><h6>Hi, I'm Taylor</h6></div>
        <div><p>A Boston based front-end web developer especially adept at bridging the gap between design and development...</p></div>
        <div id="links"><h5><a href="about.html">more ></a></h5></div>
      </div>
      <div class="skills">
        <div id="section-title">
          <h4><a href="about.html">< Skills</a></h4>
        </div>
        <div class="skill-list">
          <ul>
            <li><img src="images/check-circle-regular.svg" class="check"/>HTML5</li>
            <li><img src="images/check-circle-regular.svg" class="check"/>CSS3</li>
            <li><img src="images/check-circle-regular.svg" class="check"/>JavaScript/</li>
            <li><img src="images/check-circle-regular.svg" class="check"/>jQuary</li>
            <li><img src="images/check-circle-regular.svg" class="check"/>Responsive Layout</li>
            <li><img src="images/check-circle-regular.svg" class="check"/>WC3 Standards</li>
            <li><img src="images/check-circle-regular.svg" class="check"/>CSS & JS Libraries</li>
          </ul>
        </div>
        <div id="links"><h5><a href="about.html#skills">more ></a></h5></div>
      </div>
      <div class="tools">
        <div id="section-title">
          <h4><a href="about.html">< Tools</a></h4>
        </div>
        <div  class="tool-list">
          <ul>
            <li>Atom/editor</li>
            <li>Terminal</li>
            <li>Git</li>
            <li>Sketch/XD</li>
            <li>Photoshop</li>
            <li>Bootstrap/React</li>
            <li>LESS/SASS</li>
         </ul>
       </div>
        <div id="links"><h5><a href="about.html#tools">more ></a></h5></div>
  </div>
  <div class="projects">


      <h4 id="section-title"><a href="projects.html">< Projects</a></h4>


      <div class="post-wrapper">
        <!-- <span class="projects-header"><p>some projects</p></span> -->

        <div class="post">
          <a href="projects.html"><img src="images/pop-big.png" class="preview"/></a>
        </div>

        <div class="post">
          <a href="projects.html"><img src="images/monument-big.png" class="preview"/></a>
        </div>

        <div class="post">
          <a href="projects.html"><img src="images/js-big.png" class="preview"/></a>
        </div>

        <div class="post">
            <a href="projects.html"><img src="images/relaxr-big.png" class="preview"/></a>
        </div>

        <div class="post">
            <a href="projects.html"><img src="images/mtv-big.png" class="preview"/></a>
        </div>

        <div class="post">
            <a href="projects.html"><img src="images/inside-money-big.png" class="preview"/></a>
        </div>

    </div>
    <div id="links"><h5><a href="about.html#tools">more ></a></h5></div>

        <!-- <div class="slider-nav-container">
          <div class="prev"></div>
          <div class="slider-nav"></div>
          <div class="next"></div>
        </div> -->
        <!-- end posts and slider-nav -->


  </div>
  <!-- end post slider -->
  <!-- end projects -->


  <!--  -->
  <div class="spacer"></div>
  <div class="contact">
  <div class="connect-container">
    <form  method="post">
    <input type="hidden" name="form_tools_form_id" value="2" />
    <div>
      <input class="input-box" type="text" name="name" placeholder="Full Name:" />
      <input class="input-box" id="em-field" type="text" name="email" placeholder="Email Address:" />
    </div>

    <div>
      <input class="subject" type="text" name="subject" placeholder="Subject:" />
    </div>

    <div>
      <textarea class="comment-area" name="comment" placeholder="Message: "></textarea>
    </div>

    <div>
      <button class="connect-submit" type="submit" name="send-it" value="Submit">Send</button>  </form>
    </div>

  </div>
  </div>
   <!-- footer content -->
   <div class="con-h">
     <a name="contact"></a>
     <h4 id="section-title"><a href="about.html">< Contact</a></h4>
     <h5 id="detail-header">Interested in working with me?</h5>
     <p>Message me with with your project details and let's get started.</p>
  </div>
  <div class="email">
    <div class="em">
      <a id="mailto" alt="email me"></a>
    </div>
  </div>
  <div class="linkedin">
  <div class="in">
      <a id="linkedin-link" target="_blank" href="http://www.linkedin.com/in/taylor-hembree-pell" alt="my linked in profile">
      </a>
    </div>
  </div><!--
  --><div class="resume">
    <div class="rs">
      <a id="pdf-link" target="_blank" href="images/taylor-pell-2019.pdf"></a>
    </div>
  </div><!--
  --><div class="footer"><a href="#top" alt="top of page">< top ></a><!--
  --></div>
  </div>
  <!-- <div class="footer-bg"></div> -->
  <!--         end main content         -->
  </main>
  <script src="rellax.min.js"></script>
  <!--jquary-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="js/main.js"></script>
  <!-- scripts for slick carousel -->
  <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <script src="js/scripts.js"></script>
  </body>
  </html>
