<?php 
$page = basename($_SERVER['PHP_SELF']);

switch($page){
    case "aPlus.php": 
        $titles = "A-Plus Page";
        $metacontent = "A-Plus Meta Content";
        break;
    case "amazonBrandDesign.php": 
        $titles = "Amazon BrandDesign Page";
        $metacontent = "Amazon BrandDesign Meta Content";
        break;
    default :
    $titles = "Ecomclips";
    $metacontent = "Ecomclips Meta Content";
        break;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title> <?php echo $titles ?> </title>
    <meta name="description" content="<?php echo $metacontent ?>">
    <link rel="icon" type="image/x-icon" href="images/faveicon-logo.png">
    <link rel="preload" href="/ecc-v2-php/Font/Raleway-Font/Raleway-Regular.ttf" as="font" crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/Raleway-Font/Raleway-Medium.ttf" as="font" crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/Raleway-Font/Raleway-Bold.ttf" as="font"  crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/Raleway-Font/Raleway-ExtraBold.ttf" as="font" crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/aceh-www.Dfonts.org/Aceh/WEB/Aceh-Light.ttf" as="font" crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/aceh-www.Dfonts.org/Aceh/WEB/Aceh-Regular.ttf" as="font"  crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/aceh-www.Dfonts.org/Aceh/WEB/Aceh-SemiBold.ttf" as="font"  crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/aceh-www.Dfonts.org/Aceh/WEB/Aceh-Medium.ttf" as="font" crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/aceh-www.Dfonts.org/Aceh/WEB/Aceh-Thin.ttf" as="font" crossorigin>
    <link rel="preload" href="/ecc-v2-php/Font/aceh-www.Dfonts.org/Aceh/WEB/Aceh-Bold.ttf" as="font" crossorigin>
    <!-- CSS link Start-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/owl.theme.default.css" />
    <link rel="preload" rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <link rel="stylesheet" href="css/pricing.css" />
    <link rel="stylesheet" href="css/logoDesign.css" />
    <link rel="stylesheet" href="css/share.css" />
    <link rel="stylesheet" href="css/newslettersDesign.css" />
    <link rel="stylesheet" href="css/portfolio.css" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <!-- <link rel="stylesheet" href="css/coloris.css" /> -->
    <!-- font awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="bg container-ecc" id="ID_for_scrollbar">
    <!-- Navigation Start -->
    <nav class="navber">
        <div class="content">
            <div class="icon menu-btn">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="logo">
                <img src="./images/logo.png" alt="" />
                <a href="index.php">Ecomclips</a>
            </div>
            <ul class="menu-list">
                <div class="icon cancel-btn">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <li><a href="#">Services</a></li>
                <li><a href="#">Resource</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>


    <div class="scroll-progress" id="scroll-progress"></div>
    <!-- Navigation End -->