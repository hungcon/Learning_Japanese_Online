<?php

use Illuminate\Database\Seeder;

class RuleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('rule')->insert([
            ['name'=>'Hiragana'],
            ['name'=>'Katakana'],
            ['name'=>'Kanji'],
        ]);
    }
}
