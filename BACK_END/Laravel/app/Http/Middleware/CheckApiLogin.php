<?php

namespace App\Http\Middleware;

use Closure;

class CheckApiLogin
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
        $email = $request->email;
        $password = $request->password;

        if(!isset($email)){
            return response()->json(['message' => "Email is empty"], 400);
        }
        if(!isset($password)){
            return response()->json(['message' => "Password is empty"], 400);
        }
        return $next($request);
    }
}
