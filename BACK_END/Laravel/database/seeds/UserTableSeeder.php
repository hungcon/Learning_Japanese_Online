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
            ['name'=>'Tran Viet Huy', 'email'=>'huytran161297@gmail.com', 'password'=>bcrypt('tranhuy1'), 'level' => 0],
            ['name'=>'Pham Hoan', 'email'=>'hoankhac123@gmail.com', 'password'=>bcrypt('hoankhac123'), 'level' => 1],
            ['name'=>'Phung Hung', 'email'=>'hungphung123@gmail.com', 'password'=>bcrypt('hungphung123'), 'level' => 2],
            ['name'=>'Chung Bien', 'email'=>'chungbt123@gmail.com', 'password'=>bcrypt('chungbt123'), 'level' => 2]
        ]);
    }
}
