export const users = [
  { username: "admin", password: "123456" },
  { username: "user", password: "password" },
];

export function authenticate(username, password) {
  console.log("Checking:", username, password);
  return users.some(
    (user) => user.username === username && user.password === password
  );
}
