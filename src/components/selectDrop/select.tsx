import React,{ useState} from 'react';
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { arrayBuffer } from 'stream/consumers';

const Select = ({data}: {data:string[]}) => {

    const [isOpenSelect,setisOpenSelect] = useState(false);
    const [selectedIndex,setselectedIndex] = useState(0);
    const [selectedItem,setselectedItem] = useState('All Categories');   

    const [listData, setListData] = useState(data);
    const [listData2, setListData2] = useState(data);
    
    const openSelect = () => {
        setisOpenSelect(!isOpenSelect);
    }

    const closeSelect = (index: number, name: string) => {
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }

    const filterlist = (e :any) => {
        const keyword = e.target.value.toLowerCase();
        console.log(keyword);

        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(keyword);
        })  

        const list2 = list.filter((item, index) => list.indexOf(item) === index);

        // const list2 = list.filter((item,index) => {list.filter((item,index) => list.indexOf(item) === index);
        //     // return list.indexOf(item) === index;

        // });

        setListData(list2);

    }



    return(
        <ClickAwayListener onClickAway = { () => setisOpenSelect(false)}>
        <div className='selectDropWrapper cursor position-relative'>  
        <span className='openSelect' onClick={openSelect}>{selectedItem.length>16 ? selectedItem.substring(0,16)+'...':selectedItem} 
        <KeyboardArrowDownIcon
         className='arrow'/></span>
        {
            isOpenSelect===true &&
            <div className='selectDrop'>
            <div className='searchField'>
                <input type='text' placeholder='Search Here...'onChange={filterlist} />
            </div>
            <ul className='searchResults'>

                {
                    listData.map((item:string,index:number) => {
                        return(
                            <li onClick={() => closeSelect(index,item)} className = {`${selectedIndex
                                === index ? 'active' : ''}`}>{item}</li>

                        )
                    })
                }


               </ul>

        </div>
        }
        
        </div>
        </ClickAwayListener>
        
    )

}

export default Select;