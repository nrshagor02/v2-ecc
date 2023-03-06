<?php 
include('header/header.php');

include('header/drawer.php');
?>


<section class="hide-for-mobile">
    <div class="logo-container">
        <div class="logo-row">
            <div class="logo-left">
                <div class="logo-left-header">
                    <p>We Create Images</p>
                    <h2>CGI, Retouching<span> & Optimization</span></h2>
                </div>
                <div class="logo-left-body">
                    <p>Ecomalips is the most trusted agency in online photo retouching business since 2014 Simply upload
                        photos, write your requirements, and we'll take care of the rest.</p>
                </div>
                <div class="hide-on-tab">
                    <div class="logo-left-button">
                        <div class="hero-middle-button">
                            <p class="hero-middle-btnText">Work with us</p>
                            <div class="hero-middle-btnTwo">
                                <p class="hero-middle-btnText2">Show me the pricing</p>
                            </div>
                        </div>
                        <div class="hero-middle-button-services">
                            <p class="hero-middle-btnText">Need a Retouching & Optimization?</p>
                            <div class="hero-middle-btnTwo-services">
                                <p class="hero-middle-btnText2">Create Images Editing Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logo-right">
                <div class="logo-right-image">
                    <img src="images/portfolio/cgiDesign.png" alt="" class="hide-on-tab">
                    <img src="images/portfolio/cgiDesign_tab.png" alt="" class="show-on-tab hide-on-desktop">
                </div>
                <div class="tab-hero-button hide-on-desktop show-on-tab">
                    <button>Show me the pricing</button> <br>
                    <button>Create your brand store</button>
                </div>
            </div>
        </div>
    </div>
</section>



<!-- -------------- Start Design for Mobile --------------- -->

<section class="hide-on-desktop">
    <div class="mobile-hero-container">
        <div class="mobile-hero-row">
            <div class="mobile-hero-header">
                <h4>We Create Images</h4>
                <div class="brand-heder-position">
                    <div class="brand-heder">
                        <h2><span>CGI, Retouching &</span>
                            Optimization</h2>
                        <p>But I must explain to you how all this mistaken idea of
                            enouncing pleasure and praising pain</p>
                    </div>
                </div>
            </div>
            <div class="mobile-hero-body">
                <img src="images/a-plus-mobile/amazonbrand/photo-portrair-retouch-image.png" alt="" id="mobile_display">
                <div class="brand-mobile-image">
                    <img src="images/a-plus-mobile/amazonbrand/brand-hero-mobile.png" alt="">
                </div>
                <div>
                    <img src="images/a-plus-mobile/amazonbrand/brand-dis-img-1.png" alt="" class="brand-dis-img-1"
                        onclick="mobile_display.src='images/a-plus-mobile/amazonbrand/photo-portrair-retouch-image.png'">
                    <img src="images/a-plus-mobile/amazonbrand/brand-dis-img-2.png" alt="" class="brand-dis-img-2"
                        onclick="mobile_display.src='images/a-plus-mobile/amazonbrand/brand-hero-dis-2.png'">
                    <img src="images/a-plus-mobile/amazonbrand/brand-dis-img-3.png" alt="" class="brand-dis-img-3"
                        onclick="mobile_display.src='images/a-plus-mobile/amazonbrand/Free-Id-Card-Mockup-Template-scaled.png'">
                </div>
                <div>
                    <a href="#" class="brand-mobile-btn-1">Show me the pricing</a> <br>
                    <a href="#" class="brand-mobile-btn-2">Create Brand Store</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- -------------- End Design for Mobile --------------- -->


<section>
    <div class="progress-container">
        <div class="progress-row">
            <div class="hero-bottom">
                <div class="peogessBarSection">
                    <h1 class="circle-progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                        aria-valuemax="100" style="--value: 65">
                        <div>
                            <span id="featureNum1">200</span>
                            <span>+</span>
                        </div>
                    </h1>
                    <p>Experience of creating <br>
                        200+ CGI, Retouching &
                        Optimization
                    </p>
                </div>
                <div class="peogessBarSection">
                    <h1 class="circle-progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                        aria-valuemax="100" style="--value: 95">
                        <div>
                            <span id="featureNum2">95</span>
                            <span>%</span>
                        </div>
                    </h1>
                    <p>95% positive rating <br> verified by TrustPilot</p>
                </div>
                <div class="peogessBarSection">
                    <h1 class="circle-progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                        aria-valuemax="100" style="--value: 85">
                        <div>
                            <span id="featureNum3">200</span>
                            <span>+</span>
                        </div>
                    </h1>
                    <p>Served 200+ clients <br> across 15+ countries</p>
                </div>
                <div class="peogessBarSection">
                    <h1 class="circle-progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100" style="--value: 55">
                        <div>
                            <span id="featureNum4">5</span>
                            <span>+</span>
                        </div>
                    </h1>
                    <p>5+ years of experience <br>
                        on CGI, Retouching &
                        Optimization
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- ---------------------Start Design for mobile --------------- -->

<section class="hide-on-desktop show-on-tab">
    <div class="portfolio-work-container">
        <div class="portfolio-work-row">
            <div class="portfolio-work-header">
                <p>Your business is your id card</p>
                <h2>Our Portfolio Work</h2>
            </div>
            <div class="portfolio-work-body">
                <img src="images/a-plus-mobile/packaging/packaging-slider-5.png" alt="" id="portfolioWorkimg">
            </div>
            <div class="portfolio-work-footer">
                <div class="portfolio-work-slider">
                    <div class="owl-slider">
                        <div id="carouselPortFolio" class="owl-carousel portfolio-work brand-owl">
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(1)">
                                    <img src="images/a-plus-mobile/packaging/packaging-1.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(2)">
                                    <img src="images/a-plus-mobile/packaging/packaging-2.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(3)">
                                    <img src="images/a-plus-mobile/packaging/packaging-3.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(4)">
                                    <img src="images/a-plus-mobile/packaging/packaging-4.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(5)">
                                    <img src="images/a-plus-mobile/packaging/packaging-5.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(6)">
                                    <img src="images/a-plus-mobile/packaging/packaging-6.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(7)">
                                    <img src="images/a-plus-mobile/packaging/packaging-7.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(8)">
                                    <img src="images/a-plus-mobile/packaging/packaging-8.png" alt="">
                                </div>
                            </div>
                            <div class="item">
                                <div class="owl-icon-img" onclick="portfolioWork(9)">
                                    <img src="images/a-plus-mobile/packaging/packaging-9.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ---------------------End Design for mobile --------------- -->

<section class="hide-for-mobile hide-on-tab">
    <div class="slide-container">
        <div class="slide-row">
            <div class="slide-left">
                <div class="slide-left-header">
                    <p>Social media design</p>
                    <h2><span>Our Portfolio</span> Work</h2>
                </div>
                <div class="slide-left-body">
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-1.png" id="imgSlide1" alt="" />
                        <img src="images/img/logo-slide-4.png" class="image-hide" id="img1Sub1" alt="" />
                        <img src="images/img/logo-slide-1.png" class="image-hide" id="img1Sub2" alt="" />
                        <img src="images/img/logo-slide-2.png" class="image-hide" id="img1Sub3" alt="" />
                    </div>
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-2.png" id="imgSlide2" alt="">
                        <img src="images/img/logo-slide-3.png" class="image-hide" id="img2Sub1" alt="" />
                        <img src="images/img/logo-slide-2.png" class="image-hide" id="img2Sub2" alt="" />
                        <img src="images/img/logo-slide-1.png" class="image-hide" id="img2Sub3" alt="" />
                    </div>
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-3.png" id="imgSlide3" alt="">
                        <img src="images/img/logo-slide-3.png" class="image-hide" id="img3Sub1" alt="" />
                        <img src="images/img/logo-slide-4.png" class="image-hide" id="img3Sub2" alt="" />
                        <img src="images/img/logo-slide-2.png" class="image-hide" id="img3Sub3" alt="" />
                    </div>
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-4.png" id="imgSlide4" alt="">
                        <img src="images/img/logo-slide-1.png" class="image-hide" id="img4Sub1" alt="" />
                        <img src="images/img/logo-slide-2.png" class="image-hide" id="img4Sub2" alt="" />
                        <img src="images/img/logo-slide-3.png" class="image-hide" id="img4Sub3" alt="" />
                    </div>
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-5.png" id="imgSlide5" alt="">
                        <img src="images/img/logo-slide-3.png" class="image-hide" id="img5Sub1" alt="" />
                        <img src="images/img/logo-slide-4.png" class="image-hide" id="img5Sub2" alt="" />
                        <img src="images/img/logo-slide-2.png" class="image-hide" id="img5Sub3" alt="" />
                    </div>
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-6.png" id="imgSlide6" alt="">
                        <img src="images/img/logo-slide-2.png" class="image-hide" id="img6Sub1" alt="" />
                        <img src="images/img/logo-slide-1.png" class="image-hide" id="img6Sub2" alt="" />
                        <img src="images/img/logo-slide-4.png" class="image-hide" id="img6Sub3" alt="" />
                    </div>
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-7.png" id="imgSlide7" alt="">
                        <img src="images/img/logo-slide-4.png" class="image-hide" id="img7Sub1" alt="" />
                        <img src="images/img/logo-slide-3.png" class="image-hide" id="img7Sub2" alt="" />
                        <img src="images/img/logo-slide-2.png" class="image-hide" id="img7Sub3" alt="" />
                    </div>
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-8.png" id="imgSlide8" alt="">
                        <img src="images/img/logo-slide-2.png" class="image-hide" id="img8Sub1" alt="" />
                        <img src="images/img/logo-slide-3.png" class="image-hide" id="img8Sub2" alt="" />
                        <img src="images/img/logo-slide-4.png" class="image-hide" id="img8Sub3" alt="" />
                    </div>
                    <div class="logo-slider-image">
                        <img src="images/portfolio/cgiDesign-9.png" id="imgSlide9" alt="">
                        <img src="images/img/logo-slide-4.png" class="image-hide" id="img9Sub1" alt="" />
                        <img src="images/img/logo-slide-1.png" class="image-hide" id="img9Sub2" alt="" />
                        <img src="images/img/logo-slide-3.png" class="image-hide" id="img9Sub3" alt="" />
                    </div>
                </div>
            </div>
            <div class="slide-right">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"
                    data-bs-interval="1800">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/portfolio/cgiDesign-slider.png" id="mainImage1" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="images/img/logo-slide-2.png" id="mainImage2" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="images/img/logo-slide-3.png" id="mainImage3" alt="...">
                        </div>
                    </div>

                </div>
            </div>
        </div>
</section>

<section>
    <div class="jumpstart-container">
        <div class="jumpstart-row">
            <div class="slide-left-header">
                <p>Build your brand on solid ground</p>
                <h2>Jumpstart to Create your <span>CGI, Retouching & Optimization</span></h2>
            </div>
        </div>
    </div>
</section>

<?php 
        include('share/jumpstart.php');
?>




<section class="hide-for-mobile hide-on-tab">
    <div class="high-end-container">
        <div class="high-end-row">
            <div class="high-end-left">
                <div class="end-left-header">
                    <p>Retouch image</p>
                    <h2>We will Provide <br>
                        <span>Retouch image</span>
                    </h2>
                </div>
                <div class="end-left-body">
                    <p>91% of our clients see a meaningful increase in account sales
                        performance within 30 days after adding A+ content designed
                        by us. Please keep in mind that your particular success rate
                        may differ due to a variety of individual factors (i.e. PPC, SEO),
                        which may increase or decrease your chances for success.</p>
                </div>
            </div>
            <div class="high-end-right">
                <div class="end-right-image">
                    <img src="images/portfolio/retouch-image.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="hide-for-mobile hide-on-tab">
    <div class="color-container">
        <div class="color-row">
            <div class="color-left">
                <div class="color-left-image">
                    <img src="images/portfolio/color-correction-cgi.png" alt="">
                </div>
            </div>
            <div class="color-right">
                <div class="color-right-header">
                    <p>Color variations</p>
                    <h2>We will provide <br>
                        <span> Color correction</span>
                    </h2>
                </div>
                <div class="color-right-body">
                    <p>Have logo variations for different colors of backgrounds. At a minimum, you want one logo that
                        looks great on light backgrounds and one for dark backgrounds. It’s also a good idea to have
                        your logo with every brand color arrangement possible.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="hide-for-mobile hide-on-tab">
    <div class="color-container">
        <div class="color-row">
            <div class="color-left">
                <div class="color-left-image">
                    <img src="images/portfolio/lifystyle-image-cgi.png" alt="">
                </div>
            </div>
            <div class="color-right">
                <div class="color-right-header">
                    <p>Multiple size</p>
                    <h2>We will provide <br>
                        <span>Source file</span>
                    </h2>
                </div>
                <div class="color-right-body">
                    <p>A source file is the “master file” for whatever you’re working with. The original, layered design
                        file allows you to make future edits to the design. And its typography, color and size can be
                        easily changed. They are under a separate layers of design. The designer, have used to create
                        your designs.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="hide-for-mobile hide-on-tab">
    <div class="color-container">
        <div class="color-row">
            <div class="color-left">
                <div class="color-left-image">
                    <img src="images/portfolio/unlimited-revisions.png" alt="">
                </div>
            </div>
            <div class="color-right">
                <div class="color-right-header">
                    <p>Unlimited revisions</p>
                    <h2>We will provide <br>
                        <span>Unlimited Revision</span>
                    </h2>
                </div>
                <div class="color-right-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="hide-for-mobile hide-on-tab">
    <div class="color-container">
        <div class="color-row">
            <div class="color-left">
                <div class="color-left-image">
                    <img src="images/portfolio/background-music.png" alt="">
                </div>
            </div>
            <div class="color-right">
                <div class="color-right-header">
                    <p>infographics images</p>
                    <h2>We will provide <br>
                        <span>Infographics images</span>
                    </h2>
                </div>
                <div class="color-right-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- ----------------- mobile design --------------------- -->


<section class="hide-on-desktop show-on-tab">
    <div class="free-mockup-container">
        <div class="free-mockup-row">
            <div class="why-should-slider">
                <div class="owl-slider">
                    <div id="carouselFreeMockup" class="owl-carousel why-should brand-owl">
                        <div class="item">
                            <div class="why-should-header">
                                <p>High-end logo</p>
                                <h2>We will Provide <br>
                                    <span>JPG & PNG File</span>
                                </h2>
                            </div>
                            <div class="owl-icon-provide">
                                <img src="images/a-plus-mobile/amazon-brand-1.png" alt="">
                            </div>
                            <div class="why-should-body">
                                <p>91% of our clients see a meaningful increase
                                    in account sales performance within 30
                                    days after adding A+ content designed
                                    by us. Please keep in mind that your
                                    particular success rate may differ due to a
                                    variety of individual factors (i.e. PPC, SEO),
                                    which may increase or decrease your
                                    chances for success.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="why-should-header">
                                <p>Color variations</p>
                                <h2>We will Provide <br>
                                    <span>Die Cutting</span>
                                </h2>
                            </div>
                            <div class="owl-icon-provide">
                                <img src="images/a-plus-mobile/amazon-brand-2.png" alt="">
                            </div>
                            <div class="why-should-body">
                                <p>91% of our clients see a meaningful increase
                                    in account sales performance within 30
                                    days after adding A+ content designed
                                    by us. Please keep in mind that your
                                    particular success rate may differ due to a
                                    variety of individual factors (i.e. PPC, SEO),
                                    which may increase or decrease your
                                    chances for success.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="why-should-header">
                                <p>Source file</p>
                                <h2>We will Provide <br>
                                    <span>Source file</span>
                                </h2>
                            </div>
                            <div class="owl-icon-provide">
                                <img src="images/a-plus-mobile/amazon-brand-3.png" alt="">
                            </div>
                            <div class="why-should-body">
                                <p>A source file is the “master file” for whatever you’re working with. The original,
                                    layered design file allows you to make future edits to the design. And its
                                    typography, color and size can be easily changed. They are under a separate layers
                                    of design. The designer, have used to create your designs.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="why-should-header">
                                <p>Unlimited revisions</p>
                                <h2>We will Provide <br>
                                    <span>Unlimited revision</span>
                                </h2>
                            </div>
                            <div class="owl-icon-provide">
                                <img src="images/a-plus-mobile/amazon-brand-4.png" alt="">
                            </div>
                            <div class="why-should-body">
                                <p>91% of our clients see a meaningful increase
                                    in account sales performance within 30
                                    days after adding A+ content designed
                                    by us. Please keep in mind that your
                                    particular success rate may differ due to a
                                    variety of individual factors (i.e. PPC, SEO),
                                    which may increase or decrease your
                                    chances for success.</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="why-should-header">
                                <p>Free mockup</p>
                                <h2>We will Provide <br>
                                    <span>Free Mockup</span>
                                </h2>
                            </div>
                            <div class="owl-icon-provide">
                                <img src="images/a-plus-mobile/amazon-brand-5.png" alt="">
                            </div>
                            <div class="why-should-body">
                                <p>91% of our clients see a meaningful increase
                                    in account sales performance within 30
                                    days after adding A+ content designed
                                    by us. Please keep in mind that your
                                    particular success rate may differ due to a
                                    variety of individual factors (i.e. PPC, SEO),
                                    which may increase or decrease your
                                    chances for success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="hide-on-desktop show-on-tab">
    <div class="frequently-asked-container">
        <div class="frequently-asked-row">
            <div class="frequently-asked-header">
                <h2>Frequently Asked <br> <span>Questions</span></h2>
                <p>Here are a few of the questions we get the most.
                    If you don’t see what’s in your mind, reach out to
                    us anytime via phone, chat, or email. We are
                    always available.</p>
            </div>
            <div class="asked-questions">
                <div class="asked-questions-1" id="askedQuestions">
                    <div class="asked-questions-p">
                        <p>If I provide bulk ASINs will I get a <br> discount? </p>
                        <p class="asked-questions-1-span">Yes, If you provide bulk ASINs of 50 - 200 products,
                            you will get a 10% discount on the whole quoted price. For 200 - 500 products, you will get
                            a 15% discount on the whole quoted price. If you have more products to do the A+ content,
                            you will get a custom discount.</p>
                    </div>
                    <button class="plus-div" onclick="askedQuestions(1)">
                        <img src="images/a-plus-mobile/plus.png" alt="ok/plus" id="askedQuestionsimg">
                    </button>
                </div>
                <div class="asked-questions-1" id="askedQuestions2">
                    <div class="asked-questions-p">
                        <p>I do not have any high quality product
                            images. Can I have an A+ content?</p>
                    </div>
                    <div class="plus-div" onclick="askedQuestions(2)">
                        <img src="images/a-plus-mobile/plus.png" alt="" id="askedQuestionsimg2">
                    </div>
                </div>
                <div class="asked-questions-1" id="askedQuestions3">
                    <div class="asked-questions-p">
                        <p>What will be the quote if I have multiple
                            product sizes and color variations?</p>
                    </div>
                    <div class="plus-div" onclick="askedQuestions(3)">
                        <img src="images/a-plus-mobile/plus.png" alt="" id="askedQuestionsimg3">
                    </div>
                </div>
            </div>
            <div class="hide-on-tab">
                <div class="frequently-asked-btn">
                    <div class="why-should-btn">
                        <p class="why-should-btn-txt">See recent work</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="show-on-tab">
        <div class="frequently-asked-btn">
            <div class="why-should-btn">
                <p class="why-should-btn-txt">See recent work</p>
            </div>
        </div>
    </div>
</section>


<?php 
        include('footer/footerTrust.php');
        include('share/aPlusCreativeServices.php');
        include('share/aplusCreativeSection.php'); // for tab version
        include('footer/footer.php');
?>