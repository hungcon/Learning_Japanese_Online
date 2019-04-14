<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            ['name'=>'Tran Viet Huy', 'email'=>'huytran161297@gmail.com', 'password'=>bcrypt('tranhuy1')],
            ['name'=>'Pham Hoan', 'email'=>'hoanpham123@gmail.com', 'password'=>bcrypt('hoanpham123')],
            ['name'=>'Phung Hung', 'email'=>'hungphung123@gmail.com', 'password'=>bcrypt('hungphung123')],
            ['name'=>'Chung Bien', 'email'=>'chungbt123@gmail.com', 'password'=>bcrypt('chungbt123')]
        ]);
    }
}
