const { createAccount } = require('./account');

describe('Bank Account', () => {
  let account;

  beforeEach(() => {
    account = createAccount("Alice", 500);
  });

  test('initial balance is correct', () => {
    expect(account.getBalance()).toBe(500);
  });

  test('deposit increases balance', () => {
    account.deposit(200);
    expect(account.getBalance()).toBe(700);
  });

  test('withdraw decreases balance when sufficient funds', () => {
    account.withdraw(200);
    expect(account.getBalance()).toBe(300);
  });

  test('withdraw does not change balance when insufficient funds', () => {
    account.withdraw(1000);
    expect(account.getBalance()).toBe(500);
  });

  
});