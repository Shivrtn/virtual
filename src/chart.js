import React, { useRef, useEffect,useState, useSyncExternalStore } from 'react';
import { createChart, CandlestickSeries } from 'lightweight-charts';

function Chart(props) {
    const [price,pvalue]=useState(0);
    const [iloc,ivalue]=useState(0);
    const [retun,rvalue]=useState(0);
    const [buy,bvalue]=useState(0);
    const [sell,svalue]=useState(0);
    const [pos,pov]=useState(0);
    const [fund,fv]=useState(10000);

  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const intervalRef = useRef(null); // Create a ref to hold the interval ID.

  const data = props.data;

  useEffect(() => {
    chartRef.current = createChart(chartContainerRef.current, {
      width: 800,
      height: 400,
    });

    const candlestickSeries = chartRef.current.addCandlestickSeries();
    candlestickSeries.setData(data.slice(0, 10));

    const showCandlesWithDelay = () => {
      let i = 10;
      intervalRef.current = setInterval(() => {
        if (i < data.length) {
          const currentCandle = data[i];
          candlestickSeries.update(currentCandle);
          ivalue(i);
          i++;
          
         
        } else {
          clearInterval(intervalRef.current); // Clear the interval when it's no longer needed.
        }
      }, 1500);
    };
    showCandlesWithDelay();

    // Cleanup when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear the interval if the component unmounts.
      }
    };
  }, [data]);
  useEffect(()=>{pvalue(data[iloc].close)},[iloc])

const bought=()=>{

if(price!=0)  {   if((pos===0)){bvalue(price);pov(pos+1)}
    else if(pos===-1){pov(pos+1);bvalue(price);(fv(fund+(fund*(sell-price)/sell) ))}}
}
const sold=()=>{  if(price!=0){ 

    if((pos===0)){svalue(price);pov(pos-1)}
    else if(pos===1){pov(pos-1);svalue(price);fv(fund+(fund*((price-buy)/buy)))}}
}
  return (
    
      <div className=' border-danger rounded-0'>
        <div className=' d-flex'>
        Balance:<h3 className=' mx-3'>{fund}</h3>
            pos:<h3 className=' mx-3'>{pos}</h3>
       
            <button className=' mx-3 w-25' onClick={ bought
}>buy</button>
            <button className=' mx-3 w-25' onClick={sold}>sell</button>
        </div>
        <div ref={chartContainerRef} />
      
      </div>
    
    )
}
  


export default Chart;
