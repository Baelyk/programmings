#[macro_use] extern crate text_io;

fn main() {
    let number: String = read!();
    let mut dot_found = false;
    let mut digits: Vec<u32> = vec![];
    let mut decimals: Vec<u32> = vec![0];
    let mut words_digits = vec![""];
    let mut words_decimals = vec![""];
    let mut output = String::new();

    for num in number.chars() {
        if num == '.' {
            dot_found = true;
            decimals.pop();
        } else if !dot_found {
            digits.push(num.to_digit(10).unwrap());
        } else {
            decimals.push(num.to_digit(10).unwrap());
        }
    }

    digits.reverse();
    decimals.reverse();

    for i in 0..digits.len() {
        if i % 3 == 0 {
            match digits[i] {
                0 => words_digits.push(""),
                1 => words_digits.push("one"),
                2 => words_digits.push("two"),
                3 => words_digits.push("three"),
                4 => words_digits.push("four"),
                5 => words_digits.push("five"),
                6 => words_digits.push("six"),
                7 => words_digits.push("seven"),
                8 => words_digits.push("eight"),
                9 => words_digits.push("nine"),
                _ => {
                    println!("Error! Unexpected non-digit!");
                    ::std::process::exit(1);
                },
            };
        } else if i % 3 == 1 {
            match digits[i] {
                0 => words_digits.push(""),
                1 => {
                    words_digits.remove(i - 1);
                    match digits[i - 1] {
                        0 => words_digits.push("ten"),
                        1 => words_digits.push("eleven"),
                        2 => words_digits.push("twelve"),
                        3 => words_digits.push("thirteen"),
                        4 => words_digits.push("fourteen"),
                        5 => words_digits.push("fifteen"),
                        6 => words_digits.push("sixteen"),
                        7 => words_digits.push("seventeen"),
                        8 => words_digits.push("eighteen"),
                        9 => words_digits.push("nineteen"),
                        _ => {
                            println!("Error! Unexpected non-digit!");
                            ::std::process::exit(1);
                        },
                    }
                },
                2 => words_digits.push("twenty"),
                3 => words_digits.push("thirty"),
                4 => words_digits.push("fourty"),
                5 => words_digits.push("fifty"),
                6 => words_digits.push("sixty"),
                7 => words_digits.push("seventy"),
                8 => words_digits.push("eighty"),
                9 => words_digits.push("ninety"),
                _ => {
                    println!("Error! Unexpected non-digit!");
                    ::std::process::exit(1);
                },
            };
        } else if i % 3 == 2 {
            match digits[i] {
                0 => words_digits.push(""),
                1 => words_digits.push("one hundred"),
                2 => words_digits.push("two hundred"),
                3 => words_digits.push("three hundred"),
                4 => words_digits.push("four hundred"),
                5 => words_digits.push("five hundred"),
                6 => words_digits.push("six hundred"),
                7 => words_digits.push("seven hundred"),
                8 => words_digits.push("eight hundred"),
                9 => words_digits.push("nine hundred"),
                _ => {
                    println!("Error! Unexpected non-digit!");
                    ::std::process::exit(1);
                },
            };
        }
    }
    for i in 0..decimals.len() {
        if i % 3 == 0 {
            match decimals[i] {
                0 => words_decimals.push("zero"),
                1 => words_decimals.push("one"),
                2 => words_decimals.push("two"),
                3 => words_decimals.push("three"),
                4 => words_decimals.push("four"),
                5 => words_decimals.push("five"),
                6 => words_decimals.push("six"),
                7 => words_decimals.push("seven"),
                8 => words_decimals.push("eight"),
                9 => words_decimals.push("nine"),
                _ => {
                    println!("Error! Unexpected non-digit!");
                    ::std::process::exit(1);
                },
            };
        } else if i % 3 == 1 {
            match decimals[i] {
                0 => words_decimals.push(""),
                1 => {
                    words_decimals.remove(i - 1);
                    match decimals[i - 1] {
                        0 => words_decimals.push("ten"),
                        1 => words_decimals.push("eleven"),
                        2 => words_decimals.push("twelve"),
                        3 => words_decimals.push("thirteen"),
                        4 => words_decimals.push("fourteen"),
                        5 => words_decimals.push("fifteen"),
                        6 => words_decimals.push("sixteen"),
                        7 => words_decimals.push("seventeen"),
                        8 => words_decimals.push("eightteen"),
                        9 => words_decimals.push("nineteen"),
                        _ => {
                            println!("Error! Unexpected non-digit!");
                            ::std::process::exit(1);
                        },
                    }
                },
                2 => words_decimals.push("twenty"),
                3 => words_decimals.push("thirty"),
                4 => words_decimals.push("fourty"),
                5 => words_decimals.push("fifty"),
                6 => words_decimals.push("sixty"),
                7 => words_decimals.push("seventy"),
                8 => words_decimals.push("eighty"),
                9 => words_decimals.push("ninety"),
                _ => {
                    println!("Error! Unexpected non-digit!");
                    ::std::process::exit(1);
                },
            };
        }
    }

    words_digits.remove(0);
    words_decimals.remove(0);
    words_digits.reverse();
    words_decimals.reverse();

    for i in 0..words_digits.len() {
        if i % 3 == 2 && i != words_digits.len() - 1 {
            if words_digits[i] == "" && output.len() != 0  {
                output = format!("{} thousand,", output);
            } else if words_digits[i] != "" {
                output = format!("{} {} thousand,", output, words_digits[i]);
            }
        } else {
            if words_digits[i] != "" {
                output = format!("{} {}", output, words_digits[i]);
            } else if output.len() == 0 && i == words_digits.len() - 1 {
                output = format!(" zero");
            }
        }
    }
    if output.len() > 0 {
        let mut chars: Vec<char> = output.chars().collect();
        chars.remove(0); // Remove initial space
        chars[0] = chars[0].to_uppercase().nth(0).unwrap();
        if chars[chars.len() - 1] == ',' {
            chars.pop();
        }
        output = chars.into_iter().collect();
    }
    output = format!("{} dollar{} and", output, if output == "One" {
        ""
    } else {
        "s"
    });
    for i in 0..words_decimals.len() {
        if words_decimals[i] != "" {
            output = format!("{} {}", output, words_decimals[i]);
        }
    }

    output = format!("{} cent{}.", output, if decimals == vec![1, 0] || decimals == vec![1] {
        ""
    } else {
        "s"
    });

    println!("{}", output);
}
