<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ecomclips</title>
    <link rel="icon" type="image/x-icon" href="images/faveicon-logo.png">

    <!-- CSS link Start-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/owl.theme.default.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/homeStyle.css" />
    <link rel="stylesheet" href="css/ppc.css" />
    <link rel="stylesheet" href="css/dataManagement.css" />
    <link rel="stylesheet" href="css/amazon.css" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <!-- <link rel="stylesheet" href="css/test.css" /> -->
    <!-- font awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="" id="ID_for_scrollbar">
    <!-- Navigation Start -->
    <nav class="home-navber subcategory-nav" id="navBg_subcategory">
        <div class="content">
            <!-- <div class="icon menu-btn">
                <i class="fa-solid fa-bars"></i>
            </div> -->
            <div class="logo">
                <img src="./images/logo.png" alt="" />
                <a href="index.php" class="sub-a-color">Ecomclips</a>
            </div>
            <ul class="menu-list">
                <li class="home-mobile-hide"><a class="changeFontColorOnHover" href="#">Services</a></li>
                <li class="home-mobile-hide"><a class="changeFontColorOnHover" href="#">Resource</a></li>
                <li class="home-mobile-hide"><a class="changeFontColorOnHover" href="#">About</a></li>
                <li class="home-mobile-hide"><a class="changeFontColorOnHover" href="#">Contact</a></li>
                <li onclick="navDropdown()" id="hover-spinner" style="margin-top: -7px; margin-right:32px"
                    class="nav-circle-hover spinner circlehover blackspinner home-mobile-hide"
                    ><a href="#"  class="nav-icon-r" >
                        <svg id="Group_2058" data-name="Group 2058" class="changeSVG-sub-icon"
                            xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
                            <g id="nav_1" data-name="nav 1">
                                <g id="Group_790" data-name="Group 790" transform="translate(13 22)">
                                    <rect id="Rectangle_1409" data-name="Rectangle 1409" width="28" height="1.5"
                                        transform="translate(0 8)" />
                                    <rect id="Rectangle_1412" data-name="Rectangle 1412" width="28" height="1.5" />
                                </g>
                                <circle id="Ellipse_40" data-name="Ellipse 40" cx="27" cy="27" r="27" fill="none" />
                            </g>
                        </svg>

                    </a></li>
                <li onclick="navDropdownMobile()" class="nav-circle spin circle home-desktop-hide"
                    ><a href="#" class="nav-icon-r">
                        <svg xmlns="http://www.w3.org/2000/svg" class="changeSVG-sub-icon" width="28" height="28"
                            viewBox="0 0 26 26">
                            <g id="Group_1751" data-name="Group 1751" transform="translate(-1762 -13)">
                                <g id="nav_1" data-name="nav 1" transform="translate(1762 13)">
                                    <g id="Group_790" data-name="Group 790" transform="translate(6.305 10.67)">
                                        <rect id="Rectangle_1409" data-name="Rectangle 1409" width="13.58"
                                            height="0.728" transform="translate(0 3.88)" />
                                        <rect id="Rectangle_1412" data-name="Rectangle 1412" width="13.58"
                                            height="0.728" transform="translate(0 0)" />
                                    </g>
                                    <g id="Ellipse_40" data-name="Ellipse 40" fill="none" stroke="#000" stroke-width="1"
                                        stroke-dasharray="176 200">
                                        <circle cx="13" cy="13" r="13" stroke="none" />
                                        <circle cx="13" cy="13" r="12.5" fill="none" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a></li>
            </ul>
        </div>
    </nav>


    <div class="scroll-progress" id="scroll-progress"></div>
    <!-- Navigation End -->