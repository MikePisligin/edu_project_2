<?php

    $searchObjects = array();

    $link = mysqli_connect('127.0.0.1:3306','root','124356+A','estateobject');

    $buf = file_get_contents('php://input');
    $buf = json_decode($buf, true);

    /* Поисковые запросы */
    
    $queryCity = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE city='".$buf['citySearch']."' AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryGuest = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE countSleepPlace<='".$buf['countGuest']."' AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryFloor = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE stage<='".$buf['floorSearch']."' AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryAnimals = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE animals=".$buf['animalsSearch']."  AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryCityGuest = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE city='".$buf['citySearch']."' AND countSleepPlace<=".$buf['countGuest']."  AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryCityFloor = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE city='".$buf['citySearch']."' AND stage<=".$buf['floorSearch']."  AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryCityAnimals = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE city='".$buf['citySearch']."' AND animals=".$buf['animalsSearch']."  AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryGuestFloor = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE stage<='".$buf['floorSearch']."' AND countSleepPlace<=".$buf['countGuest']."  AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryGuestAnimals = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE animals=".$buf['animalsSearch']." AND countSleepPlace<=".$buf['countGuest']."  AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryFloorAnimals = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE stage<='".$buf['floorSearch']."' AND animals=".$buf['animalsSearch']." AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryCityGuestFloor = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE city='".$buf['citySearch']."' AND countSleepPlace<=".$buf['countGuest']." AND stage<=".$buf['floorSearch']." AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryCityFloorAnimals = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE city='".$buf['citySearch']."' AND stage<='".$buf['floorSearch']."' AND animals=".$buf['animalsSearch']." AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];
    $queryGuestFloorAnimals = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE stage<='".$buf['floorSearch']."' AND countSleepPlace<=".$buf['countGuest']." AND animals=".$buf['animalsSearch']." AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];    
    $queryAll = "SELECT AbbrNameObj,city,address,countRoom,countSleepPlace,stage,price,image,description,documents FROM estateobject.objects WHERE city='".$buf['citySearch']."' AND countSleepPlace<=".$buf['countGuest']." AND stage<='".$buf['floorSearch']."' AND animals=".$buf['animalsSearch']." AND price>=".$buf["priceSearch"][0]." AND price<=".$buf["priceSearch"][1];

    /*********************/

    if(($buf['citySearch'] == "") && ($buf['countGuest'] == "") && ($buf['floorSearch'] == "") && ($buf['animalsSearch'] == 0)) {
        $sql = $queryAnimals;
    } else if(($buf['countGuest'] == "") && ($buf['floorSearch'] == "") && ($buf['animalsSearch'] == 0)) {
        $sql = $queryCity;
    } else if(($buf['citySearch'] == "") && ($buf['floorSearch'] == "") && ($buf['animalsSearch'] == 0)) {
        $sql = $queryGuest;
    } else if(($buf['citySearch'] == "") && ($buf['countGuest'] == "") && ($buf['animalsSearch'] == 0)) {
        $sql = $queryFloor;
    } else if(($buf['citySearch'] == "") && ($buf['countGuest'] == "") && ($buf['floorSearch'] == "")) {
        $sql = $queryAnimals;
    } else if(($buf['floorSearch'] == "") && ($buf['animalsSearch'] == 0)) {
        $sql = $queryCityGuest;
    } else if(($buf['countGuest'] == "") && ($buf['animalsSearch'] == 0)) {
        $sql = $queryCityFloor;
    } else if(($buf['countGuest'] == "") && ($buf['floorSearch'] == "") && ($buf['animalsSearch'] == 1)) {
        $sql = $queryCityAnimals;
    } else if(($buf['citySearch'] == "") && ($buf['animalsSearch'] == 0)) {
        $sql = $queryGuestFloor;
    } else if(($buf['citySearch'] == "") && ($buf['floorSearch'] == "") && ($buf['animalsSearch'] == 1)) {
        $sql = $queryGuestAnimals;
    } else if(($buf['citySearch'] == "") && ($buf['countGuest'] == "") && ($buf['animalsSearch'] == 1)) {
        $sql = $queryFloorAnimals;
    } else if(($buf['animalsSearch'] == 0)) {
        $sql = $queryCityGuestFloor;
    } else if($buf['countGuest'] == "") {
        $sql = $queryCityFloorAnimals;
    } else if($buf['citySearch'] == "") {
        $sql = $queryGuestFloorAnimals;
    } else {
        $sql = $queryAll;
    }
    
    $res = mysqli_query($link, $sql);
    while($row = mysqli_fetch_assoc($res)) {
        array_push($searchObjects, $row);
    }

    echo json_encode($searchObjects);

?>