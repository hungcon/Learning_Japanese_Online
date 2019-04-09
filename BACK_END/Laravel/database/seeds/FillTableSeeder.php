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
        $questionFills= \App\Question::orderBy('id','asc')->paginate(10);
        foreach ($questionFills as $questionFill) {
            Fill::create([
                'id_lesson' => 2,
                'id_question' => $questionFill->id
            ]);
        }
    }
}
