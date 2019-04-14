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
            // 10 câu hỏi trong test 1
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_A.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'a','B'=>'ra','C'=>'ha','D'=>'ma'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_E.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'e','B'=>'pi','C'=>'bi','D'=>'ni'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HA.png','question'=>'Cách phát âm của từ là ???', 'answer'=>'B','A'=>'me','B'=>'ha','C'=>'he','D'=>'ne'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HE.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'he','B'=>'no','C'=>'du','D'=>'to'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HI.png','question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'chi','B'=>'ji','C'=>'shi','D'=>'hi'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HO.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'ho','B'=>'ga','C'=>'ka','D'=>'a'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_HU.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'ri','B'=>'mi','C'=>'bi','D'=>'hu'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_KE.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'ke','B'=>'ge','C'=>'ka','D'=>'e'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_KI.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'ro','B'=>'zo','C'=>'ki','D'=>'po'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_KO.png','question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'wa','B'=>'ra','C'=>'ko','D'=>'ma'],
            // 10 câu hỏi trong test 2
              ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_KO.png','question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'wa','B'=>'ko','C'=>'ha','D'=>'ma'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_KU.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'ku','B'=>'pi','C'=>'bi','D'=>'ni'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_MA.png','question'=>'Cách phát âm của từ là ???', 'answer'=>'C','A'=>'me','B'=>'be','C'=>'ma','D'=>'ne'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_ME.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'he','B'=>'no','C'=>'me','D'=>'to'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_MI.png','question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'chi','B'=>'mi','C'=>'shi','D'=>'hi'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_MO.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'ho','B'=>'ga','C'=>'ka','D'=>'mo'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_MU.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'mu','B'=>'mi','C'=>'bi','D'=>'hu'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_N.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'n','B'=>'ge','C'=>'ka','D'=>'e'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_NA.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'ro','B'=>'na','C'=>'ki','D'=>'po'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_NE.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'ne','B'=>'ra','C'=>'ko','D'=>'ma'],
            // 10 câu hỏi trong test 3 
              ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_NI.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'ni','B'=>'ra','C'=>'ha','D'=>'ma'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_NO.png','question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'e','B'=>'no','C'=>'bi','D'=>'ni'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_NU.png','question'=>'Cách phát âm của từ là ???', 'answer'=>'C','A'=>'me','B'=>'be','C'=>'nu','D'=>'ne'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_O.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'he','B'=>'no','C'=>'o','D'=>'to'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_RA.png','question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'chi','B'=>'ra','C'=>'shi','D'=>'hi'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_RE.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'re','B'=>'ga','C'=>'ka','D'=>'a'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_RI.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'ri','B'=>'mi','C'=>'bi','D'=>'ri'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_RO.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'ro','B'=>'ge','C'=>'ka','D'=>'e'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_RU.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'ro','B'=>'zo','C'=>'ru','D'=>'po'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_SA.png','question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'wa','B'=>'ra','C'=>'ko','D'=>'sa'],
            // 10 câu hỏi trong test 4
              ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_SE.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'se','B'=>'ra','C'=>'ha','D'=>'ma'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_SHI.png','question'=>'Cách phát âm của từ là ???','answer'=>'B','A'=>'e','B'=>'shi','C'=>'bi','D'=>'ni'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_SO.png','question'=>'Cách phát âm của từ là ???', 'answer'=>'A','A'=>'so','B'=>'be','C'=>'he','D'=>'ne'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_SU.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'he','B'=>'no','C'=>'su','D'=>'to'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_TA.png','question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'chi','B'=>'ji','C'=>'shi','D'=>'ta'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_TE.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'ho','B'=>'ga','C'=>'te','D'=>'a'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_TI.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'ri','B'=>'mi','C'=>'ti','D'=>'hu'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_TO.png','question'=>'Cách phát âm của từ là ???','answer'=>'A','A'=>'to','B'=>'ge','C'=>'ka','D'=>'e'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_TSU.png', 'question'=>'Cách phát âm của từ là ???','answer'=>'C','A'=>'ro','B'=>'zo','C'=>'tsu','D'=>'po'],
            ['remaji'=>'', 'image'=>'/img/hiragana/Japanese_Hiragana_kyokashotai_WA.png','question'=>'Cách phát âm của từ là ???','answer'=>'D','A'=>'wa','B'=>'ra','C'=>'ko','D'=>'wa'],
        ]);
    }
}
