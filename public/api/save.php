<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

$date = (new DateTime)->format('YmdHis') ;
$filename = './database/' . $date. '.json';

file_put_contents($filename, file_get_contents('php://input'));