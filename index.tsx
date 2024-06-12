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
  Text,
} from 'spectacle';

const Presentation = () => (
  <Deck
    template={() => <DefaultTemplate />}
    theme={{
      colors: {
        // primary: 'red',
        // secondary: 'blue',
        tertiary: 'black',
      },
      space: [32],
      // fontSizes: {
      //   text: '32px',
      // },
    }}
  >
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Creative Collections</Heading>
        <Text>Kaho Cheung</Text>
      </FlexBox>
    </Slide>

    <MarkdownSlide animateListItems>{`
### About me
- **Powerhouse Museum** – Senior Developer (2013-2017)
- **SLNSW** – DX Lab Tech Lead (2017-2020)
- Currently at **AgriWebb** – Farm management platform to support sustainable cattle and sheep grazing
`}</MarkdownSlide>

    <MarkdownSlide animateListItems>{`
### Creative Collections
- Projects showing what is possible with technology and collections
- Ask questions!
`}</MarkdownSlide>

    <MarkdownSlide animateListItems>{`
### Powerhouse Museum Collection
- Rebuilt in 2017
- Collection data from **EMu** is harvested in realtime into a database that is exposed via an API
- React, GraphQL, Thumbor, MongoDB, ElasticSearch
- <a href="https://collection.powerhouse.com.au" target="phm">collection.powerhouse.com.au</a>
`}</MarkdownSlide>

    {/* - https://medium.com/maas-labs/new-maas-online-collection-the-techie-stuff-d514cd3695c9 */}
    {/* MAAS Labs SketchUp */}

    {/* <MarkdownSlide animateListItems>{`
![Diagram](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*syaVANVUhahk08qZxnxvoQ.gif)
`}</MarkdownSlide> */}

    <MarkdownSlide animateListItems>{`
# DX Lab Website
- SLNSW experimental lab (2015-2021)
- Blog posts, experiments and news.
- Also an experiment in itself, where we used new technologies in a low risk environment.
- https://dxlab.sl.nsw.gov.au
`}</MarkdownSlide>

    <MarkdownSlide animateListItems>{`
# Meridian
- View 2D maps from the 17th century in 3D
- Standard image viewers are great for 2D images
- However some images need to be viewed in 3D to be fully appreciated.
- https://dxlab.sl.nsw.gov.au/meridian
`}</MarkdownSlide>

    <MarkdownSlide animateListItems>{`
# Virtuoso
- Listen to 19th century sheet music from the Library's collection 
- Makes sheet music accessible for non-musicians. 
- Shows the importance of 'custom' viewers for different types of collection items.
- https://dxlab.sl.nsw.gov.au/virtuoso
`}</MarkdownSlide>

    <MarkdownSlide animateListItems>{`
# Art Index
- Part dataviz, scrollytelling and search catalogue
- Over 18,000 artworks exhibited in Australia by Australian-based artists between 1847 – 1900
- https://dxlab.sl.nsw.gov.au/art-index
`}</MarkdownSlide>

    {/* <MarkdownSlide animateListItems>{`
# O.R.B.I.T.
- Our Readers Browsing In (real) Time. 
- Touchscreen + projected display gallery experience.
- Uses live **Google Analytics** data to show what readers are currently viewing in **SLNSW's** collection website. 
- Dynamic 'force' motion chart shows breakdown of data by type, city, country, state etc. 
- https://dxlab.sl.nsw.gov.au/blog/the-orbit-experiment/
`}</MarkdownSlide> */}

    <MarkdownSlide animateListItems>{`
# #NewSelfWales
- Award winning digital immersive experience with thousands of portraits from the Library’s collection 
- Includes pictures from gallery selfie booth 
- And portraits uploaded via **Instagram** from people across NSW.
- https://www.youtube.com/watch?v=1XKn21mjInQ
- https://dxlab.sl.nsw.gov.au/newselfwales
`}</MarkdownSlide>

    {/* - https://dxlab.sl.nsw.gov.au/blog/making-newselfwales/ */}

    <MarkdownSlide animateListItems>{`
### State Library of NSW Collection
- Completely new build to replace **Primo** website
- Huge project with SLNSW web team, contractors and **DX Lab**
- **IIIF** image viewer, AI image tags (**AWS**, **MS** and **Google**)
- Elastic Search
- https://collection.sl.nsw.gov.au 
`}</MarkdownSlide>

    {/* Search Captain cook sword */}

    <MarkdownSlide animateListItems>{`
## SLNSW – AI image tags
- https://collection.sl.nsw.gov.au/digital/0m3WozR2J0PvB
`}</MarkdownSlide>

    <MarkdownSlide animateListItems>{`
## SLNSW – Hierarchy viewer
- Blog post - https://dxlab.sl.nsw.gov.au/blog/new-collection-hierarchies
- May Gibbs - https://collection.sl.nsw.gov.au/record/n7oVw8Zn
- APA - https://collection.sl.nsw.gov.au/record/9ALk75kY
`}</MarkdownSlide>

    <MarkdownSlide animateListItems>{`
# Creative Collections
- Technology can enhance collection experience
- 3D, audio and AI
- Data is ripe for visualisations
- Can also bring communities together
`}</MarkdownSlide>

    {/* Data should be linked to galleries, but also experiments, projects */}
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
