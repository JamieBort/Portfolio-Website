// ./frontend/src/components/cards/MUICustomCard.jsx

import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography, Paper, Link, Grid, CardHeader, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function MUICustomCard({ item }) {
  const { description, forkCount, homepageUrl, name, stargazerCount, url, languages, id } = item;

  //   //   Listing tech/languages using Avatar
  //   const TechAvatar = () => {
  //     const idiomas = languages.edges.map((element) => (
  //       <Avatar alt="" src="" key={id + element.node.name}>
  //         {element.node.name}
  //       </Avatar>
  //     ));
  //     return <AvatarGroup max={6}>{idiomas}</AvatarGroup>;
  //   };

  //   //   Listing tech/languages using Stack
  //   const TechStack = () => {
  //     const ItemStack = styled(Paper)(({ theme }) => ({
  //       backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //       ...theme.typography.body2,
  //       padding: theme.spacing(1),
  //       textAlign: "center",
  //       color: theme.palette.text.secondary,
  //     }));
  //     const idiomas = languages.edges.map((element) => <ItemStack key={id + element.node.name}>{element.node.name}</ItemStack>);
  //     return (
  //       <Stack direction="row" spacing={2}>
  //         {idiomas}
  //       </Stack>
  //     );
  //   };

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

  const card = (
    <>
      <CardHeader
        title={
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        }
      />
      <CardContent>
        {/* <Typography variant="h5" component="div">
          {name}
        </Typography> */}

        <Typography variant="body2">{description}</Typography>

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

        {/* TODO: Read up on CardActions. */}
        {/* TODO: style this link/stargazer section */}
        <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
          {homepageUrl == null ? null : (
            <Link href={homepageUrl} underline="hover">
              Live Site URL
            </Link>
          )}
          <Link href={url} underline="hover">
            GitHub Repository URL
          </Link>
        </Stack>
        <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2}>
          {stargazerCount === 0 ? null : (
            <Typography variant="body1" color="text.secondary">
              Stargazer Count: {stargazerCount}
            </Typography>
          )}

          {forkCount === 0 ? null : (
            <Typography variant="body1" color="text.secondary">
              Fork Count: {forkCount}
            </Typography>
          )}
        </Stack>
      </CardContent>
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
