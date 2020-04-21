
import { connect } from 'react-redux'
import { Component } from 'react';
import { bindActionCreators } from 'redux'
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import * as MainComponent from './Main'

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
  ChangeCalendarState(value){
    return { type: MainComponent.types.CHANGE_CALENDAR_STATE, payload: value }
  }
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

const Calendar = ({ actions, calendarWeekends, calendarEvents }) => {
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
          weekends={calendarWeekends}
          events={calendarEvents}
          dateClick={() => actions.ChangeCalendarState("day")}
        />
      </div>
    </div>
  );
}



const mapStateToProps = (state) => ({
  calendarWeekends: state.main.calendarWeekends,
  calendarEvents: state.main.calendarEvents
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

const view = connect(mapStateToProps, mapDispatchToProps)(Calendar)
export default view




