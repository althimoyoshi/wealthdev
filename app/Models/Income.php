<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use App\Enums\MonthEnum;

class Income extends Model
{
    use HasUuids;

    protected $fillable = [
        "user_id",
        "source_id",
        "date",
        "nominal",
        "notes",
        "month",
        "year",
    ];

    public function casts(): array
    {
        return [
            "month" => MonthEnum::class,
        ];
    }
}