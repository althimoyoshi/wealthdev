<?php

namespace App\Models;

use App\Enums\LiabilityType;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Liability extends Model
{
    use HasUuids;

    protected $fillable = [ 
        "user_id",
        "detail",
        "goal",
        "type",
    ];

    public function casts(): array
    {
        return [
            "type" => LiabilityType::class,
        ];
    }

    public function netWorth(): HasMany{
        return $this->hasMany( NetWorthLiability::class);
    }
}
