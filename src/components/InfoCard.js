import * as Icons from '../assets';
const InfoCard = ({ data }) => {

    const { title, amount, info, icon, percent, bgColor } = data
    return (
        <div className="bg-white shadow-md p-4 rounded-lg w-full flex  justify-between">
            <div>
                <h3 className="text-light">{title}</h3>
                <p className="text-[26px] flex py-2 items-baseline  text-primary font-bold">{amount}
                    {percent && <span className="px-1 flex pb-1 text-[10px] text-[#19AC59]">
                        {percent} <img className='w-4 h-4' alt="arrow-up" src={Icons['ArrowUp']} /></span>}
                </p>
                <p className="text-xs text-light">{info}</p>
            </div>
            <div className=""><img style={{ backgroundColor: bgColor }} className="p-2 rounded-md w-9" alt="icon" src={Icons[icon]} /></div>
        </div>
    )
};

export default InfoCard;
