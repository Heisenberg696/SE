import React from 'react'
import "./leftbar.scss"
import SummarizeIcon from '@mui/icons-material/Summarize';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Leftbar = () => {
    const navigate = useNavigate();
    const handleNav = (route) =>{
        navigate(route);
    }

  return (
        <div className = "leftBar">
            <div className = "container">
                <div className='menu'>
                    <div className = "item">
                        <TextSnippetIcon/>
                        <span onClick={()=>handleNav('/reader') }>Text reader</span>
                    </div>
                    <div className='item'>
                        <SummarizeIcon/>
                        <span  onClick={() =>{handleNav('/summarizer')}}> Summarizer</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Leftbar;