<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RedirectAuthenticatedUsersController extends Controller {
    public function home() {
        if (auth()->user()->isrole == 'admin') {
            return inertia('Home');
        } elseif (auth()->user()->isrole == 'client') {
            return inertia('Users');
        } elseif (auth()->user()->isrole == 'guest') {
            return redirect('/guestDashboard');
        } else {
            return auth()->logout();
        }
    }
}
