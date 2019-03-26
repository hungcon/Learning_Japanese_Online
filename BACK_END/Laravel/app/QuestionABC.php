<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuestionABC extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'remaji', 'image', 'audio', 'answer', 'A', 'B', 'C', 'D',
    ];

    public $table = "questionabcd";

    public $timestamps = false;
}
