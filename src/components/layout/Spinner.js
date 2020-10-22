import React, { Fragment } from 'react';

const Spinner = () => (
  <Fragment>
    <img
      src="https://github.githubassets.com/images/modules/open_graph/github-mark.png"     alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;