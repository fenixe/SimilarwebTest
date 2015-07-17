<?php
/**
 * Get content from web-site
 */
$url = 'http://';
$getVariable = 'url';

if (isset($_GET[$getVariable])) {
    $output = file_get_contents($url . urlencode($_GET[$getVariable]));
    $output = preg_replace('#<script.*</script>#ismU', '', $output);
    echo $output;
}

