<?php
    require 'classes/users.php';
    $_POST = json_decode(file_get_contents("php://input"));
    $first_name = $_POST->first_name;
    $last_name = $_POST->last_name;
    $phone_no = $_POST->phone_no;
    $address = $_POST->address;
    $password = $_POST->password;
    $email = $_POST->email;
    $pass = password_hash($password, PASSWORD_DEFAULT);

    $user = new Users;
    $insert = $user->signUpUser($first_name, $last_name, $phone_no, $address, $pass, $email);
    $resp =[];
    if($insert){
        $resp['success'] = true;
    }else{
        $resp['success'] = false;
    }

    echo json_encode($resp);

?>