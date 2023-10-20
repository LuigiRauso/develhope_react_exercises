import React, { useState } from "react";

function useForm(initialValue) {
  const [formData, setFormData] = useState(initialValue);

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return { formData, onInputChange };
}

export default useForm;
