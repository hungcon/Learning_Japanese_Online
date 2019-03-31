<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(Request $request){
        $email = $request->email;
        $password = $request->password;

        if(Auth::attempt(['email' => $email,'password' => $password])){
            $user = \App\User::where('email',$email)->first();
            return response()->json(["message" => "Login successful", "user" => $user], 200);
        }else{
            return response()->json(["error" => "Account dont exist"],200);
        }
    }

}
