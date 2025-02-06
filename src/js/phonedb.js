export const phoneUsers = [
  {
    phone: "0900800901",
    info1: "ข้อมูล1",
    info2: "ข้อมูล2",
    info3: "ข้อมูล3",
    status: "active",
  },
  {
    phone: "0912345678",
    info1: "ข้อมูลA",
    info2: "ข้อมูลB",
    info3: "ข้อมูลC",
    status: "inactive",
  },
  {
    phone: "0923456789",
    info1: "ข้อมูลX",
    info2: "ข้อมูลY",
    info3: "ข้อมูลZ",
    status: "active",
  },
  {
    phone: "0934567890",
    info1: "ข้อมูลD",
    info2: "ข้อมูลE",
    info3: "ข้อมูลF",
    status: "inactive",
  },
  {
    phone: "0945678901",
    info1: "ข้อมูลG",
    info2: "ข้อมูลH",
    info3: "ข้อมูลI",
    status: "active",
  },
];

export function findPhone(phone) {
  return phoneUsers.find((user) => user.phone === phone);
}

export function filterPhones(status, foundPhones) {
  if (status === "ALL") {
    return foundPhones; // แสดงข้อมูลทั้งหมดเมื่อเลือก ALL
  } else {
    return foundPhones.filter((user) => user.status === status); // กรองตามสถานะ
  }
}
