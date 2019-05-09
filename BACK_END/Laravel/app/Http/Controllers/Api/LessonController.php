<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LessonController extends Controller
{
    public function getListByLevel(Request $request){
        $level = $request->level;
        $user_id = $request->user_id;
        $user = \App\User::where('id',$user_id)->first();
        if($user->level == 0){
            $user->level = 1;
            $user->save();
        }
        switch ($level) {
            case 'beginer':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'Hiragana')->first();
                    $lists = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lists) && !empty($lists)){
                        $data = [];
                        $count = 0;
                        foreach ($lists as $value){
                            $result = \App\Result::where('id_lesson',$value['id'])->where('id_user',$user_id)->first();
                            if(isset($result->mark)){
                                $value["mark"] = $result->mark;
                                $count++;
                                $data[] = $value;
                            }else{
                                $value["mark"] = 0;
                                $data[] = $value;
                            }
                        }
                        $process= $count/count($lists);
                        $lessons[] = ['rule'=> $rule->name ,'data' => $data, 'process' => $process];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'JLPTN5':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'JLPTN5')->first();
                    $lists = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lists) && !empty($lists)){
                        $data = [];
                        $count = 0;
                        foreach ($lists as $value){
                            $result = \App\Result::where('id_lesson',$value['id'])->where('id_user',$user_id)->first();
                            if(isset($result->mark)){
                                $value["mark"] = $result->mark;
                                $count++;
                                $data[] = $value;
                            }else{
                                $value["mark"] = 0;
                                $data[] = $value;
                            }
                        }
                        $process= $count/count($lists);
                        $lessons[] = ['rule'=> $rule->name ,'data' => $data, 'process' => $process];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'JLPTN4':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'JLPTN4')->first();
                    $lists = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lists) && !empty($lists)){
                        $data = [];
                        $count = 0;
                        foreach ($lists as $value){
                            $result = \App\Result::where('id_lesson',$value['id'])->where('id_user',$user_id)->first();
                            if(isset($result->mark)){
                                $value["mark"] = $result->mark;
                                $count++;
                                $data[] = $value;
                            }else{
                                $value["mark"] = 0;
                                $data[] = $value;
                            }
                        }
                        $process= $count/count($lists);
                        $lessons[] = ['rule'=> $rule->name ,'data' => $data, 'process' => $process];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'Hiragana':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'Hiragana')->first();
                    $lists = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lists) && !empty($lists)){
                        $data = [];
                        $count = 0;
                        foreach ($lists as $value){
                            $result = \App\Result::where('id_lesson',$value['id'])->where('id_user',$user_id)->first();
                            if(isset($result->mark)){
                                $value["mark"] = $result->mark;
                                $count++;
                                $data[] = $value;
                            }else{
                                $value["mark"] = 0;
                                $data[] = $value;
                            }
                        }
                        $process= $count/count($lists);
                        $lessons[] = ['rule'=> $rule->name ,'data' => $data, 'process' => $process];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'Katakana':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'Katakana')->first();
                    $lists = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lists) && !empty($lists)){
                        $data = [];
                        $count = 0;
                        foreach ($lists as $value){
                            $result = \App\Result::where('id_lesson',$value['id'])->where('id_user',$user_id)->first();
                            if(isset($result->mark)){
                                $value["mark"] = $result->mark;
                                $count++;
                                $data[] = $value;
                            }else{
                                $value["mark"] = 0;
                                $data[] = $value;
                            }
                        }
                        $process= $count/count($lists);
                        $lessons[] = ['rule'=> $rule->name ,'data' => $data, 'process' => $process];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            case 'Kanji':
                try{
                    $lessons = array();
                    $rule = \App\Rule::where('name', '=' ,'Kanji')->first();
                    $lists = \App\Rule::find($rule->id)->JoinToLesson->toArray();
                    if(isset($lists) && !empty($lists)){
                        $data = [];
                        $count = 0;
                        foreach ($lists as $value){
                            $result = \App\Result::where('id_lesson',$value['id'])->where('id_user',$user_id)->first();
                            if(isset($result->mark)){
                                $value["mark"] = $result->mark;
                                $count++;
                                $data[] = $value;
                            }else{
                                $value["mark"] = 0;
                                $data[] = $value;
                            }
                        }
                        $process= $count/count($lists);
                        $lessons[] = ['rule'=> $rule->name ,'data' => $data, 'process' => $process];
                    }
                    return response()->json(["lessons" => $lessons[0]],200);
                }catch (\Exception $exception){
                    return response()->json(["error" => $exception->getMessage()],200);
                }
            default:
                return response()->json(["error" => "Something was wrong"],200);
        }
    }
    public function getTypeOfLessonAndListQuestion(Request $request){
        $lesson_id = $request->lesson_id;
        try{
            $rule = \App\Lesson::find($lesson_id)->JoinToRule->toArray();
            $questionsFill = \App\Lesson::find($lesson_id)->JoinToQuestion->toArray();
            if(isset($questionsFill) && !empty($questionsFill)){
                $values = [];
                foreach ($questionsFill as $question){
                    $data = [
                        'id' => $question['id'],
                        'questionContent' => $question['question'],
                        'option' => $question['word'],
                        'questionImagePath' => $question['image']
                    ];
                    $values[] = $data;
                }
                return response()->json(["type" => "Fill", "lesson_id" => $lesson_id, "rule" => $rule['name'] ,"questions" => $values],200);
            }else{
                $questionsABCD = \App\Lesson::find($lesson_id)->JoinToQuestionABCD->toArray();
                if(isset($questionsABCD) && !empty($questionsABCD)){
                    $values = [];
                    foreach ($questionsABCD as $question){
                        $data = [
                            'id' => $question['id'],
                            'questionImagePath' => $question['image'],
                            'questionContent' => $question['question'],
                            'answerA' => $question['A'],
                            'answerB' => $question['B'],
                            'answerC' => $question['C'],
                            'answerD' => $question['D'],
                        ];
                        $values[] = $data;
                    }
                    return response()->json(["type" => "ABCD", "lesson_id" => $lesson_id, "rule" => $rule['name'], "questions" => $values],200);
                }else{
                    return response()->json(["error" => 'This lesson dont have questions'],200);
                }
            }
        }catch (\Exception $exception){
            return response()->json(["error" => $exception->getMessage()],200);
        }
    }

    public function submitTest(Request $request){
        $lesson_id = $request->lesson_id;
        $data = $request->data;
        $type = $request->type;
        $user_id = $request->user_id;

        try{
            $rule = \App\Lesson::find($lesson_id)->JoinToRule->toArray();
            switch ($type){
                case 'ABCD':
                    $mark = 0;
                    $questions = \App\Lesson::find($lesson_id)->JoinToQuestionABCD->toArray();
                    $result = \App\Result::where('id_lesson', $lesson_id)->where('id_user', $user_id)->first();
                    if(empty($data)){
                        $history = new \App\History;
                        $history->id_lesson = $lesson_id;
                        $history->id_user = $user_id;
                        $history->mark = $mark;
                        $history->date = date('Y-m-d H:i:s');
                        $history->save();

                        if(empty($result)){
                           $record = new \App\Result;
                           $record->id_lesson = $lesson_id;
                           $record->id_user = $user_id;
                           $record->mark = $mark;
                           $record->save();
                        }
                        return response()->json(["mark" => $mark, "rule" => $rule['name']],200);
                    }
                    if(isset($questions) && !empty($questions)){
                        foreach ($data as $key => $value){
                            if($value['answerData'] == $questions[$key]['answer']){
                                $mark++;
                            }
                        }

                        $history = new \App\History;
                        $history->id_lesson = $lesson_id;
                        $history->id_user = $user_id;
                        $history->mark = $mark;
                        $history->date = date('Y-m-d H:i:s');
                        $history->save();

                        if(empty($result)){
                            $record = new \App\Result;
                            $record->id_lesson = $lesson_id;
                            $record->id_user = $user_id;
                            $record->mark = $mark;
                            $record->save();
                        }else{
                            if($result->mark < $mark){
                                $result->mark = $mark;
                                $result->save();
                            }
                        }
                        return response()->json(["mark" => $mark, "rule" => $rule['name']],200);
                    }else{
                        return response()->json(["error" => 'Something was wrong'],200);
                    }
                case 'Fill':
                    $mark = 0;
                    $questions = \App\Lesson::find($lesson_id)->JoinToQuestion->toArray();
                    $result = \App\Result::where('id_lesson', $lesson_id)->where('id_user', $user_id)->first();
                    if(empty($data)){
                        $history = new \App\History;
                        $history->id_lesson = $lesson_id;
                        $history->id_user = $user_id;
                        $history->mark = $mark;
                        $history->date = date('Y-m-d H:i:s');
                        $history->save();

                        if(empty($result)){
                            $record = new \App\Result;
                            $record->id_lesson = $lesson_id;
                            $record->id_user = $user_id;
                            $record->mark = $mark;
                            $record->save();
                        }
                        return response()->json(["mark" => $mark, "rule" => $rule['name']],200);
                    }
                    if(isset($questions) && !empty($questions)){
                        foreach ($data as $key => $value){
                            if($value['choose'] == $questions[$key]['answer']){
                                $mark++;
                            }
                        }

                        $history = new \App\History;
                        $history->id_lesson = $lesson_id;
                        $history->id_user = $user_id;
                        $history->mark = $mark;
                        $history->date = date('Y-m-d H:i:s');
                        $history->save();

                        if(empty($result)){
                            $record = new \App\Result;
                            $record->id_lesson = $lesson_id;
                            $record->id_user = $user_id;
                            $record->mark = $mark;
                            $record->save();
                        }else{
                            if($result->mark < $mark){
                                $result->mark = $mark;
                                $result->save();
                            }
                        }
                        return response()->json(["mark" => $mark, "rule" => $rule['name']],200);
                    }else{
                        return response()->json(["error" => 'Something was wrong'],200);
                    }
                default:
                    return response()->json(["error" => 'Type is incorrect format'],200);
            }
        }catch (\Exception $exception){
            return response()->json(["error" => $exception->getMessage()],200);
        }

    }
}
