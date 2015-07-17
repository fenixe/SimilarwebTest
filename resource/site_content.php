<?php
/**
 * Get content from web-site
 */
$url = 'http://';
$getVariable = 'url';

if (isset($_GET[$getVariable])) {
    $output = file_get_contents($url . urlencode($_GET[$getVariable]));
    echo $output;
}

