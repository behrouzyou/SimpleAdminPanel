import moment from 'jalali-moment'
import { useContext } from 'react';
import { AppContext } from '../../store/context';
const Header = () => {
    const {dark}=useContext(AppContext)
    const date=new Date()
    return (
        <div className={`fixed top-0 left-0 h-16 w-full  pr-64 ${dark ? "bg-gray-900 text-white":"bg-blue-300"} shadow`}>
            <div className="flex justify-between items-center h-full p-2">
                <div>
                    <h1>{moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</h1>
                </div>
                <div>
                    <h1>مدیر سیستم</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
