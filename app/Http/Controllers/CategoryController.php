<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');   
    }

    public function index()
    {
        return inertia('Category');
    }

    public function apiCategory()
    {
        return Category::latest()->get();
    }

    public function apiInsert(Request $request) {
        $data = $request->input('values');
        
        $json_decode = json_decode($data, true);
        $json_decode['slug'] = Str::slug($json_decode['name']);
        $data_Category = Category::create($json_decode);
        return $data_Category;
    }

    public function apiUpdate(Request $request, $id) {
        $data = $request->input('values');

        $json_decode = json_decode($data, true);
        $json_decode['slug'] = Str::slug($json_decode['name']);
        $data_Category = Category::whereId($id)->update($json_decode);
        // $data_Category = DB::table('Categorys')->where('id', $id)->update($json_decode);
        return $data_Category;
    }

    public function apiDelete($id) {
        $data_Category = Category::find($id)->delete();
        // $data_Category = DB::table('Categorys')->where('id', $id)->delete();
        return $data_Category;
    }
}
