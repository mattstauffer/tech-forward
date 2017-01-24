var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'source';
elixir.config.publicPath = 'public';

elixir(function(mix) {
    mix.sass('main.scss');
    mix.scripts(
            [
                'phantom/jquery.min.js',
                'phantom/skel.min.js',
                'phantom/util.js',
                'phantom/phantom.js'
            ],
            'public/js/phantom.js'
        );
    mix.browserify('app.js');
});
