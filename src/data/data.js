import { Background } from "reactflow";
import { IoMdSettings } from "react-icons/io";


export const contentRole = [
  { id: 1, title: 'user', name: 'S.L', src: '/images/3e870ff8c78bd76061a920c29e346027809817f8_1648896950.png' },
  { id: 2, title: 'role', name: 'malek', src: '/images/9a876564ff15c2c8c0b15853a5c79d3bec92eecb_1736348602.png' },
  { id: 3, title: 'organization', name: 'test', src: '/images/78ccd40cbf305fb067de78ddab5be84f69589c8d_1669150455.png' },
  { id: 4, title: 'collection', name: 'test', src: '/images/934a12850c05efdec1969aff883d107cc600a7b3_1648896993.png' },
  { id: 5, title: 'generatedToken', name: '10', src: '/images/7493e66e491c18d699274a48a53a9dfcb8aa2e93_1717230600.png' },
  { id: 6, title: 'application', name: '118', src: '/images/b9f37d8283afd3a309e30756a38c3f879453262a_1734768282.png' },
  { id: 7, title: 'variousAspect', name: '39', src: 'images/d47414b9caf99e8dbc66cc8748edd9123eb08db3_1727769562.png' },
  { id: 8, title: 'generatedTag', name: '17', src: 'images/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png' },

]
//home page piecharts
export const pieChartInfos = [
  {
    category: "equipment",
    data: [
      { id: 1, name: "A", value: 8, color: "#0088FE", label1: 'connectedA' },
      { id: 2, name: "B", value: 0, color: "#00C49F", label2: 'unconfirmed' },
      { id: 3, name: "C", value: 0, color: "#FFBB28", label3: 'disconnected' },
      { id: 4, name: "D", value: 0, color: "#FF8042", label4: 'unknown' },
    ],
  },
  {
    category: "tunnels",
    data: [
      { id: 1, name: "A", value: 3, color: "#38f1a9", label1: 'optimized' },
      { id: 2, name: "B", value: 0, color: "#FFBB28", label2: 'acceptable' },
      { id: 3, name: "C", value: 0, color: "#025a51", label3: 'slow' },
      { id: 4, name: "D", value: 1, color: "#ed1266", label4: 'disconnected' },
    ],
  },
];

// assets/network page data
export const network = {
  nodes: [
    { id: '1',type:'custom', position: { x: 100, y: 100 }, data: { label: '201: iBorder', image:'/images/d47414b9caf99e8dbc66cc8748edd9123eb08db3_1727769562.png', labelStyle: { color: 'yellow' } } },
    { id: '2',type:'custom', position: { x: 300, y: 100 }, data: { label: 'MachineName-229', image:'/images/d47414b9caf99e8dbc66cc8748edd9123eb08db3_1727769562.png', labelStyle: { color: 'yellow' } } },
    { id: '3',type:'custom', position: { x: 500, y: 200 }, data: { label: 'iborder-227', image:'/images/d47414b9caf99e8dbc66cc8748edd9123eb08db3_1727769562.png', labelStyle: { color: 'yellow' } } },
    { id: '4',type:'custom', position: { x: 300, y: 300 }, data: { label: '203: iBorder', image:'/images/d47414b9caf99e8dbc66cc8748edd9123eb08db3_1727769562.png', labelStyle: { color: 'yellow' } } },
    { id: '5',type:'custom', position: { x: 100, y: 400 }, data: { label: '202: iBorder', image:'/images/d47414b9caf99e8dbc66cc8748edd9123eb08db3_1727769562.png', labelStyle: { color: 'yellow' } } },
    { id: '6',type:'custom', position: { x: 500, y: 400 }, data: { label: 'Peering', image:'/images/d47414b9caf99e8dbc66cc8748edd9123eb08db3_1727769562.png', labelStyle: { color: 'yellow' } } },
  ],

  edges: [
    { id: 'e1-2', source: '1', target: '2', label: '1', type: 'weak', animated: true, style: { stroke: 'orange', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e2-3', source: '2', target: '3', label: '1', type: 'disconnected', animated: true, style: { stroke: 'red', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e3-4', source: '3', target: '4', label: '1', type: 'strong', animated: true, style: { stroke: 'green', strokeWidth: 2 } },
    { id: 'e4-5', source: '4', target: '5', label: '1', type: 'weak', animated: true, style: { stroke: 'orange', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e5-6', source: '5', target: '6', label: '1', type: 'disconnected', animated: true, style: { stroke: 'red', strokeWidth: 2, strokeDasharray: '5,5' } },
  ]
}


//table data
export const columnsTable1 = [
  {
    id: "id", 
    label: "ID", 
    type: 'text', 
    editable: false,
    sortable: true, 
    width: "50px" 
  },
  {

    id: "connectionStatus",
    label: "ConnectionStatus",
    type: "status-circle",
    editable: false,
    sortable: true,
    width: "50px",



  },
  {
    id: "name",
    label: "Name",
    type: "text",
    box:true,
    placeholder: "Enter full name", // متن راهنما برای ورودی
    sortable: true,

    width: "150px"
  },
  {
    id: "AddressMac",
    label: "AddressMac",
    type: "text",
    editable: true,
    sortable: true,
    width: "150px"
  },
  {
    id: "type",
    label: "Type",
    type: "dropdown-with-add", // نوع جدید: دراپ‌داون با گزینه افزودن
    editable: true,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" }
    ],
    sortable: true,
    width: "150px"
  },
  {
    id: "Nat",
    label: "Nat",
    type: "toggle", // نوع جدید: سوئیچ (Toggle Button)
    editable: true,
    sortable: true,
    width: "100px",
    checked:'true'
  },
  {
    id: "static/dhcp",
    label: "StaticDhcp",
    type: "dropdown", // نوع ستون: دراپ‌داون
    editable: true,
    options: [
      { label: "Engineering", value: "engineering" },
      { label: "HR", value: "hr" },
      { label: "Marketing", value: "marketing" },
      { label: "Sales", value: "sales" }
    ],
    sortable: true,
    width: "150px"
  },
  {
    id: "dns",
    label: "DNS",
    type: "icon",
    icon_name: 'setting',
    icon: <IoMdSettings />,
    editable: true,
    sortable: true,
    width: "70px"
  },


  {
    id: "ipv4",
    label: "IPV4",
    type: "text",
    editable: true,
    placeholder: "Enter text and number",
    sortable: true,
    width: "150px"
  },
  {
    id: "mask",
    label: "MASK",
    type: "number",
    editable: true,
    placeholder: "add number",
    sortable: true,
    width: "100px"
  },
  {
    id: "gateway",
    label: "Gateway",
    type: "text",
    editable: true,
    placeholder: "text add number",
    icon: 'setting',
    sortable: true,
    width: "150px"
  },
  {
    id: "publicIp",
    label: "PublicIp",
    type: "text",
    editable: true,
    placeholder: "text add number",
    icon: 'setting',
    sortable: true,
    width: "150px"
  },
  {
    id: "public port",
    label: "PublicPort",
    type: "number",
    editable: true,
    placeholder: "add number",
    sortable: true,
    width: "100px"
  },
  {
    id: "nat type",
    label: "NatType",
    type: "text",
    editable: true,
    placeholder: "Enter text and number",
    sortable: true,
    width: "150px"
  },
  {
    id: "weight",
    label: "Weight",
    type: "number",
    editable: true,
    placeholder: "Enter text and number",
    sortable: true,
    width: "100px"
  },
  {
    id: "mtu",
    label: "MTU",
    type: "number",
    editable: true,
    placeholder: "Enter text and number",
    sortable: true,
    width: "100px"
  },
  {
    id: "access to network",
    label: "Accessibility",
    type: "badge", // نوع ستون: نمایش وضعیت با Badge
    editable: true,
    options: [
      { label: "", value: "active", color: "green" },
      { label: "", value: "pending", color: "yellow" },
      { label: "", value: "inactive", color: "red" }
    ],
    sortable: true,
    width: "120px"
  },
  {
    id: "tags",
    label: "Tags",
    type: "multi-select",
    editable: true,
    options: [
      { label: "Tag 1", value: "tag1" },
      { label: "Tag 2", value: "tag2" },
      { label: "Tag 3", value: "tag3" },
      { label: "Tag 4", value: "tag4" }
    ],
    sortable: true,
    width: "200px"
  },

  {
    id: "routing",
    label: "Routing",
    type: "dropdown", // نوع ستون: دراپ‌داون
    editable: true,
    options: [
      { label: "Engineering", value: "engineering" },
      { label: "HR", value: "hr" },
      { label: "Marketing", value: "marketing" },
      { label: "Sales", value: "sales" }
    ],
    sortable: true,
    width: "200px"
  },

  {
    id: "actions",
    label: "Actions",
    type: "actions", // نوع ستون: شامل دکمه‌های عملیاتی
    icons: ["edit", "delete", "view"], // لیست آیکون‌های عملیات
    width: "100px"
  },






];

export const dataTable1 = [
  {
    id: 1,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 2,
    connectionStatus: "disconnected",
    name: "Jane Smith",
    AddressMac: "00:1A:2B:3C:4D:5F",
    type: "option2",
    Nat: false,
    "static/dhcp": "marketing",
    dns: "setting",
    ipv4: "192.168.2.1",
    mask: 255,
    gateway: "192.168.2.254",
    "public ip": "203.0.113.6",
    "public port": 9090,
    "nat type": "Restricted",
    weight: 12,
    mtu: 1500,
    "access to network": "inactive",
    tags: ["tag2"],
    routing: "dynamic",
    actions: "delete"
  },
  {
    id: 3,
    connectionStatus: "connected",
    name: "Michael Brown",
    AddressMac: "00:1A:2B:3C:4D:60",
    type: "option3",
    Nat: true,
    "static/dhcp": "hr",
    dns: "setting",
    ipv4: "192.168.3.1",
    mask: 255,
    gateway: "192.168.3.254",
    "public ip": "203.0.113.7",
    "public port": 10000,
    "nat type": "Port Restricted",
    weight: 15,
    mtu: 1500,
    "access to network": "pending",
    tags: ["tag3", "tag4"],
    routing: "static",
    actions: "view"
  },
  {
    id: 4,
    connectionStatus: "disconnected",
    name: "Emily Davis",
    AddressMac: "00:1A:2B:3C:4D:61",
    type: "option1",
    Nat: false,
    "static/dhcp": "sales",
    dns: "setting",
    ipv4: "192.168.4.1",
    mask: 255,
    gateway: "192.168.4.254",
    "public ip": "203.0.113.8",
    "public port": 2000,
    "nat type": "Symmetric",
    weight: 8,
    mtu: 1500,
    "access to network": "inactive",
    tags: ["tag1"],
    routing: "dynamic",
    actions: "edit"
  },
  {
    id: 5,
    connectionStatus: "connected",
    name: "Chris Johnson",
    AddressMac: "00:1A:2B:3C:4D:62",
    type: "option2",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.5.1",
    mask: 255,
    gateway: "192.168.5.254",
    "public ip": "203.0.113.9",
    "public port": 3000,
    "nat type": "Full Cone",
    weight: 18,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag2", "tag4"],
    routing: "static",
    actions: "view"
  },
  {
    id: 6,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },,
  {
    id: 7,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 8,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 9,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 10,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 11,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 12,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 13,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 14,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
    {
    id: 15,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 16,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 17,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
  {
    id: 18,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",
    Nat: true,
    "static/dhcp": "engineering",
    dns: "setting",
    ipv4: "192.168.1.1",
    mask: 255,
    gateway: "192.168.1.254",
    "public ip": "203.0.113.5",
    "public port": 8080,
    "nat type": "Full Cone",
    weight: 10,
    mtu: 1500,
    "access to network": "active",
    tags: ["tag1", "tag3"],
    routing: "static",
    actions: "edit"
  },
];



export const columnsTable2 = [
  {
    id: "id", // شناسه‌ی یکتا برای ستون
    label: "ID", // نام ستون که در هدر نمایش داده می‌شود
    type: "number", // نوع داده (مثلاً عدد، متن، دراپ‌داون، تاریخ و ...)
    editable: false, // آیا قابل ویرایش است یا خیر
    sortable: true, // آیا کاربر می‌تواند بر اساس این ستون مرتب کند
    width: "50px" // عرض ستون
  },
  {

    id: "connectionStatus",
    label: "Connection Status",
    type: "status-circle", // نوع جدید: دایره وضعیت اتصال
    editable: false,
    sortable: true,
    width: "50px",


  },

  {
    id: "AddressMac",
    label: "Address Mac",
    type: "text",
    editable: true,
    sortable: true,
    width: "200px"
  },
  {
    id: "type",
    label: "Type",
    type: "dropdown-with-add", // نوع جدید: دراپ‌داون با گزینه افزودن
    editable: true,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" }
    ],
    sortable: true,
    width: "150px"
  },
  {
    id: "Nat",
    label: "Nat",
    type: "toggle", // نوع جدید: سوئیچ (Toggle Button)
    editable: true,
    sortable: true,
    width: "100px"
  },

  {
    id: "actions",
    label: "Actions",
    type: "actions", // نوع ستون: شامل دکمه‌های عملیاتی
    icons: ["edit", "delete", "view"], // لیست آیکون‌های عملیات
    width: "100px"
  },






];

export const dataTable2 = [
  {
    id: 1,
    connectionStatus: "connected",
    name: "John Doe",
    AddressMac: "00:1A:2B:3C:4D:5E",
    type: "option1",

    actions: "edit"
  },
  {
    id: 2,
    connectionStatus: "disconnected",
    name: "Jane Smith",
    AddressMac: "00:1A:2B:3C:4D:5F",
    type: "option2",

    actions: "delete"
  },
  {
    id: 3,
    connectionStatus: "connected",
    name: "Michael Brown",
    AddressMac: "00:1A:2B:3C:4D:60",
    type: "option3",

    actions: "view"
  }

];










