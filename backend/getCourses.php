<?php

    require 'Classes/users.php';
    require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $user = new Users;
    $insert = $user->selectAll();
    $response = [];
    if ($insert) {
        if ($user->res['fetched']->num_rows > 0) {
            $getAll = $user->res['fetched'];
            while ($obj = $getAll->fetch_assoc()) {
                $users[] = $obj;
            }
            echo json_encode($users);
        } else {
            $response['gotten'] = false;
            echo json_encode($response);
        }
    } else {
        $response['success'] = false;
        echo json_encode($response);
    }  
        

    

   

?>