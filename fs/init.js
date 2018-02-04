load('api_timer.js');
load('api_gpio.js');

let counter = 0;

GPIO.set_mode(14, GPIO.MODE_INPUT);
GPIO.set_pull(14, GPIO.PULL_UP);
GPIO.enable_int(14);
GPIO.set_int_handler_isr(14, GPIO.INT_EDGE_NEG, function(pin) {
  counter += 1;
}, null);

Timer.set(1000, true, function() {
  let irled =  IR.Sender.NEC.pwm(33, 123);
  print('send');
  print(counter);
  print('send');
}, null);
