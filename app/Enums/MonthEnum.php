<?php

namespace App\Enums;

enum MonthEnum: string
{
    case JANUARI = 'Januari';
    case FEBRUARI = 'Februari';
    case MARET = 'Maret';
    case APRIL = 'April';
    case MEI = 'Mei';
    case JUNI = 'Juni';
    case JULI = 'Juli';
    case AGUSTUS = 'Agustus';
    case SEPTEMBER = 'September';
    case OKTOBER = 'Oktober';
    case NOVEMBER = 'November';
    case DESEMBER = 'Desember';

    public static function options(array $exclude = []): array
    {
        return collect(self::cases())
            ->filter(fn ($item) => ! in_array($item->name, $exclude))
            ->map(fn ($item) => [
                'value' => $item->name,
                'label' => $item->value,
            ])
            ->values()
            ->toArray();
    }
}
