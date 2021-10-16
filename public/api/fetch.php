<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$folder = './database/';
$files = scandir($folder);
echo file_get_contents($folder . array_pop($files));
