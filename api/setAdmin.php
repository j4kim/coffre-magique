<?php

$token = file_get_contents('./token.txt');

if ($token === @$_GET['token']) {
  setcookie("is_admin", "1", time()+60*60*24*365);
}

header("Location: /");
