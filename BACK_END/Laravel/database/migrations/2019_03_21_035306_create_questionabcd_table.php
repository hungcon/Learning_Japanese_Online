<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionabcdTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questionabcd', function (Blueprint $table) {
            $table->increments('id');
            $table->string('remaji');
            $table->string('image');
            $table->string('audio');
            $table->string('answer');
            $table->string('A');
            $table->string('B');
            $table->string('C');
            $table->string('D');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questionabcd');
    }
}
