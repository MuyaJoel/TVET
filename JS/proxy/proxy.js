let studentObj = {
  name: "Joel",
  age: 23,
  city: "Makueni",
};

const getHandler = {
  get: function (obj, key) {
    return obj[key] ? obj[key] : "doesn't exist.";
  },
};

const setHandler = {
  set: function (obj, key, value) {
    obj[key] = value;
    return;
  },
};
const proxy1 = new Proxy(studentObj, getHandler);
const proxy2 = new Proxy(studentObj, setHandler);

proxy2.phone = 746216990;

console.log(proxy1);
console.log(proxy1.phone)
