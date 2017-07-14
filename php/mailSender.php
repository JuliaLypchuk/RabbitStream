<?php
    if ((isset($_POST['name'])&&$_POST['name']!="")
      &&(isset($_POST['email'])&&$_POST['email']!="")
      &&(isset($_POST['message'])&&$_POST['message']!="")) {

        $to = 'stan@rabbitstream.com';
        $subject = 'Rabbit Stream';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Message: '.$_POST['message'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From:  <contact@rabbitstream.com>\r\n";

        $result = mail($to, $subject, $message, $headers);

        if($result) {
        	echo 'message has been sent';
        }
        else {
        	echo 'smth went wrong';
        }
    }
?>
