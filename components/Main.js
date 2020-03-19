
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Calendar from 'react-calendar';
// ----- initial state --- 

export const initialState = {
    date: new Date(2020, 2, 19),
    days: {
        20200314: { text: 'バシャログ執筆' },
        20200317: { text: 'バシャログ出稿' }
    }
};

// ---- type ----- 

export const types = {
    // CHANGE_UNIVERSE: 'CHANGE_UNIVERSE',
    CHANGE_CONTENT: 'CHANGE_CONTENT'
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
// function getFormatDate(func) {
//     return `${func.getFullYear()}${('0' + (func.getMonth() + 1)).slice(-2)}${('0' + func.getDate()).slice(-2)}`;
//   }

const Main = ({ date, days }) => {

    // function getTileContent({ func }) {
    //     const day = getFormatDate(new Date(date));
    //     console.log(date)
    //     console.log(days)
    //     console.log(func)
    //     return (
    //       <p>
    //         <br />
    //         {(days[day] && days[day].text) ?
    //           days[day].text : ' '
    //         }
    //       </p>
    //     );
    //   }



    /* tileContent　が謎！！！！！！！！！１ */
    return (
        <div className="main">
            <style jsx global>{`
                .main {
                    top:0;
                    left:0;
                    margin: 0;
                    width: 360px;
                    height: 36px;
                    display: flex;
                    background: #EFEFEF;
                }
                .aa {
                    margin: auto;
                }
            `}</style>
            <div className="aa">aa</div>
            <Calendar
                locale="ja-JP"
                calendarType="US"
                // value={date}
                // tileContent={getTileContent}
            />
        </div>
    )
}


const mapStateToProps = (state) => ({
    date: state.main.date,
    days: state.main.days
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
})

const view = connect(mapStateToProps, mapDispatchToProps)(Main)
export { view }

