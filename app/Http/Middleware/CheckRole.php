<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, string $role) {
        if ($role == 'admin' && auth()->user()->isrole != 'admin') {
            abort(403);
        }
        if ($role == 'user' && auth()->user()->isrole != 'user') {
            abort(403);
        }
        if ($role == 'guest' && auth()->user()->isrole != 'guest') {
            abort(403);
        }
        return $next($request);
    }
}
