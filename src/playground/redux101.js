import {createStore} from 'redux';

const incrementCount = ( { IncrementBy =1 } = {} ) => ({
    type: 'INCREMENT',
    IncrementBy
});

const decrementCount = ( { DecrementBy =1 } = {} ) => ({
    type: 'DECREMENT',
    DecrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ( { SetCount =1 } = {} ) => ({
    type: 'SET',
    SetCount
});

const countReducer = (state = {count : 10}, action) => {
    switch(action.type) {
        case 'INCREMENT' :
         return {
                count: state.count + action.IncrementBy
            }
        case 'DECREMENT' :
        return {
            count: state.count - action.DecrementBy
        }
        case 'RESET' : {
            return {
                count: 0
            }
        }
        case 'SET' : {
            return {
                count: action.SetCount
            }
        }
        default :
        return state;
    }

    return state;
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ IncrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ DecrementBy: 10}));

store.dispatch( resetCount());

store.dispatch( setCount( {SetCount: 101} ));
