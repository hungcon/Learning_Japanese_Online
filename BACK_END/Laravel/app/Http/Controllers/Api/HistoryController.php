<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class HistoryController extends Controller
{
    public function getHistorysTest(Request $request)
    {
        try{
            $idUser = $request->id;

            $historys = DB::table('history')->where('id_user',$idUser)->join('lesson','lesson.id','history.id_lesson')->select('history.id','history.id_lesson','history.mark','history.date','lesson.name')->get();
            $dataHistorys= array();
            foreach ($historys as $history) {
                // lấy điểm , lấy tên lesson , lấy ngày kết thúc , lấy id_lesson  , lấy tên cấp độ 
                $id_lesson = $history->id_lesson;
                $nameRule = \App\Lesson::find($id_lesson)->JoinToRule->name;
                $dataHistorys[] = array(
                    'mark'=>$history->mark,
                    'date'=>$history->date,
                    'id_lesson'=>$history->id_lesson,
                    'nameRule'=>$nameRule,
                    'nameLesson'=>$history->name,
                );
            }

            if($historys === null){
                return response()->json(["message" => "User dont test ","history" => "Chưa thực hiện bài test "], 200);
            }else{
                return response()->json(["message" => "User tested ","history" =>$dataHistorys], 200);
            }
        }catch (\Exception $exception){
            return response()->json(["error" => $exception->getMessage()],200);
        }
    }
}
