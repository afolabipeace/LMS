<?php
     // require 'classes/users.php';
     require 'getAllUser.php';
//      $_POST = json_decode(file_get_contents("php://input"));
     $title = $_POST['title'];
     $desc = $_POST['desc'];
     $status = $_POST['status'];
     $amount = $_POST['amount'];
   
     $user = new Users; 
     $user_id = $user->get()['fetched']['user_id'];
//      $insert = $user->userCourses($title, $desc,$newName, $user_id);
     $insert = $user->createCourses($title,$desc,$status,$amount,$user_id);
        $resp =[];
        if($insert){
              $resp['success'] = true;
        }else{
              $resp['success'] = false;
        }
        echo json_encode($resp);
//       $display = $user->getUserCourses($user_id);
//       $res= [];
//      if ($display) {
//         if ($display['fetched']) {
//             $get = $display['fetched'];
//             $getAll = $get;
//             echo json_encode($getAll);
//         } 
//     }
// $user_id = $user->get()['fetched']['user_id'];
?>