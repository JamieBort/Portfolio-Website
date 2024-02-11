// import PropTypes from "prop-types";
import image from "./../../assets/Cat03.jpeg";

import { CCard, CCardImage, CCardFooter, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from "@coreui/react";

export default function CoreUIcard() {
  return (
    <>
      <CCard style={{ width: "18rem" }}>
        <CCardHeader>Header</CCardHeader>
        <CCardImage style={{ width: "9rem" }} orientation="top" src={image} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
          <CButton href="#">Go somewhere button</CButton>
        </CCardBody>
        <CCardFooter>Footer</CCardFooter>
      </CCard>
    </>
  );
}

// Bio.propTypes = {
//   title: PropTypes.string,
// };
