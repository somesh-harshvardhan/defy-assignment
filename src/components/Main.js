import React,{useState,useEffect} from 'react'
import io from 'socket.io-client';
import styled from 'styled-components';
import Bottom from './Bottom';
import Top from './Top';

const MainContianer = styled.main`
min-height: 100vh;
background: linear-gradient(180deg, #7F28C4 0%,#350e75 30%, rgba(0, 0, 0, 1) 78%);

`

const Main = () => {  
  const [list,setList] = useState([])
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`https://stg.clubdefy.io/`,{
      path : '/skt'
  });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  
   useEffect(()=>{
    if(socket){
     const message = JSON.stringify({
      "action": "subscribe",
      "value": {
      "order": "gainers"
      }
      })
    const listHandler = data=>{
    setList(data)
    }
    socket.emit("top_gainers_and_losers",message);

    socket.on("top_gainers_and_losers",listHandler)

    return ()=>socket.off("top_gainers_and_losers",listHandler)
    }
   },[socket])
   
    const idealNewList = [...list].sort((a,b)=>{
      if(a.price > b.price) return -1;
      if(a.price < b.price)  return 1;
      if(a.price === b.price) return 0;
      return 0
    })
    
    // console.log(list)
    const trendingList  = [...list].sort((a,b)=>{
      if(a.pricePercentChange > b.pricePercentChange) return -1;
      if(a.pricePercentChange < b.pricePercentChange) return 1;
      if(a.pricePercentChange === b.pricePercentChange) return 0;
      return 0
    })
    
    const nonTrendingList = [...list].sort((a,b)=>{
      if(a.price > b.price) return 1;
      if(a.price < b.price)  return -1;
      if(a.price === b.price) return 0;
      return 0
    })
  return (
    <MainContianer>
    <Top idealNewList={idealNewList}/>
    <Bottom trendingList={trendingList} nonTrendingList={nonTrendingList}/>
    </MainContianer>
  )
}

export default Main