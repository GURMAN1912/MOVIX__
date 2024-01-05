import React, { useState ,useEffect} from 'react'
import './styles.scss'

export default function SwitchTab({data,onChangeTab}) {

    const[selectedTab,setSelectedTab]=useState(0);
    const [left,setLeft]=useState(0);

    const activeTab=(tab,index)=>{
        setLeft(index*100)
        setTimeout(()=>{
            setSelectedTab(tab,index)
        },300)
        onChangeTab(tab,index)
    }
  return (
    <div className='switchingTabs'>
        <div className='tabItems'>
            {data.map((tab,index)=>(
                <span key={index} className={`tabItem ${selectedTab===index ?" active":""}`} onClick={()=>activeTab(tab,index)}>
                    {tab}
                </span>
        ))}
            <span className='movingBg' style={{left}}/>
        </div>      
    </div>
  )
}
