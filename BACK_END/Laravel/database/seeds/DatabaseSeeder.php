<?php
use Database\seeds\UserTableSeeder;
use Database\seeds\LessonTableSeeder;
use Database\seeds\QuestionABCDTableSeeder;
use Database\seeds\ChooseTableSeeder;
use Database\seeds\QuestionTableSeeder;
use Database\seeds\FillTableSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model; 
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	Model::unguard();
        $seeders = array ('UserTableSeeder', 'RuleTableSeeder','LessonTableSeeder', 'QuestionABCDTableSeeder','ChooseTableSeeder','QuestionTableSeeder','FillTableSeeder');

        foreach ($seeders as $seeder)
        { 
           $this->call($seeder);
        }
    }
}
