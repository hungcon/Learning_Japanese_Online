<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    public $table = "rule";

    public $timestamps = false;

    public function JoinToLesson(){
        return $this->hasMany('App\Lesson','rule_id','id');
    }
}
