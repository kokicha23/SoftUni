function loadingBar(number) {
    let isLoading = number => number !== 100;

    const printBar = number => {
        let progress = number / 10;
        let notLoaded = (100 - number) / 10;
        let percentage = "";

        if (isLoading(number)) {
            percentage = `${number}% `
        }

        console.log(`${percentage}[${"%".repeat(progress)}${".".repeat(notLoaded)}]`);
    };

    if (isLoading(number)) {
        printBar(number);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        printBar(number);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);