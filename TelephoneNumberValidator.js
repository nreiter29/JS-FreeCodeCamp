function telephoneCheck(str) {
    let checker = {
        1: /^(1\s?)?\d{3}-\d{3}-\d{4}/,
        2: /^(1\s?)?\d{3}\s\d{3}\s\d{4}/,
        3: /^(1\s?)?\(\d{3}\)\s*\d{3}-\d{4}/,
        4: /^(1\s?)?\d{10}$/
    }
    for (let i = 1; i <= Object.values(checker).length; i++) {
        if (checker[i].test(str)) return true;
    }
    return false;
}