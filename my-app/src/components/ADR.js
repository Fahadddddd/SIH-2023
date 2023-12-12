import React, {useRef} from 'react';
import {DayPilotCalendar,DayPilotNavigator } from "@daypilot/daypilot-lite-react";
import '../App.css';
// import "./CalendarStyles.css";


const Calendar = () => {
    const config = ({
        viewType: "Week"
    })

    const calendarRef = useRef();

    const handleTimeRangeSelected = args => {
        calendarRef.current.control.update({
          startDate: args.day
        });
      }
  
    // const [config, setConfig] = useState({
    //     viewType: "Week"});
    return (
        <>
            <h3 style={{color: 'revert'}} className='foot-logo d-flex justify-content-center'>
                SCHEDULE YOUR ADR SESSION 
                <br/>
                <br/>
            </h3>
            <div className='d-flex'>
            <DayPilotNavigator
                onTimeRangeSelected={handleTimeRangeSelected}
            />

            <DayPilotCalendar {...config} ref={calendarRef} />
            </div>
            

            <div className='d-flex justify-content-center pt-4'>
            <div class="card" style={{width: '18rem',background: 'wheat'}}>
  <div class="card-body">
    <h5 class="card-title">Your Meetings</h5>
    <h6 class="card-subtitle mb-2 text-muted">No Meetings Today</h6>
    <p class="card-text">Meeting For ADR session Of Your Client xyz Regarding Negotations Of the case abc Is On 15/09/2023</p>
    <a href="x" class="card-link">Join ADR</a>
    <a href="a" class="card-link">Request For Reschedule</a>
  </div>
</div>
            </div>
        </>


            
        
    );
}

export default Calendar;