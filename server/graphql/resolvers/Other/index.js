const otherResolvers = {
  Tag: {
    wordsDefs: async (wordData) => await wordData.getWordData(),
  },
  User: {
    words: async (wordData) => await wordData.getWord(),
    wordDefs: async (wordDefData) => await wordDefData.getWordDef(),
    wordsDefsVotes: async (data) => await await data.getWordsVotes(),
  },
  WordData: {
    user: async (userData) => await userData.getUser(),
    word: async (wordData) => await wordData.getWord(),
    tags: async (tagData) => await tagData.getTag(),
  },
  Word: {
    wordData: async (word) => await word.getWordDef(),
    relatedTerms: async (word) => await word.getRelatedTerms(),
  },
  Votes: {
    wordData: async (word) => await word.getWordDef(),
    user: async (user) => await user.getUser(),
  },
};

module.exports = otherResolvers;
