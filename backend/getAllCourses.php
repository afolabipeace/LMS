<?php
    require "classes/users.php";
    require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $user = new Users;
    $insert = $user->getAllCourses();
    // echo json_encode($insert) ;
    $response = [];
    $courseArray = [];
    $user_id = $user->get()['fetched']['user_id'];
    if ($insert) {
        $getCourses = $insert['fetched'];
    // echo $getCourses;
        while ($course = $getCourses->fetch_assoc()) {
            $course_id = $course['course_id'];
            $course['owner_id'] = $course['user_id'];
            // echo $course_id;
            $check = $user->getUserPayment($course_id,$user_id);
            if($check['fetched']->num_rows > 0){
                $course['paid'] = true;
            }
            else{
                $course['paid'] = false;
            }
            $courseArray[] = $course;
        }
        echo json_encode($courseArray);
    }
     else {
        $response["success"] = false;
        echo json_encode($response);
    }
?>