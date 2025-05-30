// ./frontend/src/components/cards/MUICustomCard.jsx

import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography, Paper, Link, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function MUICustomCard({ item, selection }) {
  const { description, forkCount, homepageUrl, name, stargazerCount, url, languages, id } = item;

  // Modify data. If name has a hyphen in it, replace it with a space.
  const cleanName = name.split("-").join(" ");

  //   Listing tech/languages using Stack
  const HorizontalList = () => {
    const ItemStack = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      marginTop: ".5em", // NOTE: my added style.
      marginBottom: ".5em", // NOTE: my added style.
      //   margin: "0,2em, 0 , 2em, ",

      textAlign: "center",
      color: theme.palette.text.secondary,
    }));
    const idiomas = languages.edges.map((element) => <ItemStack key={id + element.node.name}>{element.node.name}</ItemStack>);
    return (
      <Stack direction="row" justifyContent="space-around">
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

  // NOTE: This is here until I choose between these two options.
  // TODO: choose among these:
  const ListChoice = () => {
    if (selection === "horizontalList") {
      return <HorizontalList />;
    } else if (selection === "basicGrid") {
      return <BasicGrid />;
    }
  };

  const card = (
    <CardContent>
      {/* NOTE: Note #1 trying to left justify the <Typography/> and <Stack/> inside this stack. */}
      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={5}>
        <Typography variant="h5" component="div">
          {cleanName}
        </Typography>
        {/* NOTE: Note #2 While also trying to put some space between this Stack and the parent one. */}
        <Stack
          direction="column"
          // justifyContent="center"
          //   alignItems="flex-start"
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

      <ListChoice />

      {/* TODO: style this link/stargazer section */}
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          marginTop: ".25em", // NOTE: my added style.
          //   marginBottom: ".25em", // NOTE: my added style.
        }}
      >
        {homepageUrl == "" ? null : (
          <Link href={homepageUrl} underline="hover" target="_blank" rel="noreferrer">
            Live Site
          </Link>
        )}
        <Link href={url} underline="hover" target="_blank" rel="noreferrer">
          GitHub Repository
        </Link>
      </Stack>
    </CardContent>
  );

  // TODO: decided whether to keep the <Box/> component as a wrapper for the <Card/> component. Or to delete the commented out code.
  //   return (
  //     <Box
  //       sx={{
  //         minWidth: 275,
  //         marginTop: ".5em", // NOTE: my added style.
  //         marginBottom: ".5em", // NOTE: my added style.
  //       }}
  //     >
  //       <Card variant="outlined">{card}</Card>
  //     </Box>
  //   );

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        marginTop: ".5em", // NOTE: my added style.
        marginBottom: ".5em", // NOTE: my added style.
      }}
    >
      {card}
    </Card>
  );

  //   Original
  //   return (
  //     <Box sx={{ minWidth: 275 }}>
  //       <Card variant="outlined">{card}</Card>
  //     </Box>
  //   );
}

MUICustomCard.propTypes = {
  item: PropTypes.object,
  selection: PropTypes.string,
};
