<?php

namespace App\Enums;

enum BudgetType: string
{
    case INCOME = 'Penghasilan';
    case SAVING = 'Tabungan dan Investasi';
    case DEBT = 'Cicilan Hutang';
    case SHOPPING = 'Belanja';

    public static function options(array $exclude = []): array
    {
        return collect(self::cases())
            ->filter(fn ($item) => ! in_array($item->name, $exclude))
            ->map(fn ($item) => [
                'value' => $item->name,
                'label' => $item->value,
            ])->values()->toArray();
    }
}
