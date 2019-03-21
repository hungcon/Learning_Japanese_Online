<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    protected $fillable = [
        'id_lesson', 'id_user', 'mark', 'date',
    ];

    public $table = "history";

    public $timestamps = false;
}
