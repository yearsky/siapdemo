<?php

namespace App\Http\Controllers;

use App\Models\Product;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index()
    {
        // $product = Product::latest()->get();  ,['product' => $product]
        return inertia('Product');        
    }

    public function apiProduct()
    {
        return Product::latest()->get();
    }

    public function apiInsert(Request $request) {
        $data = $request->input('values');
        
        $json_decode = json_decode($data, true);
        $data_product = Product::create($json_decode);
        return $data_product;
    }

    public function apiUpdate(Request $request, $id) {
        $data = $request->input('values');

        $json_decode = json_decode($data, true);
        $data_product = Product::whereId($id)->update($json_decode);
        // $data_product = DB::table('products')->where('id', $id)->update($json_decode);
        return $data_product;
    }

    public function apiDelete($id) {
        $data_product = Product::find($id)->delete();
        // $data_product = DB::table('products')->where('id', $id)->delete();
        return $data_product;
    }
}
