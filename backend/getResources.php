<?php
    require "classes/users.php";
    $_POST = json_decode(file_get_contents("php://input"));
    $course_id = $_POST->course_id;
    // echo json_encode($course_id);
    $user = new Users;
    $insert = $user->getResources($course_id);
    
    $response = [];
    if ($insert) {
        if ($user->res['fetched']->num_rows > 0) {
            $getRes = $user->res['fetched'];
            while ($obj = $getRes->fetch_assoc()){
                $allResources[] = $obj;
            }
            echo json_encode($allResources);
        } else {
            $response["message"] = "no Resources Created";
            echo json_encode($response);
        }
    } else {
        $response['success'] = false;
        echo json_encode($response);
    }  


    
?>