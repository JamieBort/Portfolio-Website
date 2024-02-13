// ./frontend/src/components/cards/MUICustomCard.jsx

import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography, Paper, Link, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function MUICustomCard({ item, selection }) {
  const { description, forkCount, homepageUrl, name, stargazerCount, url, languages, id } = item;

  //   Listing tech/languages using Stack
  const TechStack = () => {
    const ItemStack = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),

      textAlign: "center",
      color: theme.palette.text.secondary,
    }));
    const idiomas = languages.edges.map((element) => <ItemStack key={id + element.node.name}>{element.node.name}</ItemStack>);
    return (
      <Stack direction="row" spacing={2}>
        {idiomas}
      </Stack>
    );
  };

  const BasicGrid = () => {
    const ItemBasicGrid = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),

      textAlign: "center",
      color: theme.palette.text.secondary,
      //   minWidth: "15em", // NOTE: These two styles are together.
    }));

    const idiomas = languages.edges.map((element) => {
      //   console.log("id:", id);
      //   console.log("element.node.name:", element.node.name);
      //   console.log("===============");
      return (
        <Grid
          key={id + element.node.name}
          item
          xs={12}
          sm={6}
          // style={{ display: "flex", justifyContent: "center" }} // NOTE: These two styles are together.
        >
          <ItemBasicGrid>{element.node.name}</ItemBasicGrid>
        </Grid>
      );
    });
    // console.log("===============");
    // console.log("name:", name);
    // console.log("===============");

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          {idiomas}
        </Grid>
      </Box>
    );
  };

  const Choice = () => {
    if (selection === "techStack") {
      return <TechStack />;
    } else if (selection === "basicGrid") {
      return <BasicGrid />;
    }
  };

  const card = (
    <CardContent>
      <Stack
        direction="row"
        //   justifyContent="space-between"
        alignItems="center"
        spacing={10}
      >
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Stack
          direction="column"
          // justifyContent="center"
          // alignItems="stretch"
        >
          {stargazerCount === 0 ? null : (
            <Typography variant="subtitle1" color="text.secondary">
              Stargazer Count: {stargazerCount}
            </Typography>
          )}
          {forkCount === 0 ? null : (
            <Typography variant="subtitle1" color="text.secondary">
              Fork Count: {forkCount}
            </Typography>
          )}
        </Stack>
      </Stack>

      <Typography variant="body2">{description}</Typography>

      {/* Tech options. TODO: choose among these: */}
      {/* <TechStack />
      <BasicGrid /> */}
      <Choice />

      {/* TODO: Read up on CardActions. */}
      {/* TODO: style this link/stargazer section */}
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        {homepageUrl == null ? null : (
          <Link href={homepageUrl} underline="hover">
            Live Site URL
          </Link>
        )}
        <Link href={url} underline="hover">
          GitHub Repository URL
        </Link>
      </Stack>
    </CardContent>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

MUICustomCard.propTypes = {
  item: PropTypes.object,
  selection: PropTypes.string,
};
