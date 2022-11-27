const card = (num) => {
    if(num.length <=16 && num.length >=12){
        let last4 = num.slice(num.length -4)
        let obscured = num.slice(0, num.length -4).replaceAll(/[0-9]/g,"x")
        return `${obscured}${last4}`
    }else{
        return "Invalid Credit Card"
    }
}
module.exports = card