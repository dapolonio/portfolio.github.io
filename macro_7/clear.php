<!-- "clear.php" -->


<?php

    // delete the 'character' cookie
    setcookie('character', '', time() - 3600);

    // send them back to quiz.php
    header('Location: quiz.php');


?>