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
            ['rule_id'=>1,'name'=>'Lesson 1'],
            ['rule_id'=>1,'name'=>'Lesson 2'],
            ['rule_id'=>1,'name'=>'Lesson 3'],
            ['rule_id'=>1,'name'=>'Lesson 4'],
            ['rule_id'=>3,'name'=>'Lesson 1'],
            ['rule_id'=>3,'name'=>'Lesson 2'],
            ['rule_id'=>3,'name'=>'Lesson 3'],
            ['rule_id'=>3,'name'=>'Lesson 4'],
            ['rule_id'=>2,'name'=>'Lesson 1'],
            ['rule_id'=>2,'name'=>'Lesson 2'],
            ['rule_id'=>2,'name'=>'Lesson 3'],
            ['rule_id'=>2,'name'=>'Lesson 4'],
            ['rule_id'=>4,'name'=>'Lesson 1'],
            ['rule_id'=>4,'name'=>'Lesson 2'],
            ['rule_id'=>4,'name'=>'Lesson 3'],
            ['rule_id'=>4,'name'=>'Lesson 4'],
            ['rule_id'=>5,'name'=>'Lesson 1'],
            ['rule_id'=>5,'name'=>'Lesson 2'],
            ['rule_id'=>5,'name'=>'Lesson 3'],
            ['rule_id'=>5,'name'=>'Lesson 4'],
        ]);
    }
}
