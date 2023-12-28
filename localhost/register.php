<?php include('server.php') ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <link rel="stylesheet" href="register.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  </head>
  <body>
    <div class="login-page">
        <form class="form" action="register.php" method="post">
          <?php include('errors.php'); ?> 
          <input name="username" type="text" placeholder="name" value="<?php echo $username; ?>"/>
          <input name="email" type="text" placeholder="email address" value="<?php echo $email; ?>"/>
          <input name="password_1" type="password" placeholder="password" />
          <input name="password_2" type="password" placeholder="repeat password" />
          <button name="reg_user" type="submit">create</button>
          <p class="message">Already registered? <a href="login.php">Sign In</a></p>
      </div>
    </div>
  </body>
</html>
