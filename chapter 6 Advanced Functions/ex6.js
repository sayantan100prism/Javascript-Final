// The rest parameters must be at the end
// The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
  // error
}
// The ...rest must always be last.