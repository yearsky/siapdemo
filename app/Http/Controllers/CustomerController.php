<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller {
    public function showCustomer() {
        $customer = Customer::all();
        $query = json_encode($customer, JSON_INVALID_UTF8_IGNORE);
        $q = json_decode($query, true);
        return response()->json([
            'data' => $q
        ]);
    }

    public function insertCustomer(Request $request) {
        $data = $request->input('values');
        $try = json_decode($data, true);

        $pengguna = Customer::create($try);

        // $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        // $out->writeln($pengguna);
        // Log::info($pengguna);
        return $pengguna;
    }
}
