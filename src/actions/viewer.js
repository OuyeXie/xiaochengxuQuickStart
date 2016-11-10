'use strict';

import gql from 'graphql-tag';

import apollo from '../utils/apollo';
import loadApolloQuery from './apollo';


function loadViewer() {
  const query = apollo.query({
    query: gql`
      query viewer {
        id
      }
    `,
    forceFetch: false
  });

  const actions = ['LOADED_PAGES', 'LOADED_MAPS', 'LOADED_FAQS'];
  return loadApolloQuery(actions, query);
}

export default loadViewer
