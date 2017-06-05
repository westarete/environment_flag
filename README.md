# EnvironmentFlag

EnvironmentFlag is a jQuery-based flag to highlight the current Rails environment.

## Browser compatibility

Supports IE9+ and modern browsers.

TODO: Write more specific browser compatibility here

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'environment_flag'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install environment_flag

## Usage

### Include environment_flag javascript assets

Add the following to your `app/assets/javascripts/application.js`:

	//= require environment_flag

### Include environment_flag stylesheet assets

Add to your `app/assets/stylesheets/application.css`:

	*= require environment_flag

### Initialize the environment flag

Usually you will add the environment_flag to the `body` of the HTML document.

For example:

```coffeescript
$('body').environmentFlag '<%= Rails.env %>',
    id: 'env-flag'
    excluded_environments: false
```

### Options

| Name                  | Type             | Default              | Description |
|:----------------------|:-----------------|:---------------------|:------------|
| id                    | string           | `'environment-flag'` | ID attribute of the appended `<div>`. |
| position              | string           | `'top-right'`        | Position of the flag on the screen - `'top-right'` \| `'top-left'` \| `'bottom-right'` \| `'bottom-left'` |
| title_prefix          | boolean          | `true`               | Indicate whether or not to prefix the document's title with the environment initial. This is helpful when looking at multiple browser tabs |
| excluded_environments | array \| false   | `['production']`     | Array of Rails environments that should not display the environment flag. A value of `false` will display the environment flag in all environments. |

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/westarete/environment_flag. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

