type User= {
    admin:false,
    name:"sys"
}
const getDB = () =>{
    this.User
}
interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }
   
  const db = getDB();
  //const admins = db.filterUsers(function (this: User) {
  //  return this.admin;
 // });