<?php

namespace App\Http\Middleware;

use Closure;

class CheckApiSubmit
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
        $lesson_id = $request->lesson_id;
        $data = $request->data;
        $type = $request->type;
        $user_id = $request->user_id;

        if(!isset($user_id)){
            return response()->json(["error" => 'Something was wrong'],400);
        }
        if(!isset($type)){
            return response()->json(["error" => 'Something was wrong'],400);
        }
        else if(!isset($lesson_id)){
            return response()->json(["error" => 'Something was wrong'],400);
        }elseif (!isset($data)){
            return response()->json(["error" => 'Something was wrong'],400);
        }
        $lesson = \App\Lesson::find($lesson_id)->first();
        if(!isset($lesson) && empty($lesson)){
            return response()->json(["error" => 'Lesson is not exist'],200);
        }
        $user = \App\User::find($user_id)->first();
        if(!isset($user) && empty($user)){
            return response()->json(["error" => 'User is not exist'],200);
        }

        return $next($request);
    }
}
