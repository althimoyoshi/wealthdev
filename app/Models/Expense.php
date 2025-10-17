<?php

namespace App\Models;

use App\Enums\BudgetType;
use App\Enums\MonthEnum;
use Arr;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasUuids;

    protected $fillable = [
        'user_id',
        'date',
        'description',
        'type',
        'type_detail_id',
        'payment_id',
        'notes',
        'month',
        'year',
    ];

    public function casts(): array
    {
        return [
            'type' => BudgetType::class,
            'month'=> MonthEnum::class,
        ];
    }
}
