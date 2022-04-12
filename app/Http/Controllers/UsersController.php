<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller {
    public function __construct() {
        $this->middleware('auth');
    }

    public function index() {
        // $users = User::latest()->paginate(10);
        $users = User::get();
        // $product = Product::latest()->paginate(10);
        return inertia('Users/Index', compact('users'));
    }

    public function apiUser() {
        $users = User::get();
        return response()->json([
            'data' => $users
        ]);;
    }

    public function apiInsert(Request $request) {
        $data = $request->input('values');

        $json_decode = json_decode($data, true);
        $data_Supplier = User::create($json_decode);
        return $data_Supplier;
    }

    public function apiUpdate(Request $request, $id) {
        $data = $request->input('values');

        $json_decode = json_decode($data, true);
        $data_Supplier = User::whereId($id)->update($json_decode);
        // $data_Supplier = DB::table('Categorys')->where('id', $id)->update($json_decode);
        return $data_Supplier;
    }

    public function apiDelete($id) {
        $data_Supplier = User::find($id)->delete();
        // $data_Supplier = DB::table('Categorys')->where('id', $id)->delete();
        return $data_Supplier;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return inertia('Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $attributes = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'no_handphone' => ['required', 'min:10', 'unique:users,no_handphone'],
            'password' => ['required', 'min:8'],
            'retypepassword' => ['same:password']
        ]);

        $attributes['password'] = bcrypt($request->password);

        User::create($attributes);
        return redirect()->route('users.index')->with([
            'type' => 'success',
            'message' => 'Users created',
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user) {
        return inertia('Users/Edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user) {
        $attributes = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email,' . optional($user)->id,],
            'no_handphone' => ['required', 'min:10', 'unique:users,no_handphone,' . optional($user)->id,],
            'password' => ['min:8'],
            'retypepassword' => ['same:password']
        ]);

        $attributes['password'] = bcrypt($request->password);

        $user->update($attributes);
        return back()->with([
            'type' => 'success',
            'message' => 'Users updated',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user) {
        $user->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Users was deleted',
        ]);
    }
}
