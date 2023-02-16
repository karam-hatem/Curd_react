<?php 
    class DB {
        private $host = "localhost";
        private $db = "react_users";
        private $username = "root";
        private $password = "";

        public $conn;
        public function getConnection(){
            $this->conn = null;
            try{
                $this->conn = new PDO("mysql:host=" . $this->host .
                 ";dbname=" . $this->db, $this->username, $this->password);
                $this->conn->exec("set names utf8");
            // echo "Database  connected: " ;

            }
            catch(PDOException $exception){
                echo "Database not connected: " . $exception->getMessage();
            }
            return $this->conn;

        }
        
    } 
    
// $nee=new Db;
// echo($nee->getConnection())
?>