var person ={
    'firstName':'Joe',
    'lastName':'Doe',
    'dob':'12/21/2011',
    'age':'5',
    'address':'1234 5th ave',
    'email':'ui@cubicit.net'
};
console.log(person.firstNmae);
console.log(person.lastName);
function loadPerson(){
    var htmlContent="<table>"+
        "<tr>"+
           "<th>firstName</th>"+
            "<td>"+person.firstName+"</td>"
         +"</tr>"
        +"</table>";
    document.getElementById('person').innerHTML=htmlContent;
}
