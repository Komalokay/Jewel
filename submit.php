<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    
    if (isset($_FILES['resume'])) {
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $jobRole = $_POST['job-role'];
        $comments = $_POST['comments'];

        $fileTmpPath = $_FILES['resume']['tmp_name'];
        $fileName = $_FILES['resume']['name'];
        $fileSize = $_FILES['resume']['size'];
        $fileType = $_FILES['resume']['type'];
        $fileContent = file_get_contents($fileTmpPath);

        $to = "Robin@example.com"; 
        $subject = "New Career Application from $name";
        $boundary = md5(time());

        $headers = "From: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

        $message = "--{$boundary}\r\n";
        $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $message .= "Career Form Submission:\n";
        $message .= "Name: $name\n";
        $message .= "Email: $email\n";
        $message .= "Phone: $phone\n";
        $message .= "Role: $jobRole\n";
        $message .= "Comments: $comments\n\n";

        $resumeContent = chunk_split(base64_encode($fileContent));
        $message .= "--{$boundary}\r\n";
        $message .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
        $message .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $message .= $resumeContent . "\r\n";
        $message .= "--{$boundary}--";

        if (mail($to, $subject, $message, $headers)) {
            echo "Career application submitted successfully!";
        } else {
            echo "Failed to send career application email.";
        }

    } else {
        // Contact form data
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $messageContent = $_POST['message'] ?? '';

        $to = "youremail@example.com"; // Replace with your email
        $subject = "New Contact Form Submission from $name";
        $message = "Name: $name\n";
        $message .= "Email: $email\n";
        $message .= "Message:\n$messageContent\n";

        $headers = "From: $email\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo "Contact form message sent successfully!";
        } else {
            echo "Failed to send contact form message.";
        }
    }

} else {
    echo "Invalid request.";
}
?>
