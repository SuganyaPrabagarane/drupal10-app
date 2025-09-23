<?php

namespace Drupal\palindrome\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

class PalindromeController extends ControllerBase
{
    public function content()
    {
        return [

            "#markup" => '<div id="palindrome-root"></div>',

            "#attached" => [

                "library" => ["palindrome/palindrome"],

            ],

        ];
    }
}
