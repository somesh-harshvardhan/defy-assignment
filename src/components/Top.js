import React,{ useState }  from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaBitcoin } from 'react-icons/fa'
import {IoIosArrowDropup,IoIosArrowDropdown} from 'react-icons/io'

const TopContainer = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
height: 60vh;
font-family: 'Inter', sans-serif;
.user-block{
    flex: 4;
    height: 100%;
    padding: 4.8rem 2.8rem;
    color: white;
  

}
.name{
    font-weight: 500;
    font-size: 1.4rem;
}
.kyc-head{
    font-weight: 700;
    font-size: 1.1rem;
    margin-top: 3rem;
}
.kyc-body{
    font-weight: 400;
    font-size: .9rem;
    margin-top: 10px;
    line-height: 1.8;
}
.kyc-btn{
    border: none;
    outline: none;
    background-color: transparent;
    font-size: .8rem;
    color: white;
    text-transform: uppercase;
    margin-top : 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.arrow-right-btn{
    margin-left: 1.5rem;
    font-size: 1rem;
}
.ideal-investment-block{
    flex: 4;
    height: 100%;
    color: white;
    padding-right: 1rem;
    overflow-y: auto;

    .heading{
      margin: 1.5rem 0;
      font-size: 1.1rem;
      font-weight: 500;
    }

    ul{
        list-style: none;
    }
    .list-item{
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
    }
    .list-item:hover{
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
    .active{
        max-height: 400px;
       
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
}

@media (max-width : 768px){
    flex-direction: column;
    height: 100%;
    .user-block{
        width: 100%;
        padding: 4.8rem 1rem;
    }
    .ideal-investment-block{
        width: 100%;
        padding: 0 1rem;
    
    }
}
`
const ListItem = ({ item }) => {
    const [show, setShow] = useState(false);
    
    return (
        <li className={`list-item ${show ? "active" : ""}`} onClick={()=>setShow(!show)} >

            <FaBitcoin color={"#F7931A"} fontSize={32} style={{ borderRadius: '8px' }} />
            <span className='coin'>{item.coin}</span>
            {show ?  <IoIosArrowDropup className='show-icon'/> : <IoIosArrowDropdown className='show-icon'/>}
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
        </li>
    )
}
const Top = ({ idealNewList = [] }) => {
    const list = [...idealNewList].slice(0, 5)
    // console.log(list)
    return (
        <TopContainer>
            <div className='user-block'>
                <h3 className="name">Hi John,</h3>
                <h4 className='kyc-head'>Complete your KYC</h4>
                <p className='kyc-body'>and experience the world class <br /> bitcoin app defi</p>
                <button className='kyc-btn'>start KYC <AiOutlineArrowRight className='arrow-right-btn' /></button>
            </div>
            <ul className="ideal-investment-block">
                <h4 className="heading">Ideal for new investors</h4>
                {
                    list.map((item, indx) => <ListItem item={item} indx={indx} key={indx + item.coin} />)
                }
            </ul>
        </TopContainer>
    )
}

export default Top