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
    <link rel="stylesheet" href="css/footer.css" />
    <!-- <link rel="stylesheet" href="css/test.css" /> -->
    <!-- font awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="" id="ID_for_scrollbar">
    <!-- Navigation Start -->
    <nav class="home-navber" id="navBg">
        <div class="content">
            <!-- <div class="icon menu-btn">
                <i class="fa-solid fa-bars"></i>
            </div> -->
            <div class="logo">
                <img src="./images/logo.png" alt="" />
                <a href="index.php">Ecomclips</a>
            </div>
            <ul class="menu-list">
                <!-- <div class="icon cancel-btn">
                    <i class="fa-solid fa-xmark"></i>
                </div> -->
                <li class="home-mobile-hide"><a href="#">Services</a></li>
                <li class="home-mobile-hide"><a href="#">Resource</a></li>
                <li class="home-mobile-hide"><a href="#">About</a></li>
                <li class="home-mobile-hide"><a href="#">Contact</a></li>
                <li onclick="navDropdown()" class="nav-circle spin circle  home-mobile-hide"><a href="#"
                        class="nav-icon-r">
                        <img src="images/icon/nav-icon.png" alt="">
                    </a></li>
                <li onclick="navDropdownMobile()" class="nav-circle spin circle home-desktop-hide"><a href="#"
                        class="nav-icon-r">
                        <img src="images/icon/nav-icon-home-mobile.png" alt="">
                    </a></li>
            </ul>
        </div>
    </nav>


    <div class="scroll-progress" id="scroll-progress"></div>
    <!-- Navigation End -->