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
        <form class="form" action="login.php" method="post">
          <?php include('errors.php'); ?>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <button name="login_user" type="submit" class="login-ssilka">login</button>
          <p class="message">
            Not registered? <a href="register.php">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  </body>
</html>
