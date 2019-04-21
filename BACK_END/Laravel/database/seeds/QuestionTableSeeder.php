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
            // 10 câu hỏi trong lesson 1 : 4 đầu và 4 cuối có đáp án trùng với option 
            ['question'=>'わたし-ジュース-のみます','answer'=>'は+を' ,'word'=>'は+を', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'わたし-駅-新聞-買います-','answer'=>'は+で+を+は', 'word'=>'は+で+を+は', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'週間-回彼女-電話-かけます','answer'=>'に+に+を', 'word'=>'に+に+を', 'image'=>'/img/q-image-choose.jpg'],

            ['question'=>'地下鉄-タクシー-安い-','answer'=>'は+より+です', 'word'=>'は+より+です', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'暑い季節-寒い-季節-いいですか','answer'=>'と+どちら+が', 'word'=>'が+と+どちら', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'年で-い-ばん-め-多い-か','answer'=>'が+ち+あ+が+です', 'word'=>'あ+が+が+ち+です', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'さくら-日本の花-いちばん有名-','answer'=>'は+で+です', 'word'=>'は+で+です', 'image'=>'/img/q-image-choose.jpg'],

            ['question'=>'松本さん-山田さん-どちら-ダンス-上手ですか','answer'=>'と+と+が+が', 'word'=>'と+と+が+が', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'この近く-きっさてん-ありますか','answer'=>'に+が', 'word'=>'に+が', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'牛乳-どこ-ありますか','answer'=>'は+に', 'word'=>'は+に', 'image'=>'/img/q-image-choose.jpg'],

             // 10 câu hỏi trong lesson 2
             
            ['question'=>'あそこ-高いビル-ありますねあれ-何ですか','answer'=>'に+が+は' ,'word'=>'に+が+は', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'この会社-外国人-人ぐらい-います','answer'=>'に+は+が', 'word'=>'は+が+に', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'週間回りょうしん-でんわ-をかけます','answer'=>'に+に', 'word'=>'に+に', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'大阪-東京-しんかんせん-時間ぐらいかかります','answer'=>'から+まで+で', 'word'=>'まで+で+から', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'さびしいです-ともだち-ほしいです','answer'=>'から+が', 'word'=>'から+が', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'わたし-国-帰りたいです。そして両親-会いたいです','answer'=>'は+へ+に', 'word'=>'へ+に+は', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'日本-何-勉強-きましたか','answer'=>'へ+の+に', 'word'=>'に+へ+の', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'郵便局-そくたつ-だし-いきました','answer'=>'へ+を+に', 'word'=>'を+に+へ', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'しやくしょ-外国人登録-行きます','answer'=>'で+に', 'word'=>'で+に', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'くうこう-母-むかえ-いきました','answer'=>'へ+を+に', 'word'=>'に+へ+を', 'image'=>'/img/q-image-choose.jpg'],

             // 10 câu hỏi trong lesson 3

            ['question'=>'あそこ-高いビル-ありますね。あれ-何ですか','answer'=>'に+が+は' ,'word'=>'が+は+に', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'わたし-駅-新聞-買います','answer'=>'は+で+を', 'word'=>'は+で+を', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'この会社-外国人-人ぐらい-います','answer'=>'に+は+が', 'word'=>'は+に+が', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'大阪-東京-しんかんせん-時間ぐらいかかります','answer'=>'から+まで+で', 'word'=>'まで+から+で', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'さくら-日本の花-いちばん有名-','answer'=>'は+で+です', 'word'=>'は+で+です', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'松本さん-山田さん-どちら-ダンス-上手ですか','answer'=>'と+と+が+が', 'word'=>'と+が+が+と', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'週間-回りょうしん-でんわをかけます','answer'=>'に+に', 'word'=>'に+に', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'くうこう-母-むかえ-いきました','answer'=>'へ+を+に', 'word'=>'に+を+へ', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'郵便局そくたつ-だし-いきました','answer'=>'を+に', 'word'=>'を+に', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'しやくしょ-外国人登録-行きます','answer'=>'で+に', 'word'=>'で+に', 'image'=>'/img/q-image-choose.jpg'],

             // 10 câu hỏi trong lesson 4 
             // 4 câu hỏi giữa đáp án trùng với option 
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう','answer'=>'す+おせ+こ+れか+りが' ,'word'=>'こ+れか+す+りが+おせ', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'これからおせます-さようなら-こら-こそよ','answer'=>'す+れか+こ', 'word'=>'こ+れか+す', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'こわになります-さよ-こちら-こそよおろし-おせわ','answer'=>'こ+す+りが+れか', 'word'=>'す+りが+こ+れか', 'image'=>'/img/q-image-choose.jpg'],

            ['question'=>'これからおせす-さようなら-こちら-こし-おせわになり-あ','answer'=>'こ+れか+す+りが+おせ', 'word'=>'こ+れか+す+りが+おせ', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう','answer'=>'こ+れか+す+りが+おせ', 'word'=>'こ+れか+す+りが+おせ', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'おまえのしあわ-さようなら-こちら-こそよおろし-おせわになり-ありがとう-てみやこへ-ゆ','answer'=>'た+こ+おせ+れか+す+りが+っぱつ', 'word'=>'た+こ+おせ+れか+す+りが+っぱつ', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'こそよおろし-おせわになり-ありがとう','answer'=>'れか+こ', 'word'=>'れか+こ', 'image'=>'/img/q-image-choose.jpg'],


            ['question'=>'おばあさま-おばあさまおばあさま-みやこにいったほうがいいよ」-こそよおろし','answer'=>'こ+す+れか', 'word'=>'す+こ+れか', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'これからおせわになります-さようなら-こちら-こそよおろし-おせわになり-ありがとう-まをひとり','answer'=>'れか+す+りが+こ+おせ+まをひとり', 'word'=>'こ+れか+す+りが+おせ+まをひとり', 'image'=>'/img/q-image-choose.jpg'],
            ['question'=>'こちら-こそよおろし-おせわになり-だれひとりとしてあらわれたことはありませんでした','answer'=>'こ+れか+す', 'word'=>'す+こ+れか', 'image'=>'/img/q-image-choose.jpg'],
        ]);
    }
}
