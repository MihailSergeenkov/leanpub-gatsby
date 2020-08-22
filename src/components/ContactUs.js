import React, { useState } from 'react';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleClick = () => {
    console.log(form);
  };

  const handleChange = (field) => {
    return (e) => {
      setForm({
        ...form,
        [field]: e.target.value,
      })
    };
  };

  return (
    <span style={styles.root}>
      <label>Name</label>
      <input type='text' value={form.name} onChange={handleChange('name')} />
      <label>Email</label>
      <input type='text' value={form.email} onChange={handleChange('email')} />
      <label>Message</label>
      <input type='text' value={form.message} onChange={handleChange('message')} />
      <button onClick={handleClick}>Send</button>
    </span>
  );
};

export default ContactUs;
