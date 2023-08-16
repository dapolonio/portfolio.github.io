<!-- "quiz.php" -->
<!doctype html>
<html>
    <head>
        <title>Quiz!</title>
        <style>
            #error {
                background-color: red;
                color: white;
                padding: 10px;
                font-size: 200%;
            }
        </style>
    </head>
    <body>
        <h1>Quiz!</h1>

        <?php

            if ($_COOKIE['character']) {
                print "<div>You are " . $_COOKIE['character'] . "</div>";

                print "<a href=clear.php>Clear Results</a>";
            }

            else {

        ?>

        <?php
            if ($_GET['error'] == 'forgot') {
        ?>

            <div id="error">You forgot a value!</div>

        <?php
            }
        ?>

        

        <form action="save.php" method="POST">
            Favorite Color:
            <select name="color" id="color">
                <option value="">Select a color</option>
                <option value="y">Yellow</option>
                <option value="g">Green</option>
                <option value="b">Blue</option>
            </select>
            <input type="submit">
        </form>


        <?php
            }
        ?>

    </body>
</html>








<!-- "save.php" -->


<?php

    // grab the incoming data
    $color = $_POST['color'];

    // validate the data
    if (!$color) {
        // send them back to the form and tell them
        // to fill it out
        header("Location: quiz.php?error=forgot");
        exit();
    }


    // diagnose which character the user is
    if ($color == 'y') {
        $char = "Homer";
    }
    else if ($color == 'g') {
        $char = "Marge";
    }
    else {
        $char = "Lisa";
    }

    // save the data to a file on the server
    $filename = getcwd() . '/data/results.txt';
    file_put_contents($filename, $char . "\n", FILE_APPEND);

    // set cookie
    setcookie('character', $char);

    // send them back so they can see their result
    header("Location: quiz.php");
    exit();

?>





<!-- "results.php" -->


<?php


    // start by opening the text file
    $filename = getcwd() . '/data/results.txt';

    $data = file_get_contents($filename);
    print $data;


    // count the number of characters



    // provide results to the user



?>





<!-- "clear.php" -->


<?php

    // delete the 'character' cookie
    setcookie('character', '', time() - 3600);

    // send them back to quiz.php
    header('Location: quiz.php');


?>