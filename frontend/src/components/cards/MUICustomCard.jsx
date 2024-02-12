// ./frontend/src/components/cards/MUICustomCard.jsx

import PropTypes from "prop-types";
import { Box, Card, CardActions, CardContent, Typography, AvatarGroup, Avatar, Stack, Paper, Link, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import * as React from "react";
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';

export default function MUICustomCard({ item }) {
  const { description, forkCount, homepageUrl, name, stargazerCount, url, languages, id } = item;

  //   Listing tech/languages using Avatar
  const TechAvatar = () => {
    const idiomas = languages.edges.map((element) => (
      <Avatar alt="" src="" key={id + element.node.name}>
        {element.node.name}
      </Avatar>
    ));
    return <AvatarGroup max={6}>{idiomas}</AvatarGroup>;
  };

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
    }));

    const idiomas = languages.edges.map((element) => {
      return (
        <Grid key={id + element.node.name} item xs={12} sm={6}>
          <ItemBasicGrid>{element.node.name}</ItemBasicGrid>
        </Grid>
      );
    });

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          {idiomas}
        </Grid>
      </Box>
    );
  };

  //   //   TODO: figure out what this is.
  //   const bull = (
  //     <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
  //       •
  //     </Box>
  //   );

  const card = (
    <>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div" style={{ textAlign: "center" }}>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>

        {forkCount === 0 ? null : (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Fork Count: {forkCount}
          </Typography>
        )}

        {/* TODO: consider icons for the tech items, rather than words. */}

        {/* Tech options. TODO: choose among these: */}
        {/* <TechGrid /> https://mui.com/material-ui/react-grid/ */}
        <BasicGrid />
        {/* <TechIcons /> https://mui.com/material-ui/icons/ */}
        {/* <TechMaterialIcons /> https://mui.com/material-ui/material-icons/ */}
        {/* NOTE: Not a fan of TechAvatar. */}
        {/* <TechAvatar /> */}
        {/* NOTE: TBD TechStack. */}
        {/* <TechStack /> */}
      </CardContent>

      {/* TODO: Read up on CardActions. */}
      {/* TODO: style this link/stargazer section */}
      <CardActions>
        {homepageUrl == null ? null : (
          <Link href={homepageUrl} underline="hover">
            Live Site URL
          </Link>
        )}
        <Link href={url} underline="hover">
          GitHub Repository URL
        </Link>

        {stargazerCount === 0 ? null : (
          <Typography variant="body2" color="text.secondary">
            Stargazer Count: {stargazerCount}
          </Typography>
        )}
      </CardActions>
    </>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

MUICustomCard.propTypes = {
  item: PropTypes.object,
};
