# 📚 Cloud Firestore CRUD Cheatsheet

Firebase databases are NoSQL databases, meaning they store data in collections (like folders) that contain documents (like files). Unlike SQL databases, they don't use tables and rows. 

CRUD stands for:
- C	Create (Add new data)
- R	Read (Get data)
- U	Update (Change existing data)
- D	Delete (Remove data)


## Core CRUD Functions

### C (Create) 
#### addDoc()	
Adds a new document to a collection. Firestore automatically generates a unique ID for the document.	

```JS
addDoc(collectionRef, { name: 'Alice', age: 30 })
```


### C/U (Overwrite)	
#### setDoc()	
Writes data to a document with a specific ID. If the document exists, it overwrites all fields (use `{ merge: true }` to update only specified fields).	

```JS
setDoc(docRef, { name: 'Bob' })
```


### R (Read All)	
#### getDocs()	
Retrieves all documents from a collection once. You must then loop through the returned data set (QuerySnapshot).	

```JS
getDocs(collectionRef)
```

Find by Field Value

You don't know the ID, but you know a field's value (e.g., find the user where email is 'alice@example.com').
##### query() and where()

```JS
const q = query(usersCollection, where("email", "==", "alice@example.com"));
```


#### getDoc()	
Retrieves a single document once when you know its ID. Returns a DocumentSnapshot.	When retrieving document(s) not by Firebase ID, use getDocs() instead.
```JS
getDoc(docRef)
```

### R (Real-time)	
#### onSnapshot()	
Sets up a real-time listener to get data (single document or collection). This is triggered immediately and again every time the data changes.	

```JS
onSnapshot(collectionRef, (snapshot) => { ... })
```

### U (Update)	
#### updateDoc()	
Changes specific fields within an existing document without overwriting other fields.	
```JS
updateDoc(docRef, { age: 31 })
```

### D (Delete)	
#### deleteDoc()	
Permanently removes a specific document from a collection.	
```JS
deleteDoc(docRef)
````


## Helper Functions (Getting the Location)

Before doing anything, you need a reference (a pointer) to the data's location.

#### collection()	
Gets a reference to a collection (the "folder" for your data).	
```JS 
const collectionRef = collection(db, 'users');
```

#### doc()	
Gets a reference to a document (a single item), usually by ID.	
```JS
const docRef = doc(db, 'users', 'user-id-123');
```

#### query()	
Used with getDocs() or onSnapshot() to filter or order the data you retrieve (e.g., only documents where status is 'active').	

```JS
query(collectionRef, where('status', '==', 'active'))
```
