<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$files = scandir('./database/');
$lastfile = './database/' . array_pop($files);
$data = json_decode(file_get_contents($lastfile));
$isAdmin = $_SERVER['SERVER_NAME'] === 'localhost' ? 1 : @$_COOKIE["is_admin"];

echo json_encode(compact('lastfile', 'data', 'isAdmin'));
