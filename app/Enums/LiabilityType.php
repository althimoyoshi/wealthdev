<?php

namespace App\Enums;

enum LiabilityType: string
{

    case SHORTTERMDEBT = 'Hutang Jangka Pendek';
    case MIDTERMDEBT = 'Hutang Jangka Menengah';
    case LONGTERMDEBT = 'Hutang Jangka Panjang';

    public static function options(): array
    {
        return collect(self::cases())
            ->map(fn ($item) => [
                'value' => $item->name,
                'label' => $item->value,
            ])->values()->toArray();
    }
}
