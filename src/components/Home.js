import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online To Touch Delivery"
        image="model-s.jpg"
        leftButton="custom order"
        rightButton="existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online To Touch Delivery"
        image="model-y.jpg"
        leftButton="custom order"
        rightButton="existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online To Touch Delivery"
        image="model-3.jpg"
        leftButton="custom order"
        rightButton="existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online To Touch Delivery"
        image="model-x.jpg"
        leftButton="custom order"
        rightButton="existing inventory"
      />
      <Section
        title="Lowest Cost Solars Panels in Indonesia"
        description="Money back guarantee"
        image="solar-panel.jpg"
        leftButton="order now"
        rightButton="learn more"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Cost Less Than a New Plus Solar Panels"
        image="solar-roof.jpg"
        leftButton="order now"
        rightButton="learn more"
      />
      <Section
        title="Accessories"
        description=""
        image="accessories.jpg"
        leftButton="custom order"
        rightButton=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
