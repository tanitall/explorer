import { GraphQLUnionType } from "graphql";

import AddressSchema from "../address/addressSchema";
import BlockSchema from "../block/blockSchema";
import TransactionSchema from "../transaction/transactionSchema";
import { Block, Transaction, Address } from "../../../database";

export default new GraphQLUnionType({
  name: "SearchResult",
  types: [AddressSchema, BlockSchema, TransactionSchema],
  resolveType: (object) => {
    if (object instanceof Address) {
      return AddressSchema;
    } else if (object instanceof Transaction) {
      return TransactionSchema;
    } else if (object instanceof Block) {
      return BlockSchema;
    }
  }
});
