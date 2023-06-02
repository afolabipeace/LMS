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
        public function signUpUser ($first_name,$last_name, $phone_no, $address, $pass, $email){
            $query = "INSERT INTO users (first_name,last_name, phone_no, `address`, `password`, email) VALUES (?, ?, ?, ?, ?, ?)";
            $binder = array ('ssssss', $first_name, $last_name, $phone_no, $address, $pass, $email);
            return $this->create($query, $binder);
        }

        public function signInUser($email){
            $query = "SELECT * FROM users WHERE `email` = ? ";
            $binder = array('s', $email);
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

        public function createResources($type,$newName, $name,$course_id){
            $query = "INSERT INTO resources (`type`,`file`,`name`, `course_id`) VALUES (?,?,?,?)";
            $binder = array('ssss', $type,$newName,$name, $course_id);
            return $this->create($query,$binder);
        }
        
        public function createCourses($title, $desc,$status,$amount,$user_id){
            $query ="INSERT INTO courses (title,`desc`, `status`,`amount`,`user_id`) VALUES (?,?,?,?,?)";
            $binder = array ('sssss', $title, $desc, $status, $amount, $user_id);
            return $this->create($query,$binder);
        }

        // public function savePayment($user_id, $course_id,$amount,$date){
        //     $query ="INSERT INTO payment (user_id,`course_id`,`amount`,`date`) VALUES (?,?,?,?)";
        //     $binder = array ('ssss', $user_id, $course_id, $amount, $date);
        //     return $this->create($query,$binder);
        // }

        public function savePayment($user_id, $course_id,$amount,$reference){
            $query ="INSERT INTO payment (user_id,`course_id`,`amount`,`reference`) VALUES (?,?,?,?) ";
            $binder = array ('ssss', $user_id, $course_id, $amount, $reference);
            return $this->create($query,$binder);
        }
     

        public function getCourses($user_id){
            $query = "SELECT * FROM courses WHERE user_id = ?";
            $binder = array('s',$user_id);
            return $this->read($query,$binder) ;;
        }

        public function getResources($course_id){
            $query = "SELECT * FROM resources JOIN courses USING (course_id) WHERE course_id = ?";
            $binder = array('s',$course_id);
            return $this->read($query,$binder) ;
        }

        public function getAllCourses(){
            $query = "SELECT * FROM courses JOIN users USING (user_id)";
            // $binder = null;
            return $this->readAll($query);
        }

        public function selectAll() {
            $query = "SELECT * FROM courses";
            return $this->readAll($query);
        }

        public function getUserPayment($course_id,$user_id){
            $query = "SELECT * FROM payment WHERE course_id = ? AND user_id = ?";
            $binder = array('ss', $course_id, $user_id);
            return $this->read($query, $binder);
        }  

        public function getOwnerPaymentHistory ($course_id){
            $query = 'SELECT * FROM payment JOIN users USING (user_id) WHERE course_id = ?';
            $binder = array('s', $course_id);
            return $this->read($query,$binder);
            // WHERE course_id = ? JOIN users USING (user_id)'
        }

        public function getPaymentHistory($user_id){
            $query = "SELECT * FROM payment JOIN users USING (user_id) JOIN courses USING (course_id) WHERE users.user_id = ?";
            $binder = array('s',$user_id);
            return $this->read($query,$binder) ;;
        }
    }

?>