import { GraphQLString, GraphQLNonNull } from "graphql";

import SearchSchema from "./searchSchema";
import { Block, Transaction, Address } from "../../../database";

function getBlockConditions(term) {
  if (isNaN(term)) {
    return { hash: term };
  } else {
    return { $or: { hash: term, index: Number(term) } };
  }
}

export default {
  search: {
    type: SearchSchema,
    args: {
      term: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (_source, { term }) => {
      return await Address.findOne({ where: { address: term } }) ||
        await Transaction.findOne({ where: { txid: term } }) ||
        Block.findOne({ where: getBlockConditions(term) });
    }
  }
};
