import {
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    CHANGE_LONG_BREAK
} from './types'


export const changePomodoro = (time) => {
    return {
        type: CHANGE_POMODORO,
        payload: time
    }
}

export const changeShortBreak = (time) => {
    return {
        type: CHANGE_SHORT_BREAK,
        payload: time
    }
}

export const changeLongBreak = (time) => {
    return {
        type: CHANGE_LONG_BREAK,
        payload: time
    }
}