<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $comment = htmlspecialchars(trim($_POST["comment"]));

    $to = "sean.stubbs@kpu.ca"; // For Sean
    $subject = "New message from website";
    $message = "Name: $name\nEmail: $email\nMessage:\n$comment";
    $headers = "From: $email\r\n";
    $headers .= "Cc: $email"; // ← copy

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you, $name! Your message has been sent.";
    } else {
        echo "Message failed to send.";
    }
}
?>