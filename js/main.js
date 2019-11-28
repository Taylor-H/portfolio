var rules = [];
rules.push("required,name,Please enter your name.");
rules.push("required,email,Please enter your email address.");
rules.push("valid_email,email,Please enter a valid email address.");
rules.push("required,comment,Please enter a comment.");
rsv.errorFieldClass = null;
rsv.displayType = "alert-all";
rsv.customErrorHandler = null;

// var rellax = new Rellax('.rellax');
