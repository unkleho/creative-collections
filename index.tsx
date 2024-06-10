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
  MarkdownSlide,
  MarkdownSlideSet,
} from 'spectacle';

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />}>
    <Slide>
      <FlexBox height="100%">
        <Heading>Creative Collections</Heading>
      </FlexBox>
    </Slide>
    <MarkdownSlide>{`
### About me
- Powerhouse Museum – Senior Developer 
- SLNSW – DX Lab Tech Lead
- Currently at AgriWebb – Farm management platform to support sustainable cattle and sheep grazing
`}</MarkdownSlide>

    <MarkdownSlide>{`
### Powerhouse Museum Collection
- Rebuilt in 2017
- Collection data from Emu is harvested in realtime into a database that is exposed via an API
- React, GraphQL, Thumbor, MongoDB, ElasticSearch
- https://collection.powerhouse.com.au
- https://medium.com/maas-labs/new-maas-online-collection-the-techie-stuff-d514cd3695c9
`}</MarkdownSlide>

    <MarkdownSlide>{`
![Diagram](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*syaVANVUhahk08qZxnxvoQ.gif)
`}</MarkdownSlide>

    <MarkdownSlide>{`
# DX Lab Website
- SLNSW experimental lab (2015-2021)
- Blog posts, experiments and news.
- Also an experiment in itself, where we used new technologies in a low risk environment.
- https://dxlab.sl.nsw.gov.au
`}</MarkdownSlide>

    <MarkdownSlide>{`
# Meridian
- View 2D maps from the 17th century in 3D
- Standard image viewers are great for 2D images
- However some images need to be viewed in 3D to be fully appreciated.
- https://dxlab.sl.nsw.gov.au/meridian
`}</MarkdownSlide>

    <MarkdownSlide>{`
# Virtuoso
- Listen to 19th century sheet music from the Library's collection 
- Makes sheet music accessible for non-musicians. 
- Shows the importance of 'custom' viewers for different types of collection items.
- https://dxlab.sl.nsw.gov.au/virtuoso
`}</MarkdownSlide>

    <MarkdownSlide>{`
# Art Index
- Part dataviz, scrollytelling and search catalogue
- Over 18,000 artworks exhibited in Australia by Australian-based artists between 1847 – 1900
- https://dxlab.sl.nsw.gov.au/art-index
`}</MarkdownSlide>

    <MarkdownSlide>{`
# #NewSelfWales
- Award winning digital immersive experience with thousands of portraits from the Library’s collection 
- Includes pictures from gallery selfie booth 
- And portraits uploaded via Instagram from people across NSW.
- https://dxlab.sl.nsw.gov.au/blog/making-newselfwales/
- https://www.youtube.com/watch?v=1XKn21mjInQ
- https://dxlab.sl.nsw.gov.au/newselfwales
`}</MarkdownSlide>

    <MarkdownSlide>{`
# O.R.B.I.T.
- Our Readers Browsing In (real) Time. 
- Touchscreen + projected display gallery experience.
- Uses live Google Analytics data to show what readers are currently viewing in SLNSW's collection website. 
- Dynamic 'force' motion chart shows breakdown of data by type, city, country, state etc. 
- https://dxlab.sl.nsw.gov.au/blog/the-orbit-experiment/
`}</MarkdownSlide>

    <MarkdownSlide>{`
# State Library of NSW Collection
- Completely new build to replace Primo website
- Huge project with SL web team, contractors and DX Lab
- IIIF image viewer, AI image tags (AWS, MS and Google)
- Elastic Search
- Hierarchy Viewer
- https://collection.sl.nsw.gov.au
- https://dxlab.sl.nsw.gov.au/blog/new-collection-hierarchies
`}</MarkdownSlide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
