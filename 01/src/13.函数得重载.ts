export default{}
function start(x:string,y:number):void
function start(x:string,c:string):void
function start(x:number,c:number):void
function start(a:any,b:any):any {
  console.log(a);
  console.log(b);  
}
start(123,123)