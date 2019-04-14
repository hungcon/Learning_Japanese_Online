<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'question','answer', 'word', 'image'
    ];

    protected $hidden = [
        'answer',
    ];

    public $table = "question";

    public $timestamps = false;
}
