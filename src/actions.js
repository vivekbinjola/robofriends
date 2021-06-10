import CHANGE_SEARCHFIELD from './constants.js'
export const  setSearchfield =(text)=>({
type: CHANGE_SEARCHFIELD,
payload: text    
})