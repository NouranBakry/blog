import React from 'react';

import { rhythm } from '../utils/typography';
import resume from '../assets/resume.pdf';
class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(4),
          paddingTop: rhythm(2),
        }}
      >
        <a
          href="https://twitter.com/nouranbakry_"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/NouranBakry"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/nouran-bakry/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{' '}
        &bull;{' '}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          resume
        </a>{' '}
        &bull;{' '}
      </footer>
    );
  }
}

export default Footer;
