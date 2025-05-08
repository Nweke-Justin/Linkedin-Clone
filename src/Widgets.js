import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle=(heading,subtitle)=>{ return (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon/>
            </div>

            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )}
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>linkedIn News </h2>
        <InfoIcon/> 
      </div>
      {newsArticle("YO!!,PAPA React is back","Top news - 9899 readers")}
      {newsArticle("Coronavirus:UK updates","Top news-886")}
      {newsArticle("Tesla hits new heights","Cars & auto-300 readers")}
      {newsArticle("Is Redux too good","Code-123 readers")}
      {newsArticle("Things are happening","Please stay tuned ")}
    </div>
  )
}

export default Widgets
