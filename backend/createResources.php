<?php
     require 'classes/users.php';
     require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
     $type = $_POST['type'];
     $name = $_POST['name'];
     $course_id = $_POST['course_id'];
   
     $fileName = $_FILES['file']['name'];
    $newName = time().$fileName;
    $addFile = move_uploaded_file($fileName = $_FILES['file']['tmp_name'], 'uploads/'.$newName);

    $user = new Users; 
      $resp =[];
      if($addFile){
            $insert = $user->createResources($type, $newName, $name,$course_id);
            if($insert){
                  $resp['success'] = true;
            }else{
                  $resp['success'] = false;
            }
      }else{
            $resp['moveFile'] = false;
      }
        
        echo json_encode($resp);
?>