<?php
   // Get values passe from form in login.html file
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $password = $_POST[ 'password'];

    //database connection
    //and register run

    mysql_connect('localhost', 'root', 'pswd');
    mysql_select_db("CUSTOMERS");
    if($connection->connect_error) {
      die('Connection Failed : '.$connection->connect_error);
    } else {
      $sql="select * from customers where email='".$email."' limit 1";
      $result = mysql_query($sql);
      if(mysql_num_rows($result)==1) {
        $message = "You cannot use that email as it is taken. Try login.";
      } else {
        $message = "";
        $stmt = $connection->prepare("insert into registration(fname, lname, email, password)
          values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $fname, $lname, $email, $password);
        $stmt->execute();
        echo "registration successful";
        header('Location: http://' . $_SERVER['HTTP_HOST'] . '/onthegrind.html');
        $stmt->close();
        $connection->close();
      }
    }
?>
