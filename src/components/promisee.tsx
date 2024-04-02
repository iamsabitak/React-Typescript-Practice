import { Button } from "@mantine/core";

function promisee() {
  const UserData = () => {
    const PromiseOne = new Promise((resolve, reject) => {
      console.log("promise one");
      const error = false;
      setTimeout(() => {
        if (!error) {
          resolve({ userName: "SabitaKhadka", password: "1234" });
        } else {
          reject("Something went wrong");
        }
      }, 1000);
    });
    PromiseOne.then((data) => console.log(data, "resolved ")).catch((error) => {
      console.log(error, "Error");
    });
  };

  function DataTwo() {
    const PromiseTwo = new Promise((resolve, reject) => {
      console.log("promise two");
      const error = true;
      setTimeout(() => {
        if (!error) {
          resolve({ userName: "SabitaKhadka", password: "1234" });
        } else {
          reject("Something went wrong");
        }
      }, 1000);
    });
    const FetchData = async () => {
      try {
        const res = await PromiseTwo;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }
  return (
    <div>
      promisee
      <Button onClick={UserData}>PromiseOne</Button>
      <Button onClick={DataTwo}>PromiseTwo</Button>
    </div>
  );
}

export default promisee;
