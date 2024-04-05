export function checkInsufficientFundsError(error: any) {
    let MESSAGE = '';
    const error1 = error && JSON.stringify(error);
    const error2 = error1 && JSON.parse(error1);

    const hasInsufficientFundsError =
        error2 &&
        error2.details &&
        error2.details.includes('insufficient funds for gas');

    if (hasInsufficientFundsError) {
        MESSAGE =
            'Insufficient Funds. Add 5-10$ worth of ETH to your wallet in Optimism Network to Mint.';
    }
    return MESSAGE;
}
