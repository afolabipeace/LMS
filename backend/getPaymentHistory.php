<?php

    require "classes/users.php";
    require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $_POST = json_decode(file_get_contents("php://input"));

    // $user_id = $_POST->user_id;
    $user = new Users;
    $user_id = $user->get()['fetched']['user_id'];
    $insert = $user->getPaymentHistory($user_id);
    $resp = [];
    $payments = [];
    if ($insert) {
        $getAll = $insert['fetched']->fetch_all(MYSQLI_ASSOC);
        echo json_encode($getAll);
    }else {
        $response["message"] = "no Resources Created";
        $response['success'] = false;
        echo json_encode($response);
    }  

    // if ($insert) {
    //     $getPayment = $insert['fetched'];
    //     if($insert['fetched']->num_rows > 0){
    //         $payment['paid'] = true;
    //     }
    //     else{
    //         $payment['paid'] = false;
    //     }
    //     $payments[] = $payment;
    //     echo json_encode($payment);
    // }

    // if ($insert) {
    //     $getPayment = $insert['fetched'];
    //     $resp['success'] = true;
    //     echo json_encode($getPayment);

    // }else{
    //     $resp["success"] = false;
    //     echo json_encode($resp);
    // }
        // echo json_encode($resp);
    
    // } else {
    //     $response['success'] = false;
    //     echo json_encode($response);
    // }  

    // if ($user->res['fetched']->num_rows > 0) {
        //     $getUser_id = $user->res['fetched'];
        //     while ($obj = $getUser_id->fetch_assoc()) {
        //         $payment[] = $obj;
        //     }
        //     echo json_encode($payment);
        // } 
        // else {
        //     $response["message"] = "No Payment History";
        //     echo json_encode($response);
        // }


?>