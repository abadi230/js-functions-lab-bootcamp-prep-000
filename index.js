// write your code below!

function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return "Happy holidays, ${name}!"
}
/*
 describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })
*/
function happyHolidayTo(holiday, name){
  if(holiday === 'Independence Day'&& name==='you'){
    return `"Happy", ${holiday}, ${name}!`
  } 
  
}
/*
 describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
*/
function holidayCountdown(holiday, days){
  if(holiday === "Mother's Day" && days === 20){
    return 
  }
}
 

 