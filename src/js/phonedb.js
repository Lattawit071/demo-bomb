export const phoneUsers = [
  {
    phone: "0900800901",
    status: "active",
    type: "true",
    name: "สมชาย ทองสุข",
    grading: "blue",
    idno: "xxxxxxxxx0123",
    trueno: "1234567890",
    subtype: "PRE",
    scoring: "สามารถขายทำการขายได้",
    arpa: "THB 15.00",
    empowerment: "เกรด B | วงเงินต่อปี 1500",
    devices: {
      "Router WiFi": true,
      "กล้อง CCTV": false,
      "Smart SoS Button": true,
      "Mesh WiFi": true,
      "True ID Box": false,
      "IR Remote Control": true,
      "Smart Siren": false,
      "Door Windows Sensor": true,
      "Smart Motion Sensor": false,
    },
  },
  {
    phone: "0912345678",
    status: "active",
    type: "true",
    name: "สุรีย์พร ทองใบ",
    grading: "yellow",
    idno: "xxxxxxxxx0456",
    trueno: "9876543210",
    subtype: "POST",
    scoring: "ไม่สามารถขายทำการขายได้",
    arpa: "THB 10.00",
    empowerment: "เกรด D | วงเงินต่อปี 500",
    devices: {
      "Router WiFi": true,
      "กล้อง CCTV": false,
      "Smart SoS Button": false,
      "Mesh WiFi": true,
      "True ID Box": false,
      "IR Remote Control": true,
      "Smart Siren": false,
      "Door Windows Sensor": false,
      "Smart Motion Sensor": true,
    },
  },
  {
    phone: "0923456790",
    status: "active",
    type: "true",
    name: "ธนาธิป เมธาวี",
    grading: "red",
    idno: "xxxxxxxxx0678",
    trueno: "1122334455",
    subtype: "PRE",
    scoring: "สามารถขายทำการขายได้",
    arpa: "THB 25.00",
    empowerment: "เกรด A | วงเงินต่อปี 2000",
    devices: {
      "Router WiFi": true,
      "กล้อง CCTV": false,
      "Smart SoS Button": false,
      "Mesh WiFi": true,
      "True ID Box": false,
      "IR Remote Control": true,
      "Smart Siren": true,
      "Door Windows Sensor": true,
      "Smart Motion Sensor": true,
    },
  },
  {
    phone: "0934567891",
    status: "active",
    type: "true",
    name: "ภาคิน คำภา",
    grading: "green",
    idno: "xxxxxxxxx0890",
    trueno: "5566778899",
    subtype: "POST",
    scoring: "สามารถขายทำการขายได้",
    arpa: "THB 20.00",
    empowerment: "เกรด B | วงเงินต่อปี 1200",
    devices: {
      "Router WiFi": true,
      "กล้อง CCTV": false,
      "Smart SoS Button": true,
      "Mesh WiFi": true,
      "True ID Box": false,
      "IR Remote Control": true,
      "Smart Siren": false,
      "Door Windows Sensor": true,
      "Smart Motion Sensor": false,
    },
  },
  {
    phone: "0945678902",
    status: "active",
    type: "true",
    name: "พีระนาคิน ไวตระกูล",
    grading: "green",
    idno: "xxxxxxxxx0213",
    trueno: "1969459392",
    subtype: "PRE",
    scoring: "สามารถขายทำการขายได้",
    arpa: "THB 23.33",
    empowerment: "เกรด C | วงเงินต่อปี 1000",
    devices: {
      "Router WiFi": true,
      "กล้อง CCTV": false,
      "Smart SoS Button": true,
      "Mesh WiFi": true,
      "True ID Box": false,
      "IR Remote Control": true,
      "Smart Siren": false,
      "Door Windows Sensor": false,
      "Smart Motion Sensor": true,
    },
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

export function getUserDevicesByCategory(phone, category) {
  const user = phoneUsers.find((user) => user.phone === phone);
  if (!user) return {};

  const categoryDevices = {
    convenience: [
      "Router WiFi",
      "กล้อง CCTV",
      "Mesh WiFi",
      "IR Remote Control",
    ],
    security: [
      "Router WiFi",
      "กล้อง CCTV",
      "Smart SoS Button",
      "Smart Motion Sensor",

      "Door Windows Sensor",
      "Smart Siren",
    ],
  };

  return Object.fromEntries(
    Object.entries(user.devices).filter(([device]) =>
      categoryDevices[category]?.includes(device)
    )
  );
}
