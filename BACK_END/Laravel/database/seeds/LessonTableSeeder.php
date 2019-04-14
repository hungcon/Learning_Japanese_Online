<?php

use Illuminate\Database\Seeder;

class LessonTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Lesson')->insert([
            ['rule_id'=>1,'name'=>'Bài test 1'],
            ['rule_id'=>1,'name'=>'Bài test 2'],
            ['rule_id'=>3,'name'=>'Bài test 3'],
            ['rule_id'=>4,'name'=>'Bài test 4'],
            ['rule_id'=>5,'name'=>'Bài test 5'],
            ['rule_id'=>2,'name'=>'Bài test 6'],
        ]);
    }
}
