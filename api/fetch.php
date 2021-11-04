<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$files = scandir('./database/');
$lastfile = './database/' . array_pop($files);
$data = json_decode(file_get_contents($lastfile));

echo json_encode($data);
