<?php

use Illuminate\Database\Seeder;

class QuestionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('question')->insert([
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう', 'word'=>'こ+れか+す+りが+おせ', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'これからおせます-さようなら-こら-こそよ', 'word'=>'こ+れか+す', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'こわになります-さよ-こちら-こそよおろし-おせわ', 'word'=>'こ+れか+す+りが', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'これからおせす-さようなら-こちら-こし-おせわになり-あ', 'word'=>'こ+れか+す+りが+おせ', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう', 'word'=>'こ+れか+す+りが+おせ', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'おまえのしあわ-さようなら-こちら-こそよおろし-おせわになり-ありがとう-てみやこへ-ゆ', 'word'=>'こ+れか+す+りが+おせ+っぱつ+た', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'こそよおろし-おせわになり-ありがとう', 'word'=>'こ+れか', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'おばあさま-おばあさまおばあさま-みやこにいったほうがいいよ」-こそよおろし', 'word'=>'こ+れか+す', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう-まをひとり', 'word'=>'こ+れか+す+りが+おせ+まをひとり', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'こちら-こそよおろし-おせわになり-だれひとりとしてあらわれたことはありませんでした', 'word'=>'こ+れか+す', 'image'=>'img/q-image-choose.jpg'],
        ]);
    }
}
