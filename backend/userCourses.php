<?php
     // require 'classes/users.php';
     require 'getAllUser.php';
//      $_POST = json_decode(file_get_contents("php://input"));
     $title = $_POST['title'];
     $desc = $_POST['desc'];
   
     $user = new Users; 
     $fileName = $_FILES['file']['name'];
    $newName = time().$fileName;
    $moveFile = move_uploaded_file($fileName = $_FILES['file']['tmp_name'], 'uploads/'.$newName);
     $user_id = $user->get()['fetched']['user_id'];
     $insert = $user->userCourses($title, $desc,$newName, $user_id);
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