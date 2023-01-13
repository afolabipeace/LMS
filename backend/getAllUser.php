<?php
    // header("Access-Control-Allow-Origin: *");
    // header("Access-Control-Allow-Headers: Content-Type, authorization");
    // require "classes/users.php";
    // $user = new Users();
    // require_once "config.php";
    // class getuser extends Config{
    //     public function decodeJwt()
    //     {
    //         if(isset(getallheaders()['authorization'])){
    //             $token = getallheaders()['authorization'];
    //             $myJwt = trim(substr($token, 7));
    //             $check = \Firebase\JWT\JWT::decode($myJwt, $ENV['JWTSECRET'],['HS256']);
    //             $info = $check->info;
    //             if($info){
    //                 $check = "SELECT * FROM users WHERE `email` = ?";
    //                 $binder = array('s', $info->email);
    //                 $this->response["online_status"] = true;
    //                 return $this->read($check, $binder);
    //             }else{
    //                 $this->response["online_status"] = false;
    //                 return false;
    //             }
    //         }else{
    //             return false;
    //         }

    //     }
 
    // }


    // require "classes/config.php";
    require "classes/users.php";
    require "./vendor/autoload.php";
    // require "getUser.php";
    use Firebase\JWT;
    use Firebase\JWT\Key;
    $allheaders = getallheaders();
    $jwtToken = $allheaders['authorization'];
    $jwt =  trim(substr($jwtToken, 7));
    $decodeJwt = \Firebase\JWT\JWT::decode($jwt, new Key('peace', 'HS256'));
    $getEmail = $decodeJwt->info;
    $email = $getEmail->email;
    $user = new Users;
     $insert = $user->getUser($email);
     $resp= [];
     if ($insert) {
        if ($insert['fetched']) {
            $get = $insert['fetched'];
            $getAll = $get;
            // echo json_encode($getAll);
        } 
    }
        // else {
    //         $response['gotten'] = false;
    //         echo json_encode($resp);
    //     }
    // } else {
    //     $response['success'] = false;
    //     echo json_encode($resp);
    // } 
    

   

?>