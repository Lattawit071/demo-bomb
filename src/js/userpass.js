export const users = [
  { username: "admin1", password: "123456" },
  { username: "12345678", password: "12345678" },
];

export function authenticate(username, password) {
  console.log("Checking:", username, password);
  return users.some(
    (user) => user.username === username && user.password === password
  );
}
