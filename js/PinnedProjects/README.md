# ./js/PinnedProjects

This directory houses the objects that are created from the

pinnedProjects (below) was generated from the following using https://docs.github.com/en/graphql/overview/explorer

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

api call.

These files will be used until I have a working GraphQL api call.

`./js/PinnedProjects/PinnedProjects_v1.js` is the first version.

`./js/PinnedProjects/PinnedProjects_v2.js` was created because I updated info in one of the repos.
