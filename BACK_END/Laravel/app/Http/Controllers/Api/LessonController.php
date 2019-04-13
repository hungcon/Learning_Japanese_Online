<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LessonController extends Controller
{
    public function getListByLevel(Request $request){
        $level = $request->level;
        switch ($level) {
            case 'beginer':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'Hiragana')->first();
                    $lesson = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lesson) && !empty($lesson)){
                        $lessons[] = ['name'=> $rule->name ,'data' => $lesson];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'JLPTN5':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'N5')->first();
                        $lesson = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                        if(isset($lesson) && !empty($lesson)){
                            $lessons[] = ['name'=> $rule->name ,'data' => $lesson];
                        }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'JLPTN4':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'N4')->first();
                    $lesson = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lesson) && !empty($lesson)){
                        $lessons[] = ['name'=> $rule->name ,'data' => $lesson];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'Hiragana':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'Hiragana')->first();
                    $lesson = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lesson) && !empty($lesson)){
                        $lessons[] = ['name'=> $rule->name ,'data' => $lesson];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'Katakana':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'Katakana')->first();
                    $lesson = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lesson) && !empty($lesson)){
                        $lessons[] = ['name'=> $rule->name ,'data' => $lesson];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'Kanji':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'Kanji')->first();
                    $lesson = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lesson) && !empty($lesson)){
                        $lessons[] = ['name'=> $rule->name ,'data' => $lesson];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            default:
                return response()->json(["error" => "Something was wrong"],200);
        }

    }
}
