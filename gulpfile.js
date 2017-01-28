var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir.config.assetsPath = '_source';
elixir.config.publicPath = './';

elixir(function(mix) {
    mix.sass('main.scss');
    mix.sass('custom.scss');
    mix.scripts(
        [
            'phantom/jquery.min.js',
            'phantom/skel.min.js',
            'phantom/util.js',
            'phantom/phantom.js'
        ],
        'js/phantom.js'
    );
    mix.browserify('app.js');
});
