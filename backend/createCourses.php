<?php
     require 'getAllUser.php';
     $title = $_POST['title'];
     $desc = $_POST['desc'];
     $status = $_POST['status'];
     $amount = $_POST['amount'];
   
     $user = new Users; 
     $user_id = $user->get()['fetched']['user_id'];
     $insert = $user->createCourses($title,$desc,$status,$amount,$user_id);
        $resp =[];
        if($insert){
              $resp['success'] = true;
        }else{
              $resp['success'] = false;
        }
        echo json_encode($resp);
?>