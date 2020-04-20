
import { connect } from 'react-redux'
import { Component } from 'react';
import { bindActionCreators } from 'redux'
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick


// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

// ----- initial state --- 

export const initialState = {
    // date: "2020年3月"
};

// ---- type ----- 

export const types = {
    // CHANGE_UNIVERSE: 'CHANGE_UNIVERSE',
    
};



// ---- action ----- 

export const actions = {
    
}



// ---- reducer ----- 

export function reducer(state = initialState, action) {
    const payload = action.payload;
    switch (action.type) {
        // case types.CHANGE_UNIVERSE:
        //     return { ...state, universe: payload }
        
        default:
            return state
    }
}

export default class Main extends Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() },
      { title: "Event Nowaa", date: "2020-04-11" }
    ]
  };

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }

  handleDateClick = arg => {
    if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        })
      });
    }
  };
}



const mapStateToProps = (state) => ({
    date: state.main.date
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
})

const view = connect(mapStateToProps, mapDispatchToProps)(Main)
export { view }




