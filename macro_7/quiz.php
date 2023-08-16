<!-- "quiz.php" -->
<!doctype html>
<html>
    <head>
        <title>Find out which FURUBA character you are!</title>
        <style>
            #error {
                background-color: red;
                color: white;
                padding: 10px;
                font-size: 200%;
            }
            .hidden {
                display: none;
            }
            select {
                display: block;
                margin-bottom: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Quiz!</h1>

        <?php
            
            



            if ($_COOKIE['character']) {

             
                // print "<div>counter for haru " . $_COOKIE['haru'] . "</div>";

                // create array to store the counters for each char
                $counters = array(
                'tohru' => $_COOKIE['tohru'],
                'yuki' => $_COOKIE['yuki'],
                'kyo' => $_COOKIE['kyo'],
                'haru' => $_COOKIE['haru']
                );
                // var_dump ($counters);
                // get the character name with the highest counter
                $highest = array_keys($counters, max($counters));
                $highest = $highest[0];
                // var_dump ($highest);
                // set the character image based on the highest counter
      
                $count_values = array_values($counters);
                if (count(array_unique($count_values)) === 1) {
                    // all counters are equal, do not print character image
                    $unanimous = 'no';
                    $image3 = 'images/all.jpeg';
                } else {
                    $highest = array_keys($counters, max($counters))[0];
                    if ($highest == 'tohru') {
                        $image1 = 'images/tohru1.jpg';
                        $image2 = 'images/tohru2.jpeg';
                        $unanimous = 'yes';
                    } elseif ($highest == 'yuki') {
                        $image1 = 'images/yuki1.jpg';
                        $image2 = 'images/yuki2.jpg';
                        $unanimous = 'yes';
                    } elseif ($highest == 'kyo') {
                        $image1 = 'images/kyo1.jpg';
                        $image2 = 'images/kyo2.jpg';
                        $unanimous = 'yes';
                    } elseif ($highest == 'haru') {
                        $image1 = 'images/haru1.jpg';
                        $image2 = 'images/haru2.jpg';
                        $unanimous = 'yes';
                    }
                }


                // display the character information and image
                if ($unanimous == 'yes') {
                    print 'You are: '. $highest . '!';
                    echo "<div>
                        <img src='$image1' alt='picture of $highest' style='width: 40%; height: 40%;'>
                        <img src='$image2' alt='picture of $highest' style='width: 40%; height: 40%;'>
                    </div>";
                } else if ($unanimous == 'no'){
                    print 'You did not match the personality of just one character, try taking the quiz again!';
                    echo "<div>
                        <img src='$image3' alt='picture of all characters' style='width: 40%; height: 40%;'>
                    </div>";
                }
                



                print '<form action="clear.php" method="POST">
                <button type="submit">Take Again?</button>
                </form>';

                print '<form action="results.php" method="POST">
                <button type="submit">See Results</button>
                </form>';
            }

            // more else ifs that give the counter number for other pokemon

            else {

        ?>

        <?php
            if ($_GET['error'] == 'forgot') {
        ?>

            <div id="error">You forgot a value!</div>

        <?php
            }
        ?>

        
        <!-- question 1 -->
        <form action="save.php" method="POST">
            Favorite Color:
            <select name="color" id="color">
                <option value="">Select a color</option>
                <option value="pearl">pearl</option>
                <option value="silver">silver</option>
                <option value="orange">orange</option>
                <option value="blue">blue</option>
            </select>

            Personality 1:
            <select name="options" id="options">
                <option value="">If you're walking with a friend and they trip, would you most likely:</option>
                <option value="a">Get flustered and have trouble assessing the situation/what they need</option>
                <option value="b">Analyze the situation and then help them</option>
                <option value="c">Leave it to them to figure out, but after a few seconds help them </option>
                <option value="d">Pick them up, carry them, and find a bench to lay them on</option>
            </select>

            Personality 2:
            <select name="options2" id="options2">
                <option value="">When you wake up, do you:</option>
                <option value="a1">Look forward to the day ahead optimistically </option>
                <option value="b1">Think about what the day has in store</option>
                <option value="c1">Quickly get out of bed and begin your day without overthinking anything</option>
                <option value="d1">Go back to sleep</option>
            </select>

            Personality 3:
            <select name="options3" id="options3">
                <option value="">If you have a goal, what would you most likely do?</option>
                <option value="a2">Be overwhelmed but excited about pursuing it</option>
                <option value="b2">Think logicstically about how you will accomplish your goal</option>
                <option value="c2">Put it off but in the end do your best to achieve it</option>
                <option value="d2">Allow your burning passion to take you to guide you</option>
            </select>

            <input type="submit">

           
        </form>



        <?php
            }
        ?>

    </body>
</html>