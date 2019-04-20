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
            $hightScore = DB::table('history')->max('mark');
            // Lấy id của lesson có điểm cao nhất và bài làm gần nhất 
            $test = DB::table('history')->where('id_user',$idUser)->where('mark',$hightScore)->orderBy('date','DESC')->first();
       
            $results = DB::table('history')->where('id_user',$idUser)->join('lesson','lesson.id','history.id_lesson')->select('history.id','history.id_lesson','history.mark','history.date','lesson.name')->get();

            $historyHighScore = array();
            $nameRule = \App\Lesson::find($test->id_lesson)->JoinToRule->name;

            foreach ($results as $result) {
            	if( $result->id === $test->id){
            		$historyHighScore= array(
		            	'mark'=>$result->mark,
		                'date'=>$result->date,
		                'id_lesson'=>$result->id_lesson,
		                'nameRule'=>$nameRule,
		                'nameLesson'=>$result->name
		            );
            	}
            }
          
            if($results === null){
                return response()->json(["message" => "User dont test ","historyHighScore" => "Chưa thực hiện bài test "], 200);
            }else{
                return response()->json(["message" => "User tested ","historyHighScore" => $historyHighScore], 200);
            }

        }catch (\Exception $exception){
            return response()->json(["error" => $exception->getMessage()],200);
        }
    }
}
