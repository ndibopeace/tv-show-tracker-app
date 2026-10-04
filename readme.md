TV & Movie APIs Notes
TVMaze (Start Here)

Pros:

Free
No API key
TV schedules
Upcoming episodes
Cast data
Posters

Base URL:

https://api.tvmaze.com

Search a show:

https://api.tvmaze.com/singlesearch/shows?q=breaking%20bad

Get a show:

https://api.tvmaze.com/shows/169

Get episodes:

https://api.tvmaze.com/shows/169/episodes

Get cast:

https://api.tvmaze.com/shows/169/cast

Get today's schedule:

https://api.tvmaze.com/schedule

Use for:

TV calendars
Episode tracking
Airing schedules
TMDb (Add Later)

Pros:

Movies + TV
Posters
Backdrops
Trailers
Ratings

Requires:

Account
API token

Base URL:

https://api.themoviedb.org/3

Search TV show:

/search/tv?query=breaking%20bad

Get show details:

/tv/1396

Get season:

/tv/1396/season/1

Get images:

/tv/1396/images

Use for:

Movies
Artwork
Rich media details
Recommended Stack

Phase 1:

TVMaze only

Phase 2:

TVMaze + TMDb

Split:

TVMaze → schedules, episodes, next airing
TMDb → posters, backdrops, movies

Much cleaner for notes, and when you're coding you'll just use:

fetch("https://api.tvmaze.com/shows/169")
