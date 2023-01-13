<?php
    require "classes/users.php";
    $user = new Users;
    echo json_encode($user->get());

    // $insert=($user->get(($email)));
        // $email = $user->get()['fetched']['first_name'];
        // $insert=$user->getUser($email);
    //     $resp= [];
    //     if ($insert) {
    //         $resp['success']=true;
    //         $resp['details']=[result];
    //    }
    //    echo json_encode(); 
?>



