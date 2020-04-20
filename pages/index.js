import "@babel/polyfill"
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import dynamic from 'next/dynamic'
import createSagaMiddleware from 'redux-saga'
import fetch from 'isomorphic-unfetch'
import * as HeaderComponent from '../components/Header'
// import * as MainComponent from '../components/Main'


// import DividendsSaga from '../saga'

const initialState = {
    header: HeaderComponent.initialState,
    // main: MainComponent.initialState
}
const rootReducer = combineReducers({
    header: HeaderComponent.reducer,
    // main: MainComponent.reducer
})

const DynamicCalendar = dynamic(
    () => import('../components/Main'),
    {
        ssr: false
    }
);

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState/* , composeEnhancers(applyMiddleware(sagaMiddleware)) */)
// sagaMiddleware.run(DividendsSaga)

const Index = () => (
<div>
    <style jsx global>{`
        body {
            user-select: none;
            font-family: MeiryoKe_Gothic, "Ricty Diminished", "Osaka－等幅", "Osaka-等幅", Osaka-mono, "ＭＳ ゴシック", "MS Gothic", SFMono-Regular, "Courier New", Courier, Monaco, Menlo, Consolas, "Lucida Console", monospace, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
    `}</style>
    <Provider store={store}>
        <HeaderComponent.view />
        <DynamicCalendar/>
    </Provider>
</div>
)

export default Index