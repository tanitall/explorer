import { gql } from "react-apollo";
import { compose, setDisplayName } from "recompose";

import withGraphQuery from "../hocs/graphql/withGraphQuery";
import withGraphProgress from "../hocs/graphql/withGraphProgress";
import SearchResults from "../components/search/searchResults";
import Loading from "../components/search/loading";
import Failed from "../components/search/failed";

const query = gql`
  query ($term: String!) {
    search(term: $term) {
      __typename
      ... on Block {
        hash
      }
      ... on Transaction {
        txid
      }
      ... on Address {
        address
      }
    }
  }
`;

export default compose(
  withGraphQuery(query, { options: ({ term }) => ({ variables: { term } }) }),
  withGraphProgress({ Loading, Failed }),
  setDisplayName("SearchResultsContainer")
)(SearchResults);
