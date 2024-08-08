const pi = Math.PI
const e = Math.E

function ln(n) {
    return precision(Math.log(n))
}

function log(n, b) {
    // n as argument
    // b as base

    if (b === undefined) return precision(Math.log10(n))
    return precision(Math.log(n) / Math.log(b))
}

function help() {
    
    const helptext = `
    // mode = true; in radians
    // mode = false, undefined; in degrees
    // precise: float, returns a precision
    `
    console.log(helptext)
}

function sin(theta, mode, precise) {

    if (mode === undefined) return precision(Math.sin(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(Math.sin(deg_to_rad(theta)), precise)
    
    return precision(Math.sin(theta), precise)
}

function cos(theta, mode, precise) {

    if (mode === undefined) return precision(Math.cos(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(Math.cos(deg_to_rad(theta)), precise)
    
    return precision(Math.cos(theta), precise)
}

function tan(theta, mode, precise) {

    if (mode === undefined) return precision(Math.tan(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(Math.tan(deg_to_rad(theta)), precise)
    
    return precision(Math.tan(theta), precise)
}

function sec(theta, mode, precise) {

    if (mode === undefined) return precision(1/Math.cos(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(1/Math.cos(deg_to_rad(theta)), precise)
    
    return precision(1/Math.cos(theta), precise)
}

function csc(theta, mode, precise) {

    if (mode === undefined) return precision(1/Math.sin(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(1/Math.sin(deg_to_rad(theta)), precise)
    
    return precision(1/Math.sin(theta), precise)
}

function cot(theta, mode, precise) {

    if (mode === undefined) return precision(1/Math.tan(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(1/Math.tan(deg_to_rad(theta)), precise)
    
    return precision(1/Math.tan(theta), precise)
}


function arcsin(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.asin(theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.asin(theta)), precise)
    
    return precision(Math.asin(theta), precise)
}

function arccos(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.acos(theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.acos(theta)), precise)
    
    return precision(Math.acos(theta), precise)
}
function arctan(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.atan(theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.atan(theta)), precise)
    
    return precision(Math.atan(theta), precise)
}

function arcsec(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.acos(1/theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.acos(1/theta)), precise)
    
    return precision(Math.acos(1/theta), precise)
}

function arccsc(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.asin(1/theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.asin(1/theta)), precise)
    
    return precision(Math.asin(1/theta), precise)
}

function arccot(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.atan(1/theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.atan(1/theta)), precise)
    
    return precision(Math.atan(1/theta), precise)
}

function precision(number, value = 12) {
    // number: number
    // value: precision

    if (value <= 0) throw new Error("Precision value must be positive.")
    const precisionFactor = parseFloat(`1e${value}`)  // 10 decimal places
    if (Math.abs(number) >= precisionFactor) {
        return undefined
    }

    number = Math.round((number * precisionFactor) + Number.EPSILON) / precisionFactor
    return parseFloat(parseFloat(number).toPrecision(value)) 
}

function deg_to_rad(degree) {
    return precision(Math.PI * degree/180)
}
function rad_to_deg(radian) {
    return precision(180 * radian/Math.PI)
}

