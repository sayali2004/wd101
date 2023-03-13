function nameid_validation(name,mx,my)
{
var name_len = name.value.length;
if (name_len == 0 || uid_len >= my || uid_len < mx)
{
alert("name should not be empty "+mx+" to "+my);
name.focus();
return false;
}
return true;
}
