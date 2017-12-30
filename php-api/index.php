<?php

header('Access-Control-Allow-Origin: *');
header('Content-type:application/json;charset=utf-8');

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

$raw_text = null;

if (isset($_POST["raw-text-content"])) {
  $raw_text = $_POST["raw-text-content"];

  $client = new Client();

    try {

        $response = $client->request('POST', 'https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version='.date('Y-m-d')."&consumption_preferences=true", [
            'auth' => ['REDACTED', 'REDACTED'],
            'headers'  => ['content-type' => 'text/plain', 'Accept' => 'application/json'],
            'body'  => $raw_text
        ]);

        echo $response->getBody()->getContents();

    } catch (RequestException $e) {

        $response = $e->getResponse();

        echo $response->getBody()->getContents();

    }
}


