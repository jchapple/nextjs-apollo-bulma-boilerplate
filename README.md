# nextjs-apollo-bulma-boilerplate
### A [Next.js](https://github.com/zeit/next.js/) / [Apollo GraphQL](https://github.com/apollographql) / [Bulma](https://github.com/jgthms/bulma) boilerplate, with SASS, and tree-shaking in mind.

### Notes:
- Uses [react-bulma-components](https://github.com/couds/react-bulma-components)
- [SASS](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)-ready
- Uses GraphQL [apollo-client](https://github.com/apollographql/apollo-client) for data
  - Feel free to use [apollo-graphql-express-objection-server](https://github.com/jchapple/apollo-graphql-express-objection-server) to quickly spin up an Apollo server with compatible authentication
- SSR-friendly JWT authentication / sign-in / token refresh flow (using Apollo retry middleware)
- Uses [service workers](https://github.com/goldhand/sw-precache-webpack-plugin) to cache external project dependencies
- Includes [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- Optimised for tree-shaking
  - Uses [next-plugin-transpile-modules](https://github.com/wellcometrust/next-plugin-transpile-modules):
    - Includes aliased [lodash-es](https://github.com/lodash/lodash/tree/es) (as `lodash`), which supports tree-shaking using the syntax:
    ```js
    import { map, tail, times, uniq } from 'lodash'
    ```
