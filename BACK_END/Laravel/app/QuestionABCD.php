<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuestionABCD extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'remaji', 'image', 'audio', 'answer', 'A', 'B', 'C', 'D',
    ];

    protected $hidden = [
        'answer',
    ];

    public $table = "questionabcd";

    public $timestamps = false;
}
