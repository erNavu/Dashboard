import PropTypes from 'prop-types';
import * as Icons from '../assets';

const SidebarTab = ({ tab, activeTab, setActiveTab }) => (
    <button
        key={tab.name}
        onClick={() => setActiveTab(tab.name)}
        className={`${tab.color && 'bg-primary'} flex items-center justify-center w-8 h-8 rounded-lg ${activeTab === tab.name ? 'bg-primary' : "hover:bg-gray-100"}`}
    >
        <img alt={tab.icon} src={Icons[tab.icon]} />
    </button>
);

SidebarTab.propTypes = {
    tab: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
};

export default SidebarTab