const FakeData = () => {
  let data = { sub: "Maths", Marks: 25 };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.keys(data).length > 0) {
        resolve({ data: data });
      } else {
        reject({ msg: "Data is Empty" });
      }
    }, 400);
  });
};

FakeData()
  .then((res) => console.log(`results : ${JSON.stringify(res)}`))
  .catch((error) => console.error(error));
