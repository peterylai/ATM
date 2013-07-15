var balance1 = 0;
var balance2 = 0;

$(function(){

  $('#deposit1').click(depositAccount1);
  $('#deposit2').click(depositAccount2);
  $('#withdraw1').click(withdrawAccount1);
  $('#withdraw2').click(withdrawAccount2);
  updateDisplay();
});

function depositAccount1()
{
  var amount = $('#amount1').val();
  amount = parseInt(amount);
  balance1 = amount + balance1;
  updateDisplay();
}

function depositAccount2()
{
  var amount = $('#amount2').val();
  amount = parseInt(amount);
  balance2 = amount + balance2;
  updateDisplay();
}

function withdrawAccount1()
{
  var amount = $('#amount1').val();
  amount = parseInt(amount);
  balances = withdrawFunds(amount, balance1, balance2);
  balance1 = balances[0];
  balance2 = balances[1];
  updateDisplay();
}

function withdrawAccount2()
{
  var amount = $('#amount2').val();
  amount = parseInt(amount);
  balances = withdrawFunds(amount, balance2, balance1);
  balance2 = balances[0];
  balance1 = balances[1];
  updateDisplay();
}

function withdrawFunds(amount, primary, secondary)
{
  if(amount <= primary)
  {
    primary = primary - amount;
  }
  else if((amount > primary) && (amount <= (secondary + primary)))
  {
    secondary = (primary + secondary) - amount;
    primary = 0;
  }

  return [primary, secondary];
}

function updateDisplay()
{
  if(balance1 <= 0)
    $('#balance1').addClass('zero');
  else
    $('#balance1').removeClass('zero');

  if(balance2 <= 0)
    $('#balance2').addClass('zero');
  else
    $('#balance2').removeClass('zero');

  $('#balance1').text('$' + balance1);
  $('#balance2').text('$' + balance2);
  $('#amount1').val('');
  $('#amount2').val('');
}

