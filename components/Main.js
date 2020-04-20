
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import dynamic from 'next/dynamic'
import * as DayComponent from './Day'


const DynamicCalendar = dynamic(
    () => import('./Calendar'),
    {
        ssr: false
    }
);

// ----- initial state --- 

export const initialState = {
    CalendarState: "month"
};

// ---- type ----- 

export const types = {
    
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




// ---- Component ----


const Main = ({ CalendarState }) => {
    return (
        <div className="">
            <style jsx global>{`
               
            `}</style>
        { CalendarState == "month" ? <DynamicCalendar/> : <DayComponent.view />}
        </div>
    )
}


const mapStateToProps = (state) => ({
    CalendarState: state.main.CalendarState
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
})

const view = connect(mapStateToProps, mapDispatchToProps)(Main)
export { view }

