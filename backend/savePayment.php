<?php
session_start();

        require 'classes/users.php';
        $course_id = $_POST['course_id'];
        $amount = $_POST['amount'];
        $reference = $_POST['reference'];

        $user = new Users; 
        $user_id = $user->get()['fetched']['user_id'];
        $insert = $user->savePayment($user_id,$course_id,$amount,$reference);
        $resp =[];
        if($insert){
                $resp['success'] = true;
        }else{
                $resp['success'] = false;
        }
        echo json_encode($resp);

?>