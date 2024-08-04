function generate_string(base) {
    const baseString = base;
    const randomNumber = Math.floor(1000 + Math.random() * 9000468);
    return `${randomNumber}${baseString}`;
}

function generate_string_exact(base, length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
  }
  
  return `${randomString}${base}`;
}
  module.exports = {
    generate_string,
    generate_string_exact
  };