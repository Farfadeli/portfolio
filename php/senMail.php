<?php
    $entete  = 'MIME-Version: 1.0' . "\r\n";
    $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $entete .= 'From: ' . $_POST['mail'];

    $retour = mail('ndaunac@gmail.com', $_POST["object"], $_POST['content'], $entete);

    header('Location: https://ndaunac.tech');
?>