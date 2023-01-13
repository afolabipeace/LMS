<?php
    require "./vendor/autoload.php";
    // require "getUser.php";
    use Firebase\JWT;
    use Firebase\JWT\Key;
    require_once "config.php";
    class Courses extends Config {
        
        public function __construct () {
            Parent::__construct();
        }

        public function get (){
            $allheaders = getallheaders();
            $jwtToken = $allheaders['authorization'];
            $jwt =  trim(substr($jwtToken, 7));
            try {
            $decodeJwt = \Firebase\JWT\JWT::decode($jwt, new Key('peace', 'HS256'));
            if($decodeJwt){
                    $getEmail = $decodeJwt->info;
                    $email = $getEmail->email;
                    return  $this->getUser($email);  
                }
            } catch (\Throwable $th) {
                echo json_encode([
                    "success"=>false,
                    "unauthorized"=>true
                ]);
            }
        }

        public function createCourses($title, $desc,$newName,$user_id){
            $query = "INSERT INTO courses (title,`desc`,`file`,`user_id`) VALUES (?,?,?,?)";
            $binder = array ('ssss', $title, $desc,$newName, $user_id);
            return $this->create($query,$binder);
        }

        public function getCourses($user_id){
            $query = "SELECT * FROM courses WHERE user_id = ?";
            $binder = array('s',$user_id);
            return $this->read($query,$binder);
            // return $this->selectSome($query, $binder);
        }


    }
?>