<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class HistoryController extends Controller
{
    public function getHistorysTest(Request $request)
    {
    	$idUser = $request->id;

    	$historys = DB::table('history')->where('id_user',$idUser)->join('lesson','lesson.id','history.id_lesson')->select('history.id','history.id_lesson','history.mark','history.date','lesson.name')->get();

    	if($historys === null){
    		return response()->json(["message" => "User dont test ","history" => "Chưa thực hiện bài test "], 200);
    	}else{
    		return response()->json(["message" => "User tested ","history" =>$historys], 200);
    	}
    }
}
