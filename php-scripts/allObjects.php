<?php

    $buf = array();

    $link = mysqli_connect('127.0.0.1:3306','root','124356+A','estateobject');

    $sql = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM objects";
    $res = mysqli_query($link, $sql);

    while($row = mysqli_fetch_assoc($res)) {
        array_push($buf, $row);
    }

    echo json_encode($buf);

?>