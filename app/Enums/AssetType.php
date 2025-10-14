<?php

namespace App\Enums;

enum AssetType: string
{
    case CASH = "Kas";
    case PERSONAL = "Personal";
    case SHORTTERM = "Investasi Jangka Pendek";
    case MIDTERM = "Investasi Jangka Menengah";
    case LONGTERM = "Investasi Jangka Panjang";

    public static function options(): array
    {
        return collect(self::cases())
            ->map(fn($item) => [
                'value' => $item->name,
                'label' => $item->value,
            ])->values()->toArray();
    }
}
