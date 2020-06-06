const { runIfAuthenticated } = require("../../utils");

// example return greeting string
function getGreeting(date) {
  const time = date.getHours() * 60 + date.getMinutes();
  if (time > 299 && time < 660) return "Morning";
  else if (time > 660 && time < 1020) return "Afternoon";
  else return "Evening";
}

// TODO: this should be getting the user from database
function getUser(context) {
  return { name: context.currentUser.name };
}

const Query = {
  greeting: () => getGreeting(new Date()),
  user: (_, __, context) => runIfAuthenticated(context, () => getUser(context)),
};

module.exports = Query;
