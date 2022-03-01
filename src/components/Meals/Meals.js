import React, { Fragment, useState, useEffect } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import fire from "../../utils/firebase";

const Meals = () => {
  const [users, setUsers] = useState([]);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEemail] = useState('');

  const fetchUsers = async () => {
    const db = fire.firestore();
    const response = db.collection("users");
    const data = await response.get();
    const newUsers = data.docs.map((user) => {
      return user.data();
    });
    setUsers([...newUsers]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const db = fire.firestore();
    db.collection("users/").add({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChangeName = event => {
    setFirstName(event.target.value);
  };

  const handleChangelast = event => {
    setLastName(event.target.value);
  };

  const handleChangeEmil = event => {
    setEemail(event.target.value);
  };

  console.log(users, "users");
  return (
    <Fragment>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
      <input value={firstName} type='text' id='firstName' onChange={handleChangeName} />
      <input value={lastName} type='text' id='lastName' onChange={handleChangelast} />
      <input value={email} type='text' id='email' onChange={handleChangeEmil} />
      <input type='submit' />
      </form>
      {users.map(user => <p key={Math.random()}>{user.firstName}</p>)}
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
