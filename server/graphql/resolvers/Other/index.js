const otherResolvers = {
  User: {
    words: async (wordData) => await wordData.getWord(),
    wordDefs: async (wordDefData) => await wordDefData.getWordDef(),
  },
  WordData: {
    user: async (userData) => await userData.getUser(),
    word: async (wordData) => await wordData.getWord(),
  },
  Word: {
    wordData: async (word) => await word.getWordDef(),
  },
};

module.exports = otherResolvers;
