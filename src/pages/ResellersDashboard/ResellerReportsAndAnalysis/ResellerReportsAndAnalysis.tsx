import { Card } from "@/components/ui/card";
import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from "recharts";
  import { FaEllipsis, FaShare } from "react-icons/fa6";
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ChevronsUpDown, TrendingUp } from "lucide-react";


  //graph
  const data = [
    { day: "SAT", subscription: 2000, expired: 4000 },
    { day: "SUN", subscription: 2300, expired: 4500 },
    { day: "MON", subscription: 2500, expired: 4800 },
    { day: "TUE", subscription: 2700, expired: 4700 },
    { day: "WED", subscription: 2600, expired: 4600 },
    { day: "THU", subscription: 2500, expired: 4200 },
    { day: "FRI", subscription: 3000, expired: 5000 },
  ];

  //table data
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

const ResellerReportsAndAnalysis = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-5">
                <Card className="p-5 w-full lg:w-8/12">
                    <h1 className="text-[#737373] text-sm font-semibold">User Activity Trends Overview.</h1>
                    <div className="mt-3 flex gap-10 items-center justify-start">
                        <div className=" flex gap-2 items-center justify-start">
                            <p className="bg-[#BE62FA] h-[13px] w-[13px] rounded"></p>
                            <p className="text-[#061D22] text-xs">Expired</p>
                        </div>
                        <div className=" flex gap-2 items-center justify-start">
                            <p className="bg-[#2ED1F7] h-[13px] w-[13px] rounded"></p>
                            <p className="text-[#061D22] text-xs">Subscription</p>
                        </div>
                    </div>
                    <div className="w-full h-[200px] mt-2">
                      <ResponsiveContainer>
                        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorExpired" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#BE62FA" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#BE62FA" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorSubscription" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#C2C2C2" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#C2C2C2" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="day" />
                          <YAxis
                                tickCount={6}    
                                interval={0}           
                                domain={[0, 5000]}
                           />
                          <CartesianGrid strokeDasharray="3 3" />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="expired"
                            stroke="#BE62FA"
                            fillOpacity={1}
                            fill="url(#colorExpired)"
                          />
                          <Area
                            type="monotone"
                            dataKey="subscription"
                            stroke="#2ED1F7"
                            fillOpacity={1}
                            fill="url(#colorSubscription)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                </Card>
                <div className="w-full lg:w-4/12 ">
                    <Card className="p-5 lg:h-[300px] md:h-[300px]">
                        <div className="flex items-center justify-between gap-4 mt-10">
                            <div className="">
                                <div className="bg-[#BE62FA] w-[35px] h-[35px] rounded-full">
                                    <FaShare className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></FaShare>
                                </div>
                                <h1 className="text-[#2B2D42] text-2xl font-bold mt-2">Revenue Balance</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">BDT 2,500</h1>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.3%</p>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>


            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="">
                    <Card className="p-5">
                        <div className="mb-1 flex items-center gap-10 justify-between">
                            <h1 className="text-[#737373] font-semibold text-sm">User Activity Data Table</h1>
                            <FaEllipsis className="text-[#1E1E1E]"></FaEllipsis>
                        </div>
                        <div className="p-3">
                            <Table>
                              <TableHeader className="bg-[#F0F4FA]">
                                <TableRow className="border-b border-[#DBDADE]">
                                <TableHead className="text-[#8B909A] font-medium text-xs">
                                    <div className="flex items-center justify-between">
                                      Metric
                                      <ChevronsUpDown className="w-4 h-4 ml-2 cursor-pointer" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-[#8B909A] font-medium text-xs">
                                    <div className="flex items-center justify-between">
                                      Metric
                                      <ChevronsUpDown className="w-4 h-4 ml-2 cursor-pointer" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-[#8B909A] font-medium text-xs">
                                    <div className="flex items-center justify-between">
                                      Metric
                                      <ChevronsUpDown className="w-4 h-4 ml-2 cursor-pointer" />
                                    </div>
                                </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {invoices.map((invoice) => (
                                  <TableRow key={invoice.invoice}>
                                    <TableCell className="text-[#23272E] text-xs">{invoice.invoice}</TableCell>
                                    <TableCell className="text-[#23272E] text-xs">{invoice.paymentStatus}</TableCell>
                                    <TableCell className="text-[#23272E] text-xs">{invoice.paymentMethod}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                        </div>
                    </Card>
                </div>

                <div className="">
                    <Card className="p-5">
                        <div className="mb-1 flex items-center gap-10 justify-between">
                            <h1 className="text-[#737373] font-semibold text-sm">Credit History</h1>
                            <FaEllipsis className="text-[#1E1E1E]"></FaEllipsis>
                        </div>
                        <div className="p-3">
                            <Table>
                              <TableHeader className="bg-[#F0F4FA]">
                                <TableRow className="border-b border-[#DBDADE]">
                                <TableHead className="text-[#8B909A] font-medium text-xs">
                                    <div className="flex items-center justify-between">
                                      from
                                      <ChevronsUpDown className="w-4 h-4 ml-2 cursor-pointer" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-[#8B909A] font-medium text-xs">
                                    <div className="flex items-center justify-between">
                                      credit Value
                                      <ChevronsUpDown className="w-4 h-4 ml-2 cursor-pointer" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-[#8B909A] font-medium text-xs">
                                    <div className="flex items-center justify-between">
                                    Timestamp
                                      <ChevronsUpDown className="w-4 h-4 ml-2 cursor-pointer" />
                                    </div>
                                </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {invoices.map((invoice) => (
                                  <TableRow key={invoice.invoice}>
                                    <TableCell className="text-[#23272E] text-xs">{invoice.invoice}</TableCell>
                                    <TableCell className="text-[#23272E] text-xs">{invoice.paymentStatus}</TableCell>
                                    <TableCell className="text-[#23272E] text-xs">{invoice.paymentMethod}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                        </div>
                    </Card>
                </div>

                <div className="">
                    <Card className="p-5">
                        <div className="mb-1 flex items-center gap-10 justify-between">
                            <h1 className="text-[#737373] font-semibold text-sm">Revenue History</h1>
                            <FaEllipsis className="text-[#1E1E1E]"></FaEllipsis>
                        </div>
                        <div className="p-3">
                            <Table>
                              <TableHeader className="bg-[#F0F4FA]">
                                <TableRow className="border-b border-[#DBDADE]">
                                <TableHead className="text-[#8B909A] font-medium text-xs">
                                    <div className="flex items-center justify-between">
                                      Value
                                      <ChevronsUpDown className="w-4 h-4 ml-2 cursor-pointer" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-[#8B909A] font-medium text-xs">
                                    <div className="flex items-center justify-between">
                                      Timestamp
                                      <ChevronsUpDown className="w-4 h-4 ml-2 cursor-pointer" />
                                    </div>
                                </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {invoices.map((invoice) => (
                                  <TableRow key={invoice.invoice}>
                                    <TableCell className="text-[#23272E] text-xs">{invoice.invoice}</TableCell>
                                    <TableCell className="text-[#23272E] text-xs">{invoice.paymentStatus}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default ResellerReportsAndAnalysis;