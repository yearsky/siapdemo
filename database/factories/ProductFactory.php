<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $name = $this->faker->sentence(3),
            'slug' => Str::slug($name),
            'description' => $this->faker->paragraph(10),
            'price' => rand(111111,999999),
        ];
    }
}
