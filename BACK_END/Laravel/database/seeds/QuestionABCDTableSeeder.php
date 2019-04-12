<?php

use Illuminate\Database\Seeder;

class QuestionABCDTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questionabcd')->insert([
            ['remaji'=>'', 'image'=>'./img/Japanese_hira_A.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'wa','B'=>'ra','C'=>'za','D'=>'ma'],
            ['remaji'=>'', 'image'=>'./img/image1.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'mi','B'=>'pi','C'=>'bi','D'=>'ni'],
            ['remaji'=>'', 'image'=>'./img/image2.png','question'=>'Cách phát âm của từ là ???', 'answer'=>'B','A'=>'me','B'=>'be','C'=>'he','D'=>'ne'],
            ['remaji'=>'', 'image'=>'./img/image3.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'ho','B'=>'no','C'=>'du','D'=>'to'],
            ['remaji'=>'', 'image'=>'./img/image4.png','question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'chi','B'=>'ji','C'=>'shi','D'=>'j'],
            ['remaji'=>'', 'image'=>'./img/image5.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'sa','B'=>'ga','C'=>'ka','D'=>'a'],
            ['remaji'=>'', 'image'=>'./img/image6.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'ri','B'=>'mi','C'=>'bi','D'=>'ni'],
            ['remaji'=>'', 'image'=>'./img/image7.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'se','B'=>'ge','C'=>'ka','D'=>'e'],
            ['remaji'=>'', 'image'=>'./img/image8.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'ro','B'=>'zo','C'=>'mo','D'=>'po'],
            ['remaji'=>'', 'image'=>'./img/image9.png','question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'wa','B'=>'ra','C'=>'za','D'=>'ma'],
        ]);
    }
}
