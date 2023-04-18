import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SidebarRow from "./SidebarRow";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CloseIcon from '@mui/icons-material/Close';


const SlideSideBar = ({isMenu, onClickCloseMenu}) => {

    const handleCloseMenu = ()=>{
        onClickCloseMenu(false)
    }
  return (
    <div className={`w-[70%]  h-[100vh] bg-white fixed top-0 z-50 border-r-[1px] border-red-600 ${isMenu ? 'left-[0]':'left-[-100%]'} md:hidden transition-all `}>

<div className='flex justify-end pr-2 py-2'>
   <button onClick={handleCloseMenu}>
    <CloseIcon/>
   </button>
</div>
      <SidebarRow selected Icon={HomeIcon} title="Home" onClick={handleCloseMenu} />
      <SidebarRow Icon={WhatshotIcon} title="Trending" onClick={handleCloseMenu}/>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" onClick={handleCloseMenu} />
      <hr/>
      <SidebarRow Icon={VideoLibraryIcon} title='Librabry' onClick={handleCloseMenu}/>
      <SidebarRow Icon={HistoryIcon} title='History' onClick={handleCloseMenu}/>
      <SidebarRow Icon={OndemandVideoIcon} title='Your Videos' onClick={handleCloseMenu}/>
      <SidebarRow Icon={WatchLaterIcon} title='Watch Later' onClick={handleCloseMenu}/>
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title='Liked Video' onClick={handleCloseMenu}/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Show more' onClick={handleCloseMenu}/>
      <hr/>
      
    </div>
  )
}

export default SlideSideBar
