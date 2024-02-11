import PropTypes from "prop-types";
import { CCard, CCardFooter, CCardHeader, CCardSubtitle, CCardBody, CCardTitle, CCardText, CCardLink } from "@coreui/react";

// const card = (
//   <>
//     <CCard>
//       <CCardHeader>Header</CCardHeader>
//       <CCardBody>
//         <CCardTitle>Special title treatment</CCardTitle>
//         <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
//       </CCardBody>
//       <CCardFooter>
//         {" "}
//         <small className="text-medium-emphasis">Last updated 3 mins ago</small>
//       </CCardFooter>
//     </CCard>
//   </>
// );

export default function CoreUICustomCard({ item }) {
  //   console.log("item:", item);
  // Destructuring the item.node object.
  const { description, forkCount, homepageUrl, name, stargazerCount, url } = item;
  return (
    <>
      <CCard
        // textColor={"text-success"}
        style={{ width: "36rem" }}
        // className={`mb-3 border-success`}
      >
        <CCardHeader>
          <CCardTitle>{name}</CCardTitle>
          <CCardSubtitle>A bit about this.</CCardSubtitle>
        </CCardHeader>
        <CCardBody>
          <CCardTitle>{name}</CCardTitle>
          <CCardSubtitle>A bit about this.</CCardSubtitle>
          <CCardText>Description: {description}</CCardText>

          {forkCount === 0 ? null : <CCardText>Fork Count: {forkCount}</CCardText>}

          {stargazerCount === 0 ? null : <CCardText>Stargazer Count: {stargazerCount}</CCardText>}
        </CCardBody>
        <CCardFooter>
          {homepageUrl == null ? null : <CCardLink href={homepageUrl}>Live Site URL</CCardLink>}

          <CCardLink href={url}>GitHub Repository URL</CCardLink>
        </CCardFooter>
      </CCard>
    </>
  );
}

CoreUICustomCard.propTypes = {
  item: PropTypes.object,
};
