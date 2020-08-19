import React from 'react';

import { rhythm } from '../utils/typography';
import resume from 'src/assets/resume.pdf';
class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://twitter.com/nouranbakry_"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://https://github.com/NouranBakry.com/gaearon"
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
