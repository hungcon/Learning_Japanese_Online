<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChooseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('choose', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_lesson')->unsigned();
            $table->integer('id_questionabcd')->unsigned();
            $table->foreign('id_lesson')->references('id')->on('lesson')->onDelete('cascade');
            $table->foreign('id_questionabcd')->references('id')->on('questionabcd')->onDelete('cascade');
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
        Schema::dropIfExists('choose');
    }
}
