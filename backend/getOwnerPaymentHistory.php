<?php

    require "classes/users.php";
    require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $_POST = json_decode(file_get_contents("php://input"));
    $course_id = $_POST->course_id;

    $user = new Users;
    $insert = $user->getOwnerPaymentHistory($course_id);
    $response = [];

    if($insert){
        if ($user->res['fetched']->num_rows > 0) {
            $getCourse_id = $user->res['fetched'];
            while ($obj = $getCourse_id->fetch_assoc()) {
                $course[] = $obj;
            }
            echo json_encode($course);
        } 
        else {
            $response["message"] = "No Payment History";
            echo json_encode($response);
        }
    }

?>