import { Card } from "@/components/ui/card";
import { CircleDollarSign,TrendingUp } from "lucide-react";
import { FaEllipsis, FaUser, FaUsers } from "react-icons/fa6";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetAllCreditQuery } from "@/pages/redux/features/admin/creditManagement/CreditManagementApi";
import { useGetCountActiveResellersQuery } from "@/pages/redux/features/admin/AdminResellerManagement/AdminResellerManagementApi";
import { useGetCountAllUsersQuery } from "@/pages/redux/features/reseller/resellerDashboard/ResellerDashboardApi";


  const data = [
    { month: 'JAN', Server1: 800, Server2: 1200, Server3: 1500 },
    { month: 'FEB', Server1: 1200, Server2: 1900, Server3: 1300 },
    { month: 'MAR', Server1: 2700, Server2: 2500, Server3: 1800 },
    { month: 'APR', Server1: 1700, Server2: 2000, Server3: 2200 },
    { month: 'MAY', Server1: 1400, Server2: 1800, Server3: 2400 },
    { month: 'JUN', Server1: 1500, Server2: 1900, Server3: 2100 },
    { month: 'JUL', Server1: 1000, Server2: 1900, Server3: 2300 },
    { month: 'AUG', Server1: 1200, Server2: 1600, Server3: 2400 },
    { month: 'SEP', Server1: 1800, Server2: 2100, Server3: 2300 },
    { month: 'OCT', Server1: 2000, Server2: 1700, Server3: 2200 },
    { month: 'NOV', Server1: 1900, Server2: 1400, Server3: 2100 },
    { month: 'DEC', Server1: 2300, Server2: 1800, Server3: 2200 },
  ];

const Dashboard = () => {
    // Generate an array of years from 2024 to 2050
    const years = Array.from({ length: 2050 - 2024 + 1 }, (_, i) => 2024 + i);

    const {data: getAllCredit} = useGetAllCreditQuery(undefined)
    const {data: getCountActiveResellers} = useGetCountActiveResellersQuery(undefined)
    const {data: getCountAllUsers} = useGetCountAllUsersQuery(undefined)
    

    

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <FaUser className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></FaUser>
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Total Users</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getCountAllUsers?.data}</h1>
                                <p className="text-[#1E1E1E] text-base">Since Launch</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.6%</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="px-3 py-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <FaUsers className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></FaUsers>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Active Reseller</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getCountActiveResellers?.data}</h1>
                                <p className="text-[#1E1E1E] text-base">This month</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.3%</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <CircleDollarSign className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></CircleDollarSign>
                                 
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Credit issued</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getAllCredit?.data?.[0]?.credit}</h1>
                                <p className="text-[#1E1E1E] text-base">Total credit used since</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">20%</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="mt-5">
                <Card className="p-5">
                    <div className="grid grid-cols-3 gap-5">
                        <h1 className="text-[#000000] text-2xl font-semibold">Top Server Load Report</h1>
                        <div className="flex gap-2 items-center justify-start">
                            <p className="bg-[#32ADE6] w-[15px] h-[15px]"></p>
                            <span className="text-[#061D22] text-sm">Server 1</span>
                            <p className="bg-[#00C7BE] w-[15px] h-[15px]"></p>
                            <span className="text-[#061D22] text-sm">Server 2</span>
                            <p className="bg-[#007AFF] w-[15px] h-[15px]"></p>
                            <span className="text-[#061D22] text-sm">Server 3</span>
                        </div>
                        <div className="flex justify-end">
                          <Select>
                            <SelectTrigger className="w-[102px] rounded-3xl">
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              {years.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                    </div>
                    <div className="mt-4">
                        <ResponsiveContainer width="100%" height={400}>
                          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis 
                            tickCount={7}    
                            interval={0}           
                            domain={[0, 3000]}
                            />
                            <Tooltip />
                            {/* <Legend /> */}
                            <Line type="monotone" dataKey="Server1" stroke="#32ADE6" strokeWidth={3} dot={{ r: 6 }} />
                            <Line type="monotone" dataKey="Server2" stroke="#00C7BE" strokeWidth={3} dot={{ r: 6 }} />
                            <Line type="monotone" dataKey="Server3" stroke="#007AFF" strokeWidth={3} dot={{ r: 6 }} />
                          </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;