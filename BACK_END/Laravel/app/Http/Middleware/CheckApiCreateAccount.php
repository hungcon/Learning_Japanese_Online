<?php

namespace App\Http\Middleware;

use Closure;

class CheckApiCreateAccount
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $firstName = $request->firstname;
        $lastName = $request->lastname;
        $email = $request->email;
        $password = $request->password;
        $repeat = $request->repeat;

        if(!isset($firstName)){
            return response()->json(['error' => "FirstName is empty"], 200);
        }

        if(!isset($lastName)){
            return response()->json(['error' => "LastName is empty"], 200);
        }

        if(!isset($email)){
            return response()->json(['error' => "Email is empty"], 200);
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return response()->json(['error' => "Invalid email format"], 200);
        }
        if (strlen($password) <= 8) {
            return response()->json(['error' => "Your Password Must Contain At Least 8 Characters"], 200);
        }
        if(!preg_match("#[0-9]+#",$password)) {
            return response()->json(['error' => "Your Password Must Contain At Least 1 Number"], 200);
        }
        if(!preg_match("#[A-Z]+#",$password)) {
            return response()->json(['error' => "Your Password Must Contain At Least 1 Capital Letter"], 200);

        }
        if(!preg_match("#[a-z]+#",$password)) {
            return response()->json(['error' => "Your Password Must Contain At Least 1 Lowercase Letter"], 200);
        }
        if($repeat != $password){
            return response()->json(['error' => "Please Check You've Entered Or Confirmed Your Password"], 200);
        }

        return $next($request);
    }
}
