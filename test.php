<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'mailer/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();

    //Server settings
 //   $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = '';                     // SMTP username
    $mail->Password   = '';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

// Content 
$mail->isHTML(true);  
$mail->CharSet = "UTF-8";


if(isset($_POST['send'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mass = $_POST['mass'];
    $num = $_POST['num'];
    $adress = $_POST['address'];
    $pro= $_POST['pro'];
/**************************************************************/ 
    $mail->setFrom('test@ooo.com', 'test');
    $mail->addAddress('');
    $mail->Subject = 'website';
    $mail->Body    ="you have received an e-mail from :".$email. " && his name is ".$name." && he from :".$adress." && his number is ".$num." && his message  is ".$mass." && his product is ".$pro;
    $mail->send();
    header("Location: test.php", true);
}

?>
<!DOCTYPE HTML>
<html>
<head>
<link rel="stylesheet" href="bootstrap/css//bootstrap.min.css">
<link rel="stylesheet" href="css.css">
<title> Table Page </title>
<script
    src="https://kit.fontawesome.com/009f6ba2c0.js"
    crossorigin="anonymous" async
    ></script>
</head>
<body>
<div>
<a href="#" class="btn btn-dark" id="but"> but  </a>
</div>

<div class="popup"> 
<div class="popup-content">
<div class=" header">
    <div class="title">
    <i class="fas fa-times-circle close " id="close"></i>
    <h5 class="text-title">Card title</h5>
    </div>
    <div class="product">
    <div class="card col-md-12 d-flex">
        <img src="file:///D:/same/the.notbook/assets/img/pure%20.BOK.jpg" class="card-img-top imgcard" alt="">
        <p class="card-text">Card Lorem ipsum dolor sit amet,Card Lorem ipsum dolor sit amet,</p>
            <input type="number" class="form-control" name="nomOfItem" id="nomOfItem" value="1" onclick="eq()" required>
        </div>
    </div>
    </div>

        <form class="row g-3" action="" method="POST" >
            <div class="col-md-12">
            <input type="text" class="form-control"name="name" id="name" placeholder="your_name" required>
            </div>
            <div class="col-md-12">
            <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="email" class="form-control" name="email" id="email" placeholder="your_email"  aria-describedby="inputGroupPrepend2" required>
            </div>
            </div>
            <div class="col-md-12">
            <input type="tel" class="form-control"name="num" id="num" placeholder="your_phone number" required>
        </div>
            <div class="col-md-12">
            <input type="text" class="form-control" name="address" placeholder="your_address" id="address" required>
            </div>
            <div class="mb-3">
            <textarea class="form-control" id="mass"name="mass" placeholder="send message if you have any comment" rows="3"></textarea>
        </div>
        <div class="input-group mb-3" >
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" placeholder="total"  name="price" id="total" value="" disabled >
            <input type="hidden" name="pro" value="" id="product">
            <span class="input-group-text">.00</span>
            </div>
            <div class="col-12">
            <button class="btn btn-dark" name="send" type="submit" onclick="send(event)">Submit form</button>
            </div>
        </form>
</div>
</div>

<script src="style\bootstrap\js\bootstrap.min.js"></script>
<script src="js.js"></script>
</body>
</html>
