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
        // Add bai cho Kanji
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

        // add bai cho kata
        $questionFill5s = \App\Question::whereBetween('id', [21, 30])->get();
        foreach ( $questionFill5s as $questionabcd) {
            Fill::create([
                'id_lesson' => 9,
                'id_question' => $questionabcd->id
            ]);
        }

        $questionFill6s = \App\Question::whereBetween('id', [31, 40])->get();
        foreach ( $questionFill6s as $questionabcd) {
            Fill::create([
                'id_lesson' => 11,
                'id_question' => $questionabcd->id
            ]);
        }

        // add bai cho N5
        $questionFill7s = \App\Question::whereBetween('id', [11, 20])->get();
        foreach ( $questionFill7s as $questionabcd) {
            Fill::create([
                'id_lesson' => 14,
                'id_question' => $questionabcd->id
            ]);
        }

        $questionFill8s = \App\Question::whereBetween('id', [21, 30])->get();
        foreach ( $questionFill8s as $questionabcd) {
            Fill::create([
                'id_lesson' => 16,
                'id_question' => $questionabcd->id
            ]);
        }

        // add bai cho N4
        $questionFill9s = \App\Question::whereBetween('id', [11, 20])->get();
        foreach ( $questionFill9s as $questionabcd) {
            Fill::create([
                'id_lesson' => 17,
                'id_question' => $questionabcd->id
            ]);
        }

        $questionFill10s = \App\Question::whereBetween('id', [21, 30])->get();
        foreach ( $questionFill10s as $questionabcd) {
            Fill::create([
                'id_lesson' => 19,
                'id_question' => $questionabcd->id
            ]);
        }
        
    }
}
