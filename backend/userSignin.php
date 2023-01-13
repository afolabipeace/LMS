<?php
     require 'classes/users.php';
     require_once "./vendor/autoload.php";
     $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
     $dotenv->load();

     $_POST = json_decode(file_get_contents("php://input"));
     $email = $_POST->email;
     $password = $_POST->password;

     $user = new Users;
     $insert = $user->signInUser($email,$password);
     $resp= [];
     // $resp['message'] = $_POST;
     // $resp['alert'] = $insert;
     


     if($insert){
        if($user->res['true'] == true) {
     $fetchAssoc = $user->res['fetched']->fetch_assoc();
     $fetchPass = $fetchAssoc['password'];
     $fetchEmail= $fetchAssoc['email'];
     // $verifyPass = password_verify($password, $fetchPass);
     // if ($verifyPass) {
         $details = [
             "iss" => "localhost:4200",
             "iat" => time(),
             "nbf" => time(),
             "exp" => time() + 7200,
             "info" => [
                 'email' => $email
             ]];
         $myJwt = \Firebase\JWT\JWT::encode($details, $_ENV['JWTSECRET'], 'HS256');
         $resp["token"] = $myJwt;
         $resp["email"] = $fetchEmail;
         $resp["password"] = $fetchPass;
         $resp["details"] = $fetchAssoc;
         $resp["userDetails"] = true;
     // } else {
     //     $resp["userDet"] = false;
     //     $resp["message"] = "Incorrect Password and email";
     // }
    }

     }else {
        $resp['success'] = false;
        $resp['message'] = "Invalid credentials";
     }
     echo json_encode($resp);


?>