const simpleinterest = () =>
{
    let p = parseInt(prompt("enter the value of principal"));
    let r = parseInt(prompt("enter the value of rate of interest"));
    let t = parseInt(prompt("enter the value of time"));
    si = (p*t*r)/100;
    document.write(si);

}
simpleinterest();
document.write("<br>");
const aor = () =>
{
    let l = parseInt(prompt("enter the value of length"));
    let b = parseInt(prompt("enter the value of rate of breadth"));
    a = l*b;
    document.write(a);
}
aor();
document.write("<br>");
const min = () =>
{
    
     m = Math.min(14,53,96,25,78);
    document.write(m);
}
min();
document.write("<br>");
const d = () =>
{
    a = [14,53,96,25,78];
    a.sort();
    odd = a[0];
    for (let i of a) {
        if (i%2 !== 0){
            document.write(i+"<br>");
        }
    }
}
d();
document.write("<br>");
const midle = () =>
{
    a = [14,53,96,25,78];
    l = a.length;
    m = parseInt(l/2);
    document.write(a[m]);

}
midle();