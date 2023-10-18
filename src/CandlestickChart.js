import React, { useRef, useEffect } from 'react';
import { createChart, CandlestickSeries } from 'lightweight-charts';

function Chart(props) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const intervalRef = useRef(null); // Create a ref to hold the interval ID.

  const data = props.data;
  console.log("data=",data.length);

  useEffect(() => {
    chartRef.current = createChart(chartContainerRef.current, {
      width: 600,
      height: 300,
    });

    const candlestickSeries = chartRef.current.addCandlestickSeries();
    candlestickSeries.setData(data.slice(0, 10));

    const showCandlesWithDelay = () => {
      let i = 10;
      intervalRef.current = setInterval(() => {
        if (i < data.length) {
          const currentCandle = data[i];
          candlestickSeries.update(currentCandle);
          i++;
          console.log("1" * 5);
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
  return (
    (props.data.length !== 0) ? (
      <div>
        <h3>{props.symbol}</h3>
        <div ref={chartContainerRef} />
      </div>
    ) : (
      <h1>Something's wrong</h1>
    )
  );}
  


export default Chart;
