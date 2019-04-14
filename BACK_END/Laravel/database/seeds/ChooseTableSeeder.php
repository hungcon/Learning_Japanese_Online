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
        $questionabcds= \App\QuestionABCD::orderBy('id','asc')->paginate(10);
        foreach ($questionabcds as $questionabcd) {
            Choose::create([
                'id_lesson' => 1,
                'id_questionabcd' => $questionabcd->id
            ]);
        }
    }
}
