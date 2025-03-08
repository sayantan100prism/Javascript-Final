**Property flags and descriptors**

-> a property was a simple “key-value” pair to us. But an object property is actually a more flexible and powerful thing.

In this chapter we’ll study additional configuration options, and in the next we’ll see how to invisibly turn them into getter/setter functions.

-->Property flags
Object properties, besides a value, have three special attributes (so-called “flags”):

-> writable – if true, the value can be changed, otherwise it’s read-only.
-> enumerable – if true, then listed in loops, otherwise not listed.
-> configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.


-> The method Object.getOwnPropertyDescriptor allows to query the full information about a property.
-> obj
The object to get information from.
-> propertyName
The name of the property.
The returned value is a so-called “property descriptor” object: it contains the value and all the flags.


   ```
   let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/  
 ```

