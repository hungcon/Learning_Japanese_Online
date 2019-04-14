<?php

use Illuminate\Database\Seeder;
use App\Fill;

class FillTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $questionFill1s = \App\Question::whereBetween('id', [1, 10])->get();
        foreach ( $questionFill1s as $questionabcd) {
            Fill::create([
                'id_lesson' => 5,
                'id_question' => $questionabcd->id
            ]);
        }

        $questionFill2s = \App\Question::whereBetween('id', [11, 20])->get();
        foreach ( $questionFill2s as $questionabcd) {
            Fill::create([
                'id_lesson' => 6,
                'id_question' => $questionabcd->id
            ]);
        }

        $questionFill3s = \App\Question::whereBetween('id', [21, 30])->get();
        foreach ( $questionFill3s as $questionabcd) {
            Fill::create([
                'id_lesson' => 7,
                'id_question' => $questionabcd->id
            ]);
        }

        $questionFill4s = \App\Question::whereBetween('id', [31, 40])->get();
        foreach ( $questionFill4s as $questionabcd) {
            Fill::create([
                'id_lesson' => 8,
                'id_question' => $questionabcd->id
            ]);
        }
    }
}
