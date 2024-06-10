import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  SpectacleLogo,
  OrderedList,
  ListItem,
  Appear,
} from 'spectacle';

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />}>
    <Slide>
      <FlexBox height="100%">
        <Heading>Creative Collections</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <OrderedList>
          <Appear>
            <ListItem>Test</ListItem>
          </Appear>
          <Appear>
            <ListItem>Test</ListItem>
          </Appear>
        </OrderedList>
        <Heading fontSize="h2">Made with</Heading>
        <SpectacleLogo size={300} />
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
