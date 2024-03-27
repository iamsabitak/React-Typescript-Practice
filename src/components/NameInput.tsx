import React, { useState } from 'react';

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

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    validateInputs();
  };

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

  const getFullName = () => {
    return `${firstName.trim()} ${lastName.trim()}`;
  };

  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!error && (
        <p>
          Full Name: <strong>{getFullName()}</strong>
        </p>
      )}
    </div>
  );
};

export default NameInput;