/* Programming paradigms
  OOP - Object Oriented programming
  FP - Functional programming

  OOP:  state is usually stored in objects and can be modified through methods 
  FP: state is immutable, and functions are designed to transform data rather than mutate it
  
  OOP: classes encapsulates related data and behavior
  FP: problems are broken down into smaller, composable functions that can be combined to solve larger problems.

*/

// Real life situation: we have multiple users on our website, and we want to store their information in a way that is easy to access and modify. Different users have different roles, and we want to be able to easily change their roles. We also need to make sure that all users have the same properties.

// const user1 = {
//   name: 'John',
//   email: 'john@gmail.com',
//   role: 'user'
// };

// const user2 = {
//   username: 'Jane',
//   email: 'jane@gmail.com'
// }



class User {
  constructor(username, email) {
    this._username = username;
    this._email = email;
    this._role = 'user';
  }

  get username() {
    return this._username.toUpperCase();
  }

  set username(newUsername) {
    if (newUsername.trim().length > 3) {
      return (this._username = newUsername.trim());
    } else {
      console.error('Username should be at least 3 chars long!');
    }
  }

  logAccessRights() {
    console.log(
      'This user has access to user account and all public information on the website.',
    );
  }
}

const user1 = new User('John', 'john@gmail.com'); // We create an instance of the class User and assign it to variable user1.

user1.username = 'Jo ';
user1.username = 'John Doe';

console.log(user1.username);
user1.logAccessRights();

const user2 = new User('Jane', 'jane@gmail.com');
console.log(user2);
user2.logAccessRights();


const user3 = {
  name: 'Adam',
  email: 'adam@gmail.com'
}


class AdminUser extends User {
  constructor(username, email) {
    super(username, email);
    this._role = 'admin_user';
  }

  logAccessRights() {
    console.log(
      'This user has access to all public information on the website and back-office.',
    );
  }
}


const user4 = new AdminUser('Tom', 'tom@gmail.com');
console.log(user4);
user4.logAccessRights();