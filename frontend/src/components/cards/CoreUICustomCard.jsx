import PropTypes from "prop-types";
import { CCard, CCardFooter, CCardHeader, CCardSubtitle, CCardBody, CCardTitle, CCardText, CCardLink, CListGroupItem, CListGroup } from "@coreui/react";

export default function CoreUICustomCard({ item }) {
  // Destructuring the item.node object.
  const { description, forkCount, homepageUrl, name, stargazerCount, url, languages, id } = item;

  const Tech = () => {
    const idiomas = languages.edges.map((element) => <CListGroupItem key={id + element.node.name}>{element.node.name}</CListGroupItem>);
    return <CListGroup flush>{idiomas}</CListGroup>;
  };

  return (
    <>
      <CCard
        // textColor={"success"}
        // style={{ width: "30rem" }}
        style={{ margin: ".2rem" }}
        className={`mb-3 border-success`}
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
          <Tech />
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
