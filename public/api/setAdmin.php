<?php

setcookie("is_admin", "1", time()+60*60*24*365);

header("Location: /");
