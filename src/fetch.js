import React,{useState} from 'react';
import Chart from './chart';
import "./Fetch.css";

function Fetch(){
    const [window,wvalue]=useState(false);
    const [chart,cvalue]=useState(true);
    const [nam,nvalue]=useState("");

    const [data,dvalue]=useState( [
        { time: '2023-10-01', open: 0, high: 0, low: 0, close: 0 },
        { time: '2023-10-02', open: 0, high: 0, low: 0, close: 0 },
        // Add more candlestick data points here
      ]
  );
     const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    const year = currentDate.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;

    const url = 'https://backend-2-0-en0h.onrender.com/post_data';

// Define the text data you want to send
    function ow(){
        cvalue(false);
         if (window===true){wvalue(false)}else{wvalue(true)}}
            

async function process(name,interval,start,end){
    // nvalue(name);
     
const textData = {"symbol": name,"interval":interval,"start":start,"end":end};
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(textData), 
};
try{ 
 const a=await fetch(url, requestOptions);
 
 const b= await a.json();

 dvalue((b));}catch(e){
    console.log('error',e);
     dvalue([]);
}





}

return(<div>
    { window?( 

    <form>
        
        <div>
            <div>
                <lable  >symbol</lable><br/>
                    <input id="symbol" defaultValue={nam} onChange={()=>{nvalue(document.getElementById('symbol').value)}}  placeholder='sbin,tcs etc' className="w-75 h-50 form-control rounded rounded-end-3 bg-dark-subtle " type="text"></input>
            </div>
            <div>
                <lable >start date</lable><br/>
                    <input id='start' type="date" defaultValue={'2023-01-01'} className="w-75 h-50 form-control rounded rounded-end-3 bg-dark-subtle " ></input>
            </div>
            <div>
                <lable >end date</lable><br/>
                    <input id='end' defaultValue={formattedDate} className="w-75 h-50 form-control rounded rounded-end-3 bg-dark-subtle " type="date"></input>
            </div>
            <div>
                <lable >interval</lable><br/>
                    <select id='interval' className="w-100 h-50 form-control rounded rounded-end-3 bg-dark-subtle ">
                    <option>1d</option>
                        <option>1m</option>
                        <option>2m</option>
                        <option>5m</option>
                        <option>15m</option>
                        <option>30m</option>
                        <option>60m</option>
                        <option>90m</option>
                        <option>1h</option>
                        
                        <option>5d</option>
                        <option>1wk</option>
                        <option>1mo</option>
                        <option>3mo</option>
                    </select>
            </div>
            <div>
                
                    <input id='submit'
                    
                    className="w-100 h-50 mt-3 rounded-2 bg-success mx- mt-4" type="submit"
                     onClick={()=>{
                        cvalue(true);
                        
                       
                       if (window===true){wvalue(false)}else{wvalue(true)};
                        process(document.getElementById('symbol').value,
                     document.getElementById('interval').value,
                     document.getElementById('start').value,
                     document.getElementById('end').value)
                    }
                     } >

                     </input>
            </div>
        

        </div>
    </form>)
    :(<div>
        
        <div className=' col d-flex mb-1 bg-danger '>
            <h3 className=' col-10 row bg-info m-auto rounded-4  '>
            
                <input id='ser'
                placeholder='enter symbol eg. tcs,ioc'
                 defaultValue={nam}
                onChange={()=>{nvalue(document.getElementById('ser').value)}}
                 className=' p-1 col mx-2 rounded-4'></input>
                <button 
                className=' col-3 rounded-2 px-1'
                onClick={()=>{ 
                    process(document.getElementById('ser').value,
                    "1d","2021-01-01",formattedDate
                 )
                }}
                >search</button>

                </h3>
            <button className=' w-auto rounded bg-warning '
             onClick={ow}>
                <img src='gear.png' width="35" height="35"></img>
             </button>
             </div>
    </div>
        )}

        {(data.length!==0)?(<div className=' w-25'>
        <Chart  data={data} show={chart}/>
        </div>
        ):(<div className='mx-3'>
            <h1 className=' bg-secondary rounded-1 mt-2'>bad request, enter <strong>NSE</strong> symbol date and interval</h1>
        <br/>
        <div className='mx-3'>
        <h2 className=' text-info bg-danger'>limitation on data</h2>
        <br/>
        <div className='mx-1 mt-auto bg-success'>
        <h3 className='  text-info'>use smaller time frame for minutes and hours interval</h3>
        <br/>
        <h3 className=' text-info'>1 minute data availble for last 7 days only</h3>
        <br/>
        <h3 className=' text-info' >Intraday data cannot extend last 60 days</h3>
        </div>
        </div>

        
        </div>
        )}

</div>)

}
export default Fetch;