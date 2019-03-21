<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = [
        'id_lesson', 'id_user', 'mark',
    ];

    public $table = "result";

    public $timestamps = false;
}
