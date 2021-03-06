<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function auth()
    {
        return Auth::user();
    }

    public function logout()
    {
        Auth::logout();
    }

    public function register(Request $request)
    {
        dd($request->input());
    }

    public function login(Request $request)
    {
        dd($request->input());
    }
}
