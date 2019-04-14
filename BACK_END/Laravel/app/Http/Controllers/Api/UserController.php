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

    public function create(Request $request){
        $firstName = $request->firstname;
        $lastName = $request->lastname;
        $email = $request->email;
        $password = $request->password;
        $checkEmail = \App\User::where('email',$email)->first();
        if($checkEmail != null){
            return response()->json(["error" => "Email has been used by someone"], 200);
        }else{
            try{
                $user = new \App\User();
                $user->name = $firstName." ".$lastName;
                $user->email = $email;
                $user->password = bcrypt($password);
                $user->save();
                return response()->json(["message" => "Create account successful","user" => $user], 200);
            }catch (\Exception $e){
                return response()->json(["error" => "Something was wrong"], 400);
            }
        }
    }
}
