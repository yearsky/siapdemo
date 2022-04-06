<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- <title>{{ config('app.name') }}</title> --}}
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900" rel="stylesheet">
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> --}}
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.2.0/dist/echarts.min.js" ></script>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <script src="{{ asset('assets/js/common-bundle-script.js') }}"></script>
    <script src="{{ asset('assets/js/script.js') }}"></script>
    {{-- <script src="{{ asset('assets/js/echarts.min.js') }}"></script>
    <script src="{{ asset('assets/js/echart.options.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('assets/js/dashboard.v1.script.js') }}"></script> --}}
</head>
<body className="dx-viewport">

    @inertia
    
</body>
</html>