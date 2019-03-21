<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Choose extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_lesson', 'id_questionabcd',
    ];

    public $table = "choose";

    public $timestamps = false;
}
