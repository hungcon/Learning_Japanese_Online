<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fill extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_lesson', 'id_question',
    ];

    public $table = "fill";

    public $timestamps = false;
}
