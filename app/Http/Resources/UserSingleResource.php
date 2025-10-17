<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

 // ← penting banget nih

class UserSingleResource extends JsonResource
{
    /**
     * Transform data model menjadi array JSON yang dikirim ke frontend.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'avatar' => $this->avatar
                ? Storage::url($this->avatar)
                : null,
        ];
    }
}
