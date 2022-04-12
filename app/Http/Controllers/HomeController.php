<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class HomeController extends Controller {
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __construct() {
        $this->middleware('auth');
    }

    public function __invoke(Request $request) {
        return inertia('Home', ['user' => 'farizharisuddin']);
    }
    public function sidebar() {
        $data = DB::select(
            'select top 5 * from dbvflmenuweb where userid = :users and hasaccess =1 order by L1',
            array('users' => 10)
        );
        return $data;
    }
}
