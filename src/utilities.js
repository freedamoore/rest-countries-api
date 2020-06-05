
// utility function to format a big number with commas
export const numberWithCommas = (x) => {
    x = x + ""; //to get rid of TypeError: Cannot read property 'toString' of undefined
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}