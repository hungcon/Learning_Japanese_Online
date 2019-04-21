<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
class ResultController extends Controller
{
    public function getHighScoreTest(Request $request){
        try{
            $idUser = $request->id;

            $results = DB::table('result')->where('id_user',$idUser)->join('lesson','lesson.id','result.id_lesson')->get();
            
            $dataResults= array();

            foreach ($results as $result) {
                $id_lesson = $result->id_lesson;
                $nameRule = \App\Lesson::find($id_lesson)->JoinToRule->name;
                $dataResults[] = array(
                    'mark'=>$result->mark,
                    'id_lesson'=>$result->id_lesson,
                    'nameRule'=>$nameRule,
                    'nameLesson'=>$result->name
                );
            }

            if($results === null){
                return response()->json(["message" => "User dont test ","historyHighScore" => "Chưa thực hiện bài test "], 200);
            }else{
                return response()->json(["message" => "User tested ","historyHighScore" =>$dataResults], 200);
            }
        }catch (\Exception $exception){
            return response()->json(["error" => $exception->getMessage()],200);
        }
    }
}
