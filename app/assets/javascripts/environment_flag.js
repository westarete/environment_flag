/*!
 * EnvironmentFlag v0.1.0
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('EnvironmentFlag\'s JavaScript requires jQuery')
}

;(function( $ ) {

  $.fn.environmentFlag = function( env, options ) {

    var opts = $.extend( {}, $.fn.environmentFlag.defaults, options );

    if (opts.excluded_environments && opts.excluded_environments.indexOf(env) != -1) {
      return false;
    }

    var env_initial, add_env_prefix_to_title, env_flag, flag, env_prefix, local_storage_supported;

    env_initial = function() {
      return env.substring(0, 1);
    };

    env_prefix = function() {
      return (env_initial() + ' | ').toUpperCase();
    };

    add_env_prefix_to_title = function() {
      var new_title, original_title, title;
      title = $('head title');
      original_title = title.text();
      new_title = env_prefix() + original_title;
      title.text(new_title);
    };

    if (opts.title_prefix === true) {
      add_env_prefix_to_title();
    }

    env_flag = function() {
      return $('<div />').attr('id', opts.id);
    };

    flag = env_flag();
    flag.addClass('environment-flag').addClass(env).addClass(opts.position).text(env);

    local_storage_supported = function() {
      var e;
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (_error) {
        e = _error;
        return false;
      }
    };

    if (local_storage_supported() && localStorage.getItem('flag_recessed') === 'true') {
      flag.addClass('recessed').text(env_initial);
    }

    flag.on('click', function() {
      var f;
      f = $(this);
      f.toggleClass('recessed');
      if (f.hasClass('recessed')) {
        localStorage.setItem('flag_recessed', 'true');
        return f.text(env_initial);
      } else {
        localStorage.setItem('flag_recessed', 'false');
        return f.text(env);
      }
    });

    setTimeout(function() {
      return flag.addClass('loaded');
    }, 50);

    return this.append(flag);
  };

  $.fn.environmentFlag.defaults = {
    id: 'environment-flag',
    position: 'top-right',
    title_prefix: true,
    excluded_environments: ['production']
  };

}( jQuery ));