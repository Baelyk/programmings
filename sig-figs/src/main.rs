#[macro_use] extern crate text_io;

fn main() {
    let number: String = read!("{}\n");
    let mut dot_found = false;
    let mut digits: Vec<u32> = vec![];
    let mut decimals: Vec<u32> = vec![];
    let mut captured_zero = false;
    let mut trailing_zeros = 0;
    let mut sig_figs = 0;

    for num in number.chars() {
        if num == '.' {
            dot_found = true;
        } else if !dot_found {
            digits.push(num.to_digit(10).unwrap());
        } else {
            decimals.push(num.to_digit(10).unwrap());
        }
    }

    for digit in digits {
        if digit != 0 || (captured_zero && dot_found) {
            sig_figs += 1;
            captured_zero = true;
        }
    }
    for decimal in decimals {
        if decimal != 0 || captured_zero {
            sig_figs += 1;
            trailing_zeros = 0;
        } else if decimal == 0 {
            trailing_zeros += 1;
        }
    }
    sig_figs += trailing_zeros;
    println!("{}", sig_figs)
}
