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
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_A.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'wa','B'=>'ra','C'=>'ha','D'=>'ma'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_E.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'e','B'=>'pi','C'=>'bi','D'=>'ni'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HA.png','question'=>'Cách phát âm của từ là ???', 'answer'=>'B','A'=>'me','B'=>'be','C'=>'he','D'=>'ne'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HE.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'he','B'=>'no','C'=>'du','D'=>'to'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HI.png','question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'chi','B'=>'ji','C'=>'shi','D'=>'hi'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HO.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'ho','B'=>'ga','C'=>'ka','D'=>'a'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HU.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'ri','B'=>'mi','C'=>'bi','D'=>'hu'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_KE.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'ke','B'=>'ge','C'=>'ka','D'=>'e'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_KI.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'ro','B'=>'zo','C'=>'ki','D'=>'po'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_KO.png','question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'wa','B'=>'ra','C'=>'ko','D'=>'ma'],
        ]);
    }
}
