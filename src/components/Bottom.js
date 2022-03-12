import React, { useState } from 'react'
import { FaBitcoin } from 'react-icons/fa'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'
import styled from 'styled-components'

const BottomContainer = styled.section`
display: flex;
justify-content: flex-start;
align-items:flex-start;
border-top: 1px solid #000;
margin-top: 1.8rem;
color: white;
font-family:'Inter', sans-serif;;
.trending-list{
  flex-basis: 50%;
  padding: 0 2.8rem;
}
.trending-list h3{
    margin: 1.5rem 0;
    font-size: 1.1rem;
    font-weight: 500;
}

ul{
        list-style: none;
 }
    .active{
        max-height: 400px
       
    }
   
    @media (max-width : 768px){
    flex-direction: column;
    height: 100%;
    .trending-list{
        width: 100%;
        padding: 0 1rem;
    
    }
} 
`
const TrendingItem = styled.li`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px 12px;
        border-bottom: .5px solid #2E2E2E;
        cursor: pointer;
        position: relative;
        max-height: 69px;
        overflow: hidden;
        transition: all .2s ease;
    &:hover{
      background-color: rgba(0,0,0,.3);
      border-radius: 8px;
    }
    .coin{
        display: inline-block;
        margin-left: 20px;
    }
    .coin-properties{
        flex-basis: 100%;
      
       

    }
   
    .coin-properties li {
        padding-left: 2.8rem;
        margin: .7rem 0;
        font-size: .7rem;
       
    }
    .show-icon{
     position: absolute;
     right: 10px;
     top: 25px;
    }
`
const TrendingList = ({ item }) => {

    const [show, setShow] = useState(false);

    return (
        <TrendingItem className={show ? "active" : ""} onClick={() => setShow(!show)} >

            <FaBitcoin color={"#F7931A"} fontSize={32} style={{ borderRadius: '8px' }} />
            <span className='coin'>{item.coin}</span>
            {show ? <IoIosArrowDropup className='show-icon' /> : <IoIosArrowDropdown className='show-icon' />}
            <ul className={`coin-properties `}>
                <li>Price : {item.price}</li>
                <li>Price Percent Change : {item.pricePercentChange}</li>
                <li>Volume : {item.volume}</li>
                <li>High : {item.high}</li>
                <li>Low : {item.low}</li>
                <li>Epoch : {item.epoch}</li>
                <li>Ask : {item.ask}</li>
                <li>Bid : {item.bid}</li>
            </ul>
        </TrendingItem>
    )

}
const Bottom = ({ trendingList = [] ,nonTrendingList=[]}) => {
    // console.log(trendingList)
    return (
        <BottomContainer>
            <ul className='trending-list'>
                <h3>Trending Coins</h3>
                {trendingList.slice(0,5).map((item, indx) => <TrendingList key={item.pricePercentChange + indx} item={item} />)}
            </ul>

            <ul className='trending-list'>
                <h3>Non Trending Coins</h3>
                {nonTrendingList.slice(0,5).map((item, indx) => <TrendingList key={item.nonTrendingList + indx} item={item} />)}
            </ul>


        </BottomContainer>
    )
}

export default Bottom