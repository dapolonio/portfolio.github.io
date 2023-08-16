<!-- "results.php" -->


<?php

    
    // start by opening the text file
    // $filename = getcwd() . '/data/results.txt';

    $path = getcwd();
    $filename = $path . '/data/results.txt';

    $savephp = $path . 'save.php';
    include($savephp);

    $data = file_get_contents($filename);

    // $results = $path . '/results.php';
    // require $results;


    // count the number of characters
    // Count the number of submissions
    $numSubmissions = substr_count($data, "\n");
    echo "  Total number of quiz submissions: " . $numSubmissions;

    // count  number of votes for each item
    $tohruCount = substr_count($data, "Tohru!");
    $yukiCount = substr_count($data, "Yuki!");
    $kyoCount = substr_count($data, "Kyo!");
    $haruCount = substr_count($data, "Haru!");

    // calculate the % of voters
    $tohruPercent = number_format($tohruCount / $numSubmissions * 100, 2);
    $yukiPercent = number_format($yukiCount / $numSubmissions * 100, 2);
    $kyoPercent = number_format($kyoCount / $numSubmissions * 100, 2);
    $haruPercent = number_format($haruCount / $numSubmissions * 100, 2);



    // echo 'tohru variable' . $tohruCount;
    // // echo 'yuki variable' . $yuki;

  



    // Display the results as div elements
    echo "<div style='width: " . $tohruPercent . "%; background-color: pink;'>Tohru (" . $tohruPercent . "%)</div>";

    echo "<div style='width: " . $yukiPercent . "%; background-color: silver;'>Yuki (" . $yukiPercent . "%)</div>";
    echo "<div style='width: " . $kyoPercent . "%; background-color: orange;'>Kyo (" . $kyoPercent . "%)</div>";
    echo "<div style='width: " . $haruPercent . "%; background-color: teal;'>Haru (" . $haruPercent . "%)</div>";


    // provide results to the user
    $lines = explode("\n", $data);

    // loop through the lines and print on separate 
    foreach ($lines as $line) {
        echo $line . "<br>";
    }
    print '<form action="quiz.php" method="POST">
    <button type="submit">Take Again?</button>
    </form>';

?>