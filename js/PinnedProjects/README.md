# ./js/PinnedProjects

This directory houses the objects that are created from this GraphQL object:

```
{
    user(login: "jamiebort") {
        pinnedItems(first: 6) {
        totalCount
        edges {
            node {
            ... on Repository {
                id
                name
                url
                stargazerCount
                description
                languages(first: 6) {
                totalCount
                edges {
                    node {
                    name
                    }
                }
                }
                homepageUrl
                forkCount
            }
            }
        }
        }
    }
}
```

It was used by navigating to https://docs.github.com/en/graphql/overview/explorer and making an API call with it. The results can be found in

`./js/PinnedProjects/PinnedProjects_v1.js`

and

`./js/PinnedProjects/PinnedProjects_v2.js`.

These files will be used until I have a working GraphQL api call.

`./js/PinnedProjects/PinnedProjects_v1.js` is the first version.

`./js/PinnedProjects/PinnedProjects_v2.js` is a more current version. It was created because I updated info in one of the repos.
