var TEST = {
  areEqual: function(a, b, message){
    return this._output(a === b, message);
  },
  areNotEqual: function(a, b, message){
    return this._output(a !== b, message);
  },
  _output: function(result, message){
    console.[result ? "log" : "warn"]( (result ? "PASS: " : "FAIL: ") + message );
    return result;
  }
}
