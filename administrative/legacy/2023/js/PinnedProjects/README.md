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

It was used by navigating to https://docs.github.com/en/graphql/overview/explorer and making an API call with it.

The saved results can be found in the files with the format `pinnedProjects_vXX.json`.

These files will be used until I have a working GraphQL api call.
