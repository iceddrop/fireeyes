

const NotificationsTableChunk = () => {
   


    const Orders = [
        {
            OrderID: 1456,
            ProductName: "Gas Leak",
            Cost: "400",
            ShippingMethod: "Delivery",
            Quantity: "01:25",
            OrderDate: "10-04-2024",
            Status: "Order Placed",
        },
        {
            OrderID: 1457,
            ProductName: "Gas Leak",
            Cost: "43000",
            ShippingMethod: "Delivery",
            OrderDate: "10-04-2024",
            Quantity: "01:25",
            Status: "Order Placed",
        },
        {
            OrderID: 1458,
            ProductName: "Fire Outbreak",
            Cost: "45000",
            ShippingMethod: "Delivery",
            Quantity: "01:25",
            OrderDate: "10-04-2024",
            Status: "Order Placed",
        },
    ];

    return (
        <div className="relative overflow-x-auto bg-[#fff]">
            <h4 className="text-xl pl-2 font-bold py-6">Alerts History</h4>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-solid rounded-lg hidden md:table">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-[#EBEDEF] border-[#EBEDEF]">
                        <th scope="col" className="px-6 py-3">Notification Type</th>
                        <th scope="col" className="px-6 py-3">Time</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="justify-center px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {Orders.map((order, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-[#EBEDEF] border-[#EBEDEF] hover:bg-[#FFF0ED]">
                            <td className="px-6 py-4 text-[#707070]">{order.ProductName}</td>
                            <td className="px-6 py-4 text-[#707070]">{order.Quantity}</td>
                            <td className="px-6 py-4 text-[#707070]">{order.OrderDate}</td>
                            <td className="py-4 flex items-center">
                                <span className="bg-[#E5F1FF] flex items-center text-center py-2 px-2 rounded-lg text-[#0653B3] text-xs">
                              67609
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <button className="border-solid border border-[#EBEDEF] py-2 px-4 rounded-lg text-xs">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Responsive View */}
            <div className="md:hidden space-y-4">
                {Orders.map((order, index) => (
                    <div key={index} className="border border-[#EBEDEF] p-4 rounded-lg shadow-sm bg-white">
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">

                            <div className="font-semibold">Notification Type:</div>
                            <div className="text-[#707070]">{order.ProductName}</div>

                            <div className="font-semibold">Time:</div>
                            <div className="text-[#707070]">{order.Quantity}</div>

                            <div className="font-semibold">Status:</div>
                            <div className="text-[#707070]">{order.ShippingMethod}</div>

                            <div className="font-semibold">Order Date:</div>
                            <div className="text-[#707070]">{order.OrderDate}</div>

                            <div className="font-semibold">Status:</div>
                            <div>
                                <span className="bg-[#E5F1FF] text-[#0653B3] text-xs py-1 px-2 rounded-lg">{order.Status}</span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button
                           
                            className="border border-[#EBEDEF] py-2 px-4 rounded-lg text-xs w-full">View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsTableChunk;
