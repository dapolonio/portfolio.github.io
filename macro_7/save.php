<!-- "save.php" -->


<?php


    // grab the incoming data
    $color = $_POST['color'];
    $options = $_POST['options'];
    $options2 = $_POST['options2'];
    $options3 = $_POST['options3'];

    // validate the data
    if (!$color) {
        // send them back to the form and tell them
        // to fill it out
        header("Location: quiz.php?error=forgot");
        exit();
    }

    // validate the data
    if (!$options) {
        // send them back to the form and tell them
        // to fill it out
        header("Location: quiz.php?error=forgot");
        exit();
    }

    if (!$options2) {
        // send them back to the form and tell them
        // to fill it out
        header("Location: quiz.php?error=forgot");
        exit();
    }

    if (!$options3) {
        // send them back to the form and tell them
        // to fill it out
        header("Location: quiz.php?error=forgot");
        exit();
    } 



    $tohru = 0;
    $yuki = 0;
    $kyo = 0;
    $haru = 0;
    // diagnose of question 1
    if ($color == 'pearl') {       
        $tohru += 1;
    }
    else if ($color == 'silver') {     
        $yuki += 1;
    }
    else if ($color == 'orange'){
        $kyo += 1;
    }
    else if ($color == 'blue'){
        $haru += 1;
    }

    // diagnose of question 2
    if ($options == 'a') {
        $tohru += 1;
    }
    else if ($options == 'b') {
        $yuki += 1;
    }
    else if ($options == 'c'){
        $kyo += 1;
    }
    else if ($options == 'd'){
        $haru += 1;
    }

    // diagnose of question 3
    if ($options2 == 'a1') {
        $tohru += 1;
    }
    else if ($options2 == 'b1') {
        $yuki += 1;
    }
    else if ($options2 == 'c1'){
        $kyo += 1;
    }
    else if ($options2 == 'd1'){
        $haru += 1;
    }

    // diagnose of question 4
    if ($options3 == 'a2') {
        $tohru += 1;
    }
    else if ($options3 == 'b2') {
        $yuki += 1;
    }
    else if ($options3 == 'c2'){
        $kyo += 1;
    }
    else if ($options3 == 'd2'){
        $haru += 1;
    }
    



    // save the data to a file on the server
    $path = getcwd() ;
    $filename = $path . '/data/results.txt';

    // Find the highest count
    $maxCount = max($tohru, $yuki, $kyo, $haru);

    // Assign the corresponding name to a variable
    if ($maxCount == $tohru) {
    $maxName = "Tohru!";
    } elseif ($maxCount == $yuki) {
    $maxName = "Yuki!";
    } elseif ($maxCount == $kyo) {
    $maxName = "Kyo!";
    } elseif ($maxCount == $haru) {
    $maxName = "Haru!";
    }

// Now $maxName contains the name with the highest count

    $char = "Tohru: $tohru, Yuki: $yuki, Kyo: $kyo, Haru: $haru Result: You are $maxName\n";
    
// later can change quiz.php line 33 to list $char
    file_put_contents($filename, $char, FILE_APPEND);

    // // set cookie
    setcookie('character', $char);

    setcookie('tohru', $tohru);
    setcookie('yuki', $yuki);
    setcookie('kyo', $kyo);
    setcookie('haru', $haru);


    // send them back so they can see their result
    header("Location: quiz.php");
    exit();

?>