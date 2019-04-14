<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rule_id', 'name',
    ];

    public $table = "lesson";

    public $timestamps = false;

    public function JoinToQuestion(){
        return $this->belongsToMany('\App\Question','fill','id_lesson','id_question');
    }

    public function JoinToQuestionABCD(){
        return $this->belongsToMany('\App\QuestionABCD','choose','id_lesson','id_questionabcd');

    }
}
