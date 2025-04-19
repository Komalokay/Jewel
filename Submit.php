<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $formType = $_POST['form_type'] ?? '';
    $logFile = "form_submissions.txt"; // A simple log file

    ob_start(); // Start capturing output

    if ($formType === 'contact') {
        echo "Contact Form Submission:\n";
        echo "Name: " . $_POST["name"] . "\n";
        echo "Email: " . $_POST["email"] . "\n";
        echo "Message: " . $_POST["message"] . "\n\n";

    } elseif ($formType === 'career') {
        echo "Career Form Submission:\n";
        echo "Name: " . $_POST["name"] . "\n";
        echo "Email: " . $_POST["email"] . "\n";
        echo "Phone: " . $_POST["phone"] . "\n";
        echo "Role: " . $_POST["job-role"] . "\n";
        echo "Comments: " . $_POST["comments"] . "\n";

        // Handle resume
        $resume = $_FILES["resume"];
        if (isset($resume)) {
            echo "Resume Filename: " . $resume["name"] . "\n";
        }
        echo "\n";
    } else {
        echo "Unknown form type.\n\n";
    }

    // Write output to file
    $output = ob_get_clean();
    file_put_contents($logFile, $output, FILE_APPEND);

    echo "Form submitted. Check the 'form_submissions.txt' file.";
}
?>
