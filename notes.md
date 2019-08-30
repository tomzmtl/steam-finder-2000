# Developer Notes

Time spent: 6h30

**Disclaimer:**

- During my development, I found the Steam API endpoints to be very unstable. A lot of time, requests would just return invalid JSON responses. I sometimes had to hit the submit button up to 10 times before getting a good response for the same request. When it works, it's all good, but be ready to insist on that button.
- Steam players can choose to have their games list private. The UI accounts for this, but be sure to load a user with a public games list and recent activity to see the whole thing.

## Overall architecture

The project is made of 2 apps:

- `steam-finder-2000`: Client app built with React/Redux and a standard toolset.
- `steam-finder-api`: A light Express server that connects to Steam API, aggregates content, and exposes one endpoint to the client app.

Reason for going with this architecture is mainly because Steam API CORS restrictions prevent a client from connecting directly, so you have to go through a http server.

It's slightly more overhead to work on 2 projects, but it's cleaner in terms of code responsibility, and has the advantage of offering some performance improvements.

## Data strategy

My first though was to provide 3 endpoints (profile, owned games, recent games) and make on-demand calls from the client when selecting activity items.

Steam API, after a few tests, seemed very fast for the amount of content delivered. Given this and the time restriction on the project, I went with a "all-in-one" solution, where the client only requests a player by ID. The API layer will then fetch all necessary data, aggregate it into one player object, and send it back. The advantage is that the client makes only one call, and gets all the data it needs in that call. In a way it makes the client "dumber", but also simpler and easier to maintain.

I think this solution has its merits, and makes sense for the scope of this exercise.

## Differences with the prototype

The prototype showed 3 activity menu items. Looking at the Steam API docs, there didn't seem to be a custom "recently played" endpoint. The only one is the last 2 weeks endpoints (fixed interval). Those 2 being redundant, I chose to simply cut that feature off. I real situation we probably would have to reconsider our options.

I also didn't find any indication that developer and published names were available for games. So these fields had to go too.

## Unit tests

There was only one function worth writing unit tests for, so I focused on that. You can find it in the client app at `src/redux/helpers`. I wrote the tests using TDD. With a bit more time, low-hanging fruits for tests would be reducers.

## Future improvements

Of course, time allowed on this project doesn't allow for a high level of polish. Animations, for example, are impossible to read from a static prototype.

The prototype also doesn't provide solutions for edgier use cases, like the player having a private game DB, or how to handle server errors. In these cases I just made up something to avoid any crash, but in a real situation those would have to be discussed with the UX team.

Another thing we could do is add some preloading for game images, to have a smoother experience. However, the images provided by the API are low quality, so they tend to load pretty fast.
