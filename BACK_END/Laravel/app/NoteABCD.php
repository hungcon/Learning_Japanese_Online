<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NoteABCD extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_user', 'id_questionabcd',
    ];

    public $table = "noteabcd";

    public $timestamps = false;
}
