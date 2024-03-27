import React, { useState } from "react";
interface NameInputProps {
  initialFirstName?: string;
  initialLastName?: string;
}
const NameInput: React.FC<NameInputProps> = ({
    initialFirstName = '',
    initialLastName = '',
  }) => {
    const [firstName, setFirstName] = useState<string>(initialFirstName);
  const [lastName, setLastName] = useState<string>(initialLastName);
  const [error, setError] = useState<string>('');
  
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    validateInputs();
  };

  const validateInputs = () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('Both first name and last name are required.');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" />
      </div>
      <p>
        Full Name: <strong>Sabita</strong>
      </p>
    </div>
  );
};

export default NameInput;
