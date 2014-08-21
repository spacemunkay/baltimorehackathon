# Baltimore Hackathon

Website for the second Baltimore Hackathon, June 8-10, 2012. Lives at
http://baltimorehackathon.com.

## System Dependencies

- Ruby 2.1.2
- Bundler

## Getting Started

1. Run `bundle install` in this directory.
2. Run `bin/middleman server` in this directory.
3. Go to http://0.0.0.0:4567 to see the site!

Everything you'll need to edit is contained in the `source` directory. The
websites from the past years live in `source/2010` and `source/2012` and are
self contained. For additional information about developing with Middleman,
[check out their docs](http://middlemanapp.com/).

## Deploying

Deploying uses the `middleman-deploy` gem to automate the process of deploying
the website to Github pages. The command will deploy the built website to the
Push URL in `git remote show origin`.

1. Run `middleman build`.
2. Run `middleman deploy`.
