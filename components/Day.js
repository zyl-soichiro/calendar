
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ----- initial state --- 

export const initialState = {
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
        
        default:
            return state
    }
}




// ---- Component ----


const Header = ({  }) => {
    return (
        <div className="day">
            <style jsx global>{`
                
            `}</style>
            
        </div>
    )
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
})

const view = connect(mapStateToProps, mapDispatchToProps)(Day)
export { view }

