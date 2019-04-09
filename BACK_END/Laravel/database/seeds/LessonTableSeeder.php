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
            ['name'=>'Bài test 1'],
            ['name'=>'Bài test 2'],
        ]);
    }
}
