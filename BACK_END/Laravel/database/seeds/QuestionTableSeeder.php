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
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう','answer'=>'す+おせ+こ+れか+りが' ,'word'=>'こ+れか+す+りが+おせ', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'これからおせます-さようなら-こら-こそよ','answer'=>'す+れか+こ', 'word'=>'こ+れか+す', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'こわになります-さよ-こちら-こそよおろし-おせわ','answer'=>'こ+す+りが+れか', 'word'=>'こ+れか+す+りが', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'これからおせす-さようなら-こちら-こし-おせわになり-あ','answer'=>'こ+れか+す+りが+おせ', 'word'=>'こ+れか+す+りが+おせ', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう','answer'=>'こ+れか+す+りが+おせ', 'word'=>'こ+れか+す+りが+おせ', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'おまえのしあわ-さようなら-こちら-こそよおろし-おせわになり-ありがとう-てみやこへ-ゆ','answer'=>'た+こ+おせ+れか+す+りが+っぱつ', 'word'=>'こ+れか+す+りが+おせ+っぱつ+た', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'こそよおろし-おせわになり-ありがとう','answer'=>'れか+こ', 'word'=>'こ+れか', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'おばあさま-おばあさまおばあさま-みやこにいったほうがいいよ」-こそよおろし','answer'=>'こ+す+れか', 'word'=>'こ+れか+す', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう-まをひとり','answer'=>'れか+す+りが+こ+おせ+まをひとり', 'word'=>'こ+れか+す+りが+おせ+まをひとり', 'image'=>'img/q-image-choose.jpg'],
            ['question'=>'こちら-こそよおろし-おせわになり-だれひとりとしてあらわれたことはありませんでした','answer'=>'こ+れか+す', 'word'=>'こ+れか+す', 'image'=>'img/q-image-choose.jpg'],
        ]);
    }
}
