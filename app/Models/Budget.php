<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use App\Enums\MonthEnum;
use App\Enums\BudgetType;

class Budget extends Model
{
    use HasUuids;

    protected $fillable = [
        'user_id',
        'detail',
        'nominal',
        'month',
        'year',
        'type',
    ];

    protected function casts(): array
    {
        return [
            'month' => MonthEnum::class,
            'type'  => BudgetType::class,
        ];
    }
}