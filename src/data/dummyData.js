
export const TOP_ITEMS_SOLD_LIST = [
    { rank: "#1", name: "Automotive Parts", volume: "850 Units", value: "₹2,34,987" },
    { rank: "#2", name: "Steel Sheets", volume: "430 Units", value: "₹3,02,709" },
    { rank: "#3", name: "Electronic Parts", volume: "300 Units", value: "₹2,34,987" },
    { rank: "#4", name: "Plastic Materials", volume: "400 Units", value: "₹1,45,909" },
    { rank: "#5", name: "Office Equipments", volume: "150 Units", value: "₹1,40,339" },
];

export const TOP_ITEMS_PURCHASED_LIST = [
    { rank: "#1", name: "Office Equipments", volume: "430 Units", value: "₹3,02,709" },
    { rank: "#2", name: "Electronic Parts", volume: "300 Units", value: "₹2,34,987" },
    { rank: "#3", name: "Plastic Materials", volume: "400 Units", value: "₹1,45,909" },
    { rank: "#4", name: "Plastic Materials", volume: "400 Units", value: "₹1,45,909" },
    { rank: "#5", name: "Automotive Parts", volume: "850 Units", value: "₹2,34,987" },
];

export const INFO_CARD_DATA = [
    {
        title: "Payment Receivables", amount: "₹12,40,000", info: "OVERDUE PAYMENTS: ₹1,40,000", icon: "Vector", percent: "+3.83%", bgColor: '#05BF8F1A'
    },
    {
        title: "Payments Made", amount: "₹9,50,000", info: "NEXT PAYMENT DUE: 1 WEEK", icon: "Cash", bgColor: "#4F45E41A"
    },
    {
        title: "Total Purchases", amount: "₹15,20,000", info: "SUPPLIERS: 6", icon: "Cart", percent: "+3.53%", bgColor: "#FF900D1A"
    },
    {
        title: "Total Sales", amount: "₹18,00,000", info: "TOP SELLING PRODUCT: ELECTRONICS", icon: "Chart", percent: "+6.47%", bgColor: "#7A21EB1A"
    }
]

export const INVENTORY_OVERVIEW_DATA = {
    weeklyData: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Sales',
                data: [1200, 1800, 2400, 1300, 1700, 2100, 1400],
                backgroundColor: 'rgba(56, 102, 255, 0.8)',
                borderRadius: 5,
            },
            {
                label: 'Purchases',
                data: [800, 1200, 1500, 900, 1300, 1600, 1000],
                backgroundColor: 'rgba(129, 140, 248, 0.5)',
                borderRadius: 5,
            },
        ],
    },
    dailyData: {
        labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
        datasets: [
            {
                label: 'Sales',
                data: [300, 500, 700, 400, 600, 800, 500],
                backgroundColor: 'rgba(56, 102, 255, 0.8)',
                borderRadius: 5,
            },
            {
                label: 'Purchases',
                data: [200, 300, 400, 250, 350, 450, 300],
                backgroundColor: 'rgba(129, 140, 248, 0.5)',
                borderRadius: 5,
            },
        ],
    }
};

export const SHIPMENT_CARD_DATA = [
    {
        id: "#003455MNP",
        fromAddress: "87 Some Address",
        toAddress: "15 Some Address",
        progress: "63%",
    },
    {
        id: "#001432LDP",
        fromAddress: "87 Some Address",
        toAddress: "15 Some Address",
        progress: "63%",
    },
    {
        id: "#005432LOP",
        fromAddress: "87 Some Address",
        toAddress: "15 Some Address",
        progress: "63%",
    },
    {
        id: "#005532LOM",
        fromAddress: "87 Some Address",
        toAddress: "15 Some Address",
        progress: "63%",
    },
];

export const SHIPMENT_DETAILS_DATA = [{ label: "Shipment ID:", value: "#0124BCD" },
{ label: "Category:", value: "Electronics" },
{ label: "Total Weight:", value: "329 kg" },
{ label: "Destination:", value: "Mohali" },
{ label: "Est. Arrival:", value: "1 Hr" },]

export const SIDEBAR_DATA = [
    { name: "dashboard", icon: 'DashboardIcon', color: true },
    { name: "contact", icon: 'Contacts' },
    { name: "inventory", icon: 'OrderIcon' },
    { name: "network", icon: 'Network' },
    { name: "documents", icon: 'DocumentIcon' },
    { name: "analytics", icon: 'ChartIcon' },
    { name: "record", icon: 'Record' },
    { name: "market", icon: 'MarketIcon' },
    { name: "Integration", icon: 'Integration' },
]