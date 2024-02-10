// import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

// NOTE: need to follow these installation instructions first: https://nextui.org/docs/frameworks/vite

// NextUI exports 4 card-related components:
// Card: The main component to display a card.
// CardHeader: Commonly used for the title of a card.
// CardBody: The content of the card.
// CardFooter: Commonly used for actions.

// import React from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function NextUIcard() {
  return (
    <Card>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
}
