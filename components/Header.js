
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ----- initial state --- 

export const initialState = {
    title: "2020年3月"
};

// ---- type ----- 

export const types = {
    // CHANGE_UNIVERSE: 'CHANGE_UNIVERSE',
    
};



// ---- action ----- 

export const actions = {
    changeUniverse(event) {
        return { type: types.CHANGE_UNIVERSE, payload: event.target.value }
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




// ---- Component ----


const Header = ({ title }) => {
    return (
        <div className="header">
            <style jsx global>{`
                .header {
                    top:0;
                    left:0;
                    margin: 0;
                    width: 360px;
                    height: 36px;
                    display: flex;
                    background: #EFEFEF;
                }
                .title {
                    margin: auto;
                }
            `}</style>
            <div className="title">{title}</div>
            
        </div>
    )
}


const mapStateToProps = (state) => ({
    title: state.header.title
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
})

const view = connect(mapStateToProps, mapDispatchToProps)(Header)
export { view }

