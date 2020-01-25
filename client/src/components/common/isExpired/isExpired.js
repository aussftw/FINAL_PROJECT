const isExpired = token => {
  const currentTime = new Date().getTime() / 1000;
  if (token.exp > currentTime) {
    return true;
  }
  return false;
};

export default isExpired;
