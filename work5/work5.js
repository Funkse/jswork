str = '<table border="1">'
for(var i=9;i<10;){
    str += '<tr>'
    for(var j=9;j<10;){
        str += '<td>&nbsp;</td>'
    }
    str +='</ty>'
}
str += '</table>'
document,getElementById('table1').innerHTML = str

str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str +='</ty>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str