import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import TopItems from '../components/TopItems';
import InventoryOverview from '../components/InventoryOverview'
import { TOP_ITEMS_SOLD_LIST, TOP_ITEMS_PURCHASED_LIST, INFO_CARD_DATA } from '../data/dummyData'
import { TOP_ITEMS_SOLD, TOP_ITEMS_PURCHASED } from '../data/constant'
import { Spotlight } from '../components/Spotlight';
import ShipmentTracker from '../components/ ShipmentTracker';
import ShipmentAnalytics from '../components/ShipmentAnalytics';
import GreetingHeader from '../components/GreetingHeader';
const Dashboard = () => (
    <div className="flex">
        <Sidebar />
        <div className="ml-[70px] flex-1">
            <Header />
            <GreetingHeader />
            <div className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {INFO_CARD_DATA.map((info, index) => (
                        <InfoCard key={index} data={info} />
                    ))}
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <InventoryOverview />
                    <div className='col-span-2 grid grid-cols-1 lg:grid-cols-5 bg-white p-4 shadow-md rounded-lg'>
                        <div className='col-span-2'>   <ShipmentAnalytics /></div>
                        <div className='col-span-3'>   <ShipmentTracker /></div>
                    </div>

                </div>

                <div className="bg-white shadow-md p-5 pr-2 rounded-lg grid grid-cols-1 lg:grid-cols-7 gap-2">
                    <div className="p-2 col-span-3">
                        <Spotlight />
                    </div>
                    <div className="p-2 col-span-4 grid grid-cols-1 lg:grid-cols-2">
                        <TopItems title={TOP_ITEMS_SOLD} data={TOP_ITEMS_SOLD_LIST} />
                        <TopItems title={TOP_ITEMS_PURCHASED} data={TOP_ITEMS_PURCHASED_LIST} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;
