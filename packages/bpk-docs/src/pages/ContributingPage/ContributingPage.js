import React from 'react'
import Helmet from 'react-helmet'

import './contributing-page.scss'
import BpkHeading from 'bpk-component-heading'
import BpkParagraph from 'bpk-component-paragraph'
import BpkContentContainer from 'bpk-component-content-container'

const processMapSvg = { __html: `${require('raw!./../../static/backpack-process-map.svg')}` }

const ContributingPage = () => (
  <section>
    <Helmet title='Contributing' />
    <BpkContentContainer>
      <BpkHeading level='h1'>Contributing</BpkHeading>
      <BpkParagraph>
        If you want to create something new or building upon an existing component, Backpack adheres to the open source
        model and actively encourages contributions from others.
      </BpkParagraph>
      <BpkParagraph>
        Check out the diagram below - it should help both designers and engineers understand how to contribute at any
        stage of a component’s lifecycle.
      </BpkParagraph>
      <span className='bpkdocs-contributing-page__process-map' dangerouslySetInnerHTML={processMapSvg} />
    </BpkContentContainer>
  </section>
)

export default ContributingPage
