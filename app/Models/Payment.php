<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Crypt;
use App\Enums\PaymentType;

class Payment extends Model
{
    use HasUuids;

    protected $fillable = [
        "user_id",
        "name",
        "type",
        "account_number",
        "account_owner",
    ];

    protected $hidden = [
        "account_number",
    ];

    protected function casts(): array
    {
        return [
            "type" => PaymentType::class,
        ];
    }

    protected function accountNumber(): Attribute
    {
        return Attribute::make(
            set: fn(?string $value) => $value ? Crypt::encrypt($value) : null
        );
    }
}