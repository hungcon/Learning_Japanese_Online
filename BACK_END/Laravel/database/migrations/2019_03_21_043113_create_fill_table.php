<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFillTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fill', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_lesson')->unsigned();
            $table->integer('id_question')->unsigned();
            $table->foreign('id_lesson')->references('id')->on('lesson')->onDelete('cascade');
            $table->foreign('id_question')->references('id')->on('question')->onDelete('cascade');
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
        Schema::dropIfExists('fill');
    }
}
