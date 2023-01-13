<?php
    require "classes/users.php";
    $_POST = json_decode(file_get_contents("php://input"));
    // $_POST[]
    $user_id = $_POST->user_id;
    $user = new Users;
    $insert = $user->getCourses($user_id);
    $response = [];

    if ($insert) {
        $getAll = $insert['fetched']->fetch_all(MYSQLI_ASSOC);
        echo json_encode($getAll);
    } else {
        $response['success'] = false;
        echo json_encode($response);
    }  


    
?>