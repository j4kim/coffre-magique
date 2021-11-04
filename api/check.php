<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: OPTION,POST');

$input = file_get_contents('php://input');
$password = file_get_contents('./password.txt');

$valid = md5($input) === $password;

http_response_code($valid ? 200 : 401);
