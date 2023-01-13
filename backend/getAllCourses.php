<?php
    require "classes/users.php";
    require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $user = new Users;
    $insert = $user->getAllCourses();
    $response = [];
  
    if ($insert) {
        $getCourses = $insert['fetched']->fetch_all(MYSQLI_ASSOC);
        // while ($obj = $getCourses) {
        //     $courses[] = $obj;
        // }
        echo json_encode($getCourses);
    } else {
        $response["success"] = false;
        echo json_encode($response);
    }

      // if ($insert) {
    //     $getAll = $insert['fetched']->fetch_all(MYSQLI_ASSOC);
    //     echo json_encode($getAll);
    // } else {
    //     $response['success'] = false;
    //     echo json_encode($response);
    // }  


    // if ($insert) {
    //     if ($user->res['fetched']->num_rows > 0) {
    //         $getAll = $user->res['fetched'];
    //         while ($obj = $getAll->fetch_assoc()) {
    //             $courses[] = $obj;
    //         }
    //         echo json_encode($courses);
    //     } else {
    //         $response['gotten'] = false;
    //         echo json_encode($response);
    //     }
    // } else {
    //     $response['success'] = false;
    //     echo json_encode($response);
    // }  
?>