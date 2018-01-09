<?php
$to      = 'matheus.quintaes@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: matheus.quintaes@gmail.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?> 