#[macro_use] extern crate text_io;

fn main() {
    let a: i32;
    let b: i32;
    let mut calculation: String = read!("{}\n");
    let bits: Vec<&str>;

    calculation = calculation.replace(" ", "");

    println!("{}", calculation);

    if calculation.find('+') != None {
        bits = calculation.split('+').collect();
        a = bits[0].parse().unwrap();
        b = bits[1].parse().unwrap();
        println!("{}", add(a, b));
    } else if calculation.find('*') != None {
        bits = calculation.split('*').collect();
        a = bits[0].parse().unwrap();
        b = bits[1].parse().unwrap();
        println!("{}", multiply(a, b));
    } else if calculation.find('/') != None {
        bits = calculation.split('/').collect();
        a = bits[0].parse().unwrap();
        b = bits[1].parse().unwrap();
        let quotient = divide(a, b);
        if quotient == -1 {
            println!("Non-integer solution");
        } else if quotient == -2 {
            println!("Undefined")
        } else {
            println!("{}", quotient);
        }
    } else if calculation.find('^') != None {
        bits = calculation.split('^').collect();
        a = bits[0].parse().unwrap();
        b = bits[1].parse().unwrap();
        let power = power(a, b);
        if power == -1 {
            println!("Non-integer solution");
        } else {
            println!("{}", power);
        }
    } else if calculation.find('-') != None {
        let mut subtraction_found = false;
        let mut i = 0;
        let mut a_parts = String::new();
        let mut b_parts = String::new();
        for c in calculation.chars() {
            if i > 0 && !subtraction_found && c == '-' {
                subtraction_found = true;
            } else if !subtraction_found {
                a_parts.push(c);
            } else {
                b_parts.push(c);
            }
            i += 1;
        }
        a = a_parts.parse().unwrap();
        b = b_parts.parse().unwrap();
        println!("{}", subtract(a, b));
    }
}

fn add (a: i32, b: i32) -> i32 {
    a + b
}

fn subtract (a: i32, b: i32) -> i32 {
    let mut result = 0;
    if b > a {
        while a + result < b {
            result += 1;
        }
        -result
    } else {
        while b + result < a {
            result += 1;
        }
        result
    }
}

fn multiply (a: i32, b: i32) -> i32 {
    if b < 0 {
        let new_b: i32 = b.to_string().replace("-", "").parse().unwrap();
        let mut result = a;
        for i in 1..new_b {
            result += a;
        }
        -result
    } else {
        let mut result = a;
        for i in 1..b {
            result += a;
        }
        result
    }
}

fn divide (a: i32, b: i32) -> i32 {
    if b == 0 {
        -2
    } else if a == 0 {
        0
    } else {
        let mut result = 0;
        let mut dividend = a;
        while dividend > 0 {
            dividend = subtract(dividend, b);
            result += 1;
        }
        if dividend == 0 {
            result
        } else {
            -1
        }
    }
}

fn power (a: i32, b: i32) -> i32 {
    if b == 0 {
        1
    } else if b < 0 {
        -1
    } else if a < 0 && divide(b, 2) == -1 {
        let new_a: i32 = a.to_string().replace("-", "").parse().unwrap();
        let mut result = new_a;
        let mut times = 0;
        while times < b - 1 {
            result = multiply(result, new_a);
            times += 1;
        }
        -result
    } else {
        let new_a: i32 = a.to_string().replace("-", "").parse().unwrap();
        let mut result = new_a;
        let mut times = 0;
        while times < b - 1 {
            result = multiply(result, new_a);
            times += 1;
        }
        result
    }
}
