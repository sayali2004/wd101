
function passid_validation(pass,mx,my)
{
var pass_len = pass.value.length;
if (pass_len == 0 ||pass_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
pass.focus();
return false;
}
return true;
}
