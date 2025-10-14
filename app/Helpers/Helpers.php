<?php

namespace App\Helpers;

if (! function_exists('flashMessage')) {
    /**
     * Set flash message for session (type: success, error, info, warning).
     *
     * @param string $message
     * @param string $type
     * @return void
     */
    function flashMessage(string $message, string $type = 'success'): void
    {
        session()->flash('message', $message);
        session()->flash('type', $type);
    }
}
