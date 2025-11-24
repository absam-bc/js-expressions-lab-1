//! Start by creating the variables for the data recorded
const day1TempF = 32

const day2TempC = 25

const day3TempF = 70

const day4TempC = 18

const day5TempF = 80

const day6TempC = 15 

const day7TempF = 72

const day8TempC = 28

const day9TempF = 68

const day10TempC = 20

const day11TempF = 75

const day12TempC = 23

const day13TempF = 82

const day14TempC =  30

const day15TempF = 65

const day16TempC = 22

const day17TempF = 77

const day18TempC = 26

const day19TempF = 78

const day20TempC = 24

const day21TempF = 73

const day22TempC = 21

const day23TempF = 79

const day24TempC = 27

const day25TempF = 71

const day26TempC = 19

const day27TempF = 24

const day28TempC = 17

const day29TempF = 76

const day30TempC = 29

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

function fToC(f) {
    return (f - 32) * 5 / 9
}

let day1TempC = fToC(day1TempF)
let day3TempC = fToC(day3TempF)
let day5TempC = fToC(day5TempF)
let day7TempC = fToC(day7TempF)
let day9TempC = fToC(day9TempF)
let day11TempC = fToC(day11TempF)
let day13TempC = fToC(day13TempF)
let day15TempC = fToC(day15TempF)
let day17TempC = fToC(day17TempF)
let day19TempC = fToC(day19TempF)
let day21TempC = fToC(day21TempF)
let day23TempC = fToC(day23TempF)
let day25TempC = fToC(day25TempF)
let day27TempC = fToC(day27TempF)
let day29TempC = fToC(day29TempF)

//* Then apply the conversion to calculate the total in the other unit of measur
function ctoF(c) {
return (c * 9 / 5) + 32  
}

let day2TempF = ctoF(day2TempC)
let day4TempF = ctoF(day4TempC)
let day6TempF = ctoF(day6TempC)
let day8TempF = ctoF(day8TempC)
let day10TempF = ctoF(day10TempC)
let day12TempF = ctoF(day12TempC)
let day14TempF = ctoF(day14TempC)                                
lat day16TempF = ctoF(day16TempC)
let day18TempF = ctoF(day18TempC)
let day20TempF = ctoF(day20TempC)
let day22TempF = ctoF(day22TempC)
let day24TempF = ctoF(day24TempC)
let day26TempF = ctoF(day26TempC)
let day28TempF = ctoF(day28TempC)
let day30TempF = ctoF(day30TempC)

//! Start the calculation of the total temperatures

let tot_tempreture_in_ferenhite = day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF +day27TempF + day28TempF + day29TempF + day30TempF

let tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC


//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30




//! Start the calculation of the average temperature

//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

avg_temperature_in_celsius()
avg_temperature_in_fahrenheit()

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work


 



module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
