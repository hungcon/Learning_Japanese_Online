<?php

use Illuminate\Database\Seeder;
use App\Choose;
class ChooseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // $questionabcds = array();
        // for($i=10;$i<=40;($i+1)*10){
        //     $questionabcds[] = \App\QuestionABC::whereBetween('id', [$i-9, $i])->get();
        // }

        // for($j=0;$j<count($questionabcds);$j++){
        //     foreach ($questionabcds[$j] as $questionabcd) {
        //         Choose::create([
        //             'id_lesson' => $j+1,
        //             'id_questionabcd' => $questionabcd->id
        //         ]);
        //     }
        // }
        
        // Add bai cho beginer
        $questionabcd1s = \App\QuestionABCD::whereBetween('id', [1, 10])->get();
        foreach ($questionabcd1s as $questionabcd) {
            Choose::create([
                'id_lesson' => 1,
                'id_questionabcd' => $questionabcd->id
            ]);
        }

        $questionabcd2s = \App\QuestionABCD::whereBetween('id', [11, 20])->get();
        foreach ($questionabcd2s as $questionabcd) {
            Choose::create([
                'id_lesson' => 2,
                'id_questionabcd' => $questionabcd->id
            ]);
        }

        $questionabcd3s = \App\QuestionABCD::whereBetween('id', [21, 30])->get();
        foreach ($questionabcd3s as $questionabcd) {
            Choose::create([
                'id_lesson' => 3,
                'id_questionabcd' => $questionabcd->id
            ]);
        }

        $questionabcd4s = \App\QuestionABCD::whereBetween('id', [31, 40])->get();
        foreach ($questionabcd4s as $questionabcd) {
            Choose::create([
                'id_lesson' => 4,
                'id_questionabcd' => $questionabcd->id
            ]);
        }

        // Add bai cho Katakana 
        $questionabcd5s = \App\QuestionABCD::whereBetween('id', [11, 20])->get();
        foreach ($questionabcd5s as $questionabcd) {
            Choose::create([
                'id_lesson' => 10,
                'id_questionabcd' => $questionabcd->id
            ]);
        }

        $questionabcd6s = \App\QuestionABCD::whereBetween('id', [1, 10])->get();
        foreach ($questionabcd6s as $questionabcd) {
            Choose::create([
                'id_lesson' => 12,
                'id_questionabcd' => $questionabcd->id
            ]);
        }


        // Add bai cho N5 
        $questionabcd7s = \App\QuestionABCD::whereBetween('id', [21, 30])->get();
        foreach ($questionabcd7s as $questionabcd) {
            Choose::create([
                'id_lesson' => 13,
                'id_questionabcd' => $questionabcd->id
            ]);
        }

        $questionabcd8s = \App\QuestionABCD::whereBetween('id', [31, 40])->get();
        foreach ($questionabcd8s as $questionabcd) {
            Choose::create([
                'id_lesson' => 15,
                'id_questionabcd' => $questionabcd->id
            ]);
        }


        // Add bai cho N4
        $questionabcd9s = \App\QuestionABCD::whereBetween('id', [21, 30])->get();
        foreach ($questionabcd9s as $questionabcd) {
            Choose::create([
                'id_lesson' => 19,
                'id_questionabcd' => $questionabcd->id
            ]);
        }

        $questionabcd10s = \App\QuestionABCD::whereBetween('id', [31, 40])->get();
        foreach ($questionabcd10s as $questionabcd) {
            Choose::create([
                'id_lesson' => 20,
                'id_questionabcd' => $questionabcd->id
            ]);
        }  
        
    }
}
