<?php
    require "./vendor/autoload.php";
    // require "getUser.php";
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/..');
     $dotenv->load();
    use Firebase\JWT;
    use Firebase\JWT\Key;
    require_once "config.php";
    class Users extends Config {
        
        public function __construct () {
            Parent::__construct();
        }
        public function getAllUsers (){
            $query = "SELECT * FROM users";
            $binder = null;
            return $this->Read($query, $binder);
        }
        public function signUpUser ($first_name,$last_name, $phone_no, $address, $password, $email){
            $query = "INSERT INTO users (first_name,last_name, phone_no, `address`, `password`, email) VALUES (?, ?, ?, ?, ?, ?)";
            $binder = array ('ssssss', $first_name, $last_name, $phone_no, $address, $password, $email);
            // $query2 = "INSERT INTO cart (`user_id`) VALUE (?)";
            // $binder2 = array ('s', $user_id);
            return $this->create($query, $binder);
        }

        public function signInUser($email,$password){
            $query = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
            $binder = array('ss', $email,$password);
            return $this->read($query,$binder);
            // $user = $this->read($query,$binder)
            // ->fetch_assoc();
            // $res=[];
            // if($user){
            //     $res['true']=true;
            //     $res['fetched']=$user;
            // }else{
            //     $res['true']=false;
            // }
            // return $res;
        }

        // public function signInUser ($email,$password){
        //     $query = "SELECT * FROM users";
        //     $binder = null;
        //     return $this->read($query, $binder);
        // }

        // public function signInUser ($email,$password){
        //     $query = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
        //     $binder = array('ss', $email,$password);
        //     return $this->read($query, $binder);
        // }

        public function get (){
            $allheaders = getallheaders();
            $jwtToken = $allheaders['authorization'];
            $jwt =  trim(substr($jwtToken, 7));
            try {
            $decodeJwt = \Firebase\JWT\JWT::decode($jwt, new Key($_ENV['JWTSECRET'], 'HS256'));
            if($decodeJwt){
                    $getEmail = $decodeJwt->info;
                    $email = $getEmail->email;
                    return  $this->getUser($email);  
                }
            } catch (\Throwable $th) {
            return[
                    "success"=>false,
                    "unauthorized"=>true
                ];
            }
            
        
        }
        public function getUser ($email){
            $query = "SELECT * from users WHERE `email`= ?";
            $binder = array('s', $email);
            $user= $this->read($query,$binder)['fetched']->fetch_assoc();
            $res=[];
            if($user){
                $res['true']=true;
                $res['fetched']=$user;
            }else{
                $res['true']=false;
            }
            return ($res);
        }

        public function userCourses($title, $desc,$newName,$user_id){
            $query = "INSERT INTO courses (title,`desc`,`file`,`user_id`) VALUES (?,?,?,?)";
            $binder = array ('ssss', $title, $desc,$newName, $user_id);
            return $this->create($query,$binder);
        }

        public function getCourses($user_id){
            $query = "SELECT * FROM courses WHERE user_id = ?";
            $binder = array('s',$user_id);
            return $this->read($query,$binder) ;
            // $course= $this->read($query,$binder)->fetch_assoc();
            // $res=[];
            // if($course){
            //     $res['true']=true;
            //     $res['fetched']=$course;
            // }else{
            //     $res['true']=false;
            // }
            // return ($res);
        }

        public function getAllCourses(){
            $query = "SELECT * FROM courses JOIN users USING (user_id)";
            $binder = null;
            return $this->read($query,$binder);
        }
    }
?>